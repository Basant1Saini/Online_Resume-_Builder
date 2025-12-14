import express from 'express'
import { body, validationResult } from 'express-validator'
import Resume from '../models/Resume.js'
import { protect } from '../middleware/auth.js'

const router = express.Router()

// Get all user resumes
router.get('/', protect, async (req, res) => {
  try {
    const resumes = await Resume.find({ userId: req.user._id })
      .sort({ updatedAt: -1 })
      .select('title createdAt updatedAt')
    
    res.json(resumes)
  } catch (error) {
    console.error('Get resumes error:', error)
    res.status(500).json({ message: 'Server error' })
  }
})

// Get single resume
router.get('/:id', protect, async (req, res) => {
  try {
    const resume = await Resume.findOne({
      _id: req.params.id,
      userId: req.user._id
    })

    if (!resume) {
      return res.status(404).json({ message: 'Resume not found' })
    }

    res.json(resume)
  } catch (error) {
    console.error('Get resume error:', error)
    res.status(500).json({ message: 'Server error' })
  }
})

// Create resume
router.post('/', protect, [
  body('title').trim().isLength({ min: 1 }).withMessage('Title is required')
], async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const resume = await Resume.create({
      ...req.body,
      userId: req.user._id
    })

    res.status(201).json(resume)
  } catch (error) {
    console.error('Create resume error:', error)
    res.status(500).json({ message: 'Server error' })
  }
})

// Update resume
router.put('/:id', protect, async (req, res) => {
  try {
    const resume = await Resume.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      req.body,
      { new: true, runValidators: true }
    )

    if (!resume) {
      return res.status(404).json({ message: 'Resume not found' })
    }

    res.json(resume)
  } catch (error) {
    console.error('Update resume error:', error)
    res.status(500).json({ message: 'Server error' })
  }
})

// Delete resume
router.delete('/:id', protect, async (req, res) => {
  try {
    const resume = await Resume.findOneAndDelete({
      _id: req.params.id,
      userId: req.user._id
    })

    if (!resume) {
      return res.status(404).json({ message: 'Resume not found' })
    }

    res.json({ message: 'Resume deleted successfully' })
  } catch (error) {
    console.error('Delete resume error:', error)
    res.status(500).json({ message: 'Server error' })
  }
})

// Export resume as PDF
router.post('/:id/export', protect, async (req, res) => {
  try {
    const resume = await Resume.findOne({
      _id: req.params.id,
      userId: req.user._id
    })

    if (!resume) {
      return res.status(404).json({ message: 'Resume not found' })
    }

    // TODO: Implement PDF generation with Puppeteer
    res.json({ message: 'PDF export feature coming soon' })
  } catch (error) {
    console.error('Export resume error:', error)
    res.status(500).json({ message: 'Server error' })
  }
})

export default router