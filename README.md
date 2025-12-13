# Online Resume Builder

A modern, responsive web application for creating professional resumes with real-time preview and multiple export formats.

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Node.js + Express.js
- **Database**: MongoDB with Mongoose
- **Styling**: Tailwind CSS + Headless UI
- **Authentication**: JWT + bcrypt
- **File Storage**: Cloudinary/AWS S3
- **PDF Generation**: Puppeteer/jsPDF
- **State Management**: Zustand/Redux Toolkit

## ✨ Features

### Core Features
- 📝 **Resume Builder**: Drag-and-drop interface with real-time preview
- 🎨 **Multiple Templates**: Professional, modern, and creative designs
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- 💾 **Auto-save**: Automatic saving of progress
- 📄 **Export Options**: PDF, Word, and JSON formats
- 🔐 **User Authentication**: Secure login and registration
- ☁️ **Cloud Storage**: Save and access resumes from anywhere

### Advanced Features
- 🤖 **AI Suggestions**: Content recommendations and optimization
- 📊 **Analytics**: Track resume views and downloads
- 🔗 **Shareable Links**: Public resume URLs
- 🌙 **Dark Mode**: Toggle between light and dark themes
- 🌍 **Multi-language**: Support for multiple languages
- 📧 **Email Integration**: Send resumes directly via email

## 🏗️ Project Structure

```
Online_Resume-_Builder/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── store/         # State management
│   │   ├── utils/         # Utility functions
│   │   ├── types/         # TypeScript type definitions
│   │   └── assets/        # Static assets
│   ├── public/
│   ├── package.json
│   └── vite.config.ts
├── server/                # Node.js backend
│   ├── src/
│   │   ├── controllers/   # Route controllers
│   │   ├── models/        # MongoDB models
│   │   ├── routes/        # API routes
│   │   ├── middleware/    # Custom middleware
│   │   ├── utils/         # Utility functions
│   │   └── config/        # Configuration files
│   ├── package.json
│   └── server.js
├── shared/                # Shared types and utilities
└── docs/                  # Documentation
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- Git

### Clone Repository
```bash
git clone https://github.com/yourusername/Online_Resume-_Builder.git
cd Online_Resume-_Builder
```

### Backend Setup
```bash
cd server
npm install
cp .env.example .env
# Configure environment variables in .env
npm run dev
```

### Frontend Setup
```bash
cd client
npm install
npm run dev
```

## 🔧 Environment Variables

### Server (.env)
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/resume-builder
JWT_SECRET=your-jwt-secret
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### Client (.env)
```env
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=Resume Builder
```

## 📋 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

### Resumes
- `GET /api/resumes` - Get user resumes
- `POST /api/resumes` - Create new resume
- `GET /api/resumes/:id` - Get specific resume
- `PUT /api/resumes/:id` - Update resume
- `DELETE /api/resumes/:id` - Delete resume
- `POST /api/resumes/:id/export` - Export resume

### Templates
- `GET /api/templates` - Get available templates
- `GET /api/templates/:id` - Get specific template

## 🎨 Component Architecture

### Key Components
- **ResumeBuilder**: Main builder interface
- **TemplateSelector**: Template selection component
- **SectionEditor**: Individual section editing
- **PreviewPanel**: Real-time resume preview
- **ExportModal**: Export functionality
- **AuthForms**: Login/Register forms

## 🚀 Development Workflow

### Available Scripts

#### Frontend
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

#### Backend
```bash
npm run dev          # Start with nodemon
npm start            # Start production server
npm run test         # Run tests
npm run lint         # Run ESLint
```

## 📦 Deployment

### Frontend (Vercel/Netlify)
```bash
npm run build
# Deploy dist/ folder
```

### Backend (Railway/Render/Heroku)
```bash
# Set environment variables
# Deploy from main branch
```

### Database (MongoDB Atlas)
- Create cluster
- Configure network access
- Update connection string

## 🧪 Testing Strategy

- **Unit Tests**: Jest + React Testing Library
- **Integration Tests**: Supertest for API
- **E2E Tests**: Playwright/Cypress
- **Type Safety**: TypeScript strict mode

## 🔒 Security Features

- JWT authentication with refresh tokens
- Password hashing with bcrypt
- Input validation and sanitization
- Rate limiting on API endpoints
- CORS configuration
- Helmet.js for security headers

## 🎯 Performance Optimizations

- Code splitting with React.lazy
- Image optimization with Cloudinary
- Caching strategies
- Bundle size optimization
- Lazy loading components
- Debounced auto-save

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite for blazing fast development
- MongoDB for flexible data storage
- Tailwind CSS for utility-first styling

## 📞 Support

For support, email support@resumebuilder.com or join our Discord server.

---

**Built with ❤️ using MERN Stack + Vite**