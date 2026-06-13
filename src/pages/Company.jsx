import SectionHeading from '../components/ui/SectionHeading'
import { useApp } from '../context/AppContext'
import { STATS } from '../data/siteData'

function Company() {
  const { companyInfo } = useApp()

  return (
    <div className="animate-fade-in">
      {/* Page Hero */}
      <div className="bg-dark text-white py-20">
        <div className="container-custom">
          <p className="text-[#3F7E47] font-semibold text-sm uppercase tracking-widest mb-3">
            About Us
          </p>
          <h1 className="text-4xl md:text-5xl font-black leading-tight max-w-2xl">
            Your Trusted Security Partner Since{' '}
            <span className="text-[#3F7E47]">{companyInfo.founded}</span>
          </h1>
        </div>
      </div>

      {/* Overview */}
      <section className="py-20 bg-white" id="overview">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                eyebrow="Company Overview"
                title="Who We Are"
                align="left"
              />
              <p className="text-gray-600 leading-relaxed mb-4">
                FALCON Security has been at the forefront of the security industry since{' '}
                {companyInfo.founded}, delivering trusted and innovative solutions to businesses
                nationwide. As Bangladesh&apos;s first private security solutions company, we have
                built a reputation for trust and reliability.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With over {companyInfo.yearsOfExcellence} years of experience, our{' '}
                {companyInfo.workforce} strong workforce serves {companyInfo.businessesSecured}{' '}
                businesses across multiple sectors including banking, healthcare, manufacturing, and
                government institutions.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="border border-gray-200 p-6 text-center">
                  <p className="text-4xl font-black text-dark mb-1">{stat.value}</p>
                  <p className="text-xs text-gray-500 font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-gray-50" id="leadership">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Team"
            title="Our Leadership"
            description="Experienced professionals guiding FALCON's vision and operations."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {['CEO', 'COO', 'CTO'].map((role) => (
              <div key={role} className="bg-white border border-gray-200 p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-400 text-xs">Photo</span>
                </div>
                <p className="font-bold text-dark">Leadership Name</p>
                <p className="text-sm text-[#3F7E47] font-medium">{role}</p>
                <p className="text-xs text-gray-400 mt-1">Placeholder — replace with real data</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footprint */}
      <section className="py-20 bg-white" id="footprint">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Reach"
            title="Our Footprint"
            description="Serving clients across Bangladesh with a growing nationwide presence."
          />
          <div className="bg-gray-100 h-64 flex items-center justify-center border border-gray-200">
            <p className="text-gray-400 text-sm">Map / Footprint Visual — Placeholder</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Company
