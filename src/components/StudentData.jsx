import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

  return (
    <div className="student-data-container bg-gray-100 p-4">
      <h2>Students List</h2>
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

export default StudentData;