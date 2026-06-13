import Button from '../components/ui/Button'
import { HiOutlineHome } from 'react-icons/hi'

function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center py-20 animate-fade-in">
      <p className="text-8xl font-black text-[#3F7E47] mb-4">404</p>
      <h1 className="text-3xl font-bold text-dark mb-3">Page Not Found</h1>
      <p className="text-gray-500 mb-8 max-w-sm">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Button to="/" variant="primary" showArrow>
        Back to Home
      </Button>
    </div>
  )
}

export default NotFound
