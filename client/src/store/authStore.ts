import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import axios from 'axios'

interface User {
  id: string
  email: string
  name: string
}

interface AuthState {
  user: User | null
  token: string | null
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
  setUser: (user: User) => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      login: async (email: string, password: string) => {
        const response = await axios.post('/api/auth/login', { email, password })
        const { user, token } = response.data
        set({ user, token })
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      },
      register: async (name: string, email: string, password: string) => {
        const response = await axios.post('/api/auth/register', { name, email, password })
        const { user, token } = response.data
        set({ user, token })
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      },
      logout: () => {
        set({ user: null, token: null })
        delete axios.defaults.headers.common['Authorization']
      },
      setUser: (user: User) => set({ user })
    }),
    {
      name: 'auth-storage'
    }
  )
)