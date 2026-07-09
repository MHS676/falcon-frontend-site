import { useState, useEffect } from 'react'
import { HiOutlineX, HiOutlinePlus, HiOutlineTrash, HiOutlinePencil } from 'react-icons/hi'
import { LuUpload, LuLoader } from 'react-icons/lu'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

export default function AdminDashboard() {
  const [pillars, setPillars] = useState([])
  const [loading, setLoading] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [uploading, setUploading] = useState(false)

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    icon: '',
    image: '',
    order: 0,
  })

  // Fetch pillars
  useEffect(() => {
    fetchPillars()
  }, [])

  const fetchPillars = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${API_URL}/api/pillars`)
      if (!response.ok) throw new Error('Failed to fetch pillars')
      const data = await response.json()
      setPillars(data)
    } catch (error) {
      console.error('Error fetching pillars:', error)
      alert('Failed to load pillars')
    } finally {
      setLoading(false)
    }
  }

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'order' ? parseInt(value) : value,
    }))
  }

  // Handle image upload
  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    try {
      setUploading(true)
      const uploadFormData = new FormData()
      uploadFormData.append('file', file)

      const response = await fetch(`${API_URL}/api/pillars/upload`, {
        method: 'POST',
        body: uploadFormData,
      })

      if (!response.ok) throw new Error('Upload failed')
      const data = await response.json()

      setFormData((prev) => ({
        ...prev,
        image: data.path,
      }))
      alert('Image uploaded successfully!')
    } catch (error) {
      console.error('Error uploading image:', error)
      alert('Failed to upload image')
    } finally {
      setUploading(false)
    }
  }

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.title || !formData.description) {
      alert('Please fill in all required fields')
      return
    }

    try {
      setLoading(true)
      const method = editingId ? 'PATCH' : 'POST'
      const url = editingId
        ? `${API_URL}/api/pillars/${editingId}`
        : `${API_URL}/api/pillars`

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Failed to save pillar')

      alert(editingId ? 'Pillar updated successfully!' : 'Pillar created successfully!')
      resetForm()
      fetchPillars()
    } catch (error) {
      console.error('Error saving pillar:', error)
      alert('Failed to save pillar')
    } finally {
      setLoading(false)
    }
  }

  // Edit pillar
  const handleEdit = (pillar) => {
    setFormData({
      title: pillar.title,
      description: pillar.description,
      icon: pillar.icon || '',
      image: pillar.image || '',
      order: pillar.order || 0,
    })
    setEditingId(pillar.id)
    setShowForm(true)
  }

  // Delete pillar
  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this pillar?')) return

    try {
      setLoading(true)
      const response = await fetch(`${API_URL}/api/pillars/${id}`, {
        method: 'DELETE',
      })

      if (!response.ok) throw new Error('Failed to delete pillar')

      alert('Pillar deleted successfully!')
      fetchPillars()
    } catch (error) {
      console.error('Error deleting pillar:', error)
      alert('Failed to delete pillar')
    } finally {
      setLoading(false)
    }
  }

  // Reset form
  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      icon: '',
      image: '',
      order: 0,
    })
    setEditingId(null)
    setShowForm(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black text-dark mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage FALCON's Life and Culture Pillars</p>
        </div>

        {/* Add Button */}
        <button
          onClick={() => setShowForm(!showForm)}
          className="mb-8 inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors"
        >
          <HiOutlinePlus className="w-5 h-5" />
          Add New Pillar
        </button>

        {/* Form Modal */}
        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-black text-dark">
                  {editingId ? 'Edit Pillar' : 'Create New Pillar'}
                </h2>
                <button
                  onClick={resetForm}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <HiOutlineX className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title */}
                <div>
                  <label className="block text-sm font-bold text-dark mb-2">
                    Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="e.g., Inclusive Culture"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-bold text-dark mb-2">
                    Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Enter detailed description..."
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>

                {/* Icon */}
                <div>
                  <label className="block text-sm font-bold text-dark mb-2">
                    Icon (name or emoji)
                  </label>
                  <input
                    type="text"
                    name="icon"
                    value={formData.icon}
                    onChange={handleChange}
                    placeholder="e.g., heart, LuHandshake, or 💼"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Order */}
                <div>
                  <label className="block text-sm font-bold text-dark mb-2">
                    Display Order
                  </label>
                  <input
                    type="number"
                    name="order"
                    value={formData.order}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-bold text-dark mb-2">
                    Upload Image
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                      disabled={uploading}
                    />
                    <label htmlFor="image-upload" className="cursor-pointer block">
                      {uploading ? (
                        <div className="flex items-center justify-center gap-2">
                          <LuLoader className="w-5 h-5 animate-spin text-primary" />
                          <span className="text-primary font-semibold">Uploading...</span>
                        </div>
                      ) : (
                        <div>
                          <LuUpload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-600">
                            Click to upload or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 mt-1">PNG, JPG, GIF up to 5MB</p>
                        </div>
                      )}
                    </label>
                  </div>
                  {formData.image && (
                    <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                      <p className="text-sm font-semibold text-dark mb-2">Current Image:</p>
                      <img
                        src={`${API_URL}${formData.image}`}
                        alt="Preview"
                        className="max-h-48 rounded-lg"
                      />
                    </div>
                  )}
                </div>

                {/* Submit Buttons */}
                <div className="flex gap-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-primary text-white py-3 rounded-lg font-bold hover:bg-primary/90 disabled:opacity-50 transition-colors"
                  >
                    {loading ? 'Saving...' : editingId ? 'Update Pillar' : 'Create Pillar'}
                  </button>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="flex-1 bg-gray-200 text-dark py-3 rounded-lg font-bold hover:bg-gray-300 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Pillars Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {loading && !showForm ? (
            <div className="p-8 text-center">
              <p className="text-gray-600">Loading pillars...</p>
            </div>
          ) : pillars.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-gray-600 mb-4">No pillars yet. Create one to get started!</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-dark">Order</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-dark">Title</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-dark">Description</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-dark">Image</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-dark">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {pillars.map((pillar) => (
                    <tr key={pillar.id} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-dark font-semibold">
                        {pillar.order}
                      </td>
                      <td className="px-6 py-4 text-sm text-dark font-semibold">
                        {pillar.title}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {pillar.description.substring(0, 50)}...
                      </td>
                      <td className="px-6 py-4">
                        {pillar.image ? (
                          <img
                            src={`${API_URL}${pillar.image}`}
                            alt={pillar.title}
                            className="h-10 w-10 object-cover rounded"
                          />
                        ) : (
                          <span className="text-gray-400 text-sm">No image</span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(pillar)}
                            className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
                            title="Edit"
                          >
                            <HiOutlinePencil className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleDelete(pillar.id)}
                            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete"
                          >
                            <HiOutlineTrash className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow">
            <p className="text-gray-600 text-sm mb-2">Total Pillars</p>
            <p className="text-3xl font-black text-dark">{pillars.length}</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <p className="text-gray-600 text-sm mb-2">With Images</p>
            <p className="text-3xl font-black text-primary">
              {pillars.filter((p) => p.image).length}
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <p className="text-gray-600 text-sm mb-2">Status</p>
            <p className="text-lg font-bold text-green-600">✓ Active</p>
          </div>
        </div>
      </div>
    </div>
  )
}
