import PageHero from '../../components/ui/PageHero'
import { TagBadge, NewsSidebar, NewsPageShell } from '../../components/ui/NewsComponents'
import { NEWS_AWARDS } from '../../data/newsData'
import { FiAward } from 'react-icons/fi'

function AwardCard({ item }) {
  return (
    <div className="relative flex bg-dark/60 border border-white/10 rounded-xl overflow-hidden group hover:border-primary/40 transition-colors duration-300">
      {/* Left accent */}
      <div className="w-1.5 shrink-0 bg-[#3F7E47]" />

      <div className="p-5 flex-1">
        {/* Year + category row */}
        <div className="flex flex-wrap gap-2 items-center mb-3">
          <span className="bg-[#3F7E47]/20 text-[#3F7E47] border border-primary/30 text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded">
            {item.year}
          </span>
          <span className="bg-white/5 text-gray-400 border border-white/10 text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded">
            {item.category}
          </span>
          {item.tags?.map((t) => <TagBadge key={t} tag={t} />)}
        </div>

        <h3 className="text-white font-bold text-base leading-snug group-hover:text-[#3F7E47] transition-colors">
          {item.title}
        </h3>

        {item.body && (
          <p className="text-gray-500 text-xs font-semibold mt-1">Awarded by: {item.body}</p>
        )}

        <p className="text-gray-400 text-sm mt-2 leading-relaxed">{item.excerpt}</p>

        <div className="mt-4 pt-4 border-t border-white/10 text-xs text-gray-500">
          {item.date}
        </div>
      </div>

      {/* Icon watermark */}
      <div className="absolute right-4 bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
        <FiAward className="text-[#3F7E47] text-6xl" />
      </div>
    </div>
  )
}

export default function NewsAwards() {
  const years = [...new Set(NEWS_AWARDS.map((a) => a.year))].sort((a, b) => b - a)

  return (
    <div className="animate-fade-in">
      <PageHero
        eyebrow="News & Events"
        title={<>Awards & <span className="text-[#3F7E47]">Recognition</span></>}
        subtitle="Celebrating FALCON Security's excellence — nationally and internationally recognised for outstanding service and innovation."
        breadcrumbs={[{ label: 'News & Events' }, { label: 'Awards' }]}
      />

      {/* Trophy bar */}
      <div className="bg-[#3F7E47]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
            {[
              { value: '50+', label: 'Awards Won' },
              { value: '12', label: 'National Honours' },
              { value: '8',  label: 'International' },
              { value: '32', label: 'Years Recognised' },
            ].map((s) => (
              <div key={s.label} className="px-6 py-4 text-center">
                <p className="text-2xl font-black text-white">{s.value}</p>
                <p className="text-white/70 text-xs font-semibold uppercase tracking-wide mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <NewsPageShell sidebar={<NewsSidebar currentKey="awards" />}>
        {years.map((year) => (
          <div key={year}>
            <p className="text-xs font-black uppercase tracking-widest text-[#3F7E47] mb-4 flex items-center gap-2">
              <FiAward /> {year} Awards
            </p>
            <div className="flex flex-col gap-4 mb-8">
              {NEWS_AWARDS.filter((a) => a.year === year).map((item) => (
                <AwardCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        ))}
      </NewsPageShell>
    </div>
  )
}
