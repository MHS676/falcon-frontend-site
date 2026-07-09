import { useState, useEffect } from 'react'
import PageHero from '../../components/ui/PageHero'
import { 
  LuHandshake, 
  LuTrendingUp, 
  LuAward, 
  LuHeart, 
  LuShieldCheck, 
  LuGlobe, 
  LuArrowRight, 
  LuUsers 
} from 'react-icons/lu'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

const ICON_MAP = {
  LuHandshake,
  LuTrendingUp,
  LuAward,
  LuHeart,
  LuShieldCheck,
  LuGlobe,
}

export default function LifeAtFalcon() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [pillars, setPillars] = useState([])
  const [loading, setLoading] = useState(true)

  // Default pillars if API fails
  const DEFAULT_PILLARS = [
    { icon: 'LuHandshake', title: 'Inclusive Culture', desc: 'A workplace that celebrates diversity, encourages collaboration, and ensures every voice is heard.' },
    { icon: 'LuTrendingUp', title: 'Growth Mindset', desc: 'Continuous learning opportunities, certifications, and mentorship programs to help you advance.' },
    { icon: 'LuAward', title: 'Recognition', desc: 'Your contributions matter. We celebrate achievements at every level of the organization.' },
    { icon: 'LuHeart', title: 'Well-being', desc: 'Health benefits, flexible arrangements, and wellness initiatives that keep you at your best.' },
    { icon: 'LuShieldCheck', title: 'Purpose-Driven', desc: 'Work that protects people and assets — making a tangible difference every single day.' },
    { icon: 'LuGlobe', title: 'National Pride', desc: 'Serving all 64 districts of Bangladesh with a team that truly represents the nation.' },
  ]

  useEffect(() => {
    fetchPillars()
  }, [])

  const fetchPillars = async () => {
    try {
      const response = await fetch(`${API_URL}/api/pillars`)
      if (!response.ok) throw new Error('Failed to fetch pillars')
      const data = await response.json()
      
      // Transform API data to match component format
      const transformedPillars = data.map((p) => ({
        ...p,
        desc: p.description,
        icon: p.icon || 'LuAward',
      }))
      
      setPillars(transformedPillars.length > 0 ? transformedPillars : DEFAULT_PILLARS)
    } catch (error) {
      console.warn('Using default pillars:', error)
      setPillars(DEFAULT_PILLARS)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-[#FAF9F6] min-h-screen font-sans selection:bg-[#3F7E47]/20 selection:text-[#3F7E47]">
      {/* ── Modern Premium Page Hero ── */}
      {/* <PageHero
        eyebrow="CULTURE & PEOPLE"
        title={<>Life at <span className="text-[#3F7E47] font-serif italic font-light">FALCON</span></>}
        subtitle="Discover what makes FALCON more than just a workplace—an ecosystem designed for collective human excellence."
        breadcrumbs={[{ label: 'Company', to: '/company/overview' }, { label: 'Life at FALCON' }]}
        backgroundImage="/documents/navlink_banner/company/lifeatfalcon.jpg"
      /> */}

      {/* ── Culture Pillars Section ── */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative Grid Mesh Background Accent */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#E5E7EB_1px,transparent_1px),linear-gradient(to_bottom,#E5E7EB_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

        <div className="relative z-10">
          <div className="text-center max-w-xl mx-auto mb-20">
            <span className="text-[10px] font-black tracking-[0.25em] text-[#3F7E47] uppercase bg-[#3F7E47]/10 px-3 py-1 rounded-full">
              OUR VALUES IN ACTION
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight mt-4 mb-3">
              What We <span className="text-[#3F7E47] font-serif italic font-light">Stand For</span>
            </h2>
            <p className="text-sm text-neutral-500 font-medium leading-relaxed">
              We operate at the intersection of absolute engineering reliability, structural inclusivity, and nationwide professional growth metrics.
            </p>
          </div>

          {/* Premium Tactile Grid Structure */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((p, idx) => {
              const IconComponent = ICON_MAP[p.icon] || ICON_MAP['LuAward']
              return (
                <div 
                  key={idx} 
                  className="group relative bg-white border border-neutral-200/60 rounded-[24px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:-translate-y-1.5 transition-all duration-300"
                >
                  {/* Micro-interactive Corner Accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-neutral-50 to-transparent rounded-tr-[24px] pointer-events-none" />
                  
                  {/* Icon Wrapper */}
                  <div className="w-12 h-12 rounded-xl bg-neutral-50 flex items-center justify-center text-[#3F7E47] border border-neutral-100 group-hover:bg-[#3F7E47] group-hover:text-white group-hover:scale-110 shadow-sm transition-all duration-300 mb-6">
                    <IconComponent className="w-5 h-5 transition-transform duration-300" />
                  </div>

                  <h3 className="font-bold text-neutral-800 text-lg tracking-tight mb-2 group-hover:text-[#3F7E47] transition-colors duration-200">
                    {p.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed font-normal">
                    {p.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Contemporary Split-Grid Call-To-Action Banner ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-[#1C3620] via-[#2A5230] to-[#3F7E47] shadow-[0_24px_60px_rgba(63,126,71,0.25)] text-white p-8 sm:p-12 lg:p-16">
          
          {/* Subtle Cyber Grid Layer Mask */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold tracking-wider text-[#A2E0AF]">
                <LuUsers className="w-3.5 h-3.5" /> GLOBAL CAREER NETWORK
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-none">
                Ready to Be Part of the <br />
                <span className="text-[#A2E0AF] font-serif italic font-light">Next Evolution?</span>
              </h2>
              <p className="text-white/80 text-sm sm:text-base font-normal max-w-xl leading-relaxed">
                Join a specialized cohort of professionals deploying high-end security architecture, safeguarding vital assets, and making a tangible difference daily across Bangladesh.
              </p>
            </div>

            {/* Right Action Trigger Column */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-4">
              <a
                href="/join-us"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-neutral-900 font-black uppercase tracking-widest text-xs px-8 py-4 rounded-xl hover:bg-neutral-50 hover:shadow-lg active:scale-95 transition-all duration-200 group/btn"
              >
                <span>View Careers</span>
                <LuArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
              <a
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold tracking-wide text-xs px-8 py-4 rounded-xl hover:bg-white/20 active:scale-95 transition-all duration-200"
              >
                Corporate Inquiries
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}