import { useState } from 'react'
import { TESTIMONIALS } from '../../data/siteData'
import SectionHeading from '../ui/SectionHeading'
import StarRating from '../ui/StarRating'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { FaGoogle } from 'react-icons/fa'

function TestimonialsSection() {
  const [page, setPage] = useState(0)
  const perPage = 3
  const totalPages = Math.ceil(TESTIMONIALS.length / perPage)
  const visible = TESTIMONIALS.slice(page * perPage, page * perPage + perPage)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <SectionHeading title="Testimonial" />
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Overall Rating */}
          <div className="bg-white border border-gray-200 p-6 w-full lg:w-56 shrink-0 flex flex-col gap-3 shadow-sm">
            <p className="font-bold text-dark">Falcon® Security</p>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-black text-dark">4.2</span>
              <StarRating rating={4.2} />
            </div>
            <p className="text-xs text-gray-500">Based on 112 reviews</p>
            <p className="text-xs text-gray-400">powered by Google</p>
            <a
              href="#"
              className="mt-2 flex items-center gap-2 bg-white border border-gray-300 px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <FaGoogle className="text-green-700 w-3.5 h-3.5" />
              Review us on
            </a>
          </div>

          {/* Reviews */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {visible.map((t) => (
                <div key={t.id} className="bg-white border border-gray-200 p-5 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold text-gray-600">
                        {t.name[0]}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#3F7E47] leading-tight">{t.name}</p>
                        <p className="text-xs text-gray-400">{t.timeAgo}</p>
                      </div>
                    </div>
                    <FaGoogle className="w-4 h-4 text-[#3F7E47]" />
                  </div>
                  <StarRating rating={t.rating} />
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">{t.review}</p>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center gap-2 mt-6 justify-center">
                <button
                  onClick={() => setPage((p) => Math.max(0, p - 1))}
                  disabled={page === 0}
                  className="p-2 border border-gray-300 hover:border-primary hover:text-[#3F7E47] disabled:opacity-30 transition-colors"
                >
                  <FiChevronLeft className="w-4 h-4" />
                </button>
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      i === page ? 'bg-[#3F7E47]' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
                <button
                  onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                  disabled={page === totalPages - 1}
                  className="p-2 border border-gray-300 hover:border-primary hover:text-[#3F7E47] disabled:opacity-30 transition-colors"
                >
                  <FiChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
