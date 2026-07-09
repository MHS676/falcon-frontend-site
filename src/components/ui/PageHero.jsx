import { Link } from 'react-router-dom'
import { HiChevronRight, HiHome } from 'react-icons/hi'

/**
 * Modern Premium Page Hero Banner with gradient overlay and advanced styling
 */
function PageHero({ eyebrow, title, subtitle, breadcrumbs, backgroundImage, children }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0F2818] via-[#1C3620] to-[#2A5230] min-h-[450px] flex items-center">
      
      {/* ─── Animated gradient background with parallax effect ─── */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3F7E47]/40 via-[#1C3620]/60 to-[#0F2818]/80" />
        
        {/* Background image with overlay */}
        {backgroundImage && (
          <>
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed opacity-30"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F2818] via-[#0F2818]/70 to-transparent" />
          </>
        )}
        
        {/* Animated blur shapes */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#3F7E47]/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#A2E0AF]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* ─── Accent stripe ─── */}
      <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-[#A2E0AF] via-[#3F7E47] to-[#1C3620] z-10" />

      {/* ─── Main content ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-20 w-full">
        
        {/* Breadcrumb Navigation */}
        {breadcrumbs && (
          <nav className="flex items-center gap-2 mb-8 text-xs text-[#A2E0AF]/80 font-medium">
            <Link to="/" className="flex items-center gap-1.5 hover:text-[#A2E0AF] transition-all duration-300 hover:scale-105">
              <HiHome className="w-4 h-4" />
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <HiChevronRight className="w-4 h-4 text-[#3F7E47]" />
                {crumb.to ? (
                  <Link to={crumb.to} className="hover:text-[#A2E0AF] transition-all duration-300 hover:scale-105">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#A2E0AF] font-semibold">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Content Layout */}
        <div className={`flex flex-col ${children ? 'lg:flex-row lg:items-center lg:justify-between gap-12' : ''}`}>
          <div className="flex-1 max-w-3xl">
            
            {/* Eyebrow label with animated accent */}
            {eyebrow && (
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-8 bg-gradient-to-r from-[#3F7E47] to-[#A2E0AF] rounded-full" />
                <p className="text-[#A2E0AF] font-bold text-sm uppercase tracking-[0.3em] drop-shadow-lg">
                  {eyebrow}
                </p>
              </div>
            )}

            {/* Main title with gradient text */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tighter text-white drop-shadow-2xl mb-6">
              {typeof title === 'string' ? (
                <span className="bg-gradient-to-r from-white via-[#A2E0AF] to-[#3F7E47] bg-clip-text text-transparent">
                  {title}
                </span>
              ) : (
                <span className="bg-gradient-to-r from-white via-[#A2E0AF] to-[#3F7E47] bg-clip-text text-transparent">
                  {title}
                </span>
              )}
            </h1>

            {/* Subtitle with enhanced readability */}
            {subtitle && (
              <p className="text-lg sm:text-xl text-[#A2E0AF]/90 leading-relaxed max-w-2xl font-light drop-shadow-lg">
                {subtitle}
              </p>
            )}
          </div>

          {/* Right column content */}
          {children && (
            <div className="shrink-0 z-10 lg:ml-8">
              {children}
            </div>
          )}
        </div>
      </div>

      {/* ─── Bottom accent gradient fade ─── */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white/5 pointer-events-none" />
    </section>
  )
}

export default PageHero