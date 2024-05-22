import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/shared/Layout';
import Home from './components/Home';
import Courses from './components/Courses';
import Register from './components/Register';
import Dailytask from './components/Dailytask';
import Login from './components/Login';
import StudentDash from './components/StudentDash';
import SchoolOwnerDashboard from './components/SchoolOwnerDashboard';
import AddStudent from './components/AddStudent';
import TakeAttendance from './components/AddAttendance';
import AddTeacher from './components/AddTeacher';
import CreateSchool from './components/CreateSchool';
import TeacherDashboard from './components/TeacherDashboard';
import StudentData from './components/StudentData';
import AttendanceTable from './components/Attendance';
import Quizzes from './components/Quiz';
import FileUpload from './components/FileUpload';
import ScheduleMeeting from './components/ScheduleMeeting';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
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
          <Route path="schedule-meeting" element={<ScheduleMeeting />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
