import { useState } from 'react'
import PageHero from '../../components/ui/PageHero'
import { LEADERSHIP } from '../../data/companyData'
import { HiOutlineX } from 'react-icons/hi'

const TIER_LABELS = {
  executive: 'Executive Leadership',
  director: 'Directors',
  'c-suite': 'C-Suite',
  savp: 'Senior Leadership',
}

const TIER_ORDER = ['executive', 'director', 'c-suite', 'savp']

function LeaderCard({ leader, onClick }) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
      onClick={() => onClick(leader)}
    >
      {/* Photo Container */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 aspect-[3/3.5]">
        {leader.image ? (
          <img 
            src={leader.image} 
            alt={leader.name} 
            className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700" 
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <span className="text-5xl font-black text-primary/20">{leader.name[0]}</span>
            </div>
          </div>
        )}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* View Profile Indicator */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="px-4 py-2 bg-white/95 rounded-full text-dark font-semibold text-sm">
            View Profile
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5 bg-white">
        <h3 className="font-black text-dark text-base leading-tight tracking-tight">{leader.name}</h3>
        <p className="text-xs text-primary font-bold mt-2 leading-relaxed uppercase tracking-wider">{leader.role}</p>
        
        {/* Accent line */}
        <div className="mt-4 h-1 w-8 bg-gradient-to-r from-primary to-primary/40 rounded-full group-hover:w-12 transition-all duration-300" />
      </div>
    </div>
  )
}

function LeaderModal({ leader, onClose }) {
  if (!leader) return null
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-md" onClick={onClose}>
      <div className="relative bg-white max-w-2xl w-full shadow-2xl rounded-3xl overflow-hidden animate-slide-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 bg-gray-100 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300 rounded-full group"
        >
          <HiOutlineX className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* Image Section */}
        <div className="relative bg-gradient-to-br from-gray-200 to-gray-100 aspect-video overflow-hidden">
          {leader.image ? (
            <img 
              src={leader.image} 
              alt={leader.name} 
              className="w-full h-full object-cover object-top" 
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-6xl font-black text-primary/20">{leader.name[0]}</span>
              </div>
            </div>
          )}
          
          {/* Image Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-10">
          {/* Header */}
          <div className="mb-6 pb-6 border-b-2 border-primary/20">
            <p className="text-primary text-xs font-black uppercase tracking-widest mb-2 opacity-70">{leader.tier === 'executive' ? 'Chairman' : leader.tier === 'director' ? 'Director' : 'Management'}</p>
            <h2 className="text-3xl md:text-4xl font-black text-dark mb-3">{leader.name}</h2>
            <p className="text-lg text-primary font-semibold">{leader.role}</p>
          </div>

          {/* Bio */}
          <p className="text-gray-700 text-base leading-relaxed font-medium">
            {leader.bio}
          </p>

          {/* Accent Elements */}
          <div className="mt-8 flex gap-3">
            <div className="h-1 flex-1 bg-gradient-to-r from-primary to-primary/30 rounded-full" />
            <div className="h-1 w-8 bg-primary/20 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

function OurLeadership() {
  const [selected, setSelected] = useState(null)

  const grouped = TIER_ORDER.reduce((acc, tier) => {
    const members = LEADERSHIP.filter((l) => l.tier === tier)
    if (members.length) acc[tier] = members
    return acc
  }, {})

  return (
    <div className="animate-fade-in">
      <PageHero
        eyebrow="The Team"
        title={<>Our <span className="text-[#3F7E47]">Leadership</span></>}
        subtitle="Experienced professionals guiding FALCON's vision, operations, and growth."
        breadcrumbs={[{ label: 'Company', to: '/company/overview' }, { label: 'Our Leadership' }]}
        backgroundImage="/documents/navlink_banner/company/leader.jpg"
      />

      <section className="py-20 bg-gradient-to-b from-white via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {TIER_ORDER.map((tier) => {
            const members = grouped[tier]
            if (!members) return null

            const isMD = tier === 'executive'

            return (
              <div key={tier}>
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-12">
                  <div className="h-1.5 w-12 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
                  <h2 className="text-sm font-black uppercase tracking-widest text-gray-400 letter-spacing-wide">
                    {TIER_LABELS[tier]}
                  </h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent" />
                </div>

                {isMD ? (
                  /* Hero card for Chairman */
                  <div
                    className="group relative rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100"
                    onClick={() => setSelected(members[0])}
                  >
                    <div className="flex flex-col md:flex-row gap-0">
                      {/* Image */}
                      <div className="md:w-80 bg-gradient-to-br from-gray-100 to-gray-200 aspect-square md:aspect-auto overflow-hidden shrink-0 relative">
                        {members[0].image ? (
                          <img 
                            src={members[0].image} 
                            alt={members[0].name} 
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" 
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="text-8xl font-black text-primary/10">{members[0].name[0]}</span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 group-hover:to-white/20 transition-all duration-500" />
                      </div>

                      {/* Content */}
                      <div className="p-8 md:p-10 flex flex-col justify-center flex-1">
                        <p className="text-primary text-xs font-black uppercase tracking-widest mb-3 opacity-70">Chairman</p>
                        <h3 className="text-3xl md:text-4xl font-black text-dark mb-3 leading-tight">{members[0].name}</h3>
                        <p className="text-lg text-primary font-semibold mb-6">{members[0].role}</p>
                        <p className="text-gray-600 text-base leading-relaxed font-medium line-clamp-3">{members[0].bio}</p>
                        
                        {/* View More indicator */}
                        <div className="mt-6 inline-flex items-center text-primary font-bold text-sm gap-2 group/btn">
                          <span>View Full Profile</span>
                          <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={`grid gap-6 ${
                    tier === 'savp'
                      ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
                      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                  }`}>
                    {members.map((leader) => (
                      <LeaderCard key={leader.id} leader={leader} onClick={setSelected} />
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* Modal */}
      {selected && <LeaderModal leader={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}

export default OurLeadership
