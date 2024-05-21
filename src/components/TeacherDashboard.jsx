import React, { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import axios from 'axios';

// Define the endpoints
const API_BASE_URL = 'https://virtulearn-backend.onrender.com';

const Card = ({ link, title, className }) => (
  <div className={`p-4 mb-4 bg-white shadow-md rounded-md cursor-pointer ${className || ''}`}>
    <h2 className="text-xl font-bold">
      <Link to={link} className="text-blue-500 hover:underline">
        {title}
      </Link>
    </h2>
  </div>
);

const TeacherDashboard = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [studentsData, setStudentsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch attendance data
        const attendanceResponse = await axios.get(`${API_BASE_URL}/attendances`);
        setAttendanceData(attendanceResponse.data);

        // Fetch students data
        const studentsResponse = await axios.get(`${API_BASE_URL}/students`);
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

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-1/4 p-4 bg-gray-800 text-white">
        <h2 className="text-2xl font-bold mb-4">Teacher Dashboard</h2>
        <ul>
          <li className="mb-2"><Link to="/teacher/student-attendance" className="hover:underline">Student Attendance</Link></li>
          <li className="mb-2"><Link to="/teacher/resources" className="hover:underline">Resources</Link></li>
          <li className="mb-2"><Link to="/teacher/students-data" className="hover:underline">Students Data</Link></li>
          <li className="mb-2"><Link to="/teacher/details" className="hover:underline">Teacher's Details</Link></li>
          <li className="mb-2"><Link to="/teacher/attendance-data" className="hover:underline">Attendance Data</Link></li>
        </ul>
      </div>
      <div className="w-3/4 p-6">
        <header className="mb-6">
          <h1 className="text-3xl font-bold">Welcome to your Instructor Dashboard</h1>
        </header>
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Attendance Data</h2>
          {attendanceData.map((item, index) => (
            <div key={index} className="mb-2 p-2 bg-white shadow-md rounded-md">
              <p>{item.date}: {item.present ? 'Present' : 'Absent'}</p>
            </div>
          ))}
        </div>
        <Routes>
          <Route path="student-attendance" element={<div>Student Attendance</div>} />
          <Route path="resources" element={<div>Resources</div>} />
          <Route path="students-data" element={<div>Student Data</div>} />
          <Route path="details" element={<div>Teacher Details</div>} />
        </Routes>
      </div>
      <div className="w-full text-center p-4 bg-gray-200">
        <p>&copy; 2024 VirtuLearn Academy. All rights reserved.</p>
      </div>
    </div>
  );
}

export default TeacherDashboard;
