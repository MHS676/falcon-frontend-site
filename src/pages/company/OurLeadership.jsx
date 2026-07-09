import { useState, useEffect } from 'react'
import PageHero from '../../components/ui/PageHero'
import { LEADERSHIP } from '../../data/companyData'
import { LuX, LuPhone, LuMail, LuLayers, LuChevronRight } from 'react-icons/lu'

const TIER_ORDER = ['executive', 'director', 'c-suite', 'savp']

function HorizontalLeaderCard({ leader, onClick, isExecutive }) {
  const initials = leader.name 
    ? leader.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() 
    : 'FC'

  return (
    <div
      onClick={() => onClick(leader)}
      className="w-full group/card relative bg-[#E6E5E0] rounded-[24px] p-4 border border-white/30 shadow-[6px_6px_12px_#c2c1bc,-6px_-6px_12px_#ffffff] hover:shadow-[2px_2px_5px_#c2c1bc,-2px_-2px_5px_#ffffff] transition-all duration-300 cursor-pointer text-left"
    >
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-center">
        
        {/* Left Side: Photo Canvas Container */}
        <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-[20px] bg-[#E6E5E0] p-1.5 shadow-[inset_3px_3px_6px_#b8b7b2,inset_-3px_-3px_6px_#ffffff] shrink-0 border border-neutral-300/20">
          <div className={`w-full h-full rounded-[14px] overflow-hidden relative shadow-sm ${isExecutive ? 'border-[2px] border-[#C3A37A]' : ''}`}>
            {leader.image ? (
              <img 
                src={leader.image} 
                alt={leader.name} 
                className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.02]" 
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#DDDCD6] to-[#ECEBE5] text-neutral-400 font-bold text-2xl">
                {initials}
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Information Matrix Details */}
        <div className="flex-1 text-center sm:text-left flex flex-col justify-between self-stretch py-1">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 justify-center sm:justify-between pr-4">
              <h3 className="font-bold text-neutral-800 text-base sm:text-lg tracking-tight leading-tight">
                {leader.name}
              </h3>
              <span className={`w-fit mx-auto sm:mx-0 text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider ${isExecutive ? 'text-[#56B967] bg-[#56B967]/10 border border-[#56B967]/20' : 'text-neutral-500 bg-neutral-300/40'}`}>
                {isExecutive ? 'Corporate Directive' : 'Executive Management'}
              </span>
            </div>
            
            <p className="text-[11px] text-neutral-500 font-bold tracking-wider uppercase mt-0.5">
              {leader.role}
            </p>
            
            <p className="text-neutral-600 text-xs sm:text-sm mt-2 line-clamp-2 max-w-3xl pr-4 leading-relaxed font-normal">
              {leader.bio || "Detailed professional background registry records are fully archived within internal corporate clearance logs."}
            </p>
          </div>

          {/* Action Interface Dials Footer */}
          <div className="mt-4 sm:mt-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-neutral-300/40 flex justify-center sm:justify-start gap-3 items-center">
            {[{ icon: LuPhone }, { icon: LuMail }, { icon: LuLayers }].map((item, idx) => (
              <div key={idx} className="w-6.5 h-6.5 rounded-full bg-[#E6E5E0] flex items-center justify-center text-neutral-500 text-xs shadow-[2px_2px_4px_#c2c1bc,-2px_-2px_4px_#ffffff] hover:shadow-[inset_1px_1px_2px_#c2c1bc] transition-all duration-200 p-1.5">
                <item.icon className="w-3.5 h-3.5 text-neutral-600" />
              </div>
            ))}
            <span className="hidden sm:inline-block ml-auto text-[10px] font-bold text-[#3F7E47] pr-4 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
              View Profile Registry →
            </span>
          </div>
        </div>

      </div>
    </div>
  )
}

function LeaderModal({ leader, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = 'unset' }
  }, [])

  if (!leader) return null

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-neutral-900/30 backdrop-blur-md transition-opacity duration-300" onClick={onClose}>
      <div className="relative bg-[#E6E5E0] max-w-lg w-full shadow-[20px_20px_60px_#bcbbb6,-20px_-20px_60px_#ffffff] rounded-[32px] overflow-hidden flex flex-col max-h-[85vh] border border-[#F5F4EE]" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-5 right-5 z-30 w-8 h-8 bg-[#E6E5E0] text-neutral-700 flex items-center justify-center shadow-[3px_3px_6px_#c2c1bc,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_4px_#c2c1bc] transition-all rounded-full">
          <LuX className="w-4 h-4" />
        </button>

        <div className="overflow-y-auto p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left mb-6">
            <div className="w-24 h-24 shrink-0 rounded-[20px] bg-[#E6E5E0] p-1.5 shadow-[inset_4px_4px_8px_#b8b7b2,inset_-4px_-4px_8px_#ffffff]">
              {leader.image ? (
                <img src={leader.image} alt={leader.name} className="w-full h-full object-cover rounded-[14px] img-sharp" />
              ) : (
                <div className="w-full h-full flex items-center justify-center rounded-[14px] bg-[#DDDCD6] text-neutral-600 font-bold text-xl">
                  {leader.name.split(' ').map(n => n[0]).join('')}
                </div>
              )}
            </div>
            <div>
              <span className="text-[9px] font-black text-white bg-[#3F7E47] px-2.5 py-0.5 rounded-full uppercase tracking-widest mb-1.5 inline-block">
                Corporate Core
              </span>
              <h2 className="text-xl font-bold text-neutral-900 tracking-tight">{leader.name}</h2>
              <p className="text-xs text-neutral-500 font-semibold mt-0.5 uppercase tracking-wider">{leader.role}</p>
            </div>
          </div>

          <div className="h-px bg-neutral-300/60 w-full mb-5" />
          <p className="text-neutral-700 text-sm leading-relaxed font-medium bg-[#DDDCD6]/30 p-4 rounded-xl shadow-[inset_1px_1px_3px_rgba(0,0,0,0.05)]">
            {leader.bio || "Detailed professional background records are fully archived within internal corporate clearance systems."}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function OurLeadership() {
  const [selected, setSelected] = useState(null)

  // Map elements directly from global leadership arrays
  const grouped = TIER_ORDER.reduce((acc, tier) => {
    const members = LEADERSHIP.filter((l) => l.tier === tier)
    if (members.length) acc[tier] = members
    return acc
  }, {})

  return (
    <div className="bg-[#E6E5E0] min-h-screen pb-32 font-sans overflow-x-hidden selection:bg-[#3F7E47]/20 selection:text-[#3F7E47]">
      
      <div className="max-w-7xl mx-auto px-4 pt-10 sm:px-6 lg:px-8">
        <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-white/40 via-white/10 to-transparent p-8 sm:p-12 border border-white/40 shadow-[10px_10px_30px_#c2c1bc,-10px_-10px_30px_#ffffff] backdrop-blur-md">
          <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-5 hidden md:block select-none">
            <span className="text-9xl font-black tracking-tighter">FALCON</span>
          </div>
          <div className="max-w-xl text-center mx-auto">
            <span className="text-[10px] font-extrabold tracking-[0.3em] text-[#3F7E47] uppercase bg-white/60 px-3 py-1 rounded-full shadow-sm">THE TEAM</span>
            <h1 className="text-3xl sm:text-4xl font-black text-neutral-800 tracking-tight mt-4 mb-3">
              {"<>"} Our <span className="text-[#3F7E47] font-serif italic font-light">LEADERSHIP</span> {"</>"}
            </h1>
            <p className="text-xs sm:text-sm text-neutral-600 font-medium leading-relaxed">
              Experienced professionals guiding FALCON's global enterprise vision, strategic operations, and market growth.
            </p>
            <div className="mt-5 flex justify-center gap-1.5 text-[10px] font-bold text-neutral-500 bg-[#DDDCD6]/50 w-fit mx-auto px-3 py-1 rounded-full">
              <span>Company</span> <LuChevronRight className="mt-0.5" /> <span className="text-neutral-800">Our Leadership</span>
            </div>
          </div>
        </div>
      </div>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative">
        
        <div className="hidden lg:flex justify-between items-center border-b border-neutral-400/40 pb-3 mb-12 px-2">
          <span className="text-[11px] font-black tracking-widest text-neutral-800">EXECUTIVE COMMAND STRUCTURE</span>
          <span className="text-[11px] font-black tracking-widest text-neutral-400">GLOBAL REGISTER</span>
        </div>

        {/* Unified vertical list alignment (Side Tier labels removed) */}
        <div className="space-y-6">
          {TIER_ORDER.map((tier) => {
            const members = grouped[tier]
            if (!members) return null

            return (
              <div key={tier} className="w-full flex flex-col gap-5">
                {members.map((leader) => (
                  <HorizontalLeaderCard 
                    key={leader.id} 
                    leader={leader} 
                    onClick={setSelected} 
                    isExecutive={tier === 'executive'} 
                  />
                ))}
              </div>
            )
          })}
        </div>
      </section>

      {selected && <LeaderModal leader={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}