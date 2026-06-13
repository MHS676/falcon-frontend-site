import { useContact } from '../../context/ContactContext'
import { useUI } from '../../context/UIContext'
import Button from '../ui/Button'
import Spinner from '../ui/Spinner'

const SERVICES_LIST = [
  'Security Guarding',
  'Electronic Security',
  'Smart City Solutions',
  'Facility Management',
  'Cash Management',
  'HR & Outsourcing',
]

const COUNTRIES = ['Bangladesh', 'India', 'United States', 'United Kingdom', 'UAE', 'Other']

function ContactForm() {
  const { formData, formErrors, isSubmitting, submitSuccess, updateField, submitForm, resetForm } =
    useContact()
  const { showToast } = useUI()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const success = await submitForm()
    if (success) {
      showToast('Your message has been sent! We will contact you shortly.', 'success')
    }
  }

  if (submitSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
        <div className="w-16 h-16 bg-green-100 flex items-center justify-center rounded-full">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h4 className="text-xl font-bold text-dark">Message Sent!</h4>
        <p className="text-gray-500 text-sm max-w-xs">
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
        <Button onClick={resetForm} variant="outline">
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Email */}
      <div>
        <input
          type="email"
          placeholder="Business Email Address*"
          value={formData.email}
          onChange={(e) => updateField('email', e.target.value)}
          className={`input-field ${formErrors.email ? 'border-red-400' : ''}`}
        />
        {formErrors.email && <p className="text-xs text-red-500 mt-1">{formErrors.email}</p>}
      </div>

      {/* Name Row */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            placeholder="First name*"
            value={formData.firstName}
            onChange={(e) => updateField('firstName', e.target.value)}
            className={`input-field ${formErrors.firstName ? 'border-red-400' : ''}`}
          />
          {formErrors.firstName && (
            <p className="text-xs text-red-500 mt-1">{formErrors.firstName}</p>
          )}
        </div>
        <div>
          <input
            type="text"
            placeholder="Last name*"
            value={formData.lastName}
            onChange={(e) => updateField('lastName', e.target.value)}
            className={`input-field ${formErrors.lastName ? 'border-red-400' : ''}`}
          />
          {formErrors.lastName && (
            <p className="text-xs text-red-500 mt-1">{formErrors.lastName}</p>
          )}
        </div>
      </div>

      {/* Phone */}
      <input
        type="tel"
        placeholder="Phone number"
        value={formData.phone}
        onChange={(e) => updateField('phone', e.target.value)}
        className="input-field"
      />

      {/* Company */}
      <div>
        <input
          type="text"
          placeholder="Company name*"
          value={formData.company}
          onChange={(e) => updateField('company', e.target.value)}
          className={`input-field ${formErrors.company ? 'border-red-400' : ''}`}
        />
        {formErrors.company && <p className="text-xs text-red-500 mt-1">{formErrors.company}</p>}
      </div>

      {/* Country */}
      <div className="relative">
        <select
          value={formData.country}
          onChange={(e) => updateField('country', e.target.value)}
          className="select-field"
        >
          {COUNTRIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* Service */}
      <div>
        <select
          value={formData.service}
          onChange={(e) => updateField('service', e.target.value)}
          className={`select-field ${formErrors.service ? 'border-red-400' : ''}`}
        >
          <option value="">Please Select Services*</option>
          {SERVICES_LIST.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {formErrors.service && <p className="text-xs text-red-500 mt-1">{formErrors.service}</p>}
      </div>

      {/* Message */}
      <div>
        <textarea
          rows={4}
          placeholder="Please provide additional information about your inquiry.*"
          value={formData.message}
          onChange={(e) => updateField('message', e.target.value)}
          className={`input-field resize-none ${formErrors.message ? 'border-red-400' : ''}`}
        />
        {formErrors.message && <p className="text-xs text-red-500 mt-1">{formErrors.message}</p>}
      </div>

      {formErrors.submit && (
        <p className="text-xs text-red-500">{formErrors.submit}</p>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        disabled={isSubmitting}
        className="mt-2"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2 justify-center">
            <Spinner size="sm" color="text-white" />
            Sending...
          </span>
        ) : (
          'Submit Inquiry'
        )}
      </Button>
    </form>
  )
}

export default ContactForm
