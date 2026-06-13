import { useEffect } from 'react'
import { FiCheck, FiX, FiAlertCircle } from 'react-icons/fi'

function Toast({ message, type = 'success' }) {
  const config = {
    success: { icon: FiCheck, bg: 'bg-green-600', text: 'text-white' },
    error: { icon: FiAlertCircle, bg: 'bg-red-600', text: 'text-white' },
    info: { icon: FiAlertCircle, bg: 'bg-blue-600', text: 'text-white' },
  }
  const { icon: Icon, bg, text } = config[type] || config.success

  return (
    <div
      className={`fixed bottom-6 right-6 z-[9999] flex items-center gap-3 ${bg} ${text} px-5 py-3.5 shadow-xl max-w-sm animate-slide-up`}
    >
      <Icon className="w-5 h-5 shrink-0" />
      <p className="text-sm font-medium">{message}</p>
    </div>
  )
}

export default Toast
