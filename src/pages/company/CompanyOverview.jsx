import { Link } from 'react-router-dom'
import PageHero from '../../components/ui/PageHero'
import { STATS } from '../../data/siteData'
import { TIMELINE } from '../../data/companyData'
import {
  HiOutlineShieldCheck,
  HiOutlineLightBulb,
  HiOutlineUserGroup,
  HiOutlineGlobe,
} from 'react-icons/hi'

const COMMITMENTS = [
  'To set and maintain the highest standards of safety and security.',
  'To empower communities through innovative, AI-enabled systems for smart protection.',
  'To deliver consistent, reliable, and professional services across all sectors.',
]

const MISSIONS = [
  'Falcon® Security Limited is committed to being a trusted partner in security by providing professional guarding, risk management, and security solutions that ensure safety, reliability, and value for our clients while fostering growth and development for our employees.'
]

const VISIONS = [
'  To be the leading and most trusted security services provider in Bangladesh, recognized for excellence, innovation, and customer satisfaction.'
]

const VALUES = [
  { icon: HiOutlineShieldCheck, label: 'Integrity', desc: 'We uphold the highest ethical standards in every interaction and operation.' },
  { icon: HiOutlineLightBulb, label: 'Innovation', desc: 'We continuously embrace technology to deliver smarter, future-ready security.' },
  { icon: HiOutlineUserGroup, label: 'People First', desc: 'Our 5,000+ trained professionals are the backbone of every service we deliver.' },
  { icon: HiOutlineGlobe, label: 'Community', desc: 'We protect communities and contribute to the well-being of the nation.' },
]

function CompanyOverview() {
  return (
    <div className="animate-fade-in">
      <PageHero
        eyebrow="About FALCON"
        title={<>Company <span className="text-[#3F7E47]">Overview</span></>}
        subtitle="Bangladesh's first and most trusted private security solutions company since 1994."
        breadcrumbs={[{ label: 'Company', to: '/company/overview' }, { label: 'Overview' }]}
        backgroundImage="/documents/navlink_banner/company/overview1.jpeg"
      />

      {/* ── Overview ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#3F7E47] font-bold text-xs uppercase tracking-widest mb-3">Who We Are</p>
              <h2 className="text-3xl md:text-4xl font-black text-dark mb-6 leading-tight">
                Pioneering Security Excellence Since <span className="text-[#3F7E47]">1994</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Falcon® security limited is a security, planning, management and service company enjoying the 
                  confidence of our clientele. Retired officers of the Bangladesh Army having adequate training 
                  on security and related matters, both from home and abroad, establish Falcon® security limited 
                  with the aim of utilizing their varied experience accumulated in the army for providing quality 
                  service in the private sector under retired patronage.
                </p>
                <p>
                  With over three decades of expertise, FALCON provides comprehensive solutions designed to
                  protect businesses, individuals, and communities. Our team of highly skilled professionals
                  leverages state-of-the-art technology and innovative approaches to deliver services that are
                  customised to meet the specific needs of our clients.
                </p>
                <p>
                  We secure beyond connectivity by keeping the same high standard everywhere we operate. Our wide
                  range of services includes manned guarding, electronic security systems, facility management,
                  central monitoring, and integrated safety solutions, ensuring reliability, efficiency, and
                  peace of mind.
                </p>
              </div>

              {/* Commitments */}
              <div className="mt-8 border-l-2 border-primary pl-5 space-y-3">
                <p className="text-sm font-bold text-dark uppercase tracking-wider mb-2">Our Commitment</p>
                {COMMITMENTS.map((c, i) => (
                  <p key={i} className="text-sm text-gray-600 leading-relaxed">• {c}</p>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {STATS.map((s) => (
                  <div key={s.label} className="bg-gray-50 border border-gray-100 p-6 text-center">
                    <p className="text-4xl font-black text-dark">{s.value}</p>
                    <p className="text-xs font-semibold text-gray-500 mt-1 uppercase tracking-wide">{s.label}</p>
                  </div>
                ))}
              </div>
              {/* Tagline box */}
              <div className="bg-gray-200 text-black p-8">
                <p className="text-xs font-bold uppercase tracking-widest text-[#3F7E47] mb-3">Tagline</p>
                <p className="text-xl font-black leading-snug">
                  Empowering Communities with AI-Enabled Systems for Smart Protection
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white border border-gray-200 p-8 shadow-sm">
              {/* <div className="w-12 h-12 bg-[#3F7E47] flex items-center justify-center mb-5">
                <HiOutlineShieldCheck className="w-6 h-6 text-white" />
              </div> */}
              <h3 className="text-2xl font-black text-dark mb-5">Our Mission</h3>
              <ul className="space-y-3">
                {MISSIONS.map((m, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                    <span className="w-5 h-5 bg-[#3F7E47]/10 text-[#3F7E47] flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">{i + 1}</span>
                    {m}
                  </li>
                ))}
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-white text-dark border border-gray-200 p-8 shadow-sm">
              {/* <div className="w-12 h-12 bg-[#3F7E47] flex items-center justify-center mb-5">
                <HiOutlineGlobe className="w-6 h-6 text-white" />
              </div> */}
              <h3 className="text-2xl font-black mb-5">Our Vision</h3>
              <ul className="space-y-3">
                {VISIONS.map((v, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                    <span className="w-5 h-5 bg-[#3F7E47] flex items-center justify-center shrink-0 text-xs font-bold mt-0.5 text-white">{i + 1}</span>
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#3F7E47] font-bold text-xs uppercase tracking-widest mb-2">What Drives Us</p>
            <h2 className="text-3xl font-black text-dark">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="group border border-gray-200 p-6 hover:border-primary hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-[#3F7E47]/10 group-hover:bg-[#3F7E47] flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-6 h-6 text-[#3F7E47] group-hover:text-white transition-colors" />
                </div>
                <h4 className="font-black text-dark text-lg mb-2">{label}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#3F7E47] font-bold text-xs uppercase tracking-widest mb-2">Our Journey</p>
            <h2 className="text-3xl font-black text-dark">36 Years of Excellence</h2>
          </div>
          <div className="relative">

            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />
            <div className="space-y-10">
              {TIMELINE.map((item, i) => (
                <div
                  key={item.year}
                  className={`flex flex-col md:flex-row items-center gap-6 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                    <div className={`inline-block bg-white border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow ${i % 2 === 0 ? '' : ''}`}>
                      <p className="text-[#3F7E47] font-black text-lg mb-1">{item.year}</p>
                      <p className="font-bold text-dark mb-1">{item.title}</p>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  <div className="hidden md:flex w-4 h-4 bg-[#3F7E47] rounded-full border-4 border-white shadow shrink-0 z-10" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* ── CTA ── */}
      <section className="bg-[#3F7E47] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
            Ready to secure your business with FALCON?
          </h2>
          <p className="text-white/80 mb-8 text-sm max-w-lg mx-auto">
            Join 250+ businesses that trust FALCON Security for their safety needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#3F7E47] px-8 py-3.5 font-bold text-sm uppercase tracking-wider hover:bg-gray-100 transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  )
}

export default CompanyOverview
