import { useState } from 'react'
import PageHero from '../../components/ui/PageHero'
import { HiOutlineX, HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'

// Gallery images organized by category
const GALLERY_IMAGES = [
  // Business Areas
  { id: 1, src: '/documents/Our%20Business%20Areas/Executive%20Protection.jpeg', category: 'Business Areas', title: 'Executive Protection' },
  { id: 2, src: '/documents/Our%20Business%20Areas/Manned%20Guard%20Service.jpeg', category: 'Business Areas', title: 'Manned Guard Service' },
  { id: 3, src: '/documents/Our%20Business%20Areas/Security%20Consultancy.jpeg', category: 'Business Areas', title: 'Security Consultancy' },
  { id: 4, src: '/documents/Our%20Business%20Areas/Event%20Security%20Management.png', category: 'Business Areas', title: 'Event Security Management' },
  { id: 5, src: '/documents/Our%20Business%20Areas/Integration.png', category: 'Business Areas', title: 'Integration PSIM' },
  { id: 6, src: '/documents/Our%20Business%20Areas/Digital%20Surveillance.jpg', category: 'Business Areas', title: 'Digital Surveillance' },
  { id: 7, src: '/documents/Our%20Business%20Areas/WhatsApp%20Image%202026-05-16%20at%2011.15.00%20AM.jpeg', category: 'Business Areas', title: 'Escort Service' },
  
  // Leadership
//   { id: 8, src: '/documents/our%20leadership/Chairperson.jpg', category: 'Leadership', title: 'Chairperson' },
//   { id: 9, src: '/documents/our%20leadership/Managing%20Director.jpg', category: 'Leadership', title: 'Managing Director' },
//   { id: 10, src: '/documents/our%20leadership/Executive%20Director.jpg', category: 'Leadership', title: 'Executive Director' },
//   { id: 11, src: '/documents/our%20leadership/Director%20of%20Finance%20&%20Digital%20Surveillance%20Solutions.jpg', category: 'Leadership', title: 'Director of Finance' },
//   { id: 12, src: '/documents/our%20leadership/General%20Manager%20(Admin%20&%20Ops).jpg', category: 'Leadership', title: 'General Manager' },
//   { id: 13, src: '/documents/our%20leadership/Deputy%20General%20Manager%20(Operations).jpg', category: 'Leadership', title: 'Deputy General Manager' },
//   { id: 14, src: '/documents/our%20leadership/General%20Manager%20(Operations).jpg', category: 'Leadership', title: 'GM Operations' },
//   { id: 15, src: '/documents/our%20leadership/023-Sumon%20copy.jpg', category: 'Leadership', title: 'Manager Digital Surveillance' },
  
  // Operations
  { id: 16, src: '/documents/other/WhatsApp%20Image%202026-05-11%20at%2014.50.24.jpeg', category: 'Operations', title: 'Security Operations' },
  { id: 17, src: '/documents/other/WhatsApp%20Image%202026-05-11%20at%2014.50.26-6.jpeg', category: 'Operations', title: 'Field Operations' },
  { id: 18, src: '/documents/other/WhatsApp%20Image%202026-05-20%20at%2010.43.44%20AM%20(1).jpeg', category: 'Operations', title: 'Guard Deployment' },
  { id: 19, src: '/documents/other/WhatsApp%20Image%202026-05-11%20at%2014.50.28-1-4.jpeg', category: 'Operations', title: 'Security Personnel' },
  { id: 20, src: '/documents/other/WhatsApp%20Image%202026-05-11%20at%2014.50.29-7.jpeg', category: 'Operations', title: 'Team Briefing' },
  { id: 21, src: '/documents/other/WhatsApp%20Image%202026-05-11%20at%2014.50.30-8.jpeg', category: 'Operations', title: 'Site Protection' },
  { id: 22, src: '/documents/other/WhatsApp%20Image%202026-04-13%20at%2017.50.07.jpeg', category: 'Operations', title: 'Security Setup' },
  
  // Training & Safety
  { id: 23, src: '/documents/other/Screenshot_20221114-114708.jpg.jpeg', category: 'Training', title: 'Training Session' },
  { id: 24, src: '/documents/other/Screenshot_20221114-114634.jpg.jpeg', category: 'Training', title: 'Drill Practice' },
  { id: 25, src: '/documents/other/Screenshot_20221114-114557.jpg.jpeg', category: 'Training', title: 'Safety Training' },
  { id: 26, src: '/documents/other/JS5089%20(JSSDR59)%20Fire%20Fighting%20exercise%20held%20on%2010%20November%202022%20(4).jpg.jpeg', category: 'Training', title: 'Fire Fighting Exercise' },
  
  // Security Services Banners
  { id: 27, src: '/documents/navlink_banner/Security/Physical.jpeg', category: 'Services', title: 'Physical Security' },
  { id: 28, src: '/documents/navlink_banner/Security/Electronic.jpg', category: 'Services', title: 'Electronic Security' },
  { id: 29, src: '/documents/navlink_banner/Security/Central.jpg', category: 'Services', title: 'Central Monitoring' },
  { id: 30, src: '/documents/navlink_banner/Security/Consult.jpeg', category: 'Services', title: 'Security Consulting' },
  
  // Range of Services
  { id: 31, src: '/documents/navlink_banner/range%20of%20services/close.jpeg', category: 'Services', title: 'Close Protection' },
  { id: 32, src: '/documents/navlink_banner/range%20of%20services/Site%20Protection.jpeg', category: 'Services', title: 'Site Protection' },
  { id: 33, src: '/documents/navlink_banner/range%20of%20services/Quick%20Response.jpeg', category: 'Services', title: 'Quick Response' },
  { id: 34, src: '/documents/navlink_banner/range%20of%20services/Event%20Management%20Security.jpeg', category: 'Services', title: 'Event Management' },
  { id: 35, src: '/documents/navlink_banner/range%20of%20services/CCTV%20&%20Digital%20Surveillance%20.jpg', category: 'Services', title: 'CCTV Surveillance' },
  { id: 36, src: '/documents/navlink_banner/range%20of%20services/Fire%20Alarm%20Systems%20.jpg', category: 'Services', title: 'Fire Alarm Systems' },
  { id: 37, src: '/documents/navlink_banner/range%20of%20services/Training%20&%20Development%20.jpeg', category: 'Services', title: 'Training & Development' },
  
  // Company
  { id: 38, src: '/documents/navlink_banner/company/company_overview.jpg', category: 'Company', title: 'Company Overview' },
  { id: 39, src: '/documents/navlink_banner/company/why-choose-us-1.jpg', category: 'Company', title: 'Why Choose Us' },
  { id: 40, src: '/documents/navlink_banner/company/leader.jpg', category: 'Company', title: 'Our Leadership' },
  { id: 41, src: '/documents/navlink_banner/company/our-footprint.jpg', category: 'Company', title: 'Our Footprint' },
  { id: 42, src: '/documents/navlink_banner/company/lifeatfalcon.jpg', category: 'Company', title: 'Life at FALCON' },
  { id: 43, src: '/documents/navlink_banner/company/Certificates.jpeg', category: 'Company', title: 'Awards & Certificates' },
  { id: 44, src: '/documents/navlink_banner/company/joinus.jpeg', category: 'Company', title: 'Join Us' },
  
  // Events
  { id: 45, src: '/documents/navlink_banner/events/WhatsApp%20Image%202026-06-03%20at%2011.15.51%20AM.jpeg', category: 'Events', title: 'Family Day 2026 - Group Photo' },
  { id: 46, src: '/documents/navlink_banner/events/WhatsApp%20Image%202026-06-04%20at%209.53.22%20AM.jpeg', category: 'Events', title: 'Family Day - Group Photo' },
  { id: 47, src: '/documents/navlink_banner/events/WhatsApp%20Image%202026-06-04%20at%209.53.23%20AM%20(1).jpeg', category: 'Events', title: 'Family Day - Group Photo' },
  { id: 49, src: '/documents/navlink_banner/events/WhatsApp%20Image%202026-06-04%20at%209.53.23%20AM%20(3).jpeg', category: 'Events', title: 'Family Day - Group Photo' },
  { id: 50, src: '/documents/navlink_banner/events/WhatsApp%20Image%202026-06-04%20at%209.53.23%20AM%20(4).jpeg', category: 'Events', title: 'Family Day - Group Photo' },
  { id: 51, src: '/documents/navlink_banner/events/WhatsApp%20Image%202026-06-04%20at%209.53.23%20AM%20(5).jpeg', category: 'Events', title: 'Family Day - Group Photo' },
  { id: 52, src: '/documents/navlink_banner/events/WhatsApp%20Image%202026-06-04%20at%209.53.23%20AM%20(6).jpeg', category: 'Events', title: 'Family Day - Group Photo' },
  { id: 53, src: '/documents/navlink_banner/events/WhatsApp%20Image%202026-06-04%20at%209.53.23%20AM%20(7).jpeg', category: 'Events', title: 'Family Day - Group Photo' },
  { id: 54, src: '/documents/navlink_banner/events/WhatsApp%20Image%202026-06-04%20at%209.53.23%20AM%20(8).jpeg', category: 'Events', title: 'Family Day - Group Photo' },
  { id: 55, src: '/documents/navlink_banner/events/WhatsApp%20Image%202026-06-04%20at%209.53.23%20AM%20(9).jpeg', category: 'Events', title: 'Family Day - Group Photo' },
  { id: 56, src: '/documents/navlink_banner/events/WhatsApp%20Image%202026-06-04%20at%209.53.23%20AM.jpeg', category: 'Events', title: 'Family Day - Group Photo' },
  { id: 57, src: '/documents/navlink_banner/events/WhatsApp%20Image%202026-06-04%20at%209.53.24%20AM.jpeg', category: 'Events', title: 'Family Day - Group Photo' },
  { id: 58, src: '/documents/navlink_banner/events/WhatsApp%20Image%202026-06-04%20at%209.53.26%20AM.jpeg', category: 'Events', title: 'Family Day - Group Photo' },
  { id: 59, src: '/documents/navlink_banner/events/WhatsApp%20Image%202026-06-04%20at%209.53.29%20AM.jpeg', category: 'Events', title: 'Family Day - Group Photo' },
  { id: 60, src: '/documents/navlink_banner/events/event1.jpeg', category: 'Events', title: 'Corporate Event' },
]

const CATEGORIES = ['All', 'Business Areas', 'Operations', 'Training', 'Services', 'Company', 'Events']

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [lightboxImage, setLightboxImage] = useState(null)

  const filteredImages = selectedCategory === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === selectedCategory)

  const openLightbox = (image) => {
    setLightboxImage(image)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  const navigateLightbox = (direction) => {
    const currentIndex = filteredImages.findIndex(img => img.id === lightboxImage.id)
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredImages.length
      : (currentIndex - 1 + filteredImages.length) % filteredImages.length
    setLightboxImage(filteredImages[newIndex])
  }

  return (
    <div className="animate-fade-in">
      {/* <PageHero
        eyebrow="Visual Journey"
        title={<>FALCON <span className="text-[#3F7E47]">Gallery</span></>}
        subtitle="Explore our operations, team, and services through images capturing FALCON's commitment to excellence."
        breadcrumbs={[{ label: 'News & Events' }, { label: 'Gallery' }]}
        backgroundImage="/documents/navlink_banner/company/44.jpeg"
      /> */}

      {/* Stats bar */}
      {/* <div className="bg-[#3F7E47]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
            {[
              { value: '60+', label: 'Photos' },
              { value: '7', label: 'Categories' },
              { value: '32+', label: 'Years Heritage' },
              { value: '64', label: 'Districts' },
            ].map((s) => (
              <div key={s.label} className="px-6 py-4 text-center">
                <p className="text-2xl font-black text-white">{s.value}</p>
                <p className="text-white/70 text-xs font-semibold uppercase tracking-wide mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-[#3F7E47] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                onClick={() => openLightbox(image)}
                className="group relative aspect-square bg-gray-100 overflow-hidden cursor-pointer border border-gray-200 hover:border-primary transition-all duration-300"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#3F7E47] mb-1 block">{image.category}</span>
                    <p className="text-white font-bold text-sm">{image.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            aria-label="Close lightbox"
          >
            <HiOutlineX className="w-6 h-6" />
          </button>

          {/* Previous button */}
          <button
            onClick={() => navigateLightbox('prev')}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Previous image"
          >
            <HiOutlineChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={() => navigateLightbox('next')}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Next image"
          >
            <HiOutlineChevronRight className="w-6 h-6" />
          </button>

          {/* Image */}
          <div className="max-w-6xl w-full">
            <img
              src={lightboxImage.src}
              alt={lightboxImage.title}
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <div className="text-center mt-4">
              <span className="text-[#3F7E47] text-xs font-bold uppercase tracking-widest">{lightboxImage.category}</span>
              <p className="text-white text-lg font-bold mt-1">{lightboxImage.title}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
