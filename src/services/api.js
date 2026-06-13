// API service for communicating with the backend
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

// ==================== SERVICES ====================
export const servicesAPI = {
  async getAll() {
    try {
      const response = await fetch(`${API_BASE_URL}/services`);
      if (!response.ok) throw new Error('Failed to fetch services');
      return await response.json();
    } catch (error) {
      console.error('Error fetching services:', error);
      throw error;
    }
  },

  async getById(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/services/${id}`);
      if (!response.ok) throw new Error('Failed to fetch service');
      return await response.json();
    } catch (error) {
      console.error('Error fetching service:', error);
      throw error;
    }
  },

  async create(data) {
    try {
      const response = await fetch(`${API_BASE_URL}/services`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to create service');
      return await response.json();
    } catch (error) {
      console.error('Error creating service:', error);
      throw error;
    }
  },

  async update(id, data) {
    try {
      const response = await fetch(`${API_BASE_URL}/services/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to update service');
      return await response.json();
    } catch (error) {
      console.error('Error updating service:', error);
      throw error;
    }
  },

  async delete(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/services/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete service');
      return await response.json();
    } catch (error) {
      console.error('Error deleting service:', error);
      throw error;
    }
  },
};

// ==================== NEWS ====================
export const newsAPI = {
  async getAll(published = null) {
    try {
      let url = `${API_BASE_URL}/news`;
      if (published !== null) {
        url += `?published=${published}`;
      }
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch news');
      return await response.json();
    } catch (error) {
      console.error('Error fetching news:', error);
      throw error;
    }
  },

  async getPublished() {
    return this.getAll(true);
  },

  async getById(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/news/${id}`);
      if (!response.ok) throw new Error('Failed to fetch news article');
      return await response.json();
    } catch (error) {
      console.error('Error fetching news article:', error);
      throw error;
    }
  },

  async create(data) {
    try {
      const response = await fetch(`${API_BASE_URL}/news`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to create news article');
      return await response.json();
    } catch (error) {
      console.error('Error creating news article:', error);
      throw error;
    }
  },

  async update(id, data) {
    try {
      const response = await fetch(`${API_BASE_URL}/news/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to update news article');
      return await response.json();
    } catch (error) {
      console.error('Error updating news article:', error);
      throw error;
    }
  },

  async delete(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/news/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete news article');
      return await response.json();
    } catch (error) {
      console.error('Error deleting news article:', error);
      throw error;
    }
  },
};

// ==================== CONTACTS ====================
export const contactsAPI = {
  async getAll() {
    try {
      const response = await fetch(`${API_BASE_URL}/contacts`);
      if (!response.ok) throw new Error('Failed to fetch contacts');
      return await response.json();
    } catch (error) {
      console.error('Error fetching contacts:', error);
      throw error;
    }
  },

  async getById(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/contacts/${id}`);
      if (!response.ok) throw new Error('Failed to fetch contact');
      return await response.json();
    } catch (error) {
      console.error('Error fetching contact:', error);
      throw error;
    }
  },

  async create(data) {
    try {
      const response = await fetch(`${API_BASE_URL}/contacts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to submit contact form');
      return await response.json();
    } catch (error) {
      console.error('Error submitting contact form:', error);
      throw error;
    }
  },
};

// ==================== SEED / SETUP ====================
export const seedAPI = {
  async seedDatabase() {
    try {
      const response = await fetch(`${API_BASE_URL}/seed/data`, {
        method: 'POST',
      });
      if (!response.ok) throw new Error('Failed to seed database');
      return await response.json();
    } catch (error) {
      console.error('Error seeding database:', error);
      throw error;
    }
  },
};
