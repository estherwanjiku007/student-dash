import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AssessmentsTable = () => {
  const [assessments, setAssessments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAssessments = async () => {
      try {
        const response = await axios.get('https://virtulearn-backend.onrender.com//assessments');
        setAssessments(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAssessments();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Course ID</th>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Plagiarism Check</th>
            <th className="py-2 px-4 border-b">Time Limit</th>
          </tr>
        </thead>
        <tbody>
          {assessments.map((assessment) => (
            <tr key={assessment.id}>
              <td className="py-2 px-4 border-b">{assessment.course_id}</td>
              <td className="py-2 px-4 border-b">{assessment.id}</td>
              <td className="py-2 px-4 border-b">{assessment.name}</td>
              <td className="py-2 px-4 border-b">{assessment.plagiarism_check ? 'Yes' : 'No'}</td>
              <td className="py-2 px-4 border-b">{new Date(assessment.time_limit).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssessmentsTable;
