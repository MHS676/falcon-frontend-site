function SectionHeading({ eyebrow, title, description, align = 'center', className = '' }) {
  const alignMap = {
    center: 'text-center items-center',
    left: 'text-left items-start',
    right: 'text-right items-end',
  }

  return (
    <div className={`flex flex-col gap-3 mb-10 ${alignMap[align]} ${className}`}>
      {eyebrow && (
        <p className="text-[#3F7E47] font-semibold text-sm uppercase tracking-widest">{eyebrow}</p>
      )}
      <h2 className="section-heading">{title}</h2>
      {description && (
        <p className={`section-subheading ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
