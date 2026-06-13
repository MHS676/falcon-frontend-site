import { DashboardLayout } from '../../components/dashboard/DashboardLayout'

export default function Dashboard() {
  const stats = [
    { label: 'Total Pages', value: '12', icon: '📄', color: 'bg-blue-500' },
    { label: 'Services', value: '15', icon: '🔧', color: 'bg-green-500' },
    { label: 'News Articles', value: '8', icon: '📰', color: 'bg-purple-500' },
    { label: 'Gallery Images', value: '60+', icon: '🖼️', color: 'bg-orange-500' },
  ]

  return (
    <DashboardLayout title="Dashboard">
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-[#1E5128] to-[#163d20] text-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-2">Welcome to FALCON Admin Dashboard</h2>
          <p className="text-green-100">
            Manage all website content, services, company pages, news, and more from one centralized platform.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-800 mt-1">{stat.value}</p>
                </div>
                <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center text-2xl`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <a
              href="/admin/edit/home-banner"
              className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-all hover:scale-105 cursor-pointer"
            >
              <div className="text-3xl mb-2">🏠</div>
              <h4 className="font-semibold text-gray-800 mb-1">Edit Home Banner</h4>
              <p className="text-sm text-gray-600">Update the homepage banner image and text</p>
            </a>

            <a
              href="/admin/edit/services"
              className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-all hover:scale-105 cursor-pointer"
            >
              <div className="text-3xl mb-2">🔧</div>
              <h4 className="font-semibold text-gray-800 mb-1">Manage Services</h4>
              <p className="text-sm text-gray-600">Edit all security services and offerings</p>
            </a>

            <a
              href="/admin/edit/featured-news"
              className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-all hover:scale-105 cursor-pointer"
            >
              <div className="text-3xl mb-2">📰</div>
              <h4 className="font-semibold text-gray-800 mb-1">Featured News</h4>
              <p className="text-sm text-gray-600">Update the featured news story</p>
            </a>

            <a
              href="/admin/edit/company-overview"
              className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-all hover:scale-105 cursor-pointer"
            >
              <div className="text-3xl mb-2">🏢</div>
              <h4 className="font-semibold text-gray-800 mb-1">Company Pages</h4>
              <p className="text-sm text-gray-600">Manage company information and banners</p>
            </a>

            <a
              href="/admin/edit/gallery"
              className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-all hover:scale-105 cursor-pointer"
            >
              <div className="text-3xl mb-2">🖼️</div>
              <h4 className="font-semibold text-gray-800 mb-1">Gallery Images</h4>
              <p className="text-sm text-gray-600">Upload and manage all gallery images</p>
            </a>

            <a
              href="/admin/edit/physical-security"
              className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-all hover:scale-105 cursor-pointer"
            >
              <div className="text-3xl mb-2">🛡️</div>
              <h4 className="font-semibold text-gray-800 mb-1">Physical Security</h4>
              <p className="text-sm text-gray-600">Edit Physical Security service page</p>
            </a>
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">System Information</h3>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600 text-sm">Backend API</p>
                <p className="text-lg font-semibold text-gray-800">
                  http://localhost:3000
                </p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Frontend URL</p>
                <p className="text-lg font-semibold text-gray-800">
                  http://localhost:5174
                </p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Database</p>
                <p className="text-lg font-semibold text-gray-800">PostgreSQL</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Status</p>
                <p className="text-lg font-semibold text-green-600">🟢 Online</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
