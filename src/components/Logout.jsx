import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const Logout = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    const performLogout = () => {
      localStorage.removeItem('token');
      logout();
      navigate('/login');
    };

    performLogout();
  }, [logout, navigate]);

  return (
    <div>
      <p>Logging out...</p>
    </div>
  );
};

export default Logout;
