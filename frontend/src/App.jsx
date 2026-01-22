import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ItemsList from './components/ItemsList';
import UsersList from './components/UsersList';
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

function App() {
  const [activeTab, setActiveTab] = useState('items');

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
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
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
