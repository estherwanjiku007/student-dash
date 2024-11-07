import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_BASE_URL = 'https://virtulearn-backend.onrender.com/';

const AttendanceTable = () => {
  const [attendances, setAttendances] = useState([]);

  useEffect(() => {
    fetchAttendances();
  }, []);

  const fetchAttendances = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/attendances`);
      const data = response.data;
      setAttendances(data);
    } catch (error) {
      console.error('Error fetching attendances:', error);
    }
  };

  return (
    <div className="attendance-table-container bg-gray-100 p-4">
      <h2>Attendance List</h2>
      <table className="attendance-table w-full shadow rounded-md">
        <thead>
          <tr className="bg-gray-200 text-left text-sm font-medium">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Student Name</th>
            <th className="px-4 py-2">Teacher Name</th>
            <th className="px-4 py-2">Course Name</th>
            <th className="px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {attendances.map((attendance) => (
            <tr key={attendance.id} className="border-b border-gray-300 hover:bg-gray-200">
              <td className="px-4 py-2">{attendance.id}</td>
              <td className="px-4 py-2">{attendance.student.name}</td>
              <td className="px-4 py-2">{attendance.teacher.name}</td>
              <td className="px-4 py-2">{attendance.course.name}</td>
              <td className="px-4 py-2">{attendance.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;