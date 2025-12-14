import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'



export function Dashboard() {
  const [resumes, setResumes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchResumes()
  }, [])

  const fetchResumes = async () => {
    try {
      const response = await axios.get('/api/resumes')
      setResumes(response.data)
    } catch (error) {
      console.error('Failed to fetch resumes:', error)
    } finally {
      setLoading(false)
    }
  }

  const createNewResume = async () => {
    try {
      const response = await axios.post('/api/resumes', {
        title: 'Untitled Resume'
      })
      setResumes([response.data, ...resumes])
    } catch (error) {
      console.error('Failed to create resume:', error)
    }
  }

  if (loading) {
    return <div className="text-center py-16">Loading...</div>
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Resumes</h1>
        <button
          onClick={createNewResume}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
        >
          Create New Resume
        </button>
      </div>

      {resumes.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-600 mb-4">You haven't created any resumes yet.</p>
          <button
            onClick={createNewResume}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Create Your First Resume
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumes.map((resume) => (
            <div key={resume._id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{resume.title}</h3>
              <p className="text-gray-600 text-sm mb-4">
                Updated: {new Date(resume.updatedAt).toLocaleDateString()}
              </p>
              <div className="space-y-2">
                <Link
                  to={`/builder/${resume._id}`}
                  className="block w-full bg-blue-500 text-white text-center py-2 rounded hover:bg-blue-600"
                >
                  Edit Resume
                </Link>
                <button className="w-full border border-gray-300 py-2 rounded hover:bg-gray-50">
                  Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}