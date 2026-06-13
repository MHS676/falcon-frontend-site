import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

function StarRating({ rating, max = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: max }).map((_, i) => {
        if (i + 1 <= rating) {
          return <FaStar key={i} className="w-4 h-4 text-yellow-400" />
        } else if (i + 0.5 <= rating) {
          return <FaStarHalfAlt key={i} className="w-4 h-4 text-yellow-400" />
        }
        return <FaRegStar key={i} className="w-4 h-4 text-gray-300" />
      })}
    </div>
  )
}

export default StarRating
