# 🎨 React.js, JSX, and CSS - Mastering Front-End Development

A comprehensive React application built with modern web technologies, demonstrating best practices in component architecture, state management, hooks, and API integration with a beautiful responsive design.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Hooks & Context](#hooks--context)
- [Pages](#pages)
- [API Integration](#api-integration)
- [Styling](#styling)
- [Scripts](#scripts)
- [Key Features Details](#key-features-details)
- [Best Practices Implemented](#best-practices-implemented)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

This project is a full-featured React application that showcases modern React patterns and best practices. It includes:
- **Component-based architecture** with reusable UI components
- **State management** using React Hooks (useState, useEffect, useContext)
- **Custom hooks** for local storage persistence
- **Theme switching** (Light/Dark mode)
- **API integration** with JSONPlaceholder for fetching posts
- **Task management** system with CRUD operations
- **Responsive design** using Tailwind CSS
- **Client-side routing** with React Router

## ✨ Features

- 🌙 **Dark/Light Theme Toggle** - Switch between light and dark modes with persistent theme storage
- 📝 **Task Manager** - Create, update, delete, and filter tasks with localStorage persistence
- 📰 **Posts Feed** - Fetch and display posts from JSONPlaceholder API with pagination and search
- 📱 **Responsive Design** - Mobile-first responsive layout that works seamlessly across all devices
- 🎨 **Tailwind CSS** - Modern utility-first CSS framework for beautiful styling
- ⚡ **Vite** - Lightning-fast build tool with HMR (Hot Module Replacement)
- 🔄 **React Router** - Client-side routing for seamless page navigation
- 🧪 **ESLint** - Code quality and consistency checking

## 🛠 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | ^19.1.1 | UI library for building interactive components |
| React DOM | ^19.1.1 | React rendering to the DOM |
| React Router DOM | ^7.9.6 | Client-side routing and navigation |
| Vite | ^7.1.7 | Build tool and dev server |
| Tailwind CSS | ^4.1.16 | Utility-first CSS framework |
| ESLint | ^9.36.0 | Code quality and linting |
| PostCSS | ^8.5.6 | CSS transformations |
| Autoprefixer | ^10.4.21 | CSS vendor prefixes |

## 📁 Project Structure

```
src/
├── App.jsx                          # Main app component with routing
├── index.css                        # Global styles and Tailwind directives
├── main.jsx                         # React DOM render entry point
├── api/
│   └── fetchPosts.jsx               # API integration for JSONPlaceholder posts
├── components/
│   ├── Button.jsx                   # Reusable button component
│   ├── Card.jsx                     # Reusable card component
│   ├── Footer.jsx                   # App footer with links
│   ├── Layout.jsx                   # Layout wrapper component
│   ├── Navbar.jsx                   # Navigation bar with theme toggle
│   └── TaskManager.jsx              # Task management component
├── context/
│   └── ThemeContext.jsx             # Theme context for light/dark mode
├── hooks/
│   └── useLocalStorage.jsx          # Custom hook for localStorage persistence
├── pages/
│   ├── Home.jsx                     # Home page
│   ├── Posts.jsx                    # Posts feed page with API integration
│   └── Tasks.jsx                    # Tasks page with task manager
└── utils/
    └── filterTasks.jsx              # Utility functions for filtering tasks

Configuration Files:
├── package.json                     # Project dependencies and scripts
├── vite.config.js                   # Vite configuration
├── tailwind.config.js               # Tailwind CSS configuration
├── eslint.config.js                 # ESLint configuration
├── vercel.json                      # Vercel deployment configuration
└── index.html                       # HTML entry point
```

## 🚀 Installation

### Prerequisites

- **Node.js**: v18 or higher
- **npm**: v9 or higher (or yarn/pnpm)

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-js-jsx-and-css-mastering-front-end-development-moti-254
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

6. **Run ESLint**
   ```bash
   npm run lint
   ```

## 💻 Usage

### Starting the Application

```bash
# Development mode with HMR
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview

# Check code quality
npm run lint
```

### Navigation

- **Home** - Landing page with project information
- **Tasks** - Task management interface
- **Posts** - API-integrated posts feed with search and pagination

### Theme Switching

Click the theme toggle button in the Navbar to switch between light and dark modes. The preference is automatically saved.

## 🧩 Components

### Button Component
Reusable button component with multiple variants (primary, secondary, danger).

```jsx
<Button variant="primary" onClick={handleClick}>
  Click Me
</Button>
```

**Props:**
- `variant` - Button style (primary, secondary, danger)
- `onClick` - Click handler
- `children` - Button text/content
- `className` - Additional CSS classes

### Card Component
Container component for displaying content in a boxed layout.

```jsx
<Card>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>
```

**Props:**
- `children` - Card content
- `className` - Additional CSS classes

### Navbar Component
Navigation bar with links and theme toggle button.

**Features:**
- Links to all pages (Home, Tasks, Posts)
- Theme toggle button (Light/Dark mode)
- Active link highlighting
- Responsive mobile menu support

### Footer Component
App footer with copyright and links.

**Features:**
- Copyright information
- Quick links
- Responsive layout

### TaskManager Component
Task management interface with CRUD operations.

**Features:**
- Add new tasks
- Mark tasks as completed/incomplete
- Delete tasks
- Filter tasks (All, Active, Completed)
- localStorage persistence

### Layout Component
Wrapper component that includes Navbar and Footer.

## 🎣 Hooks & Context

### Custom Hooks

#### useLocalStorage
Custom hook for managing localStorage with automatic sync.

```jsx
const [value, setValue] = useLocalStorage('key', initialValue);
```

**Features:**
- Automatic localStorage persistence
- Synchronization across tabs
- Type preservation

#### useLocalStorageTasks (within TaskManager)
Specialized hook for task management with localStorage.

**Methods:**
- `addTask(text)` - Add new task
- `toggleTask(id)` - Toggle task completion
- `deleteTask(id)` - Delete a task
- `tasks` - Current tasks array

### Context API

#### ThemeContext
Manages application theme state (light/dark mode).

```jsx
const { theme, toggleTheme } = useTheme();
```

**Provider:** Wraps the entire app in `App.jsx`

**Hook:** `useTheme()` - Access theme state and toggle function

## 📄 Pages

### Home Page
Landing page introducing the application with:
- Welcome message
- Feature highlights
- Links to main sections
- Call-to-action buttons

### Tasks Page
Task management interface featuring:
- Task input form
- Task list with actions
- Filter buttons (All, Active, Completed)
- Completion toggle
- Delete functionality
- localStorage persistence

### Posts Page
Posts feed page with:
- API data fetching from JSONPlaceholder
- Posts displayed in card layout
- Search functionality
- Pagination (10 posts per page)
- Loading states
- Error handling
- Theme-aware styling

## 🔌 API Integration

### fetchPosts API
Fetches posts from JSONPlaceholder API.

```jsx
import { fetchPosts } from '../api/fetchPosts';

const data = await fetchPosts();
```

**Endpoint:** `https://jsonplaceholder.typicode.com/posts`

**Features:**
- Error handling with try-catch
- Data transformation
- Loading state management
- Error state display

**Used in:** Posts.jsx page

## 🎨 Styling

### Tailwind CSS
Utility-first CSS framework for modern, responsive design.

**Key Features Used:**
- **Dark Mode:** Built-in dark mode support with `dark:` prefix
- **Responsive Breakpoints:** Mobile-first responsive design
- **Utility Classes:** Layout, spacing, typography, colors
- **Transitions:** Smooth color transitions between themes
- **Custom Colors:** Extended Tailwind configuration

### Responsive Design
- **Mobile First:** Designed for mobile, enhanced for larger screens
- **Breakpoints:**
  - `sm` - 640px
  - `md` - 768px
  - `lg` - 1024px
  - `xl` - 1280px
  - `2xl` - 1536px

### Dark Mode
Implemented using Tailwind's dark mode:
- Toggle via Navbar button
- Persistent across sessions via localStorage
- Smooth transitions between themes
- Applied to all components

## 📜 Scripts

### Available npm Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🚀 Key Features Details

### Task Management System

**Features:**
- ✅ Create new tasks with date tracking
- ✅ Mark tasks as complete/incomplete
- ✅ Delete individual tasks
- ✅ Filter by status (All, Active, Completed)
- ✅ Persistent storage using localStorage
- ✅ Automatic state synchronization

**Data Structure:**
```javascript
{
  id: Date.now(),
  text: "Task description",
  completed: false,
  createdAt: "2024-01-01T12:00:00.000Z"
}
```

### Theme System

**Features:**
- 🌙 Light and dark mode support
- 🔄 One-click toggle in Navbar
- 💾 Persistent theme preference
- ✨ Smooth transitions between themes
- 🎨 All components theme-aware

**Implementation:**
- React Context API for global state
- CSS classes with Tailwind dark mode
- localStorage for persistence

### API Integration

**Features:**
- 📡 Fetch data from external API
- ⏳ Loading state management
- ⚠️ Error handling and display
- 🔍 Search functionality
- 📖 Pagination support
- 🔄 Manual refresh capability

## ✅ Best Practices Implemented

### React Best Practices
- ✅ Functional components with hooks
- ✅ Proper state management
- ✅ Component composition
- ✅ Reusable components
- ✅ PropTypes validation
- ✅ Error boundaries consideration

### Code Quality
- ✅ ESLint configuration
- ✅ Consistent code style
- ✅ Meaningful variable names
- ✅ Comments and documentation
- ✅ DRY principle (Don't Repeat Yourself)

### Performance
- ✅ Code splitting via routing
- ✅ Lazy component loading
- ✅ Efficient re-renders
- ✅ useEffect cleanup functions
- ✅ Memoization where needed

### Accessibility
- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Keyboard navigation support
- ✅ Color contrast compliance
- ✅ Form accessibility

### Security
- ✅ XSS prevention
- ✅ Input sanitization
- ✅ Safe API calls
- ✅ localStorage safe usage

## 📦 Deployment

### Vercel Deployment

The project includes `vercel.json` for easy deployment to Vercel:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Alternative Deployment Options

- **Netlify:** Drag and drop or connect GitHub repository
- **GitHub Pages:** Push to gh-pages branch
- **Self-hosted:** Build and serve with Node.js server

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Assignment Requirements

This project fulfills all requirements from Week 3 of the React.js, JSX, and CSS course:

- ✅ **Task 1:** Project setup with Vite, Tailwind CSS, and React Router
- ✅ **Task 2:** Reusable UI components (Button, Card, Navbar, Footer)
- ✅ **Task 3:** State management and custom hooks (useState, useEffect, useContext, useLocalStorage)
- ✅ **Task 4:** API integration with JSONPlaceholder
- ✅ **Task 5:** Responsive design with Tailwind CSS and dark mode

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Vite Documentation](https://vitejs.dev)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com)

## 📄 License

This project is part of the PLP MERN Stack Development course. All rights reserved.

---

## 🎓 Course Information

**Course:** React.js, JSX, and CSS - Mastering Front-End Development  
**Week:** 3  
**Repository:** PLP-MERN-Stack-Development  
**Created:** 2024

---

**Built with ❤️ by PLP MERN Stack Development Community**

For questions or support, please refer to the course materials or reach out to your instructor.
