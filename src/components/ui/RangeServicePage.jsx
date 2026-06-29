import { Link } from 'react-router-dom'
import PageHero from '../ui/PageHero'
import { HiCheckCircle, HiOutlineArrowRight } from 'react-icons/hi'
import { SERVICE_PAGES, SERVICE_GROUPS } from '../../data/serviceData'

const ACCENT = {
  red:    { bg: 'bg-[#3F7E47]',    text: 'text-[#3F7E47]',    border: 'border-primary',    light: 'bg-[#3F7E47]/10'   },
  blue:   { bg: 'bg-[#3F7E47]',   text: 'text-[#3F7E47]',   border: 'border-[#3F7E47]',   light: 'bg-[#3F7E47]/10'      },
  purple: { bg: 'bg-[#3F7E47]', text: 'text-[#3F7E47]', border: 'border-[#3F7E47]', light: 'bg-[#3F7E47]/10'    },
  yellow: { bg: 'bg-[#3F7E47]', text: 'text-[#3F7E47]', border: 'border-[#3F7E47]', light: 'bg-[#3F7E47]/10'    },
  green:  { bg: 'bg-[#3F7E47]',  text: 'text-[#3F7E47]',  border: 'border-[#3F7E47]',  light: 'bg-[#3F7E47]/10'     },
  teal:   { bg: 'bg-[#3F7E47]',   text: 'text-[#3F7E47]',   border: 'border-[#3F7E47]',   light: 'bg-[#3F7E47]/10'      },
  orange: { bg: 'bg-[#3F7E47]', text: 'text-[#3F7E47]', border: 'border-[#3F7E47]', light: 'bg-[#3F7E47]/10'    },
  indigo: { bg: 'bg-[#3F7E47]', text: 'text-[#3F7E47]', border: 'border-[#3F7E47]', light: 'bg-[#3F7E47]/10'    },
}

function RangeServiceSidebar({ currentSlug, accent }) {
  return (
    <aside className="space-y-8">
      {SERVICE_GROUPS.map((group) => (
        <div key={group.heading} className="border border-gray-100 bg-white p-5">
          <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3 px-1">
            {group.heading}
          </h3>
          <ul className="space-y-0.5">
            {group.slugs.map((slug) => {
              const p = SERVICE_PAGES[slug]
              const Icon = p.icon
              const active = slug === currentSlug
              return (
                <li key={slug}>
                  <Link
                    to={`/services/${slug}`}
                    className={`flex items-center gap-2.5 px-3 py-2 text-sm font-semibold transition-colors group ${
                      active
                        ? `${accent.light} ${accent.text} border-l-2 ${accent.border}`
                        : 'text-gray-600 hover:text-dark hover:bg-gray-50 border-l-2 border-transparent'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 shrink-0 ${active ? accent.text : 'text-gray-400 group-hover:text-gray-600'}`} />
                    <span className="leading-tight">{p.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      ))}

      {/* CTA */}
      <div className="bg-gray-100 p-6 text-black">
        <div className="w-10 h-1 bg-[#3F7E47] mb-4" />
        <h3 className="font-black text-lg mb-2">Custom Security Package?</h3>
        <p className="text-black text-sm mb-5 leading-relaxed">
          Combine multiple services into a tailored solution designed specifically for your needs.
        </p>
        <Link
          to="/contact"
          className="flex items-center gap-2 bg-[#3F7E47] text-white text-xs font-black uppercase tracking-widest px-5 py-3 hover:bg-[#3F7E47] transition-colors"
        >
          Talk to Us <HiOutlineArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Quick stats */}
      <div className="bg-gray-50 border border-gray-100 p-6">
        <h3 className="text-xs font-black uppercase tracking-widest text-dark mb-4">Why FALCON®</h3>
        <ul className="space-y-2 text-sm text-gray-600">
          {['Est. 1994 — 32+ years', '4,000+ trained professionals', '64 districts nationwide', '400+ active clients'].map((f) => (
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

export default function RangeServicePage({ slug }) {
  const page = SERVICE_PAGES[slug]
  if (!page) return null

  const accent = ACCENT[page.color] || ACCENT.red
  const Icon = page.icon
  const words = page.title.split(' ')

  return (
    <div className="animate-fade-in">
      <PageHero
        eyebrow={page.eyebrow}
        title={
          <>
            {words.map((word, i) =>
              i === words.length - 1
                ? <span key={i} className={accent.text}> {word}</span>
                : <span key={i}>{word} </span>
            )}
          </>
        }
        subtitle={page.tagline}
        breadcrumbs={[
          { label: 'Range of Services', to: '/services/close-protection' },
          { label: page.group },
          { label: page.title },
        ]}
        backgroundImage={page.banner}
      />

      {/* Stats bar */}
      {/* <div className={accent.bg}>
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

      {/* Body */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Main */}
            <div className="lg:col-span-2 space-y-14">

              {/* Intro */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 ${accent.bg} flex items-center justify-center shrink-0`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className={`h-px flex-1 ${accent.bg} opacity-20`} />
                </div>
                <p className="text-gray-600 leading-relaxed text-base">{page.intro}</p>
              </div>

              {/* Features */}
              <div>
                <p className={`text-xs font-bold uppercase tracking-widest ${accent.text} mb-2`}>What's Included</p>
                <h2 className="text-2xl font-black text-dark mb-8">
                  Key <span className={accent.text}>Capabilities</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {page.features.map((f) => (
                    <div key={f.title} className={`border-l-4 ${accent.border} bg-gray-50 p-5 hover:shadow-sm transition-shadow`}>
                      <h3 className="font-black text-dark text-sm mb-2">{f.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why us */}
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

              {/* Sectors */}
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

              {/* CTA banner */}
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
            <RangeServiceSidebar currentSlug={slug} accent={accent} />
          </div>
        </div>
      </section>
    </div>
  )
}
