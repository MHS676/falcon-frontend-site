function Card({ children, className = '', hover = true, padding = true }) {
  return (
    <div
      className={`card ${padding ? 'p-6' : ''} ${
        hover ? 'hover:shadow-md hover:-translate-y-0.5 transition-all duration-300' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}

export default Card
