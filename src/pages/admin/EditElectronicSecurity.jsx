import { useState } from 'react'
import { ContentEditor } from '../../components/dashboard/ContentEditor'

export default function EditElectronicSecurity() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSave = async (formData) => {
    setIsLoading(true)
    try {
      const response = await fetch(
        'http://localhost:3000/api/admin/content/electronic-security',
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
      title="Edit Electronic Security"
      description="Update the Electronic Security service page content and banner"
      fields={[
        {
          name: 'bannerImage',
          label: 'Banner Image',
          type: 'file',
          accept: 'image/*',
          placeholder: 'Upload banner image (recommended: 1920x400px)',
          help: 'JPG, PNG, or WebP format',
        },
        {
          name: 'title',
          label: 'Page Title',
          type: 'text',
          placeholder: 'Electronic Security Services',
          required: true,
          initialValue: 'Electronic Security Services',
        },
        {
          name: 'subtitle',
          label: 'Subtitle',
          type: 'text',
          placeholder: 'Enter subtitle',
          initialValue: '',
        },
        {
          name: 'description',
          label: 'Page Description',
          type: 'textarea',
          placeholder: 'Enter detailed description of electronic security services',
          rows: 6,
          initialValue: '',
        },
        {
          name: 'highlights',
          label: 'Key Highlights (comma-separated)',
          type: 'textarea',
          placeholder: 'e.g., CCTV Systems, Alarm Monitoring, Access Control',
          rows: 3,
          initialValue: '',
        },
        {
          name: 'features',
          label: 'Service Features (one per line)',
          type: 'textarea',
          placeholder: 'List main features here',
          rows: 4,
          initialValue: '',
        },
      ]}
      onSave={handleSave}
      isLoading={isLoading}
      successMessage="Electronic Security page updated successfully!"
    />
  )
}
