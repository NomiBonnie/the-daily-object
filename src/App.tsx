import { useState, useEffect } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { format } from 'date-fns'
import { designs, type DesignObject } from './data'
import { Moon, Sun } from 'lucide-react'

type View = 'today' | 'archive'

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

  const renderDesignDetail = (design: DesignObject) => (
    <div className="space-y-8 lg:pt-8">
      {/* Title */}
      <div className="space-y-3">
        <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-neutral-900 dark:text-neutral-100 leading-tight">
          {design.title}
        </h2>
        {design.subtitle && (
          <p className="text-lg font-light text-neutral-600 dark:text-neutral-400">
            {design.subtitle}
          </p>
        )}
      </div>

      {/* Category & Date - moved below title */}
      <div className="space-y-2">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-amber-600 dark:text-amber-400">
          {categoryLabels[design.category]}
        </p>
        <p className="text-xs font-light tracking-[0.15em] uppercase text-neutral-400 dark:text-neutral-500">
          {format(new Date(design.date), 'MMMM dd, yyyy')}
        </p>
      </div>

      {/* 1. The Story of Design */}
      <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-500 mb-3">
          The Story of Design
        </p>
        <p className="text-sm font-light leading-relaxed text-neutral-700 dark:text-neutral-300 whitespace-pre-line">
          {design.story}
        </p>
      </div>

      {/* 2. The Designer */}
      <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-500 mb-3">
          The Designer
        </p>
        <p className="text-sm font-light leading-relaxed text-neutral-700 dark:text-neutral-300 whitespace-pre-line">
          {design.designerBio}
        </p>
      </div>

      {/* 3. Legacy */}
      {design.legacy && (
        <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-500 mb-3">
            Legacy
          </p>
          <p className="text-sm font-light leading-relaxed text-neutral-700 dark:text-neutral-300 whitespace-pre-line">
            {design.legacy}
          </p>
        </div>
      )}

      {/* 4. Significance */}
      {design.significance && (
        <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-500 mb-3">
            Significance
          </p>
          <p className="text-sm font-light leading-relaxed text-neutral-700 dark:text-neutral-300 whitespace-pre-line">
            {design.significance}
          </p>
        </div>
      )}

      {/* 5. Why Today - 放最后 */}
      <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-500 mb-3">
          Why Today
        </p>
        <p className="text-sm font-light leading-relaxed text-neutral-700 dark:text-neutral-300">
          {design.dateConnection}
        </p>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-light tracking-wide text-neutral-900 dark:text-neutral-100">
              THE DAILY OBJECT
            </h1>
            
            <div className="flex items-center gap-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2.5 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-neutral-400" />
                ) : (
                  <Moon className="w-5 h-5 text-neutral-600" />
                )}
              </button>

              <nav className="flex gap-1 bg-neutral-100 dark:bg-neutral-800 rounded-full p-1">
                <button
                  onClick={() => setView('today')}
                  className={`px-6 py-2 rounded-full text-sm font-light tracking-wide transition-all ${
                    view === 'today'
                      ? 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 shadow-sm'
                      : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300'
                  }`}
                >
                  Today
                </button>
                <button
                  onClick={() => setView('archive')}
                  className={`px-6 py-2 rounded-full text-sm font-light tracking-wide transition-all ${
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
      <main className="pt-32 pb-12 px-6 sm:px-8">
        {view === 'today' ? (
          <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Image */}
              <div className="lg:col-span-5">
                <div className="aspect-[3/4] lg:aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-200 dark:bg-neutral-800 shadow-2xl lg:sticky lg:top-24">
                  <img
                    src={todayDesign.imageUrl}
                    alt={todayDesign.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="lg:col-span-7">
                {renderDesignDetail(todayDesign)}
              </div>
            </div>
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
              <div className="lg:col-span-7">
                {selectedDesign ? (
                  <div className="space-y-8">
                    <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-200 dark:bg-neutral-800 shadow-2xl">
                      <img
                        src={selectedDesign.thumbnailUrl || selectedDesign.imageUrl}
                        alt={selectedDesign.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
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
