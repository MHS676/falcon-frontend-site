import { ContactProvider } from '../context/ContactContext'
import ContactForm from '../components/contact/ContactForm'
import { useApp } from '../context/AppContext'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'

function Contact() {
  const { companyInfo } = useApp()

  return (
    <ContactProvider>
      <div className="animate-fade-in">
        {/* Hero */}
        <div className="bg-gray-200 text-black py-20">
          <div className="container-custom">
            <p className="text-[#3F7E47] font-semibold text-sm uppercase tracking-widest mb-3">
              Get In Touch
            </p>
            <h1 className="text-4xl md:text-5xl font-black max-w-2xl leading-tight">
              Contact <span className="text-[#3F7E47]">Us</span>
            </h1>
          </div>
        </div>

        {/* Main */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left */}
              <div>
                <h2 className="text-2xl font-black text-dark mb-2">
                  Secure and enhance your daily business operations with{' '}
                  <span className="text-[#3F7E47]">Falcon.</span>
                </h2>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>

                {/* Image placeholder */}
                <div className="bg-gray-200 h-52 mb-6 flex items-center justify-center border border-gray-300">
                  {/* <span className="text-gray-400 text-sm">Office Image — Placeholder</span> */}
                  <img
                    src="/documents/navlink_banner/contact/contact1.jpeg"
                    alt="Contact Us"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Map placeholder */}
                <div className="bg-gray-200 h-48 flex items-center justify-center border border-gray-300 mb-8">
                  {/* <span className="text-gray-400 text-sm">Google Map — Placeholder</span> */}
                              <iframe
              title="FALCON Bangladesh Office Map"
              src="https://maps.google.com/maps?q=House%20155%2C%20Lane%203%2C%20Eastern%20Road%2C%20New%20DOHS%20Mohakhali%2C%20Dhaka%201206&t=&z=12&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
                </div>

                {/* Contact info */}
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-sm text-gray-700">
                    <MdEmail className="w-5 h-5 text-[#3F7E47] shrink-0" />
                    <a href={`mailto:${companyInfo.email}`} className="hover:text-[#3F7E47] transition-colors">
                      {companyInfo.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-700">
                    <MdPhone className="w-5 h-5 text-[#3F7E47] shrink-0" />
                    <a href={`tel:${companyInfo.phone}`} className="hover:text-[#3F7E47] transition-colors">
                      {companyInfo.phone}
                    </a>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <MdLocationOn className="w-5 h-5 text-[#3F7E47] shrink-0 mt-0.5" />
                    <span>{companyInfo.address}</span>
                  </li>
                </ul>
              </div>

              {/* Right - Form */}
              <div className="bg-white border border-gray-200 p-8 shadow-sm">
                <h3 className="text-xl font-bold text-dark mb-6">Talk to an expert!</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    </ContactProvider>
  )
}

export default Contact
