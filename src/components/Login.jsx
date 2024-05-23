import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from './AuthContext';

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://virtulearn-backend.onrender.com/login', { name, password });
      const { role, token } = response.data;

      localStorage.setItem('token', token);
      login(); // Update auth status

      switch (role) {
        case 'student':
          navigate('/StudentDash', { state: { name } });
          break;
        case 'instructor':
          navigate('/Teacherdashboard', { state: { name } });
          break;
        case 'owner':
          navigate('/SchoolOwnerDashboard', { state: { name } });
          break;
        default:
          setError('Invalid role');
      }
    } catch (error) {
      setError(error.response ? error.response.data.message : 'Login failed');
    }
  };

  const handleRegisterRedirect = () => {
    navigate('/register');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200" type="submit">Login</button>
          <div className="mt-4 text-center">
          <p className="text-gray-700">Don't have an account?</p>
          <button
            className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition duration-200 mt-2"
            onClick={handleRegisterRedirect}
          >
            Register
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
