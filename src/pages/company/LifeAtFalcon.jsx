import { useState } from 'react'
import PageHero from '../../components/ui/PageHero'
import { FiBell } from 'react-icons/fi'

function LifeAtFalcon() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const PILLARS = [
    { icon: '🤝', title: 'Inclusive Culture', desc: 'A workplace that celebrates diversity, encourages collaboration, and ensures every voice is heard.' },
    { icon: '📈', title: 'Growth Mindset', desc: 'Continuous learning opportunities, certifications, and mentorship programs to help you advance.' },
    { icon: '🏆', title: 'Recognition', desc: 'Your contributions matter. We celebrate achievements at every level of the organization.' },
    { icon: '❤️', title: 'Well-being', desc: 'Health benefits, flexible arrangements, and wellness initiatives that keep you at your best.' },
    { icon: '🔒', title: 'Purpose-Driven', desc: 'Work that protects people and assets — making a tangible difference every single day.' },
    { icon: '🌏', title: 'National Pride', desc: 'Serving all 64 districts of Bangladesh with a team that truly represents the nation.' },
  ]

  return (
    <div className="animate-fade-in">
      <PageHero
        eyebrow="Culture & People"
        title={<>Life at <span className="text-[#3F7E47]">FALCON</span></>}
        subtitle="Discover what makes FALCON more than just a workplace."
        breadcrumbs={[{ label: 'Company', to: '/company/overview' }, { label: 'Life at FALCON' }]}
        backgroundImage="/documents/navlink_banner/company/lifeatfalcon.jpg"
      />

      {/* ── Coming Soon Hero ── */}
      {/* <section className="bg-dark py-24 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-white/5" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full border border-white/5" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#3F7E47]/10 border border-primary/30 px-5 py-2 mb-8">
            <span className="w-2 h-2 bg-[#3F7E47] rounded-full animate-pulse" />
            <span className="text-[#3F7E47] text-xs font-bold uppercase tracking-widest">Coming Soon</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            We're building something <span className="text-[#3F7E47]">special</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
            Our team is working on a dedicated space to showcase the people, stories, and culture that make FALCON
            extraordinary. Check back soon.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {sent ? (
              <div className="flex items-center gap-2 text-green-400 text-sm font-semibold">
                <FiBell className="w-4 h-4" />
                You'll be notified when we launch!
              </div>
            ) : (
              <>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-5 py-3 text-sm focus:outline-none focus:border-primary transition-colors flex-1 max-w-xs"
                />
                <button
                  onClick={() => email.includes('@') && setSent(true)}
                  className="bg-[#3F7E47] text-white font-bold uppercase tracking-wider text-sm px-8 py-3 hover:bg-[#3F7E47] transition-colors"
                >
                  Notify Me
                </button>
              </>
            )}
          </div>
        </div>
      </section> */}

      {/* ── Culture pillars ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#3F7E47] text-xs font-bold uppercase tracking-widest mb-2">Our Values in Action</p>
            <h2 className="text-3xl md:text-4xl font-black text-dark">
              What <span className="text-[#3F7E47]">We Stand For</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PILLARS.map((p) => (
              <div key={p.title} className="bg-white border border-gray-100 p-7 hover:shadow-md transition-shadow group">
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="font-black text-dark text-lg mb-2 group-hover:text-[#3F7E47] transition-colors">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Join CTA ── */}
      <section className="py-16 bg-[#3F7E47]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Ready to be part of the team?</h2>
          <p className="text-white/70 mb-8">Browse open positions and apply today.</p>
          <a
            href="/join-us"
            className="inline-block bg-white text-[#3F7E47] font-black uppercase tracking-wider text-sm px-10 py-3 hover:bg-gray-100 transition-colors"
          >
            View Careers
          </a>
        </div>
      </section>
    </div>
  )
}

export default LifeAtFalcon
