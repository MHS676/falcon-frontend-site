import { useState } from 'react'
import PageHero from '../../components/ui/PageHero'
import { TagBadge, NewsSidebar, NewsPageShell } from '../../components/ui/NewsComponents'
import { BLOG_POSTS } from '../../data/newsData'
import { FiArrowLeft, FiClock, FiUser } from 'react-icons/fi'

/* ─── Expanded full-article view ─────────────────────────────────── */
function BlogArticle({ post, onClose }) {
  return (
    <div className="animate-fade-in">
      <button
        onClick={onClose}
        className="flex items-center gap-2 text-gray-400 hover:text-[#3F7E47] transition-colors text-sm font-semibold mb-6"
      >
        <FiArrowLeft /> Back to Blog
      </button>

      {post.image && (
        <div className="w-full h-56 md:h-72 rounded-xl overflow-hidden mb-6">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags?.map((t) => <TagBadge key={t} tag={t} />)}
      </div>

      <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">{post.title}</h1>

      <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-6 pb-6 border-b border-white/10">
        {post.author && (
          <span className="flex items-center gap-1.5">
            <FiUser /> <span className="font-semibold text-gray-400">{post.author}</span>
          </span>
        )}
        <span className="flex items-center gap-1.5"><FiClock /> {post.date}</span>
        <span>{post.category}</span>
      </div>

      <p className="text-gray-300 leading-relaxed mb-6">{post.excerpt}</p>

      {post.content?.map((block, i) => (
        <div key={i} className="mb-5">
          {block.h && <h2 className="text-lg font-bold text-white mb-2">{block.h}</h2>}
          {block.p && <p className="text-gray-400 leading-relaxed">{block.p}</p>}
        </div>
      ))}
    </div>
  )
}

/* ─── Card ────────────────────────────────────────────────────────── */
function BlogCard({ post, onRead, large = false }) {
  return (
    <div
      className={`group cursor-pointer bg-dark/60 border border-white/10 rounded-xl overflow-hidden hover:border-primary/40 transition-colors duration-300 ${large ? 'flex flex-col md:flex-row' : ''}`}
      onClick={() => onRead(post)}
    >
      {post.image && (
        <div className={`overflow-hidden ${large ? 'md:w-2/5 h-48 md:h-auto' : 'h-40'}`}>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {post.tags?.map((t) => <TagBadge key={t} tag={t} />)}
        </div>

        <h3 className={`text-white font-bold leading-snug group-hover:text-[#3F7E47] transition-colors ${large ? 'text-xl' : 'text-base'}`}>
          {post.title}
        </h3>
        <p className="text-gray-400 text-sm mt-2 leading-relaxed flex-1 line-clamp-3">{post.excerpt}</p>

        <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap gap-3 items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-3">
            {post.author && (
              <span className="flex items-center gap-1.5"><FiUser className="shrink-0" />{post.author}</span>
            )}
            <span className="flex items-center gap-1.5"><FiClock className="shrink-0" />{post.date}</span>
          </div>
          <span className="text-[#3F7E47] font-bold group-hover:underline">Read more →</span>
        </div>
      </div>
    </div>
  )
}

/* ─── Page ────────────────────────────────────────────────────────── */
export default function BlogPage() {
  const [active, setActive] = useState(null)
  const [featured, ...rest] = BLOG_POSTS

  return (
    <div className="animate-fade-in">
      <PageHero
        eyebrow="News & Events"
        title={<>Security <span className="text-[#3F7E47]">Blog</span></>}
        subtitle="Expert insights, industry tips, and thought leadership from the FALCON Security team."
        breadcrumbs={[{ label: 'News & Events' }, { label: 'Blog' }]}
      />

      <NewsPageShell sidebar={<NewsSidebar currentKey="blog" />}>
        {active ? (
          <BlogArticle post={active} onClose={() => setActive(null)} />
        ) : (
          <>
            {/* Featured */}
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-[#3F7E47] mb-4">Featured Post</p>
              <BlogCard post={featured} onRead={setActive} large />
            </div>

            {/* Grid */}
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Latest Articles</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {rest.map((post) => (
                  <BlogCard key={post.id} post={post} onRead={setActive} />
                ))}
              </div>
            </div>
          </>
        )}
      </NewsPageShell>
    </div>
  )
}
