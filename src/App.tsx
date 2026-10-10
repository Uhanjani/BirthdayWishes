import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  ArrowDown,
  Camera,
  Heart,
  Sparkles,
  X,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import './App.css'
import { birthdayContent, type MemoryItem } from './data/birthdayContent'

const smoothEase = [0.22, 1, 0.36, 1] as const

const letterDividers: Record<number, string> = {
  2: '✦   ♡   ✦',
  4: '🌷   ✧   🌷',
  8: '✧   🎂   ✧',
}

const sectionMotion = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: smoothEase },
}

function App() {
  const prefersReducedMotion = useReducedMotion()
  const [selectedMemory, setSelectedMemory] = useState<MemoryItem | null>(null)
  const [isLetterOpen, setIsLetterOpen] = useState(false)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)

  useEffect(() => {
    if (!selectedMemory) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedMemory(null)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedMemory])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="page-shell bg-[#f7f0ee] text-[#2e1d22]">
      <header className="sticky top-0 z-50 border-b border-[#d9cabf] bg-[#f7f0ee]/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#7d5a66]">
            <Sparkles className="h-4 w-4 text-[#c78d87]" />
            {birthdayContent.friendName}
          </div>

          <div className="hidden items-center gap-6 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[#685760] md:flex">
            <button type="button" className="transition hover:text-[#a86068]" onClick={() => scrollToSection('home')}>
              Home
            </button>
            <button type="button" className="transition hover:text-[#a86068]" onClick={() => scrollToSection('memories')}>
              Memories
            </button>
            <button type="button" className="transition hover:text-[#a86068]" onClick={() => scrollToSection('creator')}>
              Creator
            </button>
            <button type="button" className="transition hover:text-[#a86068]" onClick={() => scrollToSection('letter')}>
              Letter
            </button>
          </div>

          <button
            type="button"
            onClick={() => scrollToSection('gallery')}
            className="rounded-full border border-[#d4b09e] bg-white/70 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#6b4d4a] shadow-[0_10px_30px_rgba(121,86,89,0.08)] transition hover:-translate-y-0.5 hover:bg-white"
          >
            Photos
          </button>
        </nav>
      </header>

      <main className="relative overflow-x-hidden">
        <section id="home" className="hero-section relative flex items-center overflow-hidden">
          <img
            src={birthdayContent.heroImage}
            alt="Lalini holding her birthday gift"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-[58%_30%]"
          />
          <div className="hero-image-overlay absolute inset-0" aria-hidden="true" />

          <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: smoothEase }}
              className="max-w-2xl space-y-6 text-white"
            >
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.38em] text-white/85">
                {birthdayContent.heroTag}
              </p>

              <div className="space-y-4">
                <h1 className="font-serif text-5xl leading-[0.9] text-white sm:text-6xl lg:text-7xl">
                  Happy Birthday, {birthdayContent.friendName} <span className="text-[#f1c3c6]">♡</span>
                </h1>
                <p className="max-w-xl text-lg text-white/90 sm:text-xl">
                  {birthdayContent.subtitle}
                </p>
              </div>

              <div className="font-script text-2xl text-[#ffe0df] sm:text-3xl">
                {birthdayContent.handwrittenNote}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => scrollToSection('memories')}
                  className="inline-flex items-center gap-2 rounded-full bg-[#2b1f27] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#f8f3ee] shadow-[0_18px_40px_rgba(64,46,52,0.28)] transition hover:-translate-y-0.5"
                >
                  Enter Your World
                  <ArrowDown className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('memories')}
                  className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/20"
                >
                  See memories
                </button>
              </div>
            </motion.div>
          </div>

        </section>

        <motion.section id="memories" className="section-shell" {...sectionMotion}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Little moments"
              title="Little Moments, Forever Memories"
              text="A scrapbook of the tiny details that made life feel warm, playful, and unforgettable."
            />

            <div className="memory-grid mt-12">
              {birthdayContent.memories.map((memory) => (
                <button
                  key={memory.id}
                  type="button"
                  onClick={() => setSelectedMemory(memory)}
                  className="memory-card group text-left"
                >
                  <div className="memory-card-image relative overflow-hidden rounded-[1.5rem]">
                    <img src={memory.image} alt={memory.title} style={{ objectPosition: memory.imagePosition }} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#26171a]/60 via-transparent to-transparent" />
                    <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-[#c1757f] shadow-md">
                      <Heart className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="memory-card-content space-y-3 p-4">
                    <div className="flex items-center justify-between gap-3 text-[0.58rem] uppercase tracking-[0.2em] text-[#8a6570]">
                      <span>{memory.date}</span>
                      <span>✦</span>
                    </div>
                    <h3 className="font-serif text-3xl text-[#2e1d22]">{memory.title}</h3>
                    <p className="text-sm leading-relaxed text-[#56454b]">{memory.teaser}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section id="creator" className="section-shell" {...sectionMotion}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="creator-shell rounded-[2.4rem] border border-[#ebdad8] bg-[#fffaf8]/80 p-6 shadow-[0_20px_50px_rgba(111,84,84,0.08)] sm:p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
                  <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-[#f8ebea] p-2 shadow-[0_16px_35px_rgba(109,82,86,0.12)]">
                    <img src={birthdayContent.creatorProfile.profileImage} alt="Lalini smiling in her creator portrait" className="h-60 w-60 rounded-[1.6rem] object-cover" />
                  </div>
                  <div className="rounded-full border border-[#efd8d7] bg-[#fff] px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-[#8d646d]">
                    {birthdayContent.creatorProfile.handle}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {birthdayContent.creatorProfile.categories.map((category) => (
                      <span key={category} className="rounded-full border border-[#e7d3d4] bg-[#f8f0f1] px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#6a4f57]">
                        {category}
                      </span>
                    ))}
                  </div>

                  <div>
                    <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#a56c75]">
                      The Girl Behind the Glow
                    </p>
                    <h2 className="font-serif text-4xl text-[#2a1d22] sm:text-5xl">The Girl Behind the Glow</h2>
                  </div>

                  <p className="max-w-xl text-lg leading-relaxed text-[#4b3741]">{birthdayContent.creatorProfile.description}</p>

                  <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                    {birthdayContent.creatorProfile.placeholders.map((placeholder) => (
                      <div key={placeholder} className="rounded-[1.2rem] border border-[#f0e0df] bg-[#fffaf7] px-3 py-4 text-sm text-[#5f4850] shadow-sm">
                        {placeholder}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href={birthdayContent.creatorProfile.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#2b1f27] px-5 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#f8f3ee] transition hover:-translate-y-0.5"
                    >
                      <Camera className="h-4 w-4" />
                      Visit her world
                    </a>
                    <div className="flex items-center gap-2 text-[#69555f]">
                      <Camera className="h-4 w-4 text-[#cf8b8d]" />
                      <span className="text-sm">Content with heart, story, and style</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 border-t border-[#ebdad8] pt-8">
                <div className="mb-6 text-center">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#a56c75]">Her latest videos</p>
                  <h3 className="mt-2 font-serif text-3xl text-[#2a1d22] sm:text-4xl">Little Moments in Motion</h3>
                </div>
                <div className="grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 xl:grid-cols-4">
                  {birthdayContent.creatorProfile.shorts.map((videoId, index) => (
                    <div key={videoId} className="w-full max-w-[15rem] overflow-hidden rounded-[1.5rem] border border-[#f0e7e4] bg-white/80 shadow-[0_12px_28px_rgba(138,108,111,0.08)]">
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&playsinline=1&controls=1&rel=0`}
                        title={`Lalini YouTube Short ${index + 1}`}
                        className="aspect-[9/16] w-full"
                        allow="autoplay; encrypted-media; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section id="letter" className="section-shell" {...sectionMotion}>
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="A little love"
              title="A Little Letter for You"
              text="A birthday note made with all the softness, pride, and love she deserves."
            />

            <div className="birthday-letter-shell relative mt-8 overflow-hidden rounded-[2.4rem] border border-[#e6d6cf] bg-[#f7efe8] p-5 shadow-[0_18px_40px_rgba(118,89,82,0.08)] sm:p-8 lg:p-10">
              <div className="relative z-10 rounded-[1.8rem] border border-[#e2cac5] bg-[#fffaf5]/95 p-6 shadow-inner sm:p-10">
                <div className="mb-5 flex items-center justify-between text-[#976f68]">
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.3em]">A little letter, from my heart</span>
                  <span aria-hidden="true" className="text-xl">💌</span>
                </div>

                <p className="max-w-2xl text-base leading-relaxed text-[#5a444a] sm:text-lg">
                  There are so many things I want you to know. Open this little letter whenever you are ready. 🌷
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-3" aria-hidden="true">
                  <span className="letter-stamp">♡</span>
                  <span className="letter-stamp">✦</span>
                  <span className="letter-stamp">🌸</span>
                  <span className="letter-stamp">🎈</span>
                </div>

                <button
                  type="button"
                  aria-expanded={isLetterOpen}
                  aria-controls="birthday-letter-content"
                  onClick={() => setIsLetterOpen((open) => !open)}
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#2b1f27] px-6 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#fbf6f3] shadow-[0_12px_28px_rgba(78,52,61,0.18)] transition hover:-translate-y-0.5"
                >
                  {isLetterOpen ? 'Fold the letter' : 'Open your birthday letter'}
                  <span aria-hidden="true">{isLetterOpen ? '♡' : '✉'}</span>
                </button>

                <AnimatePresence initial={false}>
                  {isLetterOpen && (
                    <motion.div
                      initial={prefersReducedMotion ? false : { opacity: 0, y: 18, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: 'auto' }}
                      exit={{ opacity: 0, y: -12, height: 0 }}
                      transition={{ duration: 0.7, ease: smoothEase }}
                      id="birthday-letter-content"
                      className="letter-paper mt-8 overflow-hidden border-t border-[#e6d6cf] pt-8"
                    >
                      <div className="mb-6 flex items-center gap-3 text-[#a36671]">
                        <Heart className="h-5 w-5" />
                        <span className="font-script text-3xl">For my Lalini</span>
                      </div>
                      <div className="space-y-5 text-lg leading-relaxed text-[#453539]">
                        {birthdayContent.letter.lines.map((line, index) => (
                          <div key={`${line}-${index}`}>
                            <motion.p
                              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : index * 0.14 }}
                            >
                              {line}
                            </motion.p>
                            {letterDividers[index] && (
                              <div className="letter-divider" aria-hidden="true">
                                {letterDividers[index]}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                      <p className="mt-8 text-center font-script text-3xl text-[#a36671]">Always your person ♡</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section id="gallery" className="section-shell pb-16" {...sectionMotion}>
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="A little corner just for her"
              title="Her Gallery"
              text="A collection of moments, laughter, and memories made with love."
            />

            <div className="relative mt-10 overflow-hidden rounded-[2.4rem] border border-[#e8d8d1] bg-[linear-gradient(135deg,_#fffaf6,_#f8efe9_55%,_#f4e9ef)] px-4 py-10 text-center shadow-[0_22px_50px_rgba(118,88,82,0.08)] sm:px-8 lg:px-10">
              <div className="confetti-container">
                {Array.from({ length: 18 }, (_, index) => (
                  <span
                    key={`confetti-${index}`}
                    className="confetti-piece"
                    style={{
                      left: `${(index * 11) % 100}%`,
                      animationDelay: `${(index % 5) * 0.12}s`,
                      background: ['#eab8bf', '#d5d1ff', '#f0d3a3', '#b2d9cb', '#f4c7b7'][index % 5],
                    }}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => setIsGalleryOpen((open) => !open)}
                className="inline-flex items-center gap-2 rounded-full bg-[#2a1d25] px-6 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-[#fbf6f3] shadow-[0_18px_40px_rgba(58,42,51,0.22)] transition hover:-translate-y-0.5"
              >
                <Sparkles className="h-4 w-4" />
                {isGalleryOpen ? 'Hide birthday photos' : 'View birthday photos'}
              </button>

              <AnimatePresence>
                {isGalleryOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.5 }}
                    className="mt-8 space-y-6"
                  >
                    <h3 className="font-serif text-4xl text-[#2f1d22] sm:text-5xl">Happy Birthday, {birthdayContent.friendName}!</h3>
                    <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#4d3a40]">
                      May your year be full of peace, wonder, soft victories, and the kind of happiness that feels like a warm little miracle.
                    </p>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {birthdayContent.birthdayGallery.map((image, index) => (
                        <div key={`${image}-${index}`} className="overflow-hidden rounded-[1.5rem] border border-[#f0e3df] bg-white/70 p-2 shadow-[0_12px_28px_rgba(138,108,111,0.08)]">
                          <img
                            src={image}
                            alt={`Birthday memory ${index + 1}`}
                            className="h-52 w-full rounded-[1.1rem] object-cover"
                            style={{ objectPosition: index === 4 ? '50% 78%' : undefined }}
                          />
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-[#dbc8c2] bg-[#f7f0ee] px-4 py-8 text-center text-sm text-[#6e5662]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-3">
          <p>Made with love for {birthdayContent.friendName}</p>
        </div>
      </footer>

      <AnimatePresence>
        {selectedMemory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#2f1d22]/60 px-4 backdrop-blur-sm"
            onClick={() => setSelectedMemory(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 18 }}
              transition={{ duration: 0.24, ease: smoothEase }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="memory-modal-title"
              className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/70 bg-[#fffaf7] shadow-[0_30px_90px_rgba(31,22,24,0.35)]"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedMemory(null)}
                className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#fff]/80 text-[#4a3439] shadow-sm transition hover:bg-white"
                aria-label="Close memory modal"
              >
                <X className="h-5 w-5" />
              </button>

              <img src={selectedMemory.image} alt={selectedMemory.title} className="h-72 w-full object-cover" />

              <div className="space-y-5 p-6 sm:p-8">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-[#f8e7eb] px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[#845d68]">
                    {selectedMemory.date}
                  </span>
                  <Heart className="h-5 w-5 text-[#d07c88]" />
                </div>

                <h3 id="memory-modal-title" className="font-serif text-4xl text-[#2d1d22]">
                  {selectedMemory.title}
                </h3>
                <p className="text-lg leading-relaxed text-[#4d3a40]">{selectedMemory.description}</p>

                {selectedMemory.extraImages && selectedMemory.extraImages.length > 0 && (
                  <div className="grid gap-3 sm:grid-cols-2">
                    {selectedMemory.extraImages.map((image, index) => (
                      <img key={`${image}-${index}`} src={image} alt={`${selectedMemory.title} memory ${index + 1}`} className="h-40 w-full rounded-[1.2rem] object-cover" />
                    ))}
                  </div>
                )}

                <div className="rounded-[1.2rem] border border-[#eadad7] bg-[#fffaf7] p-4 font-script text-2xl text-[#8e5a63]">
                  “The little moments are the ones that keep glowing.”
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="text-center">
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[#9b6975]">{eyebrow}</p>
      <h2 className="mt-4 font-serif text-4xl text-[#2b1d22] sm:text-5xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-[#58454b]">{text}</p>
    </div>
  )
}

export default App

