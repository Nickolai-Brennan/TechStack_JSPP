import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ItemsList from './components/ItemsList';
import UsersList from './components/UsersList';
import Profile from './pages/Profile';
import Docs from './pages/Docs';
import Blog from './pages/Blog';
import './App.css';

// Create a query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function Navigation() {
  const location = useLocation();
  
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="main-nav">
      <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
        🏠 Home
      </Link>
      <Link to="/profile" className={`nav-link ${isActive('/profile') ? 'active' : ''}`}>
        👤 Profile
      </Link>
      <Link to="/docs" className={`nav-link ${isActive('/docs') ? 'active' : ''}`}>
        📚 Docs
      </Link>
      <Link to="/blog" className={`nav-link ${isActive('/blog') ? 'active' : ''}`}>
        ✍️ Blog
      </Link>
    </nav>
  );
}

function HomePage() {
  const [activeTab, setActiveTab] = useState('items');

  return (
    <>
      <header className="app-header">
        <h1>TechStack JSPP</h1>
        <p className="subtitle">React + Tanstack Query + FastAPI + PostgreSQL</p>
      </header>

      <nav className="tabs">
        <button
          className={activeTab === 'items' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('items')}
        >
          Items
        </button>
        <button
          className={activeTab === 'users' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('users')}
        >
          Users
        </button>
      </nav>

      <main className="app-main">
        {activeTab === 'items' && <ItemsList />}
        {activeTab === 'users' && <UsersList />}
      </main>

      <footer className="app-footer">
        <p>
          Built with <strong>React</strong>, <strong>Tanstack Query</strong>,{' '}
          <strong>FastAPI</strong>, and <strong>PostgreSQL</strong>
        </p>
      </footer>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="app">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
