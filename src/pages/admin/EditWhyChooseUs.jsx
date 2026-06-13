import { useState } from 'react'
import { ContentEditor } from '../../components/dashboard/ContentEditor'

export default function EditWhyChooseUs() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSave = async (formData) => {
    setIsLoading(true)
    try {
      const response = await fetch(
        'http://localhost:3000/api/admin/content/why-choose-us',
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
      title="Edit Why Choose Us"
      description="Update Why Choose Us page content and banner"
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
          initialValue: 'Why Choose FALCON',
          required: true,
        },
        {
          name: 'intro',
          label: 'Introduction',
          type: 'textarea',
          placeholder: 'Introduce why clients should choose your company',
          rows: 4,
        },
        {
          name: 'reasons',
          label: 'Key Reasons (one per line)',
          type: 'textarea',
          placeholder: 'List compelling reasons here',
          rows: 6,
        },
        {
          name: 'testimonials',
          label: 'Client Testimonials',
          type: 'textarea',
          placeholder: 'Add client testimonials',
          rows: 4,
        },
      ]}
      onSave={handleSave}
      isLoading={isLoading}
      successMessage="Why Choose Us page updated successfully!"
    />
  )
}
