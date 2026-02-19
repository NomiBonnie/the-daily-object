import { useState, useEffect } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { format } from 'date-fns'
import { designs, type DesignObject } from './data'
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
}

function App() {
  const [view, setView] = useState<View>('today')
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [darkMode, setDarkMode] = useState(false)
  const [lang, setLang] = useState<Language>('zh')

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDarkMode(prefersDark)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const todayDesign = designs.find(
    (d) => format(new Date(d.date), 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd')
  ) || designs[designs.length - 1]

  const selectedDesign = designs.find(
    (d) => format(new Date(d.date), 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd')
  )

  const hasDesign = (date: Date) => {
    return designs.some(
      (d) => format(new Date(d.date), 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
    )
  }

  const handleDateClick = (date: Date) => {
    setSelectedDate(date)
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

  // Navigate to a design
  const navigateToDesign = (design: DesignObject) => {
    setSelectedDate(new Date(design.date))
    if (view === 'today') {
      setView('archive')
    }
    // Scroll to content area with offset for fixed header
    setTimeout(() => {
      const contentArea = document.getElementById('design-content')
      if (contentArea) {
        const headerHeight = 100 // header + comfortable padding
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
    
    return (
    <div className="space-y-6">
      {/* Group 1: Title + Designer (subtitle) */}
      <div className="space-y-1">
        <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-neutral-900 dark:text-neutral-100 leading-tight">
          {design.title}
        </h2>
        {design.subtitle && (
          <p className="text-lg font-light text-neutral-600 dark:text-neutral-400">
            {design.subtitle}
          </p>
        )}
        {/* Category + Date inline with title group */}
        <div className="flex items-center gap-3 pt-2">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-amber-600 dark:text-amber-400">
            {categoryLabels[design.category]}
          </p>
          <span className="text-neutral-300 dark:text-neutral-600">·</span>
          <p className="text-xs font-light tracking-[0.15em] uppercase text-neutral-400 dark:text-neutral-500">
            {format(new Date(design.date), 'MMMM dd, yyyy')}
          </p>
        </div>
      </div>

      {/* Image */}
      {showImage && (
        <div className="rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 shadow-2xl">
          <img
            src={design.imageUrl}
            alt={design.title}
            className="w-full h-auto"
          />
        </div>
      )}

      {/* 1. The Story of Design - no top border after image */}
      <div>
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-500 mb-4">
          {lang === 'en' ? 'The Story of Design' : '设计故事'}
        </p>
        <RenderText text={story} className="text-sm font-light leading-relaxed text-neutral-700 dark:text-neutral-300" />
      </div>

      {/* 2. The Designer */}
      <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-500 mb-4">
          {lang === 'en' ? 'The Designer' : '设计师'}
        </p>
        <RenderText text={designerBio} className="text-sm font-light leading-relaxed text-neutral-700 dark:text-neutral-300" />
      </div>

      {/* 3. Legacy */}
      {legacy && (
        <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-500 mb-4">
            {lang === 'en' ? 'Legacy' : '影响与延续'}
          </p>
          <RenderText text={legacy} className="text-sm font-light leading-relaxed text-neutral-700 dark:text-neutral-300" />
        </div>
      )}

      {/* 4. Significance */}
      {significance && (
        <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-500 mb-4">
            {lang === 'en' ? 'Significance' : '设计意义'}
          </p>
          <RenderText text={significance} className="text-sm font-light leading-relaxed text-neutral-700 dark:text-neutral-300" />
        </div>
      )}

      {/* 5. Why Today */}
      <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-500 mb-4">
          {lang === 'en' ? 'Why Today' : '为什么是今天'}
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
              <span className="hidden sm:inline">{prev.title}</span>
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
              <span className="hidden sm:inline">{next.title}</span>
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
            <h1 className="text-base sm:text-xl font-light tracking-wide text-neutral-900 dark:text-neutral-100 whitespace-nowrap">
              THE DAILY OBJECT
            </h1>
            
            <div className="flex items-center gap-1 sm:gap-3">
              {/* Language Toggle */}
              <button
                onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
                className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                aria-label="Toggle language"
              >
                <span className="text-xs sm:text-sm font-light text-neutral-600 dark:text-neutral-400">
                  {lang === 'zh' ? 'EN' : '中'}
                </span>
              </button>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
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
                  onClick={() => setView('today')}
                  className={`px-3 sm:px-5 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-light tracking-wide transition-all ${
                    view === 'today'
                      ? 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 shadow-sm'
                      : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300'
                  }`}
                >
                  Today
                </button>
                <button
                  onClick={() => setView('archive')}
                  className={`px-3 sm:px-5 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-light tracking-wide transition-all ${
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
      <main className="pt-24 pb-12 px-6 sm:px-8">
        {view === 'today' ? (
          <div className="max-w-3xl mx-auto">
            {renderDesignDetail(todayDesign)}
          </div>
        ) : (
          <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Calendar */}
              <div className="lg:col-span-5">
                <div className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-xl border border-neutral-200 dark:border-neutral-800 lg:sticky lg:top-24">
                  <Calendar
                    onChange={handleDateClick}
                    value={selectedDate}
                    locale="en-US"
                    tileClassName={({ date }) =>
                      hasDesign(date) ? 'wallpaper-date' : ''
                    }
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

      {/* Footer */}
      <footer className="border-t border-neutral-200 dark:border-neutral-800 py-8 px-6 sm:px-8">
        <div className="max-w-screen-xl mx-auto text-center">
          <p className="text-xs font-light tracking-wide text-neutral-400 dark:text-neutral-600">
            Curated by NOMI • World-class design, one object at a time
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
