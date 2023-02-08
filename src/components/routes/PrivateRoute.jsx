import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    const navigate = useNavigate();
    return navigate('/login');
  }
  return children;
};
export default PrivateRoute;
