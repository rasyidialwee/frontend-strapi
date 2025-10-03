import axios from 'axios'

// Create axios instance with base configuration
const api = axios.create({
  baseURL: 'http://localhost:1337/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

// API service functions
export const apiService = {
  // Fetch page data by ID
  async getPageData(pageId) {
    try {
      const response = await api.get(`/pages/${pageId}`)
      return response.data
    } catch (error) {
      console.error('Error fetching page data:', error)
      throw error
    }
  },

  // Generic function to fetch any Strapi content
  async getContent(contentType, id = null) {
    try {
      const url = id ? `/${contentType}/${id}` : `/${contentType}`
      const response = await api.get(url)
      return response.data
    } catch (error) {
      console.error(`Error fetching ${contentType}:`, error)
      throw error
    }
  }
}

export default api
