import { Link } from 'react-router-dom'
import { BUSINESS_AREAS } from '../../data/businessAreasData'
import SectionHeading from '../ui/SectionHeading'
import { HiOutlineArrowRight } from 'react-icons/hi'

function BusinessAreasSection() {
  return (
    <section id="business-areas" className="py-20 bg-gray-50">
      <div className="container-custom">
        <SectionHeading
          eyebrow="What We Do"
          title="Our Business Areas"
          description="Comprehensive security and facility management solutions tailored to your unique needs."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {BUSINESS_AREAS.map((area) => (
            <Link
              key={area.id}
              to={`/business-areas/${area.slug}`}
              className="group bg-white border border-gray-200 overflow-hidden hover:shadow-2xl hover:border-primary transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={area.image} 
                  alt={area.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#3F7E47]/90 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5">
                    {area.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-black text-dark mb-3 group-hover:text-[#3F7E47] transition-colors">
                  {area.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {area.shortDescription}
                </p>
                <div className="flex items-center gap-2 text-[#3F7E47] font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                  Learn More
                  <HiOutlineArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/business-areas/executive-protection"
            className="inline-flex items-center gap-2 bg-gray-200 text-black px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-[#3F7E47] transition-colors duration-200"
          >
            View All Business Areas
            <HiOutlineArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BusinessAreasSection
