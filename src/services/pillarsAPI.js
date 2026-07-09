const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

// Pillars API
export const pillarsAPI = {
  getAll: async () => {
    const response = await fetch(`${API_URL}/api/pillars`)
    if (!response.ok) throw new Error('Failed to fetch pillars')
    return response.json()
  },

  getById: async (id) => {
    const response = await fetch(`${API_URL}/api/pillars/${id}`)
    if (!response.ok) throw new Error('Failed to fetch pillar')
    return response.json()
  },

  create: async (data) => {
    const response = await fetch(`${API_URL}/api/pillars`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (!response.ok) throw new Error('Failed to create pillar')
    return response.json()
  },

  update: async (id, data) => {
    const response = await fetch(`${API_URL}/api/pillars/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (!response.ok) throw new Error('Failed to update pillar')
    return response.json()
  },

  delete: async (id) => {
    const response = await fetch(`${API_URL}/api/pillars/${id}`, {
      method: 'DELETE',
    })
    if (!response.ok) throw new Error('Failed to delete pillar')
    return response.json()
  },

  uploadImage: async (file) => {
    const formData = new FormData()
    formData.append('file', file)
    const response = await fetch(`${API_URL}/api/pillars/upload`, {
      method: 'POST',
      body: formData,
    })
    if (!response.ok) throw new Error('Failed to upload image')
    return response.json()
  },

  reorder: async (pillars) => {
    const response = await fetch(`${API_URL}/api/pillars/reorder`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pillars),
    })
    if (!response.ok) throw new Error('Failed to reorder pillars')
    return response.json()
  },
}
