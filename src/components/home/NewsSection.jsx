import { NEWS_ARTICLES } from '../../data/siteData'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import { MdCalendarToday } from 'react-icons/md'
import { BiTime } from 'react-icons/bi'

function NewsSection() {
  // return (
  //   <section className="py-20 bg-white">
  //     <div className="container-custom">
  //       <SectionHeading title="Falcon News & Events" />
  //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  //         {NEWS_ARTICLES.map((article) => (
  //           <article
  //             key={article.id}
  //             className="border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group"
  //           >
  //             {/* Image placeholder */}
  //             <div className="w-full h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
  //               {article.image ? (
  //                 <img
  //                   src={article.image}
  //                   alt={article.title}
  //                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
  //                 />
  //               ) : (
  //                 <span className="text-gray-400 text-xs">Image Placeholder</span>
  //               )}
  //             </div>
  //             <div className="p-5">
  //               <span className="text-xs font-bold uppercase tracking-wider text-[#3F7E47]">
  //                 {article.category}
  //               </span>
  //               <h3 className="font-bold text-dark mt-2 mb-3 leading-snug line-clamp-2">
  //                 {article.title}
  //               </h3>
  //               <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
  //                 {article.excerpt}
  //               </p>
  //               <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
  //                 <span className="flex items-center gap-1">
  //                   <MdCalendarToday className="w-3.5 h-3.5" />
  //                   {article.date}
  //                 </span>
  //                 <span className="flex items-center gap-1">
  //                   <BiTime className="w-3.5 h-3.5" />
  //                   Reading Time: {article.readTime}
  //                 </span>
  //               </div>
  //               <Button to={`/news-and-events#${article.id}`} variant="outline" size="sm" className="w-full justify-center">
  //                 See Details
  //               </Button>
  //             </div>
  //           </article>
  //         ))}
  //       </div>
  //       <div className="flex justify-center mt-10">
  //         <Button to="/news-and-events" variant="outline" size="lg">
  //           View All News
  //         </Button>
  //       </div>
  //     </div>
  //   </section>
  // )
}

export default NewsSection
