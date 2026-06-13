import SectionHeading from '../ui/SectionHeading'

// ── Import all 32 client logos ─────────────────────────────────────────────────
import c1  from '../../assets/clients/client1.jpeg'
import c2  from '../../assets/clients/client2.jpeg'
import c3  from '../../assets/clients/client3.jpeg'
import c4  from '../../assets/clients/client4.jpeg'
import c5  from '../../assets/clients/client5.jpeg'
import c6  from '../../assets/clients/client6.jpeg'
import c7  from '../../assets/clients/client7.jpeg'
import c8  from '../../assets/clients/client8.jpeg'
import c9  from '../../assets/clients/client9.jpeg'
import c10 from '../../assets/clients/client10.jpeg'
import c11 from '../../assets/clients/client11.jpeg'
import c12 from '../../assets/clients/client12.jpeg'
import c13 from '../../assets/clients/client13.jpeg'
import c14 from '../../assets/clients/client14.jpeg'
import c15 from '../../assets/clients/client15.jpeg'
import c16 from '../../assets/clients/client16.jpeg'
import c17 from '../../assets/clients/client17.jpeg'
import c18 from '../../assets/clients/client18.jpeg'
import c19 from '../../assets/clients/client19.jpeg'
import c20 from '../../assets/clients/client20.jpeg'
import c21 from '../../assets/clients/client21.jpeg'
import c22 from '../../assets/clients/client22.jpeg'
import c23 from '../../assets/clients/client23.jpeg'
import c24 from '../../assets/clients/client24.jpeg'
import c25 from '../../assets/clients/client25.jpeg'
import c28 from '../../assets/clients/client28.jpeg'
import c29 from '../../assets/clients/client29.jpeg'
import c30 from '../../assets/clients/client30.jpeg'
import c32 from '../../assets/clients/client32.jpeg'

const ALL_LOGOS = [
  c1,c2,c3,c4,c5,c7,c9,c10,c11,c12,c13,c15,c16,
  c17,c18,c19,c21,c22,c24,c25,c29,c30,
]

// Split into two rows for variety
const ROW1 = ALL_LOGOS.slice(0, 16)
const ROW2 = ALL_LOGOS.slice(16, 32)

// Duplicate each row for seamless loop
const row1 = [...ROW1, ...ROW1]
const row2 = [...ROW2, ...ROW2]

function LogoCard({ src, idx }) {
  return (
    <div
      key={idx}
      className="shrink-0 w-36 h-20 mx-3 flex items-center justify-center bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 overflow-hidden p-2"
    >
      <img
        src={src}
        alt={`Client ${idx + 1}`}
        className="max-h-full max-w-full   transition-all duration-300"
      />
    </div>
  )
}

function ClientsSection() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-[#3F7E47] mb-2">Trusted By</p>
        <SectionHeading title="Our Valued Clients" />
        <p className="text-gray-500 text-sm mt-2">
          Proudly serving 400+ organisations across banking, government, industry, and NGO sectors.
        </p>
      </div>

      {/* Row 1 — scrolls left */}
      {/* <div className="relative mb-4">

        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent z-10" />
        <div className="flex animate-marquee">
          {row1.map((src, idx) => <LogoCard key={idx} src={src} idx={idx} />)}
        </div>
      </div> */}

      {/* Row 2 — scrolls right (reverse) */}
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent z-10" />
        <div className="flex animate-marquee-reverse">
          {row2.map((src, idx) => <LogoCard key={idx} src={src} idx={idx} />)}
        </div>
      </div>
    </section>
  )
}

export default ClientsSection
