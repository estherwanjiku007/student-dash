import React, { useState, useEffect } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';
import CreateSchool from './CreateSchool.jsx';
import AddStudent from './AddStudent.jsx';
import AddTeacher from './AddTeacher.jsx';
import Logout from './Logout';

function SchoolOwnerDashboard() {
  const [schools, setSchools] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchSchools();
  }, []);

  const fetchSchools = async () => {
    try {
      const response = await axios.get('https://virtulearn-backend.onrender.com/schools');
      setSchools(response.data);
    } catch (error) {
      console.error('Error fetching schools:', error);
    }
  };

  const deleteSchool = async (schoolId) => {
    try {
      await axios.delete(`https://virtulearn-backend.onrender.com/schools/${schoolId}`);
      fetchSchools(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting school:', error);
      alert('Error deleting school');
    }
  };

  const handleLogout = () => {
    // Perform logout actions here (if any)
    navigate('/logout');
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 text-gray-800">
      <aside className="w-full md:w-1/4 p-6 bg-white border-r border-gray-200 overflow-y-auto">
        <h1 className="text-4xl font-extrabold mb-8">School Owner's Dashboard</h1>
        <nav className="mb-10">
          <ul className="space-y-4">
            <li>
              <Link to="/create-school" className="w-full text-left font-semibold py-2 px-4 rounded-lg transition-colors duration-200 hover:bg-blue-100 text-blue-600 no-underline">Create School</Link>
            </li>
            <li>
              <Link to="/add-student" className="w-full text-left font-semibold py-2 px-4 rounded-lg transition-colors duration-200 hover:bg-blue-100 text-blue-600 no-underline">Add Student</Link>
            </li>
            <li>
              <Link to="/add-teacher" className="w-full text-left font-semibold py-2 px-4 rounded-lg transition-colors duration-200 hover:bg-blue-100 text-blue-600 no-underline">Add Teacher</Link>
            </li>
            <li>
              <button onClick={handleLogout} className="w-full text-left font-semibold py-2 px-4 rounded-lg transition-colors duration-200 hover:bg-red-100 text-blue-600 no-underline">Log out</button>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 p-6 overflow-y-auto">
        <Routes>
          <Route path="/" element={
            <>
              <h1 className="text-4xl font-bold mb-8">Welcome to your Manager Dashboard</h1>
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Schools</h2>
                {schools.length > 0 ? (
                  <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {schools.map(school => (
                      <div key={school.id} className="bg-blue-50 p-6 shadow-lg rounded-xl cursor-pointer hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-2xl font-bold mb-3">{school.name}</h3>
                        <p className="mb-2 font-medium">Address: {school.address}</p>
                        <p className="mb-4 font-medium">Contact: {school.contact}</p>
                        <button 
                          onClick={() => deleteSchool(school.id)} 
                          className="text-red-600 hover:text-red-800 font-medium"
                        >
                          Delete
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>No schools available.</p>
                )}
              </div>
            </>
          } />
          <Route path="/create-school" element={<CreateSchool />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/add-teacher" element={<AddTeacher />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </main>
    </div>
  );
}

export default SchoolOwnerDashboard;
