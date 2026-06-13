import { useState } from 'react'
import { ContentEditor } from '../../components/dashboard/ContentEditor'

export default function EditFeaturedNews() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSave = async (formData) => {
    setIsLoading(true)
    try {
      const response = await fetch(
        'http://localhost:3000/api/admin/content/featured-news',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          },
          body: JSON.stringify(formData),
        }
      )

      if (!response.ok) {
        throw new Error('Failed to save content')
      }

      window.location.reload()
    } catch (error) {
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <ContentEditor
      title="Edit Featured News"
      description="Update the featured news story displayed on the homepage"
      fields={[
        {
          name: 'newsImage',
          label: 'News Image',
          type: 'file',
          accept: 'image/*',
          placeholder: 'Upload news image',
        },
        {
          name: 'newsTitle',
          label: 'News Title',
          type: 'text',
          placeholder: 'Enter news title',
          required: true,
        },
        {
          name: 'newsTag',
          label: 'News Tag/Category',
          type: 'text',
          placeholder: 'e.g., Company, Events, Updates',
        },
        {
          name: 'newsExcerpt',
          label: 'News Excerpt',
          type: 'textarea',
          placeholder: 'Short summary of the news',
          rows: 4,
          required: true,
        },
        {
          name: 'newsContent',
          label: 'Full News Content',
          type: 'textarea',
          placeholder: 'Full news article content',
          rows: 8,
        },
        {
          name: 'publishDate',
          label: 'Publish Date',
          type: 'text',
          placeholder: 'e.g., 2026-06-03',
        },
        {
          name: 'author',
          label: 'Author',
          type: 'text',
          placeholder: 'Author name',
        },
      ]}
      onSave={handleSave}
      isLoading={isLoading}
      successMessage="Featured news updated successfully!"
    />
  )
}
