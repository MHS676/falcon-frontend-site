import { useState } from 'react'
import { ContentEditor } from '../../components/dashboard/ContentEditor'

export default function EditHomeBanner() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSave = async (formData) => {
    setIsLoading(true)
    try {
      const response = await fetch(
        'http://localhost:3000/api/admin/content/home-banner',
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
      title="Edit Home Banner"
      description="Update the homepage hero banner image and text"
      fields={[
        {
          name: 'bannerImage',
          label: 'Banner Image',
          type: 'file',
          accept: 'image/*',
          placeholder: 'Upload banner image (recommended: 1920x600px)',
          help: 'JPG, PNG, or WebP format',
        },
        {
          name: 'mainHeading',
          label: 'Main Heading',
          type: 'text',
          placeholder: 'Enter main banner heading',
          required: true,
          initialValue: 'Comprehensive Security Solutions',
        },
        {
          name: 'subHeading',
          label: 'Sub Heading',
          type: 'text',
          placeholder: 'Enter sub heading',
          initialValue: 'Your trusted partner in security',
        },
        {
          name: 'description',
          label: 'Banner Description',
          type: 'textarea',
          placeholder: 'Enter banner description text',
          rows: 4,
          initialValue: '',
        },
        {
          name: 'ctaButtonText',
          label: 'CTA Button Text',
          type: 'text',
          placeholder: 'e.g., Learn More',
          initialValue: 'Explore Services',
        },
        {
          name: 'ctaButtonLink',
          label: 'CTA Button Link',
          type: 'text',
          placeholder: 'e.g., /what-we-offer/physical-security',
          initialValue: '/',
        },
      ]}
      onSave={handleSave}
      isLoading={isLoading}
      successMessage="Home banner updated successfully!"
    />
  )
}
