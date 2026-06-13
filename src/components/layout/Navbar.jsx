import { useRef, useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useUI } from '../../context/UIContext'
import {
  HiOutlineMenu,
  HiOutlineX,
  HiOutlineChevronDown,
  HiOutlineChevronRight,
} from 'react-icons/hi'
import { FiArrowRight } from 'react-icons/fi'
import { NAV_LINKS } from '../../data/navLinks'

// ─── Desktop Mega-Dropdown ─────────────────────────────────────────────────────
function MegaDropdown({ groups, onClose }) {
  const cols = groups.length
  const widthMap = { 1: 'w-56', 2: 'w-[480px]', 3: 'w-[660px]', 4: 'w-[860px]' }
  const colMap = { 1: 'grid-cols-1', 2: 'grid-cols-2', 3: 'grid-cols-3', 4: 'grid-cols-4' }

  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 mt-0 bg-white shadow-2xl border-t-2 border-primary z-50
        grid ${colMap[cols] || 'grid-cols-2'} ${widthMap[cols] || 'w-[480px]'}`}
    >
      {groups.map((group, gi) => (
        <div
          key={gi}
          className={`py-6 px-5 ${gi < cols - 1 ? 'border-r border-gray-100' : ''}`}
        >
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#3F7E47] mb-4 pb-2 border-b border-gray-100">
            {group.heading}
          </p>
          <ul className="space-y-0.5">
            {group.items.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-2 py-2 text-[15px] rounded transition-all duration-150 group/item
                    ${isActive ? 'text-[#3F7E47] font-bold bg-red-50' : 'text-gray-600 hover:text-[#3F7E47] hover:bg-gray-50'}`
                  }
                >
                  <HiOutlineChevronRight className="w-3.5 h-3.5 shrink-0 opacity-0 group-hover/item:opacity-100 transition-opacity text-[#3F7E47]" />
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

// ─── Desktop Nav Item ──────────────────────────────────────────────────────────
function NavItem({ link }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const location = useLocation()

  useEffect(() => { setOpen(false) }, [location.pathname])

  useEffect(() => {
    if (!open) return
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  if (!link.children) {
    return (
      <NavLink
        to={link.to}
        className={({ isActive }) =>
          `relative text-base font-semibold pb-1 transition-colors duration-200
          after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#3F7E47] after:transition-all after:duration-300
          ${isActive ? 'text-[#3F7E47] after:w-full' : 'text-gray-700 hover:text-[#3F7E47] after:w-0 hover:after:w-full'}`
        }
      >
        {link.label}
      </NavLink>
    )
  }

  return (
    <div ref={ref} className="relative" onMouseLeave={() => setOpen(false)}>
      <button
        onMouseEnter={() => setOpen(true)}
        onClick={() => setOpen((p) => !p)}
        className={`flex items-center gap-1 text-base font-semibold pb-1 transition-colors duration-200
          relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#3F7E47] after:transition-all after:duration-300
          ${open ? 'text-[#3F7E47] after:w-full' : 'text-gray-700 hover:text-[#3F7E47] after:w-0 hover:after:w-full'}`}
      >
        {link.label}
        <HiOutlineChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180 text-[#3F7E47]' : ''}`}
        />
      </button>
      {open && <MegaDropdown groups={link.children} onClose={() => setOpen(false)} />}
    </div>
  )
}

// ─── Mobile Accordion Item ─────────────────────────────────────────────────────
function MobileNavItem({ link, onClose }) {
  const [open, setOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState(null)

  if (!link.children) {
    return (
      <NavLink
        to={link.to}
        onClick={onClose}
        className={({ isActive }) =>
          `block px-5 py-4 text-base font-bold transition-colors
          ${isActive ? 'text-[#3F7E47] bg-red-50' : 'text-gray-800 hover:text-[#3F7E47] hover:bg-gray-50'}`
        }
      >
        {link.label}
      </NavLink>
    )
  }

  return (
    <div>
      <button
        onClick={() => setOpen((p) => !p)}
        className={`w-full flex items-center justify-between px-5 py-4 text-base font-bold transition-colors
          ${open ? 'text-[#3F7E47] bg-red-50' : 'text-gray-800 hover:bg-gray-50'}`}
      >
        {link.label}
        <HiOutlineChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="bg-gray-50 border-t border-gray-100">
          {link.children.map((group, gi) => (
            <div key={gi} className="border-b border-gray-100 last:border-0">
              <button
                onClick={() => setOpenGroup(openGroup === gi ? null : gi)}
                className="w-full flex items-center justify-between px-6 py-3.5 text-[11px] font-bold uppercase tracking-widest text-[#3F7E47] hover:bg-gray-100"
              >
                {group.heading}
                <HiOutlineChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${openGroup === gi ? 'rotate-180' : ''}`}
                />
              </button>
              {openGroup === gi && (
                <ul className="pb-2">
                  {group.items.map((item) => (
                    <li key={item.to}>
                      <NavLink
                        to={item.to}
                        onClick={onClose}
                        className={({ isActive }) =>
                          `flex items-center gap-2 px-8 py-3 text-[15px] transition-colors
                          ${isActive ? 'text-[#3F7E47] font-bold' : 'text-gray-600 hover:text-[#3F7E47] hover:bg-gray-100'}`
                        }
                      >
                        <HiOutlineChevronRight className="w-3.5 h-3.5 text-[#3F7E47] shrink-0" />
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Main Navbar ───────────────────────────────────────────────────────────────
function Navbar() {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu, isScrolled } = useUI()

  return (
    <header
      className={`sticky top-0 z-40 bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : 'shadow-sm'
      }`}
    >
      {/* ── Main bar ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[90px] lg:h-[110px]">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="flex items-center gap-3 shrink-0 group"
        >
          <img
            src="../../documents/logo/logo2.png"
            alt="Company Logo"
            className="w-44 h-24 lg:w-64 lg:h-24 object-contain group-hover:brightness-110 transition-filter"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {NAV_LINKS.map((link) => (
            <NavItem key={link.label} link={link} />
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            onClick={closeMobileMenu}
            className="hidden lg:flex items-center gap-2 bg-[#3F7E47] text-white px-5 py-2.5 text-sm font-bold uppercase tracking-wider group"
          >
            <FiArrowRight className="w-4 h-4" />
            Contact Us
          </Link>
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 -mr-1 text-dark hover:text-[#3F7E47] transition-colors"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <HiOutlineX className="w-6 h-6" />
            ) : (
              <HiOutlineMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile menu panel ── */}
      <div
        className={`lg:hidden bg-white border-t border-gray-100 transition-all duration-300 ease-in-out
          ${isMobileMenuOpen ? 'max-h-[calc(100vh-90px)] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0 overflow-hidden'}`}
      >
        <nav className="flex flex-col divide-y divide-gray-100">
          {NAV_LINKS.map((link) => (
            <MobileNavItem key={link.label} link={link} onClose={closeMobileMenu} />
          ))}
        </nav>
        <div className="p-4 border-t border-gray-100">
          <Link
            to="/contact"
            onClick={closeMobileMenu}
            className="flex items-center justify-center gap-2 w-full bg-[#CCCAA5] text-white px-5 py-3.5 text-sm font-bold uppercase tracking-wider hover:bg-[#3F7E47]-dark transition-colors"
          >
            <FiArrowRight className="w-4 h-4" />
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar