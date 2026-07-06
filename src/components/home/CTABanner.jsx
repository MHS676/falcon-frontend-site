import Button from '../ui/Button'

function CTABanner() {
  return (
    <section className="bg-white py-16">
      <div className="container-custom flex flex-col lg:flex-row items-center justify-between gap-8">
        <div>
          <p className="text-[#3F7E47] font-semibold text-sm uppercase tracking-widest mb-2">
            Trends and insights
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-black">
            Security <span >Systems</span> Consultancy, Planning & Services
          </h2>
        </div>
        <div className="flex flex-col gap-3 text-right lg:text-left max-w-sm">
          <p className="text-gray-700 text-sm leading-relaxed">
            Our deep experience across a wide range of sectors has given us unrivaled insight into
            the best practices of the security industry today and where trends and technologies will
            lead the industry tomorrow.
          </p>
          <div>
            <Button to="/range-of-services" variant="primary" showArrow>
              Explore
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTABanner
