import PageHero from '../../components/ui/PageHero'
import { ArticleCard, NewsSidebar, NewsPageShell } from '../../components/ui/NewsComponents'
import { FALCON_NEWS } from '../../data/newsData'

export default function FalconNews() {
  const [featured, ...rest] = FALCON_NEWS

  return (
    <div className="animate-fade-in">
      <PageHero
        eyebrow="News & Events"
        title={<>FALCON <span className="text-[#3F7E47]">News</span></>}
        subtitle="The latest announcements, milestones, and operational updates from FALCON Security."
        breadcrumbs={[{ label: 'News & Events' }, { label: 'FALCON News' }]}
        backgroundImage="/documents/navlink_banner/events/WhatsApp%20Image%202026-06-03%20at%2011.15.51%20AM.jpeg"
      />

      {/* Stats bar */}
      {/* <div className="bg-[#3F7E47]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
            {[
              { value: '32+', label: 'Years of News' },
              { value: '400+', label: 'Client Stories' },
              { value: '64', label: 'Districts Covered' },
              { value: 'ALSOK', label: 'Global Partner' },
            ].map((s) => (
              <div key={s.label} className="px-6 py-4 text-center">
                <p className="text-2xl font-black text-white">{s.value}</p>
                <p className="text-white/70 text-xs font-semibold uppercase tracking-wide mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      <NewsPageShell sidebar={<NewsSidebar currentKey="news" />}>
        {/* Featured */}
        <div>
          <p className="text-xs font-black uppercase tracking-widest text-[#3F7E47] mb-4">Featured Story</p>
          <ArticleCard item={featured} to="#" large />
        </div>

        {/* Grid */}
        {/* <div>
          <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Latest News</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {rest.map((item) => (
              <ArticleCard key={item.id} item={item} to={`//${item.id}`} />
            ))}
          </div>
        </div> */}
      </NewsPageShell>
    </div>
  )
}
