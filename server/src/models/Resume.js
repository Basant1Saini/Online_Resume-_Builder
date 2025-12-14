import mongoose from 'mongoose'

const resumeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    default: 'Untitled Resume'
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  personalInfo: {
    name: { type: String, default: '' },
    email: { type: String, default: '' },
    phone: { type: String, default: '' },
    address: { type: String, default: '' },
    summary: { type: String, default: '' }
  },
  experience: [{
    company: { type: String, required: true },
    position: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String },
    current: { type: Boolean, default: false },
    description: { type: String }
  }],
  education: [{
    school: { type: String, required: true },
    degree: { type: String, required: true },
    field: { type: String },
    startDate: { type: String, required: true },
    endDate: { type: String },
    gpa: { type: String }
  }],
  skills: [{ type: String }],
  projects: [{
    name: { type: String, required: true },
    description: { type: String },
    technologies: [{ type: String }],
    url: { type: String }
  }],
  template: {
    type: String,
    default: 'modern'
  },
  isPublic: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
})

export default mongoose.model('Resume', resumeSchema)