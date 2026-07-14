import { Link } from 'react-router-dom'
import PageHero from '../ui/PageHero'
import { HiCheckCircle, HiOutlineArrowRight } from 'react-icons/hi'
import { OFFER_PAGES } from '../../data/offerData'

// Colour accent map
const ACCENT = {
  red:    { bg: 'bg-[#3F7E47]',    text: 'text-[#3F7E47]',    border: 'border-primary',    light: 'bg-[#3F7E47]/10'    },
  blue:   { bg: 'bg-[#3F7E47]',   text: 'text-[#3F7E47]',   border: 'border-[#3F7E47]',   light: 'bg-[#3F7E47]/10'       },
  purple: { bg: 'bg-[#3F7E47]', text: 'text-[#3F7E47]', border: 'border-[#3F7E47]', light: 'bg-[#3F7E47]/10'     },
  yellow: { bg: 'bg-[#3F7E47]', text: 'text-[#3F7E47]', border: 'border-[#3F7E47]', light: 'bg-[#3F7E47]/10'     },
  green:  { bg: 'bg-[#3F7E47]',  text: 'text-[#3F7E47]',  border: 'border-[#3F7E47]',  light: 'bg-[#3F7E47]/10'      },
  teal:   { bg: 'bg-[#3F7E47]',   text: 'text-[#3F7E47]',   border: 'border-[#3F7E47]',   light: 'bg-[#3F7E47]/10'       },
  orange: { bg: 'bg-[#3F7E47]', text: 'text-[#3F7E47]', border: 'border-[#3F7E47]', light: 'bg-[#3F7E47]/10'     },
  indigo: { bg: 'bg-[#3F7E47]', text: 'text-[#3F7E47]', border: 'border-[#3F7E47]', light: 'bg-[#3F7E47]/10'     },
}

// Sidebar: other offers
const ALL_SLUGS = Object.keys(OFFER_PAGES)

