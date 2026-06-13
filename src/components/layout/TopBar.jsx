import { useApp } from '../../context/AppContext'
import { FiPhone, FiMail } from 'react-icons/fi'
import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

function TopBar() {
  const { companyInfo } = useApp()

  return (
    <div className="bg-[#CCCAA5] text-[#273e06] text-xs py-2 hidden md:block">
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a
            href={`tel:${companyInfo.phone}`}
            className="flex items-center gap-1.5 hover:text-[#3F7E47] transition-colors"
          >
            <FiPhone className="w-4.5 h-4.5" />
            <span>{companyInfo.phone}</span>
          </a>
          <a
            href={`mailto:${companyInfo.email}`}
            className="flex items-center gap-1.5 hover:text-[#3F7E47] transition-colors"
          >
            <FiMail className="w-3.5 h-3.5" />
            <span>{companyInfo.email}</span>
          </a>
        </div>
        <div>
          <p className='text-lg'>Security Systems Consultancy, Planning & Services</p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={companyInfo.socialLinks.facebook}
            aria-label="Facebook"
            className="w-7 h-7 flex items-center justify-center rounded-full bg-[#3F7E47] hover:bg--700 transition-colors"
          >
            <FaFacebookF className="w-3 h-3 text-white" />
          </a>
          <a
            href={companyInfo.socialLinks.linkedin}
            aria-label="LinkedIn"
            className="w-7 h-7 flex items-center justify-center rounded-full bg-[#3F7E47] hover:bg-[#57c157] transition-colors"
          >
            <FaLinkedinIn className="w-3 h-3 text-white" />
          </a>
          <a
            href={companyInfo.socialLinks.youtube}
            aria-label="YouTube"
            className="w-7 h-7 flex items-center justify-center rounded-full bg-red-600 hover:bg-red-700 transition-colors"
          >
            <FaYoutube className="w-3 h-3 text-white" />
          </a>
          <a
            href={`mailto:${companyInfo.email}`}
            aria-label="Email"
            className="w-7 h-7 flex items-center justify-center rounded-full bg-[#3F7E47] hover:bg-[#3F7E47]-dark transition-colors"
          >
            <MdEmail className="w-3 h-3 text-white" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default TopBar
