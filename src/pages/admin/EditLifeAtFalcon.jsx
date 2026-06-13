import { useState } from 'react'
import { ContentEditor } from '../../components/dashboard/ContentEditor'

export default function EditLifeAtFalcon() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSave = async (formData) => {
    setIsLoading(true)
    try {
      const response = await fetch(
        'http://localhost:3000/api/admin/content/life-at-falcon',
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
      title="Edit Life at FALCON"
      description="Update Life at FALCON page with company culture and benefits"
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
          initialValue: 'Life at FALCON',
          required: true,
        },
        {
          name: 'cultureDescription',
          label: 'Company Culture',
          type: 'textarea',
          placeholder: 'Describe company culture',
          rows: 4,
        },
        {
          name: 'benefits',
          label: 'Employee Benefits',
          type: 'textarea',
          placeholder: 'List employee benefits and perks',
          rows: 5,
        },
        {
          name: 'workEnvironment',
          label: 'Work Environment',
          type: 'textarea',
          placeholder: 'Describe the work environment',
          rows: 4,
        },
        {
          name: 'events',
          label: 'Company Events',
          type: 'textarea',
          placeholder: 'List company events and activities',
          rows: 4,
        },
      ]}
      onSave={handleSave}
      isLoading={isLoading}
      successMessage="Life at FALCON page updated successfully!"
    />
  )
}
