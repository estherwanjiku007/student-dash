import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = () => {
      // Clear any stored user data (e.g., localStorage, sessionStorage)
      localStorage.removeItem('userToken');
      // Navigate to the login page
      navigate('/login');
    };

    logout();
  }, [navigate]);

  return (
    <div>
      <p>Logging out...</p>
    </div>
  );
};

export default Logout;
