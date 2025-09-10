# 🤱 Parenthood AI ChatBot

> *Your AI-powered parenting companion for personalized guidance and support*

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-LTS-green.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-green.svg)](https://www.mongodb.com/)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Development Team](#development-team)
- [Contributing](#contributing)
- [License](#license)

## 🌟 Overview

Parenthood AI ChatBot is an intelligent parenting assistant designed to provide personalized guidance, expert advice, and 24/7 support to parents and caregivers. Our AI-powered platform combines modern web technologies with advanced machine learning to create a comprehensive parenting companion.

### Key Highlights

- **Personalized Advice**: Tailored recommendations based on child's age and family situation
- **Interactive Activities**: Educational safety activities with visual learning materials
- **Community Support**: Connect with other parents and parenting experts
- **24/7 Availability**: Get help anytime with instant AI responses
- **Evidence-Based**: Built on latest child development research and proven parenting methods

## ✨ Features

### 🤖 AI Chat Interface
- Natural language conversations with AI parenting assistant
- Context-aware responses based on user profile and chat history
- Multi-modal support with text and image interactions

### 👤 User Management
- Secure authentication with JWT tokens
- Comprehensive user profiles with family information
- Personalized experience based on child's age and needs

### 🎯 Interactive Activities
- Educational safety activities for children
- Visual learning materials covering:
  - Good touch vs. bad touch awareness
  - Road safety and traffic rules
  - Stranger danger recognition
  - Medical safety and checkups
  - Household safety precautions

### 📱 Responsive Design
- Mobile-first approach with responsive UI
- Modern design using shadcn/ui components
- Accessible interface following WCAG guidelines

## 🛠 Technology Stack

### Frontend
- **React 18.3.1** - Modern UI library with hooks
- **TypeScript 5.5.3** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern React component library
- **React Router 6** - Client-side routing
- **Axios** - HTTP client for API requests

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **TypeScript** - Type-safe server development
- **MongoDB** - NoSQL database for data storage
- **Mongoose** - MongoDB object modeling

### AI & ML Integration
- **Google Generative AI** - Advanced AI model integration
- **Anthropic Claude** - AI assistant capabilities
- **Groq SDK** - High-performance AI inference
- **LangChain** - AI application development framework
- **Mistral AI** - Alternative AI model support

### Authentication & Security
- **JWT (JSON Web Tokens)** - Secure user authentication
- **bcryptjs** - Password hashing and encryption
- **CORS** - Cross-origin resource sharing configuration

### Database & Storage
- **MongoDB** - Primary database for user data
- **Mongoose** - Object document mapper
- **Neo4j** - Graph database for relationship mapping
- **Redis** - Caching and session management

### Development Tools
- **ESLint** - Code linting and quality assurance
- **Prettier** - Code formatting
- **ts-node-dev** - TypeScript development server
- **Docker Compose** - Containerized development environment

## 📁 Project Structure

```
Parenthood_AI_ChatBot/
├── 📁 frontend/
│   ├── 📁 src/
│   │   ├── 📁 components/         # Reusable UI components
│   │   │   ├── 📁 activities/     # Activity-related components
│   │   │   ├── 📁 chat/          # Chat interface components
│   │   │   ├── 📁 home/          # Homepage components
│   │   │   ├── 📁 layout/        # Layout components
│   │   │   └── 📁 ui/            # shadcn/ui components
│   │   ├── 📁 pages/             # Application pages/routes
│   │   ├── 📁 lib/               # Utility libraries and services
│   │   ├── 📁 hooks/             # Custom React hooks
│   │   ├── 📁 config/            # Configuration files
│   │   └── 📁 types/             # TypeScript type definitions
│   ├── 📁 public/                # Static assets
│   │   └── 📁 activities/        # Activity images and materials
│   └── 📄 package.json           # Frontend dependencies
├── 📁 backend/
│   ├── 📁 src/
│   │   ├── 📁 controllers/       # API route controllers
│   │   ├── 📁 models/            # Database models
│   │   ├── 📁 routes/            # API route definitions
│   │   ├── 📁 middleware/        # Custom middleware
│   │   └── 📁 types/             # Backend type definitions
│   └── 📄 package.json           # Backend dependencies
├── 📄 docker-compose.neo.yml     # Neo4j database configuration
├── 📄 tailwind.config.ts         # Tailwind CSS configuration
├── 📄 vite.config.ts             # Vite build configuration
└── 📄 README.md                  # Project documentation
```

## 🚀 Installation

### Prerequisites

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** - Package manager
- **MongoDB** - [Installation guide](https://docs.mongodb.com/manual/installation/)
- **Git** - Version control system

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Kamraanmulani/Parenthood_AI_ChatBot.git
   cd Parenthood_AI_ChatBot
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   cd ..
   ```

4. **Environment Configuration**
   
   Create `.env` file in the root directory:
   ```env
   # AI Service API Keys
   GOOGLE_API_KEY=your_google_ai_api_key
   ANTHROPIC_API_KEY=your_anthropic_api_key
   GROQ_API_KEY=your_groq_api_key
   
   # Database Configuration
   MONGODB_URI=mongodb://localhost:27017/parenthood_ai
   NEO4J_URI=bolt://localhost:7687
   NEO4J_USERNAME=neo4j
   NEO4J_PASSWORD=your_neo4j_password
   
   # Authentication
   JWT_SECRET=your_super_secret_jwt_key_change_in_production
   
   # Server Configuration
   PORT=5000
   NODE_ENV=development
   ```

   Create `backend/.env` file:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/parenthood_ai
   JWT_SECRET=your_super_secret_jwt_key_change_in_production
   ```

5. **Start the development servers**
   
   **Terminal 1 - Backend Server:**
   ```bash
   cd backend
   npm run dev
   ```
   
   **Terminal 2 - Frontend Development Server:**
   ```bash
   npm run dev
   ```

6. **Access the application**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:5000`

## 💻 Usage

### Getting Started

1. **Create an Account**
   - Navigate to `/signup` to create a new user account
   - Provide your email, username, and secure password

2. **Complete Your Profile**
   - Fill out your family information and child details
   - This helps personalize the AI's responses to your specific needs

3. **Start Chatting**
   - Access the chat interface at `/chat`
   - Ask questions about parenting, child development, or specific situations
   - Receive personalized advice based on your profile

4. **Explore Activities**
   - Visit `/activity` to access interactive learning materials
   - Help your child learn about safety through visual activities

### Key Features Usage

- **Profile Management**: Update your family information at `/profile`
- **Chat History**: All conversations are saved and accessible
- **Activity Library**: Browse various educational safety activities
- **Contact Support**: Reach out via `/contacts` for additional help

## 📚 API Documentation

### Authentication Endpoints

```http
POST /api/auth/signup
Content-Type: application/json

{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "string",
  "password": "string"
}
```

### Protected Routes

All protected routes require the `Authorization` header:
```http
Authorization: Bearer <jwt_token>
```

### User Profile

```http
GET /api/profile
POST /api/profile
PUT /api/profile
```

### Chat Management

```http
GET /api/chat/history
POST /api/chat/message
DELETE /api/chat/history/:id
```

## 🤝 Contributing

I welcome contributions to improve Parenthood AI ChatBot! Here's how you can help:

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Run tests and linting**
   ```bash
   npm run lint
   npm run build
   ```
5. **Commit your changes**
   ```bash
   git commit -m "Add some amazing feature"
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Code Standards

- Follow TypeScript best practices
- Use ESLint and Prettier for code formatting
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Thanks to all the parenting experts who provided guidance
- Open source community for amazing tools and libraries
- Beta testers who provided valuable feedback
- All parents who inspired this project

---

<div align="center">
  <p>Made with ❤️ by the Parenthood AI Team</p>
  <p>
    <a href="#top">⬆️ Back to Top</a>
  </p>
</div>
