import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear token or any other logout-related state here
    localStorage.removeItem('token');

    navigate('/');
  }, [navigate]);

  return null; 
}

export default Logout;
