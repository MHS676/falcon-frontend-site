import { useState } from 'react'
import { ContentEditor } from '../../components/dashboard/ContentEditor'

export default function EditAllServices() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSave = async (formData) => {
    setIsLoading(true)
    try {
      const response = await fetch(
        'http://localhost:3000/api/admin/content/services',
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
      title="Manage All Services"
      description="Edit and manage all security services and offerings"
      fields={[
        {
          name: 'serviceCategory',
          label: 'Service Category',
          type: 'select',
          options: [
            { value: 'physical', label: 'Physical Security' },
            { value: 'electronic', label: 'Electronic Security' },
            { value: 'monitoring', label: 'Central Monitoring' },
            { value: 'consulting', label: 'Security Consulting' },
            { value: 'other', label: 'Other Services' },
          ],
          required: true,
        },
        {
          name: 'serviceName',
          label: 'Service Name',
          type: 'text',
          placeholder: 'Enter service name',
          required: true,
        },
        {
          name: 'description',
          label: 'Service Description',
          type: 'textarea',
          placeholder: 'Detailed description of the service',
          rows: 5,
        },
        {
          name: 'bannerImage',
          label: 'Service Banner Image',
          type: 'file',
          accept: 'image/*',
          placeholder: 'Upload banner image',
        },
        {
          name: 'features',
          label: 'Key Features (one per line)',
          type: 'textarea',
          placeholder: 'List key features',
          rows: 4,
        },
        {
          name: 'price',
          label: 'Price Range',
          type: 'text',
          placeholder: 'e.g., Custom Quotes Available',
        },
      ]}
      onSave={handleSave}
      isLoading={isLoading}
      successMessage="Services updated successfully!"
    />
  )
}
