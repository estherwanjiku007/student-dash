import React, { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = 'https://virtulearn-backend.onrender.com/';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [resourceName, setResourceName] = useState('');
  const [courseId, setCourseId] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleNameChange = (e) => {
    setResourceName(e.target.value);
  };

  const handleCourseIdChange = (e) => {
    setCourseId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', resourceName);
    formData.append('course_id', courseId);

    try {
      await axios.post(`${API_BASE_URL}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Resource uploaded successfully');
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="file-upload-container bg-gray-100 p-4 rounded-md shadow-md">
      <form className="file-upload-form flex flex-col gap-4" onSubmit={handleSubmit}>
        <label className="text-sm font-medium">Resource Name:</label>
        <input
          type="text"
          value={resourceName}
          onChange={handleNameChange}
          required
          className="rounded-md border border-gray-300 px-2 py-1"
        />
        <label className="text-sm font-medium">Course ID:</label>
        <input
          type="text"
          value={courseId}
          onChange={handleCourseIdChange}
          required
          className="rounded-md border border-gray-300 px-2 py-1"
        />
        <label className="text-sm font-medium">Upload File:</label>
        <input type="file" onChange={handleFileChange} required className="rounded-md border border-gray-300 px-2 py-1" />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md focus:outline-none">
          Upload
        </button>
      </form>
    </div>
  );
};

export default FileUpload;
