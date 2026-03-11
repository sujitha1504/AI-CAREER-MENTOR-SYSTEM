# 🚀 AI Career Mentor System

AI Career Mentor System is an AI-powered career coaching platform that I developed to help professionals optimize their resumes, practice interviews, and find the perfect job matches.

## ✨ Features

- **🤖 AI Resume Analyzer** - Get intelligent feedback and ATS compatibility scoring
- **💬 Interview Simulator** - Practice with AI-powered mock interviews  
- **🎯 Smart Job Matcher** - Find opportunities that match your skills
- **📊 Career Dashboard** - Track your progress and improvements
- **🔒 Privacy First** - All data stored locally in your browser

## 🛠️ Technologies I Implemented

I developed this project using the following modern technologies:

- **React 18** + **Vite** - For fast development and optimized builds
- **Tailwind CSS** - For modern, responsive styling
- **Framer Motion** - For smooth animations and transitions
- **Google Gemini AI** - For intelligent analysis and coaching
- **PDF.js** - For resume document processing
- **Lucide React** - For beautiful icons
- **React Markdown** - For formatted text rendering

## 🚀 Quick Start

1. **Clone the repository**
git clone <your-repository-url>
cd AI-Career-Mentor-System

text

2. **Install dependencies**
npm install

text

3. **Set up environment**
cp .env.example .env.local

Add your Google Gemini API key to .env.local
text

4. **Start development server**
npm run dev

text

5. **Open http://localhost:5173**

## 🌐 Environment Variables

Create `.env.local` file:

VITE_GEMINI_API_KEY=your_google_gemini_api_key_here
VITE_APP_NAME=AI Career Mentor System

text

Get your API key from [Google AI Studio](https://ai.google.dev/)

The dashboard shows:
- **Resume Score** - Track your resume optimization progress
- **Interview Sessions** - Monitor your practice interview history  
- **Job Matches** - View personalized job recommendations
- **Skill Growth** - Track your skill development over time
- **Quick Actions** - Easy access to analyze resume, practice interviews, and find jobs
- **Recent Activity** - Stay updated with your latest career coaching activities

## 🚀 Deployment

### Deploy to Netlify

1. Build the project: `npm run build`
2. Connect GitHub repo to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`  
5. Add environment variables in Netlify dashboard

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel --prod`
3. Add environment variables in Vercel dashboard

## 📁 Project Structure

src/
├── components/ # React components
│ ├── dashboard/ # Dashboard components
│ ├── resume/ # Resume analyzer
│ ├── interview/ # Interview simulator
│ ├── jobs/ # Job matcher
│ └── settings/ # Settings panel
├── hooks/ # Custom hooks
├── utils/ # Utility functions
└── assets/ # Static assets

text

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request


