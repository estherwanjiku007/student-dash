import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/shared/Layout';
import Home from './components/Home';
import Courses from './components/Courses';
import Register from './components/Register';
import Dailytask from './components/Dailytask';
import Login from './components/Login';
import StudentDash from './components/StudentDash'
import SchoolOwnerDashboard from './components/SchoolOwnerDashboard';
import AddStudent from './components/AddStudent.jsx';
import AddTeacher from './components/AddTeacher.jsx';
import CreateSchool from './components/CreateSchool.jsx'
import TeacherDashboard from './components/TeacherDashboard.jsx';
import StudentData from './components/StudentData.jsx';
import AttendanceTable from './components/Attendance.jsx';
import Quizzes from './components/Quiz.jsx';
import Logout from './components/Logout'; // Import the Logout component


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route exact path='/login' element={<Login/>}/>
          <Route path="/courses" element={<Courses />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/dailytask" element={<Dailytask />} />
          <Route path="Login" element={<Login />} />

          
        
        </Route>
        {/* <Route path='login' element={<div> Login page</div>}/> */}
      </Routes>
    </Router>
  );
}

export default App;