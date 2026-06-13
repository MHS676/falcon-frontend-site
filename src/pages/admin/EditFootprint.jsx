import { useState } from 'react'
import { ContentEditor } from '../../components/dashboard/ContentEditor'

export default function EditFootprint() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSave = async (formData) => {
    setIsLoading(true)
    try {
      const response = await fetch(
        'http://localhost:3000/api/admin/content/footprint',
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
      title="Edit Our Footprint"
      description="Update Our Footprint page with locations and coverage information"
      fields={[
        {
          name: 'bannerImage',
          label: 'Banner Image',
          type: 'file',
          accept: 'image/*',
          placeholder: 'Upload banner image',
        },
        {
          name: 'pageTitle',
          label: 'Page Title',
          type: 'text',
          initialValue: 'Our Footprint',
          required: true,
        },
        {
          name: 'description',
          label: 'Page Description',
          type: 'textarea',
          placeholder: 'Describe company coverage and locations',
          rows: 4,
        },
        {
          name: 'locations',
          label: 'Locations & Offices',
          type: 'textarea',
          placeholder: 'List all office locations',
          rows: 6,
        },
        {
          name: 'coverage',
          label: 'Coverage Area',
          type: 'textarea',
          placeholder: 'Describe geographic coverage',
          rows: 4,
        },
      ]}
      onSave={handleSave}
      isLoading={isLoading}
      successMessage="Our Footprint page updated successfully!"
    />
  )
}
