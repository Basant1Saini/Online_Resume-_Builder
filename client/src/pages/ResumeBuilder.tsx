import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

interface ResumeData {
  _id?: string
  title: string
  personalInfo: {
    name: string
    email: string
    phone: string
    address: string
  }
  experience: Array<{
    company: string
    position: string
    startDate: string
    endDate: string
    description: string
  }>
  education: Array<{
    school: string
    degree: string
    startDate: string
    endDate: string
  }>
  skills: string[]
}

export function ResumeBuilder() {
  const { id } = useParams()
  const [resumeData, setResumeData] = useState<ResumeData>({
    title: 'My Resume',
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      address: ''
    },
    experience: [],
    education: [],
    skills: []
  })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (id) {
      fetchResume()
    }
  }, [id])

  const fetchResume = async () => {
    try {
      const response = await axios.get(`/api/resumes/${id}`)
      setResumeData(response.data)
    } catch (error) {
      console.error('Failed to fetch resume:', error)
    }
  }

  const saveResume = async () => {
    setLoading(true)
    try {
      if (id) {
        await axios.put(`/api/resumes/${id}`, resumeData)
      } else {
        await axios.post('/api/resumes', resumeData)
      }
    } catch (error) {
      console.error('Failed to save resume:', error)
    } finally {
      setLoading(false)
    }
  }

  const updatePersonalInfo = (field: string, value: string) => {
    setResumeData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }))
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Resume Builder</h1>
        <button
          onClick={saveResume}
          disabled={loading}
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 disabled:opacity-50"
        >
          {loading ? 'Saving...' : 'Save Resume'}
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Editor Panel */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={resumeData.personalInfo.name}
                onChange={(e) => updatePersonalInfo('name', e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                value={resumeData.personalInfo.email}
                onChange={(e) => updatePersonalInfo('email', e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
              <input
                type="tel"
                placeholder="Phone"
                value={resumeData.personalInfo.phone}
                onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="Address"
                value={resumeData.personalInfo.address}
                onChange={(e) => updatePersonalInfo('address', e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Preview Panel */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Preview</h2>
          <div className="border p-6 bg-gray-50 min-h-96">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold">{resumeData.personalInfo.name || 'Your Name'}</h1>
              <p className="text-gray-600">{resumeData.personalInfo.email}</p>
              <p className="text-gray-600">{resumeData.personalInfo.phone}</p>
              <p className="text-gray-600">{resumeData.personalInfo.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}