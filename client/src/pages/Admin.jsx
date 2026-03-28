import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import Dashboard from '../components/admin/Dashboard';
import ProjectForm from '../components/admin/ProjectForm';
import Button from '../components/common/Button';
import { FaSignInAlt, FaSignOutAlt, FaTachometerAlt, FaPlus } from 'react-icons/fa';
import { toast } from 'react-toastify';
import './Admin.css';

const Admin = () => {
  const { user, login, register, logout, isAuthenticated } = useAuth();
  const [tab, setTab] = useState('dashboard');
  const [authMode, setAuthMode] = useState('login');
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (authMode === 'login') {
        await login(form.email, form.password);
      } else {
        await register(form.name, form.email, form.password);
      }
      toast.success(`Welcome back! 🎮`);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Authentication failed');
    } finally { setLoading(false); }
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-auth section" style={{ paddingTop: 'calc(var(--nav-height) + var(--space-3xl))' }}>
        <div className="container">
          <motion.div
            className="admin-auth__card glass-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2>🔐 Admin Access</h2>
            <p>{authMode === 'login' ? 'Login to manage your portfolio' : 'Create an admin account'}</p>

            <form onSubmit={handleAuthSubmit} className="admin-auth__form">
              {authMode === 'register' && (
                <div className="form-group">
                  <label>Name</label>
                  <input className="form-input" type="text" value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder="Your name" />
                </div>
              )}
              <div className="form-group">
                <label>Email</label>
                <input className="form-input" type="email" value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })} required placeholder="admin@example.com" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input className="form-input" type="password" value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })} required placeholder="••••••" />
              </div>
              <Button type="submit" variant="primary" size="lg" icon={<FaSignInAlt />} disabled={loading}>
                {loading ? 'Loading...' : authMode === 'login' ? 'Login' : 'Register'}
              </Button>
            </form>

            <p className="admin-auth__switch">
              {authMode === 'login' ? "Don't have an account? " : 'Already have an account? '}
              <button onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}>
                {authMode === 'login' ? 'Register' : 'Login'}
              </button>
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin section" style={{ paddingTop: 'calc(var(--nav-height) + var(--space-3xl))' }}>
      <div className="container">
        <div className="admin__header">
          <h2>🎮 Admin Dashboard</h2>
          <div className="admin__header-actions">
            <span className="badge teal">👤 {user?.name || user?.email}</span>
            <Button variant="ghost" size="sm" icon={<FaSignOutAlt />} onClick={logout}>Logout</Button>
          </div>
        </div>

        <div className="admin__tabs">
          <button className={`admin__tab ${tab === 'dashboard' ? 'admin__tab--active' : ''}`}
            onClick={() => setTab('dashboard')}>
            <FaTachometerAlt /> Dashboard
          </button>
          <button className={`admin__tab ${tab === 'add-project' ? 'admin__tab--active' : ''}`}
            onClick={() => setTab('add-project')}>
            <FaPlus /> Add Project
          </button>
        </div>

        <div className="admin__content">
          {tab === 'dashboard' && <Dashboard />}
          {tab === 'add-project' && <ProjectForm onSuccess={() => setTab('dashboard')} />}
        </div>
      </div>
    </div>
  );
};

export default Admin;
