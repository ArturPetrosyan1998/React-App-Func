import { useNavigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  if (token) {
    return navigate('/');
  }
  return children;
};

export default PublicRoute;
