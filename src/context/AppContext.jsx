import { createContext, useContext, useReducer, useCallback, useEffect } from 'react'
import { servicesAPI, newsAPI } from '../services/api'

// ─── Initial State ────────────────────────────────────────────────────────────
const initialState = {
  companyInfo: {
    name: 'FALCON®',
    tagline: 'The Security Experts',
    phone: '+880-2-9619919',
    email: 'info@falconsecurity.bd',
    address: 'FALCON Security Headquarters, Dhaka, Bangladesh',
    founded: 1994,
    yearsOfExcellence: 25,
    workforce: '500+',
    businessesSecured: '597+',
    socialLinks: {
      facebook: 'https://www.facebook.com/falconsecurity',
      twitter: '#',
      linkedin: 'https://www.linkedin.com/company/falconsecurity',
      youtube: 'https://www.youtube.com/@falconsecurity',
      instagram: '#',
    },
  },
  services: [],
  news: [],
  testimonials: [],
  isLoading: false,
  error: null,
}

// ─── Action Types ─────────────────────────────────────────────────────────────
export const APP_ACTIONS = {
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  SET_SERVICES: 'SET_SERVICES',
  SET_NEWS: 'SET_NEWS',
  SET_TESTIMONIALS: 'SET_TESTIMONIALS',
  CLEAR_ERROR: 'CLEAR_ERROR',
}

// ─── Reducer ──────────────────────────────────────────────────────────────────
function appReducer(state, action) {
  switch (action.type) {
    case APP_ACTIONS.SET_LOADING:
      return { ...state, isLoading: action.payload }
    case APP_ACTIONS.SET_ERROR:
      return { ...state, error: action.payload, isLoading: false }
    case APP_ACTIONS.SET_SERVICES:
      return { ...state, services: action.payload, isLoading: false }
    case APP_ACTIONS.SET_NEWS:
      return { ...state, news: action.payload, isLoading: false }
    case APP_ACTIONS.SET_TESTIMONIALS:
      return { ...state, testimonials: action.payload, isLoading: false }
    case APP_ACTIONS.CLEAR_ERROR:
      return { ...state, error: null }
    default:
      return state
  }
}

// ─── Context ──────────────────────────────────────────────────────────────────
const AppContext = createContext(null)

// ─── Provider ─────────────────────────────────────────────────────────────────
export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState)

  // Fetch services from API
  const fetchServices = useCallback(async () => {
    try {
      dispatch({ type: APP_ACTIONS.SET_LOADING, payload: true })
      const data = await servicesAPI.getAll()
      dispatch({ type: APP_ACTIONS.SET_SERVICES, payload: data })
    } catch (error) {
      console.error('Error fetching services:', error)
      dispatch({ type: APP_ACTIONS.SET_ERROR, payload: error.message })
    }
  }, [])

  // Fetch news from API
  const fetchNews = useCallback(async () => {
    try {
      dispatch({ type: APP_ACTIONS.SET_LOADING, payload: true })
      const data = await newsAPI.getPublished()
      dispatch({ type: APP_ACTIONS.SET_NEWS, payload: data })
    } catch (error) {
      console.error('Error fetching news:', error)
      dispatch({ type: APP_ACTIONS.SET_ERROR, payload: error.message })
    }
  }, [])

  // Load data on mount
  useEffect(() => {
    fetchServices()
    fetchNews()
  }, [fetchServices, fetchNews])

  const clearError = useCallback(() => {
    dispatch({ type: APP_ACTIONS.CLEAR_ERROR })
  }, [])

  const setLoading = useCallback((value) => {
    dispatch({ type: APP_ACTIONS.SET_LOADING, payload: value })
  }, [])

  const value = {
    ...state,
    dispatch,
    clearError,
    setLoading,
    fetchServices,
    fetchNews,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

// ─── Hook ─────────────────────────────────────────────────────────────────────
export function useApp() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}

export default AppContext
