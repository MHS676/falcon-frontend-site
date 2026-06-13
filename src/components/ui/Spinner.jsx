function Spinner({ size = 'md', color = 'text-[#3F7E47]' }) {
  const sizeMap = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-2',
    lg: 'w-12 h-12 border-4',
  }
  return (
    <div
      className={`${sizeMap[size]} ${color} border-current border-t-transparent rounded-full animate-spin`}
    />
  )
}

export default Spinner
