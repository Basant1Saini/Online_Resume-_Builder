import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import axios from 'axios'

export const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      login: async (email, password) => {
        const response = await axios.post('/api/auth/login', { email, password })
        const { user, token } = response.data
        set({ user, token })
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      },
      register: async (name, email, password) => {
        const response = await axios.post('/api/auth/register', { name, email, password })
        const { user, token } = response.data
        set({ user, token })
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      },
      logout: () => {
        set({ user: null, token: null })
        delete axios.defaults.headers.common['Authorization']
      },
      setUser: (user) => set({ user })
    }),
    {
      name: 'auth-storage'
    }
  )
)