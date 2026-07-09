import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import { SERVICES } from '../data/siteData'
import {
  HiOutlineShieldCheck,
  HiOutlineCamera,
  HiOutlineOfficeBuilding,
  HiOutlineCash,
  HiOutlineUsers,
  HiOutlineGlobe,
} from 'react-icons/hi'

const iconMap = {
  shield: HiOutlineShieldCheck,
  camera: HiOutlineCamera,
  building: HiOutlineOfficeBuilding,
  cash: HiOutlineCash,
  people: HiOutlineUsers,
  city: HiOutlineGlobe,
}

function WhatWeOffer() {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      {/* <div className="bg-dark text-white py-20">
        <div className="container-custom">
          <p className="text-[#3F7E47] font-semibold text-sm uppercase tracking-widest mb-3">
            Solutions
          </p>
          <h1 className="text-4xl md:text-5xl font-black max-w-2xl leading-tight">
            What We <span className="text-[#3F7E47]">Offer</span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-xl leading-relaxed">
            End-to-end security and facility management solutions powered by innovation and human
            expertise.
          </p>
        </div>
      </div> */}

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Offerings"
            title="Comprehensive Security Solutions"
            description="Discover the full range of services we provide to protect your people, assets, and operations."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service) => {
              const Icon = iconMap[service.icon] || HiOutlineShieldCheck
              return (
                <div
                  key={service.id}
                  className="flex gap-5 p-6 border border-gray-200 hover:border-primary hover:shadow-md transition-all group"
                >
                  <div className="w-14 h-14 bg-[#3F7E47]/10 flex items-center justify-center shrink-0 group-hover:bg-[#3F7E47] transition-colors">
                    <Icon className="w-7 h-7 text-[#3F7E47] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#3F7E47]">
                      {service.category}
                    </span>
                    <h3 className="text-lg font-bold text-dark mt-1 mb-2">{service.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-3">
                      {service.description}
                    </p>
                    <Button
                      to={`/range-of-services#${service.slug}`}
                      variant="ghost"
                      className="text-sm"
                    >
                      Learn More →
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhatWeOffer
