import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import {
  HiOutlineMenu,
  HiOutlineX,
  HiOutlineLogout,
  HiOutlineChevronDown,
} from 'react-icons/hi'

export const DashboardLayout = ({ children, title }) => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [expandedMenu, setExpandedMenu] = useState(null)

  const handleLogout = () => {
    logout()
    navigate('/admin/login')
  }

  const menuItems = [
    { label: 'Dashboard', href: '/admin/dashboard', icon: '📊' },
    {
      label: 'Content Management',
      icon: '📝',
      submenu: [
        { label: 'Home Banner', href: '/admin/edit/home-banner' },
        { label: 'Physical Security', href: '/admin/edit/physical-security' },
        { label: 'Electronic Security', href: '/admin/edit/electronic-security' },
        {
          label: 'Central Monitoring',
          href: '/admin/edit/central-monitoring',
        },
        { label: 'Security Consulting', href: '/admin/edit/security-consulting' },
        { label: 'All Services', href: '/admin/edit/services' },
      ],
    },
    {
      label: 'Company Pages',
      icon: '🏢',
      submenu: [
        { label: 'Company Overview', href: '/admin/edit/company-overview' },
        { label: 'Leadership', href: '/admin/edit/leadership' },
        { label: 'Why Choose Us', href: '/admin/edit/why-choose-us' },
        { label: 'Our Footprint', href: '/admin/edit/footprint' },
        { label: 'Life at FALCON', href: '/admin/edit/life-at-falcon' },
        { label: 'Awards', href: '/admin/edit/awards' },
      ],
    },
    {
      label: 'News & Events',
      icon: '📰',
      submenu: [
        { label: 'Featured News', href: '/admin/edit/featured-news' },
        { label: 'Gallery', href: '/admin/edit/gallery' },
      ],
    },
    { label: 'Users', href: '/admin/users', icon: '👥' },
    { label: 'Settings', href: '/admin/settings', icon: '⚙️' },
  ]

  const toggleMenu = (index) => {
    setExpandedMenu(expandedMenu === index ? null : index)
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-[#1E5128] text-white transition-all duration-300 flex flex-col overflow-y-auto`}
      >
        {/* Logo */}
        <div className="p-4 border-b border-[#163d20]">
          <div className="flex items-center justify-between">
            <h1
              className={`font-bold text-xl transition-opacity ${
                !sidebarOpen && 'hidden'
              }`}
            >
              FALCON
            </h1>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-[#163d20] rounded-lg transition-colors"
            >
              {sidebarOpen ? <HiOutlineX size={20} /> : <HiOutlineMenu size={20} />}
            </button>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item, index) => (
            <div key={index}>
              {item.submenu ? (
                <button
                  onClick={() => toggleMenu(index)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg hover:bg-[#163d20] transition-colors text-left ${
                    expandedMenu === index ? 'bg-[#163d20]' : ''
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-lg">{item.icon}</span>
                    <span className={sidebarOpen ? '' : 'hidden'}>{item.label}</span>
                  </span>
                  <HiOutlineChevronDown
                    className={`transition-transform ${
                      expandedMenu === index ? 'rotate-180' : ''
                    } ${sidebarOpen ? '' : 'hidden'}`}
                  />
                </button>
              ) : (
                <a
                  href={item.href}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#163d20] transition-colors"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className={sidebarOpen ? '' : 'hidden'}>{item.label}</span>
                </a>
              )}

              {/* Submenu */}
              {item.submenu && expandedMenu === index && sidebarOpen && (
                <div className="pl-8 mt-2 space-y-2 bg-[#163d20] rounded-lg p-3">
                  {item.submenu.map((subitem, subindex) => (
                    <a
                      key={subindex}
                      href={subitem.href}
                      className="block p-2 text-sm hover:bg-[#1E5128] rounded transition-colors"
                    >
                      {subitem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-[#163d20]">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 p-3 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
          >
            <HiOutlineLogout size={20} />
            <span className={sidebarOpen ? '' : 'hidden'}>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-gray-600">Logged in as</p>
                <p className="font-semibold text-gray-800">{user?.name || user?.email}</p>
              </div>
              <div className="w-10 h-10 bg-[#1E5128] text-white rounded-full flex items-center justify-center font-bold">
                {(user?.name?.charAt(0) || user?.email?.charAt(0)).toUpperCase()}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  )
}
