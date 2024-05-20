import React, { useState, useEffect } from 'react';



/*This is not the official code, get the updated one */
function StudentDash({ username }) {

  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [chatMessages, setChatMessages] = useState(() => {
    const savedMessages = localStorage.getItem('chatMessages');
    return savedMessages ? JSON.parse(savedMessages) : [];
  });
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(chatMessages));
  }, [chatMessages]);

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { name: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setChatMessages([...chatMessages, { text: newMessage, username }]);
      setNewMessage('');
    }
  };

  const handleDeleteChatMessage = (index) => {
    const updatedMessages = [...chatMessages];
    updatedMessages.splice(index, 1);
    setChatMessages(updatedMessages);
  };

  const courses = [
    {
      name: 'Cyber Security',
      content: 'Introduction to Cyber Security, Network Security, Cryptography, Risk Management.'
    },
    {
      name: 'Computer Science',
      content: 'Data Structures, Algorithms, Operating Systems, Computer Networks.'
    },
    {
      name: 'Software Engineering',
      content: 'Software Development Life Cycle, Agile Methodologies, Project Management, Quality Assurance.'
    },
    {
      name: 'Data Science',
      content: 'Data Analysis, Machine Learning, Statistical Methods, Data Visualization.'
    }
  ];

  const [visibleCourseIndex, setVisibleCourseIndex] = useState(null);

  const toggleCourseContent = (index) => {
    setVisibleCourseIndex(visibleCourseIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-4xl font-bold text-center mb-6">Student Dashboard</h1>

      {/* Todo List */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">My Tasks for Today</h2>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border border-gray-300 p-2 rounded-lg mr-2"
        />
        <button onClick={handleAddTask} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add Task
        </button>
        <ul className="mt-4">
          {tasks.map((task, index) => (
            <li key={index} className={`p-2 ${task.completed ? 'text-green-500 line-through' : ''}`}>
              <span onClick={() => handleTaskCompletion(index)}>
                {task.name}
              </span>
              <button onClick={() => handleDeleteTask(index)} className="text-red-500 hover:text-red-700 ml-4">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Box */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Chat Box</h2>
        <div className="border border-gray-300 p-4 rounded-lg mb-4">
          {chatMessages.map((message, index) => (
            <div key={index} className="flex items-center justify-between mb-2">
              <strong>{username}:</strong> {message.text}
              <button onClick={() => handleDeleteChatMessage(index)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                Delete
              </button>
            </div>
          ))}
        </div>
        <input
          type="text"
          placeholder="chat here"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="border border-gray-300 p-2 rounded-lg mr-2"
        />
        <button onClick={handleSendMessage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Send
        </button>
      </div>

      {/* Course Content */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Course Content</h2>
        {courses.map((course, index) => (
          <div key={index} className="mb-4">
            <h3 onClick={() => toggleCourseContent(index)} className="text-xl font-semibold cursor-pointer">
              {course.name}
            </h3>
            {visibleCourseIndex === index && (
              <p className="mt-2">{course.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentDash;