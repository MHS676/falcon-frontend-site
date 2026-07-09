import PageHero from '../../components/ui/PageHero'
import { ArticleCard, NewsSidebar, NewsPageShell } from '../../components/ui/NewsComponents'
import { GOVERNMENT_NEWS } from '../../data/newsData'

export default function GovernmentNews() {
  const [featured, ...rest] = GOVERNMENT_NEWS

  return (
    <div className="animate-fade-in">
      {/* <PageHero
        eyebrow="News & Events"
        title={<>Government <span className="text-[#3F7E47]">News</span></>}
        subtitle="Security industry developments, legislation, and government directives relevant to the private security sector."
        breadcrumbs={[{ label: 'News & Events' }, { label: 'Government News' }]}
      /> */}

      {/* Source ribbon */}
      <div className="bg-dark border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap gap-3 items-center">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Sources:</span>
          {['Ministry of Home Affairs', 'NSSIA', 'Dhaka Metropolitan Police', 'BGMEA', 'BGPSPA'].map((s) => (
            <span key={s} className="bg-white/5 border border-white/10 text-gray-300 text-[11px] font-semibold px-2.5 py-0.5 rounded">
              {s}
            </span>
          ))}
        </div>
      </div>

      <NewsPageShell sidebar={<NewsSidebar currentKey="government" />}>
        {/* Featured */}
        <div>
          <p className="text-xs font-black uppercase tracking-widest text-[#3F7E47] mb-4">Top Story</p>
          <ArticleCard item={featured} to={`/news-and-events/government/${featured.id}`} large />
        </div>

        {/* Grid */}
        <div>
          <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Government Updates</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {rest.map((item) => (
              <ArticleCard key={item.id} item={item} to={`/news-and-events/government/${item.id}`} />
            ))}
          </div>
        </div>
      </NewsPageShell>
    </div>
  )
}
