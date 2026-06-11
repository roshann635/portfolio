import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import SmoothScroll from './components/common/SmoothScroll';
import PageLoader from './components/common/PageLoader';
import AppRoutes from './routes/AppRoutes';
import ScrollProgress from './components/common/ScrollProgress';
import './styles/global.css';


function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <BrowserRouter>
      <AuthProvider>
        {/* ---- Cinematic page loader (runs once on first visit) ---- */}
        {!loaded && <PageLoader onComplete={() => setLoaded(true)} />}

        {/* ---- Lenis smooth scroll (patches global scroll behavior) ---- */}
        <SmoothScroll />

        {/* ---- Scroll progress capsule (fixed foreground) ---- */}
        <ScrollProgress />

        <div className="app" style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.4s ease' }}>
          <Navbar />
          <main className="app__main">
            <AppRoutes />
          </main>
          <Footer />
        </div>

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
          theme={document.body.classList.contains('retro-theme') ? 'light' : 'dark'}
        />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
