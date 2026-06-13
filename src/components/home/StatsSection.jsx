import { useApp } from '../../context/AppContext'
import { STATS } from '../../data/siteData'
import SectionHeading from '../ui/SectionHeading'

function StatsSection() {
  const { companyInfo } = useApp()

  return (
    <section className="bg-gray-50 py-20">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Country's First Security Solution Company"
          title={`Your Trusted Security Partner Since ${companyInfo.founded}`}
          description={`We have been at the forefront of the security industry, delivering trusted and innovative solutions to businesses nationwide. With over ${companyInfo.yearsOfExcellence} years in the industry, we have built a reputation for trust and reliability.`}
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-white border border-gray-100 p-8 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-5xl font-black text-dark mb-2">{stat.value}</p>
              <p className="text-gray-600 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
