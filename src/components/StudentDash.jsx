import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ScheduleMeeting from './ScheduleMeeting'; 

const API_BASE_URL = 'https://phase5-project-ierq.onrender.com';


const StudentDash = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState('');
  const [showScheduleMeeting, setShowScheduleMeeting] = useState(false); // State for showing ScheduleMeeting

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
    navigate('/assessment');
  };

  const handleExamsClick = () => {
    navigate('/Quiz');
  };

  const handleSchedulemeeting = () => {
    navigate('/schedule-meeting');
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 text-gray-800 overflow-hidden">
      <aside className="w-full md:w-1/4 p-4 bg-white border-r border-gray-200 overflow-y-auto h-screen">
        <h1 className="text-4xl font-extrabold mb-8">Student Dashboard</h1>
        <nav className="mb-10">
          <ul className="space-y-4">
            <li>
              <button className="w-full text-left font-semibold py-2 px-4 rounded-lg transition-colors duration-200 hover:bg-blue-100 hover:text-blue-700" onClick={handleAssessmentsClick}>Assessments</button>
            </li>
            <li className="mb-2 text-black">
              <button className="hover:underline border-b border-gray-300" onClick={handleExamsClick}>Exams</button>
            </li>
            {/* <li className="mb-2 text-black">
              <button className="hover:underline border-b border-gray-300" onClick={() => setShowScheduleMeeting(true)}>Schedule Meeting</button>
            </li> */}
            <li className="mb-2 text-black">
              <button onClick={handleSchedulemeeting} className="hover:underline border-b border-gray-300">Schedule Meeting</button>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 p-6 overflow-y-auto h-screen">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="courses-container space-y-6">
            {courses.map(course => (
              <article
                key={course.id}
                className="card bg-blue-50 p-2 shadow-lg rounded-xl cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                onClick={() => fetchCourseDetails(course.id)}
              >
                <h3 className="text-2xl font-bold mb-3">{course.name}</h3>
                <button
                  className="text-red-600 hover:text-red-800 font-medium"
                  onClick={(e) => deleteCourse(course.id, e)}
                >
                  Delete
                </button>
              </article>
            ))}
          </div>

          {selectedCourse && (
            <article className="course-details bg-white p-6 shadow-lg rounded-xl">
              <h2 className="text-3xl font-bold mb-6">{selectedCourse.name}</h2>
              <p className="mb-6">{selectedCourse.body}</p>
              <div>
                <h3 className="text-xl font-bold mb-4">Resources:</h3>
                {selectedCourse.resources && selectedCourse.resources.length > 0 ? (
                  <ul className="list-disc list-inside space-y-2">
                    {selectedCourse.resources.map(resource => (
                      <li key={resource.id} className="font-medium">
                        <strong>{resource.name}</strong> ({resource.type}): <a href={resource.url} className="text-blue-600 hover:underline">{resource.url}</a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600">No resources available.</p>
                )}
              </div>
            </article>
          )}
        </section>

        <section className="chat-app mt-10">
          <h2 className="text-3xl font-bold mb-6">Course Chat</h2>
          <div className="chat-messages p-6 bg-white shadow-lg rounded-xl h-72 overflow-y-auto mb-6">
            {chatMessages.map(chat => (
              <div key={chat.id} className="chat-message mb-4 p-4 bg-blue-100 rounded-lg">
                <span className="font-medium">{chat.message}</span>
                <button
                  className="ml-4 text-red-600 hover:text-red-800"
                  onClick={() => deleteChat(chat.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
          <div className="flex gap-4">
            <select
              value={selectedStudent}
              onChange={(e) => setSelectedStudent(e.target.value)}
              className="flex-1 p-4 border border-gray-300 rounded-lg"
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
              className="flex-1 p-4 border border-gray-300 rounded-lg"
              placeholder="Type a message..."
            />
            <button
              onClick={sendMessage}
              className="p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200"
            >
              Send
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default StudentDash;