import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import banner4 from '../../assets/banner/banner4.jpg'
import banner2 from '../../assets/banner/banner5.jpeg'
import banner3 from '../../assets/banner/banner6.jpeg'
import banner1 from '../../assets/banner/banner1.jpg'

const SLIDES = [
  {
    image: banner4,
    eyebrow: 'Professional Team',
    title: 'World-Class Standards.',
    highlight: 'Local Expertise.',
    subtitle:
      'Our dedicated team of security professionals, consultants, and technology specialists work together to deliver reliable protection and peace of mind.',
    cta: { label: 'About FALCON®', to: '/company/overview' },
    ctaSecondary: { label: 'Our Leadership', to: '/company/leadership' },
    align: 'left',
  },
  //   {
  //   image: banner4,
  //   eyebrow: "Bangladesh's Most Trusted",
  //   title: 'AI-Enabled Security',
  //   highlight: 'For a Safer Tomorrow',
  //   subtitle:
  //     'FALCON Security has delivered cutting-edge, human-centred protection across every corner of Bangladesh.',
  //   cta: { label: 'Explore Services', to: '/what-we-offer' },
  //   ctaSecondary: { label: 'Contact Us', to: '/contact' },
  //   align: 'left',
  // },
  {
    image: banner2,
    eyebrow: 'Nationwide Coverage',
    title: '64 Districts.',
    highlight: 'One Trusted Name.',
    subtitle:
      "Protecting people, property, and assets with highly trained security personnel available 24/7.",
    cta: { label: 'Our Footprint', to: '/company/footprint' },
    ctaSecondary: { label: 'Join Us', to: '/join-us' },
    align: 'left',
  },
  {
    image: banner3,
    eyebrow: 'Risk Assessment & Consulting',
    title: 'Reduce Risk',
    highlight: 'Before It Becomes a Threat',
    subtitle:
      "Comprehensive security audits, vulnerability assessments, and strategic security planning for organizations.",
    cta: { label: 'CIT Services', to: '/services/cash-in-transit' },
    ctaSecondary: { label: 'Consultants', to: '/what-we-offer/security-consulting' },
    align: 'left',
  },
  {
    image: banner1,
    eyebrow: "Bangladesh's Most Trusted",
    title: 'AI-Enabled Security',
    highlight: 'For a Safer Tomorrow',
    subtitle:
      'FALCON® Security has delivered cutting-edge, human-centred protection across every corner of Bangladesh.',
    cta: { label: 'Explore Services', to: '/what-we-offer' },
    ctaSecondary: { label: 'Contact Us', to: '/contact' },
    align: 'left',
  },
]

const AUTOPLAY_MS = 5500

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [animKey, setAnimKey] = useState(0)
  const [progress, setProgress] = useState(0)

  const goTo = useCallback((idx) => {
    setCurrent(idx)
    setAnimKey((k) => k + 1)
    setProgress(0)
  }, [])

  const prev = () => goTo((current - 1 + SLIDES.length) % SLIDES.length)
  const next = useCallback(() => goTo((current + 1) % SLIDES.length), [current, goTo])

  useEffect(() => {
    const timer = setTimeout(next, AUTOPLAY_MS)
    return () => clearTimeout(timer)
  }, [current, next])

  useEffect(() => {
    setProgress(0)
    const start = performance.now()
    let raf
    const tick = (now) => {
      const pct = Math.min(((now - start) / AUTOPLAY_MS) * 100, 100)
      setProgress(pct)
      if (pct < 100) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [current])

  const slide = SLIDES[current]

  return (
    /* Decreased size: changed height classes from h-[88vh] min-h-[560px] to h-[65vh] min-h-[460px] */
    <section className="relative w-full h-[65vh] min-h-[460px] overflow-hidden bg-dark">
      {/* Slides */}
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <img
            src={s.image}
            alt=""
            className="w-full h-full object-cover object-center img-sharp"
            style={{
              transform: i === current ? 'scale(1.06)' : 'scale(1)',
              transition: 'transform 6s ease-out',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          {/* Adjusted gap-5 to gap-4 to sit cleaner in a tighter space */}
          <div className="flex flex-col max-w-2xl gap-4">

            {/* Eyebrow */}
            <div
              key={`eyebrow-${animKey}`}
              className="flex items-center gap-3"
              style={{ animation: 'heroFadeUp 0.6s ease both' }}
            >
              <span className="w-8 h-0.5 bg-[#5ac26e] inline-block" />
              <p className="text-[#5ac26e] font-bold text-xs uppercase tracking-[0.25em]">
                {slide.eyebrow}
              </p>
            </div>

            {/* Title (Slightly reduced base text sizing for tight viewports) */}
            <h1
              key={`title-${animKey}`}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.1]"
              style={{ animation: 'heroFadeUp 0.7s 0.1s ease both' }}
            >
              {slide.title}
              <br />
              <span className="text-[#5ac26e]">{slide.highlight}</span>
            </h1>

            {/* Subtitle */}
            <p
              key={`sub-${animKey}`}
              className="text-gray-300 text-sm md:text-base leading-relaxed max-w-lg"
              style={{ animation: 'heroFadeUp 0.7s 0.25s ease both' }}
            >
              {slide.subtitle}
            </p>

            {/* CTAs */}
            <div
              key={`cta-${animKey}`}
              className="flex flex-wrap gap-4 mt-1"
              style={{ animation: 'heroFadeUp 0.7s 0.4s ease both' }}
            >
              <Link
                to={slide.cta.to}
                className="flex items-center gap-2 bg-[#5ac26e] text-white px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-[#5ac26e] transition-colors duration-200 group"
              >
                {slide.cta.label}
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to={slide.ctaSecondary.to}
                className="flex items-center gap-2 border border-white/40 text-white px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-white/10 hover:border-white transition-colors duration-200"
              >
                {slide.ctaSecondary.label}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 flex items-center justify-center bg-black/30 border border-white/20 text-white hover:bg-[#5ac26e] hover:border-primary transition-colors duration-200"
        aria-label="Previous slide"
      >
        <FiChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 flex items-center justify-center bg-black/30 border border-white/20 text-white hover:bg-[#5ac26e] hover:border-primary transition-colors duration-200"
        aria-label="Next slide"
      >
        <FiChevronRight className="w-5 h-5" />
      </button>

      {/* Dot progress indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="relative h-1 rounded-full overflow-hidden transition-all duration-300"
            style={{
              width: i === current ? 48 : 20,
              background: 'rgba(255,255,255,0.3)',
            }}
          >
            {i === current && (
              <span
                className="absolute left-0 top-0 h-full bg-[#5ac26e]"
                style={{ width: `${progress}%`, transition: 'none' }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-8 right-8 z-30 text-white/50 text-xs font-bold tracking-widest select-none">
        <span className="text-white text-sm">{String(current + 1).padStart(2, '0')}</span>
        {' / '}
        {String(SLIDES.length).padStart(2, '0')}
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}