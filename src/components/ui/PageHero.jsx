import { Link } from 'react-router-dom'
import { HiChevronRight, HiHome } from 'react-icons/hi'

/**
 * Reusable page hero banner used across all inner pages.
 */
function PageHero({ eyebrow, title, subtitle, breadcrumbs, backgroundImage, children }) {
  return (
    <section className="bg-white text-black py-16 md:py-24 relative overflow-hidden">
      
      {/* ─── Light Textural Grain Overlay (Always visible across the background) ─── */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-multiply bg-repeat z-0" 
        style={{ backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9Ii41Ii8+Cjwvc3ZnPg==")` }}
      />
      
      {/* ─── Right-Aligned Half Image Display ─── */}
      {backgroundImage && (
        <>
          {/* Clips the background graphic strictly to the right 50% of the screen on desktop screens */}
          <div 
            className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 bg-cover bg-center bg-no-repeat z-0 hidden lg:block"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          {/* Subtle fade/mask transition so the image blends elegantly into the white texture side */}
          <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 bg-gradient-to-r from-white via-transparent to-transparent z-10 hidden lg:block" />
        </>
      )}
      
      {/* Decorative primary color brand stripe */}
      <div className="absolute left-0 top-0 h-full w-1 bg-[#3F7E47] z-10" />
      
      {/* Subtle modern geometric wireframe circles */}
      <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full border border-slate-200/60 z-0 pointer-events-none" />
      <div className="absolute -right-12 -bottom-16 w-48 h-48 rounded-full border border-slate-200/60 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Breadcrumb Navigation */}
        {breadcrumbs && (
          <nav className="flex items-center gap-1.5 mb-6 text-xs text-slate-500 font-medium">
            <Link to="/" className="flex items-center gap-1 hover:text-[#3F7E47] transition-colors">
              <HiHome className="w-3.5 h-3.5" />
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <HiChevronRight className="w-3 h-3 text-slate-300" />
                {crumb.to ? (
                  <Link to={crumb.to} className="hover:text-[#3F7E47] transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-slate-800 font-semibold">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Content Layout structure */}
        <div className={`flex flex-col ${children ? 'lg:flex-row lg:items-end lg:justify-between gap-10' : ''}`}>
          <div className="max-w-2xl bg-white/40 backdrop-blur-xs lg:backdrop-blur-none p-4 lg:p-0 rounded-xl">
            {eyebrow && (
              <p className="text-[#3F7E47] font-bold text-xs uppercase tracking-widest mb-3">
                {eyebrow}
              </p>
            )}
            <h1 className="text-4xl md:text-5xl font-black text-black leading-tight tracking-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-slate-600 mt-4 text-base leading-relaxed max-w-xl">
                {subtitle}
              </p>
            )}
          </div>
          {children && <div className="shrink-0 z-10">{children}</div>}
        </div>
      </div>
    </section>
  )
}

export default PageHero;