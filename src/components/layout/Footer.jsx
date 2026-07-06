import { Link } from 'react-router-dom'
import { useApp } from '../../context/AppContext'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'

const footerLinks = {
  'About Us': [
    { label: 'Company Overview', to: '/company' },
    { label: 'Our Leadership', to: '/company#leadership' },
    { label: 'Our Footprint', to: '/company#footprint' },
  ],
  'Join Falcon': [
    { label: 'Join Us', to: '/company#careers' },
    { label: 'Life at Falcon', to: '/company#life' },
    { label: 'Blog', to: '/news-and-events' },
  ],
}

function Footer() {
  const { companyInfo } = useApp()

  return (
    <footer className="bg-gray-200 text-white">
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-1">
          <img
            src="../../documents/logo/logo2.png"
            alt="Company Logo"
            className="w-44 h-24 lg:w-64 lg:h-24 object-contain group-hover:brightness-110 transition-filter"
          />
            <p className="text-black text-sm leading-relaxed mb-6">
              To synergize the integration of human resources with automation to create efficient
              security solutions for the community.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-2">
              {[
                { icon: FaFacebookF, href: companyInfo.socialLinks.facebook, label: 'Facebook', bg: 'bg-[#3F7E47] hover:bg-[#57c157]' },
                { icon: FaTwitter, href: companyInfo.socialLinks.twitter, label: 'Twitter', bg: 'bg-[#3F7E47] hover:bg-[#57c157]' },
                { icon: FaLinkedinIn, href: companyInfo.socialLinks.linkedin, label: 'LinkedIn', bg: 'bg-[#3F7E47] hover:bg-[#57c157]' },
                { icon: FaYoutube, href: companyInfo.socialLinks.youtube, label: 'YouTube', bg: 'bg-[#3F7E47] hover:bg-[#57c157]' },
                { icon: FaInstagram, href: companyInfo.socialLinks.instagram, label: 'Instagram', bg: 'bg-[#3F7E47] hover:bg-[#57c157]' },
              ].map(({ icon: Icon, href, label, bg }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`w-8 h-8 flex items-center justify-center rounded-full ${bg} transition-colors`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-semibold text-black text-sm uppercase tracking-wider mb-5">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-black text-sm hover:text-[#3F7E47] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-black text-sm uppercase tracking-wider mb-5">
              Find Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-black text-sm">
                <MdEmail className="w-4 h-4 mt-0.5 shrink-0 text-[#3F7E47]" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-[#3F7E47] transition-colors">
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-black text-sm">
                <MdPhone className="w-4 h-4 mt-0.5 shrink-0 text-[#3F7E47]" />
                <a href={`tel:${companyInfo.phone}`} className="hover:text-[#3F7E47] transition-colors">
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-black text-sm">
                <MdLocationOn className="w-4 h-4 mt-0.5 shrink-0 text-[#3F7E47]" />
                <span>{companyInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300">
        <div className="container-custom py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>Developed by: <span className="text-gray-400">Your Agency</span></p>
          <p>© {new Date().getFullYear()} Falcon. ALL RIGHTS ARE RESERVED</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
