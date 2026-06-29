import { Link, useLocation } from 'react-router-dom'
import { HiOutlineArrowRight, HiOutlineCalendar, HiOutlineClock } from 'react-icons/hi'
import { NEWS_CATEGORIES, TAG_COLORS } from '../../data/newsData'

// ── Tag badge ─────────────────────────────────────────────────────────────────
export function TagBadge({ tag }) {
  return (
    <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 ${TAG_COLORS[tag] || 'bg-gray-100 text-gray-600'}`}>
      {tag}
    </span>
  )
}

// ── Article card ─────────────────────────────────────────────────────────────
// ── Article card ─────────────────────────────────────────────────────────────
export function ArticleCard({ item, to, large = false }) {
  return (
    <Link
      to={to}
      className={`group flex flex-col border border-gray-100 bg-white hover:shadow-md transition-shadow overflow-hidden ${
        large ? 'md:flex-row' : ''
      }`}
    >
      {/* 
        Image/Placeholder Container: 
        Sets a stable width on desktop (md:w-80) and a fixed height (h-64 or md:h-auto) 
        so portrait photos don't look squeezed.
      */}
      <div
        className={`bg-gray-100 shrink-0 flex items-center justify-center overflow-hidden ${
          large ? 'w-full md:w-80 h-64 md:h-auto' : 'w-full h-48'
        }`}
      >
        {item.image ? (
          <img 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
            src={item.image} 
            alt={item.title} 
          />
        ) : (
          /* Fallback Placeholder: Only renders IF there is no image */
          <div className="text-center opacity-30 select-none py-8">
            <div className="text-4xl font-black text-gray-400">F</div>
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">FALCON®</div>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <TagBadge tag={item.tag} />
          {item.source && (
            <span className="text-[10px] text-gray-400 font-semibold">{item.source}</span>
          )}
          {item.active !== undefined && (
            <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 ${item.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
              {item.active ? 'Active' : 'Resolved'}
            </span>
          )}
        </div>
        
        <h3 className={`font-black text-dark leading-snug mb-2 group-hover:text-[#3F7E47] transition-colors ${large ? 'text-xl' : 'text-base'}`}>
          {item.title}
        </h3>
        
        <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{item.excerpt}</p>
        
        <div className="flex items-center gap-4 text-xs text-gray-400 mt-auto">
          <span className="flex items-center gap-1">
            <HiOutlineCalendar className="w-3.5 h-3.5" />
            {item.date || item.year}
          </span>
          {item.readTime && (
            <span className="flex items-center gap-1">
              <HiOutlineClock className="w-3.5 h-3.5" />
              {item.readTime}
            </span>
          )}
          {item.author && <span>{item.author}</span>}
        </div>
      </div>
    </Link>
  )
}

// ── Sidebar ───────────────────────────────────────────────────────────────────
export function NewsSidebar({ currentKey }) {
  const recentFalcon = [
    'FALCON® Expands to Three New Districts',
        'National Training Centre Opens',
    'ISO 9001 Recertification Achieved',
  ]

  return (
    <aside className="space-y-8">
      {/* Categories */}
      <div className="border border-gray-100 bg-white p-5">
        <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">Categories</h3>
        <ul className="space-y-0.5">
          {NEWS_CATEGORIES.map((cat) => {
            const active = cat.key === currentKey
            return (
              <li key={cat.key}>
                <Link
                  to={cat.to}
                  className={`flex items-center justify-between px-3 py-2.5 text-sm font-semibold transition-colors border-l-2 ${
                    active
                      ? 'border-primary bg-[#3F7E47]/5 text-[#3F7E47]'
                      : 'border-transparent text-gray-600 hover:text-dark hover:bg-gray-50'
                  }`}
                >
                  {cat.label}
                  <HiOutlineArrowRight className={`w-3.5 h-3.5 ${active ? 'text-[#3F7E47]' : 'text-gray-300'}`} />
                </Link>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Recent */}
      <div className="border border-gray-100 bg-white p-5">
        <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">Recent Updates</h3>
        <ul className="space-y-3">
          {recentFalcon.map((title) => (
            <li key={title} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-[#3F7E47] rounded-full shrink-0 mt-2" />
              <Link to="/news-and-events/news" className="text-sm text-gray-600 hover:text-[#3F7E47] transition-colors leading-snug">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Newsletter */}
      <div className="bg-gray-200 p-6 text-black">
        <div className="w-10 h-1 bg-[#3F7E47] mb-4" />
        <h3 className="font-black text-lg mb-2">Stay Informed</h3>
        <p className="text-black/60 text-sm mb-4 leading-relaxed">Get security news and updates delivered directly to your inbox.</p>
        <input
          type="email"
          placeholder="Your email address"
          className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-4 py-2.5 text-sm focus:outline-none focus:border-primary mb-3 transition-colors"
        />
        <button className="w-full bg-[#3F7E47] text-white text-xs font-black uppercase tracking-widest py-2.5 hover:bg-[#3F7E47] transition-colors">
          Subscribe
        </button>
      </div>

      {/* CTA */}
      <div className="bg-gray-50 border border-gray-100 p-5">
        <p className="text-sm text-gray-600 mb-4">Have a security concern or enquiry?</p>
        <Link
          to="/contact"
          className="flex items-center justify-center gap-2 bg-[#3F7E47] text-white text-xs font-black uppercase tracking-widest px-5 py-3 hover:bg-[#3F7E47] transition-colors"
        >
          Contact Us <HiOutlineArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </aside>
  )
}

// ── Page shell ────────────────────────────────────────────────────────────────
export function NewsPageShell({ children, sidebar }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">{children}</div>
          {sidebar}
        </div>
      </div>
    </section>
  )
}
