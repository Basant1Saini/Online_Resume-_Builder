export interface User {
  id: string
  name: string
  email: string
  createdAt: string
  updatedAt: string
}

export interface PersonalInfo {
  name: string
  email: string
  phone: string
  address: string
  summary?: string
}

export interface Experience {
  id?: string
  company: string
  position: string
  startDate: string
  endDate?: string
  current: boolean
  description: string
}

export interface Education {
  id?: string
  school: string
  degree: string
  field?: string
  startDate: string
  endDate?: string
  gpa?: string
}

export interface Project {
  id?: string
  name: string
  description: string
  technologies: string[]
  url?: string
}

export interface Resume {
  _id?: string
  title: string
  userId: string
  personalInfo: PersonalInfo
  experience: Experience[]
  education: Education[]
  skills: string[]
  projects: Project[]
  template: string
  isPublic: boolean
  createdAt: string
  updatedAt: string
}

export interface Template {
  id: string
  name: string
  description: string
  preview: string
}

export interface AuthResponse {
  user: User
  token: string
}