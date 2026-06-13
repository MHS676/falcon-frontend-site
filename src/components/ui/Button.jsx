import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  showArrow = false,
  fullWidth = false,
}) {
  const sizeMap = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const variantMap = {
    primary: 'btn-primary',
    outline: 'btn-outline',
    'outline-white': 'btn-outline-white',
    ghost: 'text-[#3F7E47] hover:underline font-semibold text-sm',
  }

  const classes = [
    variantMap[variant],
    sizeMap[size],
    fullWidth ? 'w-full justify-center' : '',
    disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {showArrow && <FiArrowRight className="w-4 h-4" />}
      {children}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {content}
    </button>
  )
}

export default Button
