import SectionHeading from '../components/ui/SectionHeading'
import { SERVICES } from '../data/siteData'

function RangeOfServices() {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      {/* <div className="bg-dark text-white py-20">
        <div className="container-custom">
          <p className="text-[#3F7E47] font-semibold text-sm uppercase tracking-widest mb-3">
            Services
          </p>
          <h1 className="text-4xl md:text-5xl font-black max-w-2xl leading-tight">
            Range Of <span className="text-[#3F7E47]">Services</span>
          </h1>
        </div>
      </div> */}

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <div className="container-custom space-y-16">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              id={service.slug}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 !== 0 ? 'lg:[direction:rtl]' : ''
              }`}
            >
              <div className={index % 2 !== 0 ? 'lg:[direction:ltr]' : ''}>
                <p className="text-[#3F7E47] font-semibold text-xs uppercase tracking-widest mb-2">
                  {service.category}
                </p>
                <h2 className="text-3xl font-black text-dark mb-4">{service.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Our team of experts provides tailored solutions to meet your specific requirements.
                  With cutting-edge technology and experienced personnel, we ensure the highest
                  standards of security and service delivery.
                </p>
              </div>
              <div
                className={`bg-gray-100 h-64 lg:h-80 flex items-center justify-center border border-gray-200 ${
                  index % 2 !== 0 ? 'lg:[direction:ltr]' : ''
                }`}
              >
                <span className="text-gray-400 text-sm">Service Image — Placeholder</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default RangeOfServices
