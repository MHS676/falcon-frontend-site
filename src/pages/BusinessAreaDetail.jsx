import { useParams, Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import PageHero from '../components/ui/PageHero'
import { BUSINESS_AREAS } from '../data/businessAreasData'
import { HiCheckCircle, HiOutlineArrowRight, HiOutlineChartBar } from 'react-icons/hi'

function BusinessAreaDetail() {
  const { slug } = useParams()
  const area = BUSINESS_AREAS.find(a => a.slug === slug)

  if (!area) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="animate-fade-in">
      {/* <PageHero
        eyebrow="Business Area"
        title={<>{area.title}</>}
        subtitle={area.shortDescription}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Business Areas', to: '/#business-areas' },
          { label: area.title }
        ]}
        backgroundImage={area.image}
      /> */}

      {/* Statistics Bar */}
      {area.statistics && (
        <div className="bg-[#3F7E47]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* <div className={`grid grid-cols-2 md:grid-cols-${area.statistics.length} divide-x divide-white/20`}>
              {area.statistics.map((stat, i) => (
                <div key={i} className="px-6 py-6 text-center">
                  <p className="text-3xl md:text-4xl font-black text-white">{stat.value}</p>
                  <p className="text-white/80 text-xs font-semibold uppercase tracking-wide mt-1">{stat.label}</p>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      )}

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-0.5 w-12 bg-[#3F7E47]" />
                  <h2 className="text-2xl font-black text-dark">Overview</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">{area.detailedDescription}</p>
              </div>

              {/* Key Features */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-0.5 w-12 bg-[#3F7E47]" />
                  <h2 className="text-2xl font-black text-dark">Key Features</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {area.keyFeatures.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 bg-gray-50 p-4 border-l-2 border-[#3F7E47]">
                      <HiCheckCircle className="w-5 h-5 text-[#3F7E47] shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-0.5 w-12 bg-[#3F7E47]" />
                  <h2 className="text-2xl font-black text-dark">Benefits</h2>
                </div>
                <div className="space-y-3">
                  {area.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#3F7E47] rounded-full shrink-0 mt-2" />
                      <p className="text-gray-600 leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <img 
                  src={area.image} 
                  alt={area.title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white font-bold text-lg">{area.title}</p>
                  <p className="text-white/80 text-sm">{area.category}</p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Category badge */}
              <div className="bg-[#3F7E47]/10 border-l-4 border-[#3F7E47] p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Category</p>
                <p className="text-lg font-black text-dark">{area.category}</p>
              </div>

              {/* Ideal For */}
              <div className="border border-gray-200 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <HiOutlineChartBar className="w-5 h-5 text-[#3F7E47]" />
                  <h3 className="text-lg font-black text-dark">Ideal For</h3>
                </div>
                <ul className="space-y-2">
                  {area.idealFor.map((item, i) => (
                    <li key={i} className="text-sm text-gray-600 leading-relaxed flex items-start gap-2">
                      <span className="text-[#3F7E47] font-bold">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-gray-100 text-black p-8">
                <h3 className="text-xl font-black mb-3">Interested in This Service?</h3>
                <p className="text-black text-sm mb-6 leading-relaxed">
                  Contact our team to discuss your requirements and get a customized quote.
                </p>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full bg-[#3F7E47] text-white px-6 py-4 font-bold text-sm uppercase tracking-wider hover:bg-red-700 transition-colors duration-200 group"
                >
                  Get In Touch
                  <HiOutlineArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Other Business Areas */}
              <div className="border border-gray-200 p-6">
                <h3 className="text-sm font-black uppercase tracking-widest text-dark mb-4">Other Business Areas</h3>
                <div className="space-y-2">
                  {BUSINESS_AREAS.filter(a => a.slug !== slug).map(otherArea => (
                    <Link
                      key={otherArea.slug}
                      to={`/business-areas/${otherArea.slug}`}
                      className="block text-sm text-gray-600 hover:text-[#3F7E47] transition-colors py-2 border-b border-gray-100 last:border-0 font-medium"
                    >
                      {otherArea.title} →
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BusinessAreaDetail
