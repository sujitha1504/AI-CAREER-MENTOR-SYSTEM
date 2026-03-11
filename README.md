# 🚀 AI Career Mentor System

AI Career Mentor System is an AI-powered career coaching platform that helps professionals optimize their resumes, practice interviews, and find the perfect job matches.

## ✨ Features

- **🤖 AI Resume Analyzer** - Get intelligent feedback and ATS compatibility scoring
- **💬 Interview Simulator** - Practice with AI-powered mock interviews  
- **🎯 Smart Job Matcher** - Find opportunities that match your skills
- **📊 Career Dashboard** - Track your progress and improvements
- **🔒 Privacy First** - All data stored locally in your browser

## 🛠️ Tech Stack

- **React 18** + **Vite** - Fast development and build
- **Tailwind CSS** - Modern styling
- **Framer Motion** - Smooth animations
- **Google Gemini AI** - Intelligent analysis
- **PDF.js** - Resume processing

## 🚀 Quick Start

1. **Clone the repository**
git clone https://github.com/MiteshSakhare/NextGen-Coach
cd nextgen-coach

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

## 📱 Screenshots

<img width="1918" height="868" alt="image" src="https://github.com/user-attachments/assets/bc167a11-3100-406f-86f8-2d7cfc62cbda" />

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

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
