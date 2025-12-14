import express from 'express'

const router = express.Router()

const templates = [
  {
    id: 'modern',
    name: 'Modern',
    description: 'Clean and professional design',
    preview: '/templates/modern-preview.png'
  },
  {
    id: 'classic',
    name: 'Classic',
    description: 'Traditional resume format',
    preview: '/templates/classic-preview.png'
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Colorful and unique layout',
    preview: '/templates/creative-preview.png'
  }
]

// Get all templates
router.get('/', (req, res) => {
  res.json(templates)
})

// Get single template
router.get('/:id', (req, res) => {
  const template = templates.find(t => t.id === req.params.id)
  
  if (!template) {
    return res.status(404).json({ message: 'Template not found' })
  }
  
  res.json(template)
})

export default router