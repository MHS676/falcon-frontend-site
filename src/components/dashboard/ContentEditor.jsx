import { useState } from 'react'
import { HiOutlineArrowLeft, HiOutlineCheckCircle } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import { DashboardLayout } from './DashboardLayout'

export const ContentEditor = ({
  title,
  description,
  fields,
  onSave,
  isLoading = false,
  successMessage = 'Content saved successfully!',
}) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => {
      acc[field.name] = field.initialValue || ''
      return acc
    }, {})
  )
  const [showSuccess, setShowSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    try {
      await onSave(formData)
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 3000)
    } catch (err) {
      setError(err.message || 'Failed to save content')
    }
  }

  return (
    <DashboardLayout title={title}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => navigate('/admin/dashboard')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <HiOutlineArrowLeft size={20} />
            Back
          </button>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
            {description && (
              <p className="text-gray-600 text-sm mt-1">{description}</p>
            )}
          </div>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="mb-6 flex items-center gap-3 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            <HiOutlineCheckCircle size={20} />
            {successMessage}
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-8">
          <div className="space-y-6">
            {fields.map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {field.label}
                  {field.required && <span className="text-red-600 ml-1">*</span>}
                </label>

                {field.type === 'textarea' ? (
                  <textarea
                    name={field.name}
                    value={formData[field.name]}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    placeholder={field.placeholder}
                    rows={field.rows || 4}
                    required={field.required}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E5128] focus:border-transparent outline-none transition resize-none"
                  />
                ) : field.type === 'number' ? (
                  <input
                    type="number"
                    name={field.name}
                    value={formData[field.name]}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    placeholder={field.placeholder}
                    required={field.required}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E5128] focus:border-transparent outline-none transition"
                  />
                ) : field.type === 'file' ? (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#1E5128] transition-colors">
                    <input
                      type="file"
                      name={field.name}
                      onChange={(e) =>
                        handleChange(field.name, e.target.files[0])
                      }
                      accept={field.accept}
                      className="w-full"
                    />
                    <p className="text-gray-600 text-sm mt-2">
                      {field.placeholder}
                    </p>
                  </div>
                ) : field.type === 'select' ? (
                  <select
                    name={field.name}
                    value={formData[field.name]}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    required={field.required}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E5128] focus:border-transparent outline-none transition"
                  >
                    <option value="">Select {field.label}</option>
                    {field.options?.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type="text"
                    name={field.name}
                    value={formData[field.name]}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    placeholder={field.placeholder}
                    required={field.required}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E5128] focus:border-transparent outline-none transition"
                  />
                )}

                {field.help && (
                  <p className="text-xs text-gray-500 mt-1">{field.help}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 flex gap-4">
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-3 bg-[#1E5128] hover:bg-[#163d20] text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Saving...' : 'Save Changes'}
            </button>
            <button
              type="button"
              onClick={() => navigate('/admin/dashboard')}
              className="px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold rounded-lg transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  )
}
