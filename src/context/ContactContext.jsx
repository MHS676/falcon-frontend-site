import { createContext, useContext, useState, useCallback } from 'react'

// ─── Context ──────────────────────────────────────────────────────────────────
const ContactContext = createContext(null)

const initialFormState = {
  email: '',
  firstName: '',
  lastName: '',
  phone: '',
  company: '',
  country: 'Bangladesh',
  service: '',
  message: '',
}

// ─── Provider ─────────────────────────────────────────────────────────────────
export function ContactProvider({ children }) {
  const [formData, setFormData] = useState(initialFormState)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const updateField = useCallback((field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setFormErrors((prev) => ({ ...prev, [field]: '' }))
  }, [])

  const validateForm = useCallback(() => {
    const errors = {}
    if (!formData.email) errors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Invalid email'
    if (!formData.firstName) errors.firstName = 'First name is required'
    if (!formData.lastName) errors.lastName = 'Last name is required'
    if (!formData.company) errors.company = 'Company name is required'
    if (!formData.service) errors.service = 'Please select a service'
    if (!formData.message) errors.message = 'Message is required'
    return errors
  }, [formData])

  const submitForm = useCallback(async () => {
    const errors = validateForm()
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return false
    }
    setIsSubmitting(true)
    try {
      // Replace with real API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitSuccess(true)
      setFormData(initialFormState)
      return true
    } catch {
      setFormErrors({ submit: 'Something went wrong. Please try again.' })
      return false
    } finally {
      setIsSubmitting(false)
    }
  }, [formData, validateForm])

  const resetForm = useCallback(() => {
    setFormData(initialFormState)
    setFormErrors({})
    setSubmitSuccess(false)
  }, [])

  const value = {
    formData,
    formErrors,
    isSubmitting,
    submitSuccess,
    updateField,
    submitForm,
    resetForm,
  }

  return <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
}

// ─── Hook ─────────────────────────────────────────────────────────────────────
export function useContact() {
  const context = useContext(ContactContext)
  if (!context) {
    throw new Error('useContact must be used within a ContactProvider')
  }
  return context
}

export default ContactContext
