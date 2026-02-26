import { useState, useEffect, useRef, useCallback } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { format } from 'date-fns'
import { designs, IMAGE_VERSION, type DesignObject } from './data'

// Append version query to bust CDN cache when images are replaced
const v = (url: string) => `${url}?v=${IMAGE_VERSION}`
import { Moon, Sun, ChevronLeft, ChevronRight } from 'lucide-react'

type View = 'today' | 'archive'
type Language = 'zh' | 'en'

// Simple markdown bold renderer
const renderMarkdown = (text: string) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-medium text-neutral-900 dark:text-neutral-100">{part.slice(2, -2)}</strong>
    }
    return part
  })
}

// Render text with markdown bold and preserve line breaks
const RenderText = ({ text, className }: { text: string; className?: string }) => {
  const lines = text.split('\n')
  return (
    <p className={className}>
      {lines.map((line, i) => (
        <span key={i}>
          {renderMarkdown(line)}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
    </p>
  )
}

const categoryLabels: Record<DesignObject['category'], string> = {
  industrial: 'Industrial Design',
  software: 'Software & UI',
  music: 'Music',
  art: 'Art',
  architecture: 'Architecture',
  graphic: 'Graphic Design',
  fashion: 'Fashion Design',
  film: 'Film & Stage Design',
}

const categoryColors: Record<DesignObject['category'], string> = {
  industrial: '#d97706',
  software: '#d97706',
  music: '#d97706',
  art: '#d97706',
  architecture: '#d97706',
  graphic: '#d97706',
  fashion: '#d97706',
  film: '#d97706',
}

function App() {
  // Initialize from hash: #/2026-02-14 -> archive view with that date
  const initFromHash = () => {
    const hash = window.location.hash
    const match = hash.match(/^#\/(\d{4}-\d{2}-\d{2})$/)
    if (match) {
      const dateStr = match[1]
      const found = designs.some(d => d.date === dateStr)
      if (found) {
        return { view: 'archive' as View, date: new Date(dateStr + 'T12:00:00') }
      }
    }
    return { view: 'today' as View, date: new Date() }
  }
  const init = initFromHash()
  const [view, setView] = useState<View>(init.view)
  const [selectedDate, setSelectedDate] = useState(init.date)
  const [calendarDate, setCalendarDate] = useState(init.date)
  const [darkMode, setDarkMode] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches)
  const [lang, setLang] = useState<Language>('zh')

  // Swipe to change month
  const calendarRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef(0)
  const touchStartY = useRef(0)

  const changeMonth = useCallback((delta: number) => {
    setCalendarDate(prev => {
      const d = new Date(prev)
      d.setMonth(d.getMonth() + delta)
      return d
    })
  }, [])

  useEffect(() => {
    const el = calendarRef.current
    if (!el) return
    const onTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX
      touchStartY.current = e.touches[0].clientY
    }
    const onTouchEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - touchStartX.current
      const dy = e.changedTouches[0].clientY - touchStartY.current
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
        changeMonth(dx < 0 ? 1 : -1)
      }
    }
    el.addEventListener('touchstart', onTouchStart, { passive: true })
    el.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => {
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchend', onTouchEnd)
    }
  }, [changeMonth])
  const [imageLoaded, setImageLoaded] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxDesign, setLightboxDesign] = useState<DesignObject | null>(null)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  // Reset image loaded state when design changes
  useEffect(() => {
    setImageLoaded(false)
  }, [selectedDate, view])

  // Find today's design, or fallback to the most recent past design
  const todayStr = format(new Date(), 'yyyy-MM-dd')
  const todayDesign = designs.find(
    (d) => format(new Date(d.date), 'yyyy-MM-dd') === todayStr
  ) || [...designs]
    .filter(d => d.date <= todayStr)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0]
    || designs[0]

  const selectedDesign = designs.find(
    (d) => format(new Date(d.date), 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd')
  )

  const hasDesign = (date: Date) => {
    return designs.some(
      (d) => format(new Date(d.date), 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
    )
  }

  const getDesignByDate = (date: Date) => {
    const dateStr = format(date, 'yyyy-MM-dd')
    return designs.find(d => format(new Date(d.date), 'yyyy-MM-dd') === dateStr)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDateClick = (value: any) => {
    if (value instanceof Date) {
      setSelectedDate(value)
      const dateStr = format(value, 'yyyy-MM-dd')
      window.location.hash = `/${dateStr}`
    }
  }

  // Get sorted designs by date
  const sortedDesigns = [...designs].sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  )

  // Get prev/next design for a given design
  const getAdjacentDesigns = (design: DesignObject) => {
    const currentIndex = sortedDesigns.findIndex(d => d.date === design.date)
    return {
      prev: currentIndex > 0 ? sortedDesigns[currentIndex - 1] : null,
      next: currentIndex < sortedDesigns.length - 1 ? sortedDesigns[currentIndex + 1] : null
    }
  }

  // Preload adjacent design images
  useEffect(() => {
    const current = view === 'today' ? todayDesign : selectedDesign
    if (current) {
      const { prev, next } = getAdjacentDesigns(current)
      if (prev) { const img = new Image(); img.src = v(prev.imageUrl) }
      if (next) { const img = new Image(); img.src = v(next.imageUrl) }
    }
  }, [selectedDate, view])

  // Lightbox keyboard support (ESC to close)
  useEffect(() => {
    if (!lightboxOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen])

  // Body scroll lock when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [lightboxOpen])

  // Navigate to a design
  const navigateToDesign = (design: DesignObject) => {
    setSelectedDate(new Date(design.date))
    if (view === 'today') {
      setView('archive')
    }
    window.location.hash = `/${design.date}`
    // Scroll to content area with offset for fixed header
    setTimeout(() => {
      const contentArea = document.getElementById('design-content')
      if (contentArea) {
        const headerHeight = 70 // header + comfortable padding
        const elementTop = contentArea.getBoundingClientRect().top + window.scrollY
        window.scrollTo({ top: elementTop - headerHeight, behavior: 'smooth' })
      }
    }, 50)
  }

  const renderDesignDetail = (design: DesignObject, showImage: boolean = true) => {
    const { prev, next } = getAdjacentDesigns(design)
    
    // Get localized content
    const story = lang === 'en' && design.story_en ? design.story_en : design.story
    const designerBio = lang === 'en' && design.designerBio_en ? design.designerBio_en : design.designerBio
    const legacy = lang === 'en' && design.legacy_en ? design.legacy_en : design.legacy
    const significance = lang === 'en' && design.significance_en ? design.significance_en : design.significance
    const dateConnection = lang === 'en' && design.dateConnection_en ? design.dateConnection_en : design.dateConnection
    const title = lang === 'en' && design.title_en ? design.title_en : design.title
    const subtitle = lang === 'en' && design.subtitle_en ? design.subtitle_en : design.subtitle
    
    return (
    <div className="space-y-6">
      {/* Group 1: Title + Designer (subtitle) */}
      <div className="space-y-1">
        <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-neutral-900 dark:text-neutral-100 leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg font-light text-neutral-600 dark:text-neutral-400">
            {subtitle}
          </p>
        )}
        {/* Category + Date inline with title group */}
        <div className="flex items-center gap-3 pt-2">
          <p className="text-xs font-medium tracking-[0.2em] uppercase" style={{ color: categoryColors[design.category] }}>
            {categoryLabels[design.category]}
          </p>
          <span className="text-neutral-300 dark:text-neutral-600">·</span>
          <p className="text-xs font-light tracking-[0.15em] uppercase text-neutral-400 dark:text-neutral-500">
            {format(new Date(design.date), 'MMMM dd, yyyy')}
          </p>
        </div>
      </div>

      {/* Image - solid placeholder until loaded */}
      {showImage && (
        <div className="relative rounded-2xl overflow-hidden bg-neutral-200 dark:bg-neutral-800 shadow-2xl !mt-4">
          {!imageLoaded && (
            <div className="aspect-[4/5]" />
          )}
          <img
            src={v(design.imageUrl)}
            alt={title}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(true)}
            ref={(img) => { if (img && img.complete) setImageLoaded(true) }}
            onClick={() => { setLightboxDesign(design); setLightboxOpen(true) }}
            className={`w-full h-auto cursor-pointer transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}
          />
        </div>
      )}

      {/* 1. The Story of Design - no top border after image */}
      <div>
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-500 mb-4">
          {lang === 'en' ? 'The Story Behind' : '作品故事'}
        </p>
        <RenderText text={story} className="text-sm font-light leading-relaxed text-neutral-700 dark:text-neutral-300" />
      </div>

      {/* 2. The Designer */}
      <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-500 mb-4">
          {lang === 'en' ? 'About The Designer' : '关于创作者'}
        </p>
        <RenderText text={designerBio} className="text-sm font-light leading-relaxed text-neutral-700 dark:text-neutral-300" />
      </div>

      {/* 3. Legacy */}
      {legacy && (
        <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-500 mb-4">
            {lang === 'en' ? 'Legacy & Influence' : '影响与传承'}
          </p>
          <RenderText text={legacy} className="text-sm font-light leading-relaxed text-neutral-700 dark:text-neutral-300" />
        </div>
      )}

      {/* 4. Significance */}
      {significance && (
        <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-500 mb-4">
            {lang === 'en' ? 'What It Means' : '设计的意义'}
          </p>
          <RenderText text={significance} className="text-sm font-light leading-relaxed text-neutral-700 dark:text-neutral-300" />
        </div>
      )}

      {/* 5. Why Today */}
      <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-500 mb-4">
          {lang === 'en' ? 'Why Today' : '今天的理由'}
        </p>
        <RenderText text={dateConnection} className="text-sm font-light leading-relaxed text-neutral-700 dark:text-neutral-300" />
      </div>

      {/* Prev / Next Navigation */}
      <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center justify-between">
          {prev ? (
            <button
              onClick={() => navigateToDesign(prev)}
              className="flex items-center gap-2 text-sm font-light text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">{lang === 'en' && prev.title_en ? prev.title_en : prev.title}</span>
              <span className="sm:hidden">Prev</span>
            </button>
          ) : (
            <div />
          )}
          {next ? (
            <button
              onClick={() => navigateToDesign(next)}
              className="flex items-center gap-2 text-sm font-light text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
            >
              <span className="hidden sm:inline">{lang === 'en' && next.title_en ? next.title_en : next.title}</span>
              <span className="sm:hidden">Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  )
  }

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 py-3">
          <div className="flex items-center justify-between">
            <button
              onClick={() => {
                setView('today')
                window.location.hash = ''
                history.replaceState(null, '', window.location.pathname)
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="text-base sm:text-xl font-light tracking-wide text-neutral-900 dark:text-neutral-100 whitespace-nowrap hover:opacity-70 transition-opacity"
            >
              THE DAILY OBJECT
            </button>
            
            <div className="flex items-center gap-1 sm:gap-3">
              {/* Language Toggle */}
              <button
                onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
                className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                aria-label="Toggle language"
              >
                <span className="text-xs sm:text-sm font-light text-neutral-600 dark:text-neutral-400">
                  {lang === 'zh' ? 'EN' : 'CN'}
                </span>
              </button>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-400" />
                ) : (
                  <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-600" />
                )}
              </button>

              <nav className="flex gap-0.5 bg-neutral-100 dark:bg-neutral-800 rounded-full p-0.5">
                <button
                  onClick={() => {
                    setView('today')
                    window.location.hash = ''
                    history.replaceState(null, '', window.location.pathname)
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-light tracking-wide transition-all ${
                    view === 'today'
                      ? 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 shadow-sm'
                      : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300'
                  }`}
                >
                  Today
                </button>
                <button
                  onClick={() => {
                    setView('archive')
                    // If current selectedDate has no content, jump to most recent design
                    const currentDateStr = format(selectedDate, 'yyyy-MM-dd')
                    const hasContent = designs.some(d => d.date === currentDateStr)
                    if (!hasContent && todayDesign) {
                      setSelectedDate(new Date(todayDesign.date))
                    }
                  }}
                  className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-light tracking-wide transition-all ${
                    view === 'archive'
                      ? 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 shadow-sm'
                      : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300'
                  }`}
                >
                  Archive
                </button>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 sm:pt-24 pb-12 px-6 sm:px-8">
        {view === 'today' ? (
          <div className="max-w-3xl mx-auto">
            {renderDesignDetail(todayDesign)}
          </div>
        ) : (
          <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Calendar */}
              <div className="lg:col-span-5">
                <div ref={calendarRef} className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-xl border border-neutral-200 dark:border-neutral-800 lg:sticky lg:top-24">
                  <Calendar
                    onChange={handleDateClick}
                    value={selectedDate}
                    activeStartDate={calendarDate}
                    onActiveStartDateChange={({ activeStartDate }) => activeStartDate && setCalendarDate(activeStartDate)}
                    locale="en-US"
                    tileClassName={({ date }) =>
                      hasDesign(date) ? 'wallpaper-date' : ''
                    }
                    tileContent={({ date }) => {
                      const d = getDesignByDate(date)
                      if (!d) return null
                      const isSelected = format(date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd')
                      return isSelected ? (
                        <div
                          className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: categoryColors[d.category] }}
                        />
                      ) : (
                        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-black/35 dark:bg-white/35" />
                      )
                    }}
                    className="luxury-calendar"
                  />
                </div>
              </div>

              {/* Selected Design Preview */}
              <div className="lg:col-span-7" id="design-content">
                {selectedDesign ? (
                  <div>
                    {renderDesignDetail(selectedDesign)}
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-64 text-neutral-400 dark:text-neutral-600 font-light">
                    No design available for this date
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Lightbox */}
      {lightboxOpen && lightboxDesign && (
          <div
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              className="absolute top-4 right-4 z-10 w-14 h-14 flex items-center justify-center text-white/80 hover:text-white text-3xl transition-colors rounded-full"
              style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}
              onClick={() => setLightboxOpen(false)}
            >
              ✕
            </button>
            <div
              className="w-full h-full flex items-center justify-center p-4 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                key={lightboxDesign.id}
                src={v(lightboxDesign.fullImageUrl || lightboxDesign.imageUrl)}
                alt={lightboxDesign.title}
                className="max-w-full max-h-full object-contain animate-fadeIn"
                onClick={() => setLightboxOpen(false)}
              />
            </div>
          </div>
      )}

      {/* Footer */}
      <footer className="border-t border-neutral-200 dark:border-neutral-800 py-8 px-6 sm:px-8">
        <div className="max-w-screen-xl mx-auto text-center">
          <p className="text-xs font-light tracking-wide text-neutral-400 dark:text-neutral-600">
            Sanono Studio • World-class design, one object at a time
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
