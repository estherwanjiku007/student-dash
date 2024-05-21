import React, { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import axios from 'axios';

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

  return (
    <div className="dashboard-container bg-gray-100">
      <div className="content-wrapper flex flex-row">
        <div className="sidebar bg-white shadow rounded-md p-4 flex flex-col gap-4">
          <Card link="/teacher/student-attendance" title="Student Attendance" />
          <Card link="/upload" title="Resources" />
          <Card link="/studentData" title="Students Data" />
          <Card link="/teacher/details" title="Teacher's Details" />
          <Card link="/Attendance" title="Attendance Data" className="attendance-card" />
        </div>
        <div className="main-content flex-grow p-4">
          <h1 className="welcome-header text-2xl font-bold mb-4">Welcome to your instructor Dashboard</h1>
          <div className="attendance-data">
            <h2>Attendance Data</h2>
            {attendanceData.map((item, index) => (
              <div key={index} className="mb-2">
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
      </div>
      <div className="footer bg-gray-200 text-center p-4">
        <p>&copy; 2024 VirtuLearn Academy. All rights reserved.</p>
      </div>
    </div>
  );
}

export default TeacherDashboard;