import { useState, useEffect } from 'react'

// Mock toast notification hook context or standard ui notification framework
// You can substitute this with your internal 'useToast', 'react-hot-toast', or custom system
const showNotification = (message, type = 'success') => {
  console.log(`[${type.toUpperCase()}]: ${message}`)
}

export default function EditElectronicSecurity() {
  const [isLoading, setIsLoading] = useState(false)
  const [initialData, setInitialData] = useState(null)

  // Modern Data Fetching Hook: Lifecycle fetch on configuration mount
  useEffect(() => {
    const fetchCurrentContent = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/admin/content/electronic-security', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          },
        })
        if (response.ok) {
          const data = await response.json()
          setInitialData(data)
        }
      } catch (error) {
        console.error('Failed to fetch existing record configurations:', error)
      }
    }
    fetchCurrentContent()
  }, [])

  const handleSave = async (formData) => {
    setIsLoading(true)
    try {
      // Modern Architecture: Use clean multi-part headers or JSON payloads dynamically
      // If uploading actual binary file streams, standard multipart/form-data rules apply
      const hasFile = formData instanceof FormData || (formData.bannerImage && formData.bannerImage[0])
      
      let requestBody = formData
      let contentTypeHeader = 'application/json'

      if (hasFile && !(formData instanceof FormData)) {
        const bodyMultipart = new FormData()
        Object.keys(formData).forEach((key) => {
          if (key === 'bannerImage' && formData[key]?.[0]) {
            bodyMultipart.append(key, formData[key][0])
          } else {
            bodyMultipart.append(key, formData[key])
          }
        })
        requestBody = bodyMultipart
        contentTypeHeader = null // Browser automatically populates multi-part boundary fields
      } else if (!(formData instanceof FormData)) {
        requestBody = JSON.stringify(formData)
      }

      const headers = {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
      }
      if (contentTypeHeader) {
        headers['Content-Type'] = contentTypeHeader
      }

      const response = await fetch(
        'http://localhost:3000/api/admin/content/electronic-security',
        {
          method: 'POST',
          headers,
          body: requestBody,
        }
      )

      if (!response.ok) {
        throw new Error('Failed to update content logs.')
      }

      showNotification("Electronic Security page updated successfully!", "success")
      
      // Modern alternative to full document updates: trigger layout data re-evaluation rather than window reloads
      // If a reload is required for structural clear outs, preserve runtime history state values cleanly
      setTimeout(() => {
        window.location.reload()
      }, 800)

    } catch (error) {
      showNotification(error.message || "An update transaction error occurred.", "error")
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  // Segment fields cleanly into modern card tabs or section maps
  const structuredFields = [
    {
      sectionTitle: 'Hero Visuals & Branding Banner',
      fields: [
        {
          name: 'bannerImage',
          label: 'Banner Canvas Cover Image',
          type: 'file',
          accept: 'image/*',
          placeholder: 'Upload banner image (recommended aspect asset canvas: 1920x400px)',
          help: 'Supported standard extensions: high-fidelity JPG, vector PNG, or WebP formatting.',
          initialValue: initialData?.bannerImage || '',
        }
      ]
    },
    {
      sectionTitle: 'Core Core Messaging Context',
      fields: [
        {
          name: 'title',
          label: 'Primary Page Header Title',
          type: 'text',
          placeholder: 'Electronic Security Services',
          required: true,
          initialValue: initialData?.title || 'Electronic Security Services',
        },
        {
          name: 'subtitle',
          label: 'Subheading Descriptive Anchor Line',
          type: 'text',
          placeholder: 'Enter sub-text context alignment notes...',
          initialValue: initialData?.subtitle || '',
        },
        {
          name: 'description',
          label: 'Detailed Page Text Description',
          type: 'textarea',
          placeholder: 'Provide the primary structural background text parameters outlining core electronic security vectors...',
          rows: 6,
          initialValue: initialData?.description || '',
        }
      ]
    },
    {
      sectionTitle: 'Meta Registries & Feature Index Sets',
      fields: [
        {
          name: 'highlights',
          label: 'Key Priority Service Highlights (Comma-separated nodes mapping)',
          type: 'textarea',
          placeholder: 'e.g., CCTV Systems, Alarm Systems, Biometric Access Controls',
          rows: 3,
          help: 'Separate distinct highlight points with programmatic standard comma symbols.',
          initialValue: initialData?.highlights || '',
        },
        {
          name: 'features',
          label: 'Granular Service Matrix Features (One key item entry per line breaks)',
          type: 'textarea',
          placeholder: 'List functional line item attributes here...',
          rows: 4,
          help: 'Hit enter to shift down lines dynamically for distinct system array indexes.',
          initialValue: initialData?.features || '',
        }
      ]
    }
  ]

  // Flatten mapped fields array configuration dynamically down to standard component interface bindings
  const unifiedFields = structuredFields.flatMap(section => 
    section.fields.map(f => ({
      ...f,
      label: (
        <div className="mb-1">
          <span className="text-[10px] font-bold text-neutral-400 tracking-wider block uppercase mb-1">
            {section.sectionTitle}
          </span>
          <span className="text-sm font-semibold text-neutral-800 tracking-tight">
            {f.label}
          </span>
        </div>
      )
    }))
  )

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      {/* Decorative Matrix Control Panel Wrapper Header */}
      <div className="mb-8 border-b border-neutral-200 pb-5">
        <div className="flex items-center gap-2 text-[10px] font-bold text-[#3F7E47] bg-[#3F7E47]/10 w-fit px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2">
          <span>Enterprise Pipeline Controller</span>
        </div>
        <h1 className="text-2xl font-black text-neutral-900 tracking-tight">
          {"<>"} Configuration Master Studio {"</>"}
        </h1>
        <p className="text-xs text-neutral-500 font-medium mt-1">
          Dynamically alter operational matrices, digital imagery assets, and data text indexes rendering globally across structural system end-points.
        </p>
      </div>

      <ContentEditor
        title="Edit Electronic Security Service Portal"
        description="Update the Electronic Security service page content matrix arrays and telemetry assets instantly."
        fields={unifiedFields}
        onSave={handleSave}
        isLoading={isLoading}
        successMessage="Electronic Security page updated successfully!"
      />
    </div>
  )
}