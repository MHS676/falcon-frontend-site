import { useState } from 'react'
import { ContentEditor } from '../../components/dashboard/ContentEditor'

export default function EditCompanyOverview() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSave = async (formData) => {
    setIsLoading(true)
    try {
      const response = await fetch(
        'http://localhost:3000/api/admin/content/company-overview',
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
      title="Edit Company Overview"
      description="Update company overview page content and banner"
      fields={[
        {
          name: 'bannerImage',
          label: 'Banner Image',
          type: 'file',
          accept: 'image/*',
          placeholder: 'Upload banner image (recommended: 1920x400px)',
        },
        {
          name: 'companyName',
          label: 'Company Name',
          type: 'text',
          placeholder: 'FALCON Security',
          initialValue: 'FALCON',
          required: true,
        },
        {
          name: 'about',
          label: 'About Company',
          type: 'textarea',
          placeholder: 'Write about the company',
          rows: 6,
        },
        {
          name: 'mission',
          label: 'Mission Statement',
          type: 'textarea',
          placeholder: 'Enter company mission',
          rows: 3,
        },
        {
          name: 'vision',
          label: 'Vision Statement',
          type: 'textarea',
          placeholder: 'Enter company vision',
          rows: 3,
        },
        {
          name: 'yearsInBusiness',
          label: 'Years in Business',
          type: 'number',
          placeholder: '25',
        },
        {
          name: 'employeeCount',
          label: 'Number of Employees',
          type: 'number',
          placeholder: '500+',
        },
      ]}
      onSave={handleSave}
      isLoading={isLoading}
      successMessage="Company overview updated successfully!"
    />
  )
}