function OfferSidebar({ currentSlug, accent }) {
  const others = ALL_SLUGS.filter((s) => s !== currentSlug)
  return (
    <aside className="space-y-8">
      {/* Other services */}
      <div className="border border-gray-100 bg-white p-6">
        <h3 className="text-xs font-black uppercase tracking-widest text-dark mb-4">All Offerings</h3>
        <ul className="space-y-1">
          {ALL_SLUGS.map((slug) => {
            const p = OFFER_PAGES[slug]
            const Icon = p.icon
            const active = slug === currentSlug
            return (
              <li key={slug}>
                <Link
                  to={`/what-we-offer/${slug}`}
                  className={`flex items-center gap-3 px-3 py-2.5 text-sm font-semibold transition-colors group ${
                    active
                      ? `${accent.light} ${accent.text} border-l-2 ${accent.border}`
                      : 'text-gray-600 hover:text-dark hover:bg-gray-50 border-l-2 border-transparent'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${active ? accent.text : 'text-gray-400 group-hover:text-gray-600'}`} />
                  {p.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Contact CTA box */}
      <div className="bg-gray-200 p-6 text-black">
        <div className="w-10 h-1 bg-[#3F7E47] mb-4" />
        <h3 className="font-black text-lg mb-2">Need a Custom Solution?</h3>
        <p className="text-black/60 text-sm mb-5 leading-relaxed">
          Our team will design a security package precisely matched to your requirements.
        </p>
        <Link
          to="/contact"
          className="flex items-center gap-2 bg-[#3F7E47] text-white text-xs font-black uppercase tracking-widest px-5 py-3 hover:bg-[#3F7E47] transition-colors"
        >
          Contact Us <HiOutlineArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Quick facts */}
      <div className="bg-gray-50 border border-gray-100 p-6">
        <h3 className="text-xs font-black uppercase tracking-widest text-dark mb-4">Quick Facts</h3>
        <ul className="space-y-2 text-sm text-gray-600">
          {['Est. 1994 — 32+ years', '4,000+ trained personnel', '64 districts nationwide', '400+ active clients', 'ISO-certified processes'].map((f) => (
            <li key={f} className="flex items-center gap-2">
              <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${accent.bg}`} />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default function ServicePage({ slug }) {
  const page = OFFER_PAGES[slug]
  if (!page) return null

  const accent = ACCENT[page.color] || ACCENT.red
  const Icon = page.icon

  return (
    <div className="animate-fade-in">
      {/* <PageHero
        eyebrow={page.eyebrow}
        title={
          <>
            {page.title.split(' ').map((word, i, arr) =>
              i === arr.length - 1 ? (
                <span key={i} className={accent.text}> {word}</span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
          </>
        }
        subtitle={page.tagline}
        breadcrumbs={[{ label: 'What We Offer', to: '/what-we-offer/physical-security' }, { label: page.title }]}
        backgroundImage={page.banner}
      /> */}

      {/* ── Stats bar ── */}
      {/* <div className={`${accent.bg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
            {page.highlights.map((h) => (
              <div key={h.label} className="px-6 py-5 text-center">
                <p className="text-2xl md:text-3xl font-black text-white">{h.value}</p>
                <p className="text-white/70 text-xs font-semibold uppercase tracking-wide mt-0.5">{h.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* ── Body ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Main content */}
            <div className="lg:col-span-2 space-y-14">

              {/* Intro */}
              <div>
                <div className={`flex items-center gap-3 mb-6`}>
                  <div className={`w-10 h-10 ${accent.bg} flex items-center justify-center shrink-0`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className={`h-px flex-1 ${accent.bg} opacity-20`} />
                </div>
                <p className="text-gray-600 leading-relaxed text-base">{page.intro}</p>
              </div>

              {/* Features grid */}
              <div>
                <p className={`text-xs font-bold uppercase tracking-widest ${accent.text} mb-2`}>What's Included</p>
                <h2 className="text-2xl font-black text-dark mb-8">
                  Key <span className={accent.text}>Capabilities</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {page.features.map((f) => (
                    <div
                      key={f.title}
                      className={`border-l-4 border-[#3F7E47] bg-gray-50 p-5 hover:shadow-sm transition-shadow`}
                    >
                      <h3 className="font-black text-dark text-sm mb-2">{f.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why choose us */}
              <div>
                <p className={`text-xs font-bold uppercase tracking-widest ${accent.text} mb-2`}>Our Advantage</p>
                <h2 className="text-2xl font-black text-dark mb-6">
                  Why Choose <span className={accent.text}>FALCON®?</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {page.whyUs.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <HiCheckCircle className={`w-5 h-5 ${accent.text} shrink-0 mt-0.5`} />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sectors served */}
              <div>
                <p className={`text-xs font-bold uppercase tracking-widest ${accent.text} mb-2`}>Industries</p>
                <h2 className="text-2xl font-black text-dark mb-6">
                  Sectors <span className={accent.text}>We Serve</span>
                </h2>
                <div className="flex flex-wrap gap-3">
                  {page.sectors.map((s) => (
                    <span
                      key={s}
                      className={`${accent.light} ${accent.text} text-xs font-bold uppercase tracking-wider px-4 py-2 border ${accent.border} border-opacity-30`}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className={`${accent.bg} p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4`}>
                <div>
                  <h3 className="text-white font-black text-lg">Ready to get started?</h3>
                  <p className="text-white/70 text-sm mt-1">{page.tagline}</p>
                </div>
                <Link
                  to={page.ctaLink}
                  className="bg-white text-dark font-black uppercase tracking-wider text-xs px-8 py-3 hover:bg-gray-100 transition-colors shrink-0"
                >
                  {page.cta}
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <OfferSidebar currentSlug={slug} accent={accent} />
          </div>
        </div>
      </section>
    </div>
  )
}
