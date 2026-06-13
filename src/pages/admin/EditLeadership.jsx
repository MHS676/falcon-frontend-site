import { useState } from 'react'
import { ContentEditor } from '../../components/dashboard/ContentEditor'

export default function EditLeadership() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSave = async (formData) => {
    setIsLoading(true)
    try {
      const response = await fetch(
        'http://localhost:3000/api/admin/content/leadership',
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
      title="Edit Leadership Team"
      description="Update leadership team page content and banner"
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
          initialValue: 'Our Leadership',
          required: true,
        },
        {
          name: 'pageDescription',
          label: 'Page Description',
          type: 'textarea',
          placeholder: 'Describe your leadership team',
          rows: 4,
        },
        {
          name: 'teamMembers',
          label: 'Team Members (JSON format)',
          type: 'textarea',
          placeholder: '[{"name": "John Doe", "position": "CEO", "image": "path"}]',
          rows: 6,
          help: 'Paste team members data in JSON format',
        },
      ]}
      onSave={handleSave}
      isLoading={isLoading}
      successMessage="Leadership page updated successfully!"
    />
  )
}
