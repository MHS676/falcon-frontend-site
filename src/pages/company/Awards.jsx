import { useState } from 'react'
import PageHero from '../../components/ui/PageHero'
import { FiBell } from 'react-icons/fi'
import { HiOutlineStar } from 'react-icons/hi'

const AWARDS_PREVIEW = [
  { year: '2024', category: 'Excellence', title: 'Best Security Services Company' },
  { year: '2023', category: 'Innovation', title: 'Digital Security Innovation Award' },
  { year: '2022', category: 'Leadership', title: 'Top Employer — Security Sector' },
  { year: '2021', category: 'Corporate', title: 'CSR Leadership Recognition' },
  { year: '2020', category: 'Quality', title: 'ISO 9001 Certification Renewal' },
  { year: '2019', category: 'Growth', title: 'Fastest Growing Security Company' },
]

function Awards() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  return (
    <div className="animate-fade-in">
      <PageHero
        eyebrow="Recognition"
        title={<>Awards & <span className="text-[#3F7E47]">Certificates</span></>}
        subtitle="FALCON's commitment to excellence has been recognized at the highest levels of the industry."
        breadcrumbs={[{ label: 'Company', to: '/company/overview' }, { label: 'Awards' }]}
        backgroundImage="/documents/navlink_banner/company/Certificates.jpeg"
      />

      {/* ── Coming soon banner ── */}
      {/* <section className="bg-dark py-24 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full border border-white/5" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border border-white/5" />

        <div className="absolute top-8 left-1/4 opacity-10">
          <HiOutlineStar className="w-24 h-24 text-[#3F7E47]" />
        </div>
        <div className="absolute bottom-8 right-1/4 opacity-10">
          <HiOutlineStar className="w-16 h-16 text-[#3F7E47]" />
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#3F7E47]/10 border border-primary/30 px-5 py-2 mb-8">
            <span className="w-2 h-2 bg-[#3F7E47] rounded-full animate-pulse" />
            <span className="text-[#3F7E47] text-xs font-bold uppercase tracking-widest">Coming Soon</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Our awards page is <span className="text-[#3F7E47]">in progress</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
            We're curating our full gallery of industry recognitions, certifications, and milestones. Stay tuned for a
            comprehensive showcase of FALCON's achievements.
          </p>
          {sent ? (
            <div className="flex items-center justify-center gap-2 text-green-400 text-sm font-semibold">
              <FiBell className="w-4 h-4" />
              You'll be notified when we launch!
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
            </div>
          )}
        </div>
      </section> */}

      {/* ── Preview grid ── */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#3F7E47] text-xs font-bold uppercase tracking-widest mb-2">Sneak Peek</p>
            <h2 className="text-3xl md:text-4xl font-black text-dark">
              Notable <span className="text-[#3F7E47]">Recognitions</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {AWARDS_PREVIEW.map((a) => (
              <div
                key={`${a.year}-${a.title}`}
                className="bg-white border border-gray-100 p-6 hover:shadow-md transition-shadow group relative overflow-hidden"
              >
                {/* red left accent */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#3F7E47]" />
                <div className="flex items-center gap-3 mb-4 pl-3">
                  <HiOutlineStar className="w-5 h-5 text-[#3F7E47] shrink-0" />
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{a.year}</span>
                  <span className="bg-gray-100 text-gray-500 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5">
                    {a.category}
                  </span>
                </div>
                <p className="text-dark font-black text-base pl-3 group-hover:text-[#3F7E47] transition-colors leading-tight">
                  {a.title}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-xs mt-8">Full awards list coming soon — check back shortly.</p>
        </div>
      </section>
      <img src="/documents/navlink_banner/company/Certificates.jpeg" alt="Awards Banner" className="w-full h-auto" />
    </div>
  )
}

export default Awards
