import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import SmoothScroll from './components/common/SmoothScroll';
import CommandPalette from './components/common/CommandPalette';
import AppRoutes from './routes/AppRoutes';
import './styles/global.css';

function App() {
  const [theme, setTheme] = useState('night');
  const [isCmdOpen, setIsCmdOpen] = useState(false);

  // Initialize theme from storage or OS preference
  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) {
      setTheme(saved);
      if (saved === 'day') document.body.classList.add('day-theme');
      else document.body.classList.remove('day-theme');
    } else {
      const preferLight = window.matchMedia('(prefers-color-scheme: light)').matches;
      if (preferLight) {
        setTheme('day');
        document.body.classList.add('day-theme');
        localStorage.setItem('portfolio-theme', 'day');
      }
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'night' ? 'day' : 'night';
    setTheme(next);
    localStorage.setItem('portfolio-theme', next);
    if (next === 'day') {
      document.body.classList.add('day-theme');
    } else {
      document.body.classList.remove('day-theme');
    }
  };

  // Global keydown listener for Cmd+K / Ctrl+K (capture phase)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        e.stopPropagation();
        setIsCmdOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown, true);
    return () => window.removeEventListener('keydown', handleKeyDown, true);
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <SmoothScroll />

        <div className="app">
          <Navbar
            theme={theme}
            onToggleTheme={toggleTheme}
            onOpenCommandPalette={() => setIsCmdOpen(true)}
          />
          <main className="app__main">
            <AppRoutes />
            <Footer />
          </main>
        </div>

        <CommandPalette
          isOpen={isCmdOpen}
          onClose={() => setIsCmdOpen(false)}
          onToggleTheme={toggleTheme}
          currentTheme={theme}
        />

        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme={theme === 'day' ? 'light' : 'dark'}
        />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
