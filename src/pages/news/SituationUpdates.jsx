import PageHero from '../../components/ui/PageHero'
import { TagBadge, NewsSidebar, NewsPageShell } from '../../components/ui/NewsComponents'
import { SITUATION_UPDATES } from '../../data/newsData'

const SEVERITY_STYLES = {
  High:   { bar: 'bg-red-600',    badge: 'bg-red-600/20 text-red-400 border border-red-500/30' },
  Medium: { bar: 'bg-amber-500',  badge: 'bg-amber-500/20 text-amber-400 border border-amber-400/30' },
  Low:    { bar: 'bg-slate-500',  badge: 'bg-slate-700 text-slate-300 border border-slate-600' },
}

function UpdateCard({ item }) {
  const sev = SEVERITY_STYLES[item.severity] ?? SEVERITY_STYLES.Low
  return (
    <div className="relative bg-dark/60 border border-white/10 rounded-xl overflow-hidden group hover:border-primary/40 transition-colors duration-300">
      {/* Severity bar */}
      <div className={`h-1 w-full ${sev.bar}`} />

      <div className="p-5">
        <div className="flex flex-wrap gap-2 items-center mb-3">
          <span className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${sev.badge}`}>
            {item.severity} Severity
          </span>
          <span className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${item.active ? 'bg-green-600/20 text-green-400 border border-green-500/30' : 'bg-white/5 text-gray-500 border border-white/10'}`}>
            {item.active ? '● Active' : '✓ Resolved'}
          </span>
          {item.tags?.map((t) => <TagBadge key={t} tag={t} />)}
        </div>

        <h3 className="text-white font-bold text-base leading-snug group-hover:text-[#3F7E47] transition-colors">
          {item.title}
        </h3>
        <p className="text-gray-400 text-sm mt-2 leading-relaxed">{item.excerpt}</p>

        <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-500">
          <span>{item.date}</span>
          <span className="font-semibold text-gray-400">{item.category}</span>
        </div>
      </div>
    </div>
  )
}

export default function SituationUpdates() {
  const active   = SITUATION_UPDATES.filter((u) => u.active)
  const resolved = SITUATION_UPDATES.filter((u) => !u.active)

  return (
    <div className="animate-fade-in">
      <PageHero
        eyebrow="News & Events"
        title={<>Situation <span className="text-[#3F7E47]">Updates</span></>}
        subtitle="Real-time operational advisories, threat assessments, and security situation reports across Bangladesh."
        breadcrumbs={[{ label: 'News & Events' }, { label: 'Situation Updates' }]}
        bgClass="bg-gradient-to-br from-slate-900 via-dark to-black"
      />

      {/* Legend */}
      <div className="bg-dark border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap gap-4 items-center">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Severity:</span>
          {['High', 'Medium', 'Low'].map((s) => (
            <span key={s} className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded ${SEVERITY_STYLES[s].badge}`}>
              {s}
            </span>
          ))}
        </div>
      </div>

      <NewsPageShell sidebar={<NewsSidebar currentKey="updates" />}>
        {active.length > 0 && (
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-red-500 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse inline-block" />
              Active Situations ({active.length})
            </p>
            <div className="flex flex-col gap-4">
              {active.map((item) => <UpdateCard key={item.id} item={item} />)}
            </div>
          </div>
        )}

        {resolved.length > 0 && (
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-4">
              Resolved / Historical
            </p>
            <div className="flex flex-col gap-4">
              {resolved.map((item) => <UpdateCard key={item.id} item={item} />)}
            </div>
          </div>
        )}
      </NewsPageShell>
    </div>
  )
}
