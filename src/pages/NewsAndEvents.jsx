import SectionHeading from '../components/ui/SectionHeading'
import { NEWS_ARTICLES } from '../data/siteData'
import { MdCalendarToday } from 'react-icons/md'
import { BiTime } from 'react-icons/bi'
import Button from '../components/ui/Button'

function NewsAndEvents() {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <div className="bg-dark text-white py-20">
        <div className="container-custom">
          <p className="text-[#3F7E47] font-semibold text-sm uppercase tracking-widest mb-3">
            Latest Updates
          </p>
          <h1 className="text-4xl md:text-5xl font-black max-w-2xl leading-tight">
            News &amp; <span className="text-[#3F7E47]">Events</span>
          </h1>
        </div>
      </div>

      {/* Articles */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Stay Informed"
            title="Falcon News & Events"
            description="The latest happenings, recognitions, and updates from FALCON Security."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {NEWS_ARTICLES.map((article) => (
              <article
                key={article.id}
                id={String(article.id)}
                className="border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group"
              >
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                  {article.image ? (
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <span className="text-gray-400 text-xs">Image Placeholder</span>
                  )}
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#3F7E47]">
                    {article.category}
                  </span>
                  <h3 className="font-bold text-dark mt-2 mb-3 leading-snug">{article.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-5">
                    <span className="flex items-center gap-1">
                      <MdCalendarToday className="w-3.5 h-3.5" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <BiTime className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full justify-center">
                    See Details
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewsAndEvents
