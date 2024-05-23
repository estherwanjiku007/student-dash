import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import Layout from './components/shared/Layout';
import Home from './components/Home';
import Courses from './components/Courses';
import Register from './components/Register';
import Dailytask from './components/Dailytask';
import Login from './components/Login';
import Logout from './components/Logout';
import StudentDash from './components/StudentDash';
import SchoolOwnerDashboard from './components/SchoolOwnerDashboard';
import AddStudent from './components/AddStudent.jsx';
import TakeAttendance from './components/AddAttendance.jsx';
import AddTeacher from './components/AddTeacher.jsx';
import CreateSchool from './components/CreateSchool.jsx';
import TeacherDashboard from './components/TeacherDashboard.jsx';
import StudentData from './components/StudentData.jsx';
import AttendanceTable from './components/Attendance.jsx';
import Contacts from "./components/Contacts.jsx"
import About from "./components/About.jsx"
import Quizzes from './components/Quiz.jsx';
import FileUpload from './components/FileUpload.jsx';
import AssessmentTable from './components/AssessmentTable.jsx';
 

function App() {
  
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='About' element={<About/>}/>
          <Route path='Contacts' element={<Contacts/>}/>
          <Route path="courses" element={<Courses />} />
          <Route path="Register" element={<Register />} />
          <Route path="dailytask" element={<Dailytask />} />
          <Route path="Login" element={<Login />} />
          <Route path="StudentDash" element={<StudentDash />} />
          <Route path="SchoolOwnerDashboard/*" element={<SchoolOwnerDashboard />} />
          <Route path="add-student" element={<AddStudent />} />
          <Route path="add-teacher" element={<AddTeacher />} />
          <Route path="create-school" element={<CreateSchool />} />
          <Route path="TeacherDashboard" element={<TeacherDashboard />} />
          <Route path="addattendance" element={<TakeAttendance />} />
          <Route path="StudentData" element={<StudentData />} />
          <Route path="Attendance" element={<AttendanceTable />} />
          <Route path="Quiz" element={<Quizzes />} />
          <Route path="upload" element={<FileUpload />} />
          <Route path="assessment" element={<AssessmentTable />} />
          <Route path="Logout" element={<Logout />} />
        </Route>
        {/* <Route path='login' element={<div> Login page</div>}/> */}
      </Routes>
    </Router>
    </AuthProvider>
    
  );
}

export default App;
