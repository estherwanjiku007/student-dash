import React, { useEffect, useState } from 'react';
import axios from 'axios';
<<<<<<< HEAD
=======
import * as XLSX from 'xlsx';
>>>>>>> origin/Archibald/frontend

const API_BASE_URL = 'https://virtulearn-backend.onrender.com';

const StudentData = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/students`);
      const data = response.data;
      setStudents(data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

<<<<<<< HEAD
  return (
    <div className="student-data-container bg-gray-100 p-4">
      <h2>Students List</h2>
=======
  const exportToExcel = () => {
    const filename = 'students.xlsx';
    const header = ['ID', 'Name', 'Course', 'School', 'Resource'];
    const data = students.map(student => [student.id, student.name, student.course.name, student.school.name, student.resource.name]);
    const ws = XLSX.utils.aoa_to_sheet([header, ...data]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Students');
    XLSX.writeFile(wb, filename);
  };

  return (
    <div className="student-data-container bg-gray-100 p-4">
      <h2>Students List</h2>
      <button onClick={exportToExcel} className="bg-blue-500 text-white py-2 px-4 rounded-md mb-4">Export Student Data to Excel</button>
>>>>>>> origin/Archibald/frontend
      <table className="students-table w-full shadow rounded-md">
        <thead>
          <tr className="bg-gray-200 text-left text-sm font-medium">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Course</th>
            <th className="px-4 py-2">School</th>
            <th className="px-4 py-2">Resource</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="border-b border-gray-300 hover:bg-gray-200">
              <td className="px-4 py-2">{student.id}</td>
              <td className="px-4 py-2">{student.name}</td>
              <td className="px-4 py-2">{student.course.name}</td>
              <td className="px-4 py-2">{student.school.name}</td>
              <td className="px-4 py-2">{student.resource.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

<<<<<<< HEAD
export default StudentData;
=======
export default StudentData;
>>>>>>> origin/Archibald/frontend
