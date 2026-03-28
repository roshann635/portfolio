import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Loader from '../components/common/Loader';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  if (loading) return <Loader text="Authenticating..." />;
  if (!isAuthenticated) return <Navigate to="/admin" replace />;
  return children;
};

export default ProtectedRoute;
