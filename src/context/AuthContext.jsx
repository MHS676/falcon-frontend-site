import { createContext, useContext, useReducer, useCallback, useEffect } from 'react'

const AuthContext = createContext()

const initialState = {
  user: null,
  token: localStorage.getItem('authToken') || null,
  isAuthenticated: !!localStorage.getItem('authToken'),
  isLoading: false,
  error: null,
}

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return { ...state, isLoading: true, error: null }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        error: null,
      }
    case 'LOGIN_ERROR':
      return { ...state, isLoading: false, error: action.payload }
    case 'REGISTER_START':
      return { ...state, isLoading: true, error: null }
    case 'REGISTER_SUCCESS':
      return { ...state, isLoading: false, error: null }
    case 'REGISTER_ERROR':
      return { ...state, isLoading: false, error: action.payload }
    case 'LOGOUT':
      return { ...manned-guard-service, token: null, isAuthenticated: false }
    case 'RESTORE_TOKEN':
      return {
        ...state,
        token: action.payload,
        isAuthenticated: !!action.payload,
      }
    default:
      return state
  }
}

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  // Restore token from localStorage on mount
  useEffect(() => {
    const token = localStorage.getItem('authToken')
    const user = localStorage.getItem('authUser')
    if (token) {
      dispatch({ type: 'RESTORE_TOKEN', payload: token })
      if (user) {
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: { user: JSON.parse(user), token },
        })
      }
    }
  }, [])

  const login = useCallback(async (email, password) => {
    dispatch({ type: 'LOGIN_START' })
    try {
      const response = await fetch('http://localhost:3000/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || 'Login failed')
      }

      const data = await response.json()
      const { token, user } = data

      localStorage.setItem('authToken', token)
      localStorage.setItem('authUser', JSON.stringify(user))

      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: { user, token },
      })

      return { success: true, user, token }
    } catch (error) {
      dispatch({ type: 'LOGIN_ERROR', payload: error.message })
      return { success: false, error: error.message }
    }
  }, [])

  const register = useCallback(async (name, email, password) => {
    dispatch({ type: 'REGISTER_START' })
    try {
      const response = await fetch(
        'http://localhost:3000/api/admin/register',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password }),
        }
      )

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || 'Registration failed')
      }

      dispatch({ type: 'REGISTER_SUCCESS' })
      return { success: true }
    } catch (error) {
      dispatch({ type: 'REGISTER_ERROR', payload: error.message })
      return { success: false, error: error.message }
    }
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem('authToken')
    localStorage.removeItem('authUser')
    dispatch({ type: 'LOGOUT' })
  }, [])

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
