import { useState } from 'react'
import PageHero from '../../components/ui/PageHero'
import { OFFICES } from '../../data/companyData'
import { MdPhone, MdLocationOn } from 'react-icons/md'
import { FiExternalLink } from 'react-icons/fi'

const OFFICE_TYPES = ['All', 'HQ', 'Regional', 'Facility', 'Operations', 'Branch']

const TYPE_COLORS = {
  HQ: 'bg-[#3F7E47] text-white',
  Regional: 'bg-blue-600 text-white',
  Facility: 'bg-green-600 text-white',
  Operations: 'bg-purple-600 text-white',
  Branch: 'bg-gray-700 text-white',
}

const STATS = [
  { value: '64', label: 'Districts Covered' },
  { value: '26+', label: 'Offices Nationwide' },
  { value: '5,000+', label: 'Personnel Deployed' },
  { value: '400+', label: 'Clients Served' },
]

function OurFootprint() {
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = OFFICES.filter((o) => {
    const matchType = filter === 'All' || o.type === filter
    const matchSearch =
      o.name.toLowerCase().includes(search.toLowerCase()) ||
      o.address.toLowerCase().includes(search.toLowerCase())
    return matchType && matchSearch
  })

  return (
    <div className="animate-fade-in">
      {/* <PageHero
        eyebrow="Nationwide Presence"
        title={<>Our <span className="text-[#3F7E47]">Footprint</span></>}
        subtitle="Coverage spans 64 districts, with 5,000 personnel and 400+ clients across 25+ offices."
        breadcrumbs={[{ label: 'Company', to: '/company/overview' }, { label: 'Our Footprint' }]}
        backgroundImage="/documents/navlink_banner/company/our-footprint.jpg"
      /> */}

      {/* ── Stats bar ── */}
      {/* <div className="bg-[#3F7E47]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
            {STATS.map((s) => (
              <div key={s.label} className="px-6 py-5 text-center">
                <p className="text-2xl md:text-3xl font-black text-white">{s.value}</p>
                <p className="text-white/70 text-xs font-semibold uppercase tracking-wide mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* ── Embedded map ── */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="w-full h-64 md:h-80 border border-gray-300 relative overflow-hidden bg-white">
            <iframe
              title="FALCON Bangladesh Office Map"
              src="https://maps.google.com/maps?q=House%20155%2C%20Lane%203%2C%20Eastern%20Road%2C%20New%20DOHS%20Mohakhali%2C%20Dhaka%201206&t=&z=12&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
            <div className="absolute top-3 left-3 bg-white/95 border border-gray-200 px-3 py-1.5 shadow-sm">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#3F7E47]">Head Office Location</p>
              <p className="text-[11px] text-gray-600">Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Office directory ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 mb-8 items-start md:items-center justify-between">
            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2">
              {OFFICE_TYPES.map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider border transition-colors ${
                    filter === type
                      ? 'bg-[#3F7E47] border-primary text-white'
                      : 'border-gray-300 text-gray-600 hover:border-primary hover:text-[#3F7E47]'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
            {/* Search */}
            <input
              type="text"
              placeholder="Search offices..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:border-primary w-full md:w-64 transition-colors"
            />
          </div>

          <p className="text-xs text-gray-400 mb-6">
            Showing <span className="font-bold text-dark">{filtered.length}</span> of {OFFICES.length} offices
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((office) => (
              
              <div
                key={office.id}
                className={`border p-5 hover:shadow-md transition-shadow ${
                  office.type === 'HQ' ? 'border-primary bg-[#3F7E47]/5' : 'border-gray-200 bg-white'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 ${
                      TYPE_COLORS[office.type] || 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {office.type}
                  </span>
                </div>
                <h3 className="font-black text-dark text-base mb-3 leading-tight">{office.name}</h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-xs text-gray-500">
                    <MdLocationOn className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#3F7E47]" />
                    <span className="leading-relaxed">{office.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <MdPhone className="w-3.5 h-3.5 shrink-0 text-[#3F7E47]" />
                    <a href={`tel:${office.phone}`} className="hover:text-[#3F7E47] transition-colors">
                      {office.phone}
                    </a>
                  </div>
                </div>
                {(office.mapUrl || office.address) && (
                  <a
                    href={
                      office.mapUrl && office.mapUrl !== '#'
                        ? office.mapUrl
                        : `https://maps.google.com/?q=${encodeURIComponent(office.address)}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[#3F7E47] hover:underline"
                  >
                    <FiExternalLink className="w-3 h-3" />
                    Open in Maps
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurFootprint
