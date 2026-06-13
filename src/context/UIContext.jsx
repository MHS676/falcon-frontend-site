import { createContext, useContext, useState, useCallback, useEffect } from 'react'

// ─── Context ──────────────────────────────────────────────────────────────────
const UIContext = createContext(null)

// ─── Provider ─────────────────────────────────────────────────────────────────
export function UIProvider({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeModal, setActiveModal] = useState(null)
  const [toastMessage, setToastMessage] = useState(null)

  // Track scroll position for sticky navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  const openModal = useCallback((modalId) => {
    setActiveModal(modalId)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeModal = useCallback(() => {
    setActiveModal(null)
    document.body.style.overflow = ''
  }, [])

  const showToast = useCallback((message, type = 'success') => {
    setToastMessage({ message, type, id: Date.now() })
    setTimeout(() => setToastMessage(null), 4000)
  }, [])

  const value = {
    isMobileMenuOpen,
    isScrolled,
    activeModal,
    toastMessage,
    toggleMobileMenu,
    closeMobileMenu,
    openModal,
    closeModal,
    showToast,
  }

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}

// ─── Hook ─────────────────────────────────────────────────────────────────────
export function useUI() {
  const context = useContext(UIContext)
  if (!context) {
    throw new Error('useUI must be used within a UIProvider')
  }
  return context
}

export default UIContext
