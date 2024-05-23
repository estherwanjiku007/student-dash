import React, { useState, useEffect } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Logout from './Logout';

// Define the endpoints
const ATTENDANCE_ENDPOINT = 'https://virtulearn-backend.onrender.com/attendances';
const STUDENTS_ENDPOINT = 'https://virtulearn-backend.onrender.com/students';

const Card = ({ link, title, className }) => (
  <div className={`card ${className || ''}`}>
    <h2>
      <Link to={link} className="link text-blue-700 hover:text-blue-800">
        {title}
      </Link>
    </h2>
  </div>
);

function TeacherDashboard() {
  const [attendanceData, setAttendanceData] = useState([]);
  const [studentsData, setStudentsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch attendance data
        const attendanceResponse = await axios.get(ATTENDANCE_ENDPOINT);
        setAttendanceData(attendanceResponse.data);

        // Fetch students data
        const studentsResponse = await axios.get(STUDENTS_ENDPOINT);
        setStudentsData(studentsResponse.data);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleLogout = () => {
    // Perform logout actions here (if any)
    navigate('/logout');
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 text-gray-800">
      <aside className="w-full md:w-1/4 p-6 bg-white border-r border-gray-200 overflow-y-auto">
        <h1 className="text-4xl font-extrabold mb-8">Instructor Dashboard</h1>
        <nav className="mb-10">
          <ul className="space-y-4">
            <li>
              <Link to="/addattendance" className="w-full text-left font-semibold py-2 px-4 rounded-lg transition-colors duration-200 hover:bg-blue-100 text-blue-600 no-underline">
                Student Attendance
              </Link>
            </li>
            <li>
              <Link to="/upload" className="w-full text-left font-semibold py-2 px-4 rounded-lg transition-colors duration-200 hover:bg-blue-100 text-blue-600 no-underline">
                Resources
              </Link>
            </li>
            <li>
              <Link to="/studentData" className="w-full text-left font-semibold py-2 px-4 rounded-lg transition-colors duration-200 hover:bg-blue-100 text-blue-600 no-underline">
                Students Data
              </Link>
            </li>
            <li>
              <Link to="/teacher/details" className="w-full text-left font-semibold py-2 px-4 rounded-lg transition-colors duration-200 hover:bg-blue-100 text-blue-600 no-underline">
                Teacher's Details
              </Link>
            </li>
            <li>
              <Link to="/Attendance" className="w-full text-left font-semibold py-2 px-4 rounded-lg transition-colors duration-200 hover:bg-blue-100 text-blue-600 no-underline">
                Attendance Data
              </Link>
            </li>
            <li>
              <Link to="/Schedule-Meeting" className="w-full text-left font-semibold py-2 px-4 rounded-lg transition-colors duration-200 hover:bg-blue-100 text-blue-600 no-underline">
                Schedule Meeting
              </Link>
            </li>
            <li>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 p-6 overflow-y-auto">
        <Routes>
          <Route path="/addattendance" element={<div>Student Attendance</div>} />
          <Route path="/upload" element={<div>Resources</div>} />
          <Route path="/studentData" element={<div>Student Data</div>} />
          <Route path="/teacher/details" element={<div>Teacher Details</div>} />
          <Route path="/Attendance" element={<div>Attendance Data</div>} />
          <Route path="/Schedule-Meeting" element={<div>Schedule Meeting</div>} />
        </Routes>
      </main>
      {/* <div className="footer bg-gray-200 text-center p-4">
        <p>&copy; 2024 VirtuLearn Academy. All rights reserved.</p>
      </div> */}
    </div>
  );
}

export default TeacherDashboard;
