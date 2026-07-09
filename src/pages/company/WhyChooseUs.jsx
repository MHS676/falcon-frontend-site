import PageHero from '../../components/ui/PageHero'
import {
  HiOutlineShieldCheck,
  HiOutlineAcademicCap,
  HiOutlineLightBulb,
  HiOutlineUsers,
  HiOutlineClock,
  HiOutlineGlobe,
  HiOutlineStar,
  HiOutlineTrendingUp,
} from 'react-icons/hi'

const REASONS = [
  {
    icon: HiOutlineClock,
    title: 'Over 32 Years of Excellence',
    description: 'Since 1994, FALCON has been Bangladesh\'s pioneering private security company, setting industry standards and consistently delivering trusted protection services.'
  },
  {
    icon: HiOutlineAcademicCap,
    title: 'Retired Army Officers Leadership',
    description: 'Founded and managed by retired officers of the Bangladesh Army with extensive training on security matters from home and abroad, bringing military-grade discipline and expertise.'
  },
  {
    icon: HiOutlineUsers,
    title: '4,000+ Trained Workforce',
    description: 'Our highly skilled security personnel are rigorously trained and equipped to handle diverse security challenges across industries, ensuring top-tier protection at all times.'
  },
  {
    icon: HiOutlineShieldCheck,
    title: 'Comprehensive Security Solutions',
    description: 'From manned guarding to advanced electronic surveillance, we offer end-to-end security solutions tailored to meet the unique needs of businesses, individuals, and communities.'
  },
  {
    icon: HiOutlineLightBulb,
    title: 'Technology-Enabled Innovation',
    description: 'As platinum distributor partner of ISM UK for PSIM (Physical Security Information Management), we integrate cutting-edge technology including geo-fencing, central monitoring, and AI-enabled systems.'
  },
  {
    icon: HiOutlineTrendingUp,
    title: 'Proven Track Record',
    description: 'We secure 597+ business locations and escort 5,500+ consignments monthly with zero compromise on quality. Over 30% of our guard force operates under stringent safety and security standards.'
  },
  {
    icon: HiOutlineGlobe,
    title: 'Trusted by Leading Organizations',
    description: 'Our clientele includes prestigious organizations like WHO, UNHCR, UNDP, Grameen Bank, and BRAC University, demonstrating our capability to serve at the highest levels.'
  },
  {
    icon: HiOutlineStar,
    title: 'Commitment to Excellence',
    description: 'We maintain the highest ethical standards in every operation, focusing on integrity, reliability, and professional service delivery that goes beyond expectations.'
  },
]

const DIFFERENTIATORS = [
  {
    label: 'Military-Grade Expertise',
    description: 'Security planning and management by retired army officers with VVIP protection experience'
  },
  {
    label: 'HES Compliance',
    description: 'Years of Health, Environment, Safety training ensure fully compliant and professional guard force'
  },
  {
    label: 'Central Monitoring',
    description: 'Real-time tracking and monitoring with proprietary geo-fencing technology for escort services'
  },
  {
    label: 'Customized Solutions',
    description: 'Tailored security plans designed to address specific client needs and threat perceptions'
  },
  {
    label: 'Nationwide Coverage',
    description: 'Comprehensive security services across Bangladesh with consistent high standards everywhere'
  },
  {
    label: 'Attract & Retain Talent',
    description: 'Best-in-class base salaries and comfortable work environment ensure highest caliber personnel'
  },
]

function WhyChooseUs() {
  return (
    <div className="animate-fade-in">
      {/* <PageHero
        eyebrow="Your Security Partner"
        title={<>Why Choose <span className="text-[#3F7E47]">FALCON</span></>}
        subtitle="Industry-leading security solutions backed by 32 years of excellence, military expertise, and unwavering commitment to protection."
        breadcrumbs={[{ label: 'Company', to: '/company/overview' }, { label: 'Why Choose Us' }]}
        backgroundImage="/documents/navlink_banner/company/why-choose-us-1.jpg"
      /> */}

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-[#3F7E47] font-bold text-xs uppercase tracking-widest mb-3">The FALCON Difference</p>
            <h2 className="text-3xl md:text-4xl font-black text-dark mb-6 leading-tight">
              Bangladesh's Most Trusted Security Company
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Falcon® security limited is not just a security provider — we are a security, planning, management 
              and service company built on military discipline, cutting-edge technology, and an unshakeable 
              commitment to client confidence. Our retired army officers bring decades of specialized training 
              and real-world experience to protect what matters most to you.
            </p>
          </div>

          {/* 8 Key Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {REASONS.map((reason, index) => (
              <div
                key={index}
                className="group bg-gray-50 border border-gray-100 p-6 hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4">
                  <reason.icon className="w-12 h-12 text-[#3F7E47] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-black text-dark mb-3">{reason.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-[#3F7E47] font-bold text-xs uppercase tracking-widest mb-3">What Sets Us Apart</p>
            <h2 className="text-3xl md:text-4xl font-black text-dark mb-6 leading-tight">
              Our Competitive <span className="text-[#3F7E47]">Advantages</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIFFERENTIATORS.map((item, index) => (
              <div
                key={index}
                className="bg-white border-l-4 border-primary p-6 hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg font-black text-dark mb-2">{item.label}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gray text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-black text-[#3F7E47] mb-2">32+</p>
              <p className="text-sm font-semibold text-gray-300 uppercase tracking-wide">Years of Excellence</p>
            </div>
            <div>
              <p className="text-5xl font-black text-[#3F7E47] mb-2">4,000+</p>
              <p className="text-sm font-semibold text-gray-300 uppercase tracking-wide">Trained Personnel</p>
            </div>
            <div>
              <p className="text-5xl font-black text-[#3F7E47] mb-2">597+</p>
              <p className="text-sm font-semibold text-gray-300 uppercase tracking-wide">Locations Secured</p>
            </div>
            <div>
              <p className="text-5xl font-black text-[#3F7E47] mb-2">5,500+</p>
              <p className="text-sm font-semibold text-gray-300 uppercase tracking-wide">Monthly Escorts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-dark mb-6">
            Ready to Experience <span className="text-[#3F7E47]">FALCON Excellence?</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Join the 597+ businesses and organizations who trust FALCON for their security needs. 
            Let our military-trained experts design a customized protection plan for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-[#3F7E47] text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-opacity-90 transition-all duration-300"
            >
              Contact Us Today
            </a>
            <a
              href="/company/overview"
              className="inline-block bg-gray-200 text-black px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-gray-300 transition-all duration-300"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhyChooseUs
