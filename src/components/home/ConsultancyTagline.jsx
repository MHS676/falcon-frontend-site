import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { HiOutlineShieldCheck, HiOutlineClipboardCheck, HiOutlineLightningBolt } from 'react-icons/hi'

const PILLARS = [
  {
    icon: HiOutlineShieldCheck,
    label: 'Security Systems',
    desc: 'Advanced integrated security technology tailored to your site and risk profile.',
  },
  {
    icon: HiOutlineClipboardCheck,
    label: 'Consultancy',
    desc: 'Expert risk and vulnerability assessments by retired senior security officers.',
  },
  {
    icon: HiOutlineLightningBolt,
    label: 'Planning Services',
    desc: 'Strategic security planning from inception to full operational deployment.',
  },
]

export default function ConsultancyTagline() {
  return (
    <section className="relative bg-[#1B4A24] py-16 overflow-hidden">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(200,16,46,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(200,16,46,0.6) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centre headline */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-white mb-3">
            Our Core Capability
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            Integrated security solutions across Bangladesh
          </h2>
          <div className="w-16 h-0.5 bg-[#3F7E47] mx-auto mt-5" />
          <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-white leading-relaxed">
            From site surveys and risk analysis to full integrated security system design —
            Falcon® Security delivers end-to-end consultancy and planning services that protect
            people, assets, and operations across Bangladesh.
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {PILLARS.map((p) => (
            <div
              key={p.label}
              className="flex flex-col items-center text-center p-6 border border-white/10 hover:border-primary/40 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 bg-[#3F7E47]/10 flex items-center justify-center mb-4 group-hover:bg-[#3F7E47] transition-colors duration-300">
                <p.icon className="w-6 h-6 text-[#3F7E47] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-white font-bold text-white mb-2">{p.label}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/what-we-offer/security-consulting"
            className="inline-flex items-center gap-2 bg-[#3F7E47] text-white px-8 py-3.5 text-sm font-bold uppercase tracking-wider hover:bg-[#3F7E47] transition-colors duration-200 group"
          >
            Explore Security Consulting
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
