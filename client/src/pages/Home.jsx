import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Build Your Professional Resume
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Create stunning resumes with our easy-to-use builder. Choose from professional templates and export to PDF.
        </p>
        <div className="space-x-4">
          <Link
            to="/register"
            className="bg-blue-500 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-600"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="border border-blue-500 text-blue-500 px-8 py-3 rounded-lg text-lg hover:bg-blue-50"
          >
            Sign In
          </Link>
        </div>
      </div>
      
      <div className="mt-16 grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">📝</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Easy Builder</h3>
          <p className="text-gray-600">Drag and drop interface with real-time preview</p>
        </div>
        
        <div className="text-center">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🎨</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Professional Templates</h3>
          <p className="text-gray-600">Choose from multiple professionally designed templates</p>
        </div>
        
        <div className="text-center">
          <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">📄</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Export Options</h3>
          <p className="text-gray-600">Download as PDF, Word, or share with a link</p>
        </div>
      </div>
    </div>
  )
}