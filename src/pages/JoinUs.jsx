import { useState } from 'react'
import PageHero from '../components/ui/PageHero'
import { JOB_DEPARTMENTS } from '../data/companyData'
import { FiMail, FiPhone, FiUpload, FiCheckCircle } from 'react-icons/fi'
import { FaLinkedin, FaFacebook } from 'react-icons/fa'

const INITIAL = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  department: '',
  coverLetter: '',
  resume: null,
}

function JoinUs() {
  const [form, setForm] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [fileName, setFileName] = useState('')

  const validate = () => {
    const e = {}
    if (!form.firstName.trim()) e.firstName = 'First name is required'
    if (!form.lastName.trim()) e.lastName = 'Last name is required'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required'
    if (!form.phone.trim()) e.phone = 'Phone is required'
    if (!form.department) e.department = 'Please select a department'
    if (!form.resume) e.resume = 'Please attach your resume'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    setErrors((er) => ({ ...er, [name]: '' }))
  }

  const handleFile = (e) => {
    const file = e.target.files[0]
    if (file) {
      setForm((f) => ({ ...f, resume: file }))
      setFileName(file.name)
      setErrors((er) => ({ ...er, resume: '' }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    // Simulate submission — replace with actual API call
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (submitted) {
    return (
      <div className="animate-fade-in">
        <PageHero
          eyebrow="Careers"
          title={<>Join Our <span className="text-[#3F7E47]">Team</span></>}
          breadcrumbs={[{ label: 'Join Us' }]}
        />
        <section className="py-24 flex items-center justify-center bg-gray-50 min-h-[50vh]">
          <div className="text-center max-w-md px-4">
            <div className="w-20 h-20 bg-green-100 flex items-center justify-center mx-auto mb-6">
              <FiCheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-black text-dark mb-3">Application Sent!</h2>
            <p className="text-gray-500 mb-8">
              Thank you for your interest in joining FALCON. Our HR team will review your application and get back to you
              within 3–5 business days.
            </p>
            <button
              onClick={() => { setSubmitted(false); setForm(INITIAL); setFileName('') }}
              className="bg-[#3F7E47] text-white font-bold uppercase tracking-wider text-sm px-8 py-3 hover:bg-[#3F7E47] transition-colors"
            >
              Submit Another
            </button>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="animate-fade-in">
      <PageHero
        eyebrow="Careers at FALCON"
        title={<>Join Our <span className="text-[#3F7E47]">Team</span></>}
        subtitle="Be a part of a dynamic, growing industry. We invest in our people as much as we invest in security."
        breadcrumbs={[{ label: 'Join Us' }]}
        backgroundImage="/documents/navlink_banner/company/joinus.jpeg"
      />

      {/* ── Intro banner ── */}
      {/* <div className="bg-dark py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { value: '5,000+', label: 'Employees Nationwide' },
              { value: '32+', label: 'Years of Excellence' },
              { value: 'Growth', label: 'Culture & Development' },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-3xl font-black text-[#3F7E47]">{item.value}</p>
                <p className="text-white/60 text-sm font-semibold uppercase tracking-wide mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* ── Left sidebar ── */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-xl font-black text-dark mb-4 uppercase tracking-tight">Why FALCON?</h2>
                <ul className="space-y-3">
                  {[
                    'Competitive compensation packages',
                    'Career advancement pathways',
                    'Professional training & certification',
                    'Health & wellness benefits',
                    'Inclusive and diverse workplace',
                    'Mission-driven work environment',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-[#3F7E47] rounded-full shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t pt-8">
                <h2 className="text-xl font-black text-dark mb-4 uppercase tracking-tight">Contact HR</h2>
                <div className="space-y-3">
                  <a
                    href="mailto:careers@falconsecurity.com"
                    className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#3F7E47] transition-colors"
                  >
                    <FiMail className="w-4 h-4 text-[#3F7E47] shrink-0" />
                    careers@falconsecurity.com
                  </a>
                  <a
                    href="tel:+880-2-9898101"
                    className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#3F7E47] transition-colors"
                  >
                    <FiPhone className="w-4 h-4 text-[#3F7E47] shrink-0" />
                    +880-2-9898101
                  </a>
                  <div className="flex items-center gap-3 pt-2">
                    <a href="#" className="text-[#3F7E47] hover:text-[#3F7E47] transition-colors">
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-[#3F7E47] hover:text-[#3F7E47] transition-colors">
                      <FaFacebook className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 p-6">
                <p className="text-xs text-gray-500 leading-relaxed">
                  FALCON is an equal opportunity employer. We celebrate diversity and are committed to creating an
                  inclusive environment for all employees.
                </p>
              </div>
            </div>

            {/* ── Application form ── */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-black text-dark mb-1 uppercase tracking-tight">Apply Now</h2>
              <p className="text-gray-500 text-sm mb-8">Fill out the form below and attach your resume to get started.</p>

              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* First name */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-700 block mb-1">
                      First Name <span className="text-[#3F7E47]">*</span>
                    </label>
                    <input
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className={`w-full border px-4 py-2.5 text-sm focus:outline-none transition-colors ${
                        errors.firstName ? 'border-red-400' : 'border-gray-300 focus:border-primary'
                      }`}
                    />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                  </div>
                  {/* Last name */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-700 block mb-1">
                      Last Name <span className="text-[#3F7E47]">*</span>
                    </label>
                    <input
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className={`w-full border px-4 py-2.5 text-sm focus:outline-none transition-colors ${
                        errors.lastName ? 'border-red-400' : 'border-gray-300 focus:border-primary'
                      }`}
                    />
                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-700 block mb-1">
                      Email <span className="text-[#3F7E47]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`w-full border px-4 py-2.5 text-sm focus:outline-none transition-colors ${
                        errors.email ? 'border-red-400' : 'border-gray-300 focus:border-primary'
                      }`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  {/* Phone */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-700 block mb-1">
                      Phone <span className="text-[#3F7E47]">*</span>
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+880 17XX XXXXXX"
                      className={`w-full border px-4 py-2.5 text-sm focus:outline-none transition-colors ${
                        errors.phone ? 'border-red-400' : 'border-gray-300 focus:border-primary'
                      }`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Department */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-700 block mb-1">
                    Department <span className="text-[#3F7E47]">*</span>
                  </label>
                  <select
                    name="department"
                    value={form.department}
                    onChange={handleChange}
                    className={`w-full border px-4 py-2.5 text-sm bg-white focus:outline-none transition-colors ${
                      errors.department ? 'border-red-400' : 'border-gray-300 focus:border-primary'
                    }`}
                  >
                    <option value="">— Select a department —</option>
                    {JOB_DEPARTMENTS.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                  {errors.department && <p className="text-red-500 text-xs mt-1">{errors.department}</p>}
                </div>

                {/* Cover Letter */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-700 block mb-1">
                    Cover Letter <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <textarea
                    name="coverLetter"
                    value={form.coverLetter}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us a bit about yourself and why you want to join FALCON…"
                    className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-primary resize-none transition-colors"
                  />
                </div>

                {/* Resume upload */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-700 block mb-1">
                    Resume / CV <span className="text-[#3F7E47]">*</span>
                  </label>
                  <label
                    className={`flex items-center gap-3 w-full border-2 border-dashed px-5 py-4 cursor-pointer transition-colors hover:border-primary ${
                      errors.resume ? 'border-red-400' : 'border-gray-300'
                    }`}
                  >
                    <FiUpload className="w-5 h-5 text-gray-400 shrink-0" />
                    <span className="text-sm text-gray-500">
                      {fileName ? (
                        <span className="text-[#3F7E47] font-medium">{fileName}</span>
                      ) : (
                        'Click to upload PDF, DOC or DOCX (max 5 MB)'
                      )}
                    </span>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={handleFile}
                    />
                  </label>
                  {errors.resume && <p className="text-red-500 text-xs mt-1">{errors.resume}</p>}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <p className="text-xs text-gray-400">Fields marked <span className="text-[#3F7E47]">*</span> are required</p>
                  <button
                    type="submit"
                    className="bg-[#3F7E47] text-white font-bold uppercase tracking-wider text-sm px-10 py-3 hover:bg-red-700 transition-colors"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default JoinUs
