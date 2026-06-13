import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import TopBar from './TopBar'
import Toast from '../ui/Toast'
import { useUI } from '../../context/UIContext'

function Layout() {
  const { toastMessage } = useUI()

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      {toastMessage && <Toast message={toastMessage.message} type={toastMessage.type} />}
    </div>
  )
}

export default Layout
