import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_BASE_URL = 'https://virtulearn-backend.onrender.com';

const StudentDash = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState('');

  useEffect(() => {
    fetchCourses();
    fetchChats();
    fetchStudents();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/courses`);
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const fetchCourseDetails = async (courseId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/courses/${courseId}`);
      setSelectedCourse(response.data);
    } catch (error) {
      console.error('Error fetching course details:', error);
    }
  };

  const fetchChats = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/coursechats`);
      setChatMessages(response.data);
    } catch (error) {
      console.error('Error fetching chats:', error);
    }
  };

  const fetchStudents = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/students`);
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const deleteCourse = async (courseId, event) => {
    event.stopPropagation();
    try {
      await axios.delete(`${API_BASE_URL}/courses/${courseId}`);
      setCourses(courses.filter(course => course.id !== courseId));
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  const sendMessage = async () => {
    if (!selectedStudent) {
      alert('Please select a student to send the message to.');
      return;
    }

    const messageData = {
      course_id: selectedCourse ? selectedCourse.id : 1,
      message: newMessage,
      student_id: selectedStudent,
      timestamp: new Date().toISOString()
    };
    try {
      await axios.post(`${API_BASE_URL}/coursechats`, messageData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setNewMessage('');
      fetchChats();
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const deleteChat = async (chatId) => {
    try {
      await axios.delete(`${API_BASE_URL}/coursechats/${chatId}`);
      setChatMessages(chatMessages.filter(chat => chat.id !== chatId));
    } catch (error) {
      console.error('Error deleting chat message:', error);
    }
  };

  const handleAssessmentsClick = () => {
    navigate('/create-school');
  };

  const handleExamsClick = () => {
    navigate('/Quiz');
  };

  const handleLogout = () => {
    navigate('/logout');
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/4 p-4 border-r border-gray-300 overflow-y-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Student Dashboard</h1>
        </div>
        <div className="mb-6">
          <ul>
            <li className="mb-2 text-black">
              <button className="hover:underline border-b border-gray-300" onClick={handleAssessmentsClick}>Assessments</button>
            </li>
            <li className="mb-2 text-black">
              <button className="hover:underline border-b border-gray-300" onClick={handleExamsClick}>Exams</button>
            </li>            
          </ul>
        </div>
      </div>

      <div className="w-full md:w-3/4 p-4 overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="courses-container">
            {courses.map(course => (
              <div
                key={course.id}
                className="card p-4 mb-4 bg-white shadow-md rounded-md cursor-pointer"
                onClick={() => fetchCourseDetails(course.id)}
              >
                <h3 className="text-xl font-bold">{course.name}</h3>
                <button
                  className="mt-2 text-sm text-red-500 hover:text-red-700"
                  onClick={(e) => deleteCourse(course.id, e)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          {selectedCourse && (
            <div className="course-details p-4 bg-white shadow-md rounded-md">
              <h2 className="text-2xl font-bold mb-4">{selectedCourse.name}</h2>
              <p className="mb-4">{selectedCourse.body}</p>
              <h3 className="text-xl font-bold mb-2">Resources:</h3>
              {selectedCourse.resources && selectedCourse.resources.length > 0 ? (
                <ul className="list-disc list-inside">
                  {selectedCourse.resources.map(resource => (
                    <li key={resource.id}>
                      <strong>{resource.name}</strong> ({resource.type}): <a href={resource.url} className="text-blue-500 hover:underline">{resource.url}</a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No resources available.</p>
              )}
            </div>
          )}
        </div>

        <div className="chat-app mt-6">
          <h2 className="text-2xl font-bold mb-4">Course Chat</h2>
          <div className="chat-messages mb-4 p-4 bg-white shadow-md rounded-md h-64 overflow-y-scroll">
            {chatMessages.map(chat => (
              <div key={chat.id} className="chat-message mb-2 p-2 bg-gray-100 rounded-md">
                <span>{chat.message}</span>
                <button
                  className="ml-2 text-sm text-red-500 hover:text-red-700"
                  onClick={() => deleteChat(chat.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
          <select
            value={selectedStudent}
            onChange={(e) => setSelectedStudent(e.target.value)}
            className="mb-2 p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select student</option>
            {students.map(student => (
              <option key={student.id} value={student.id}>
                {student.name}
              </option>
            ))}
          </select>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="mb-2 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Type a message..."
          />
          <button
            onClick={sendMessage}
            className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentDash;
