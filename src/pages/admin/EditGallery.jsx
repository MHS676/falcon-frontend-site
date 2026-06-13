import { useState } from 'react'
import { DashboardLayout } from '../../components/dashboard/DashboardLayout'
import { HiOutlineArrowLeft, HiOutlineCheckCircle, HiOutlineTrash } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

export default function EditGallery() {
  const navigate = useNavigate()
  const [images, setImages] = useState([])
  const [showSuccess, setShowSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [newImage, setNewImage] = useState({
    title: '',
    category: 'Events',
    file: null,
  })

  const categories = [
    'Business Areas',
    'Operations',
    'Training',
    'Services',
    'Company',
    'Events',
  ]

  const handleAddImage = () => {
    if (!newImage.file || !newImage.title) {
      alert('Please select an image and enter a title')
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      setImages([
        ...images,
        {
          id: Date.now(),
          title: newImage.title,
          category: newImage.category,
          preview: e.target.result,
          file: newImage.file,
        },
      ])
      setNewImage({ title: '', category: 'Events', file: null })
    }
    reader.readAsDataURL(newImage.file)
  }

  const handleRemoveImage = (id) => {
    setImages(images.filter((img) => img.id !== id))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const formData = new FormData()
      formData.append('images', JSON.stringify(images.map((img) => ({
        title: img.title,
        category: img.category,
      }))))

      images.forEach((img) => {
        if (img.file) {
          formData.append('files', img.file)
        }
      })

      const response = await fetch(
        'http://localhost:3000/api/admin/content/gallery',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          },
          body: formData,
        }
      )

      if (!response.ok) {
        throw new Error('Failed to save gallery')
      }

      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 3000)
    } catch (error) {
      alert('Failed to save gallery: ' + error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <DashboardLayout title="Edit Gallery">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => navigate('/admin/dashboard')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <HiOutlineArrowLeft size={20} />
            Back
          </button>
          <h2 className="text-2xl font-bold text-gray-800">Gallery Management</h2>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="mb-6 flex items-center gap-3 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            <HiOutlineCheckCircle size={20} />
            Gallery images uploaded successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-8 space-y-8">
          {/* Add New Image Section */}
          <div className="border-b pb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Add Image</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image Title
                </label>
                <input
                  type="text"
                  value={newImage.title}
                  onChange={(e) =>
                    setNewImage({ ...newImage, title: e.target.value })
                  }
                  placeholder="Enter image title"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E5128] focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={newImage.category}
                  onChange={(e) =>
                    setNewImage({ ...newImage, category: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E5128] focus:border-transparent outline-none"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image File
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setNewImage({ ...newImage, file: e.target.files[0] })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={handleAddImage}
              className="mt-4 px-6 py-2 bg-[#1E5128] hover:bg-[#163d20] text-white font-semibold rounded-lg transition-colors"
            >
              Add Image
            </button>
          </div>

          {/* Images Grid */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Uploaded Images ({images.length})
            </h3>

            {images.length === 0 ? (
              <p className="text-gray-500 text-center py-8">
                No images added yet. Add some images above.
              </p>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((img) => (
                  <div key={img.id} className="relative group">
                    <img
                      src={img.preview}
                      alt={img.title}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button
                        type="button"
                        onClick={() => handleRemoveImage(img.id)}
                        className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700"
                      >
                        <HiOutlineTrash size={20} />
                      </button>
                    </div>
                    <div className="mt-2 text-sm">
                      <p className="font-medium text-gray-800 truncate">
                        {img.title}
                      </p>
                      <p className="text-gray-600">{img.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-6">
            <button
              type="submit"
              disabled={isLoading || images.length === 0}
              className="px-6 py-3 bg-[#1E5128] hover:bg-[#163d20] text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Uploading...' : 'Upload All Images'}
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
