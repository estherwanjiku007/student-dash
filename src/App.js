import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/shared/Layout';
import Home from './components/Home';
import Courses from './components/Courses';
import Register from './components/Register';
import Dailytask from './components/Dailytask';
import Login from './components/Login';
import StudentDash from './components/StudentDash'

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
        
        </Route>
        {/* <Route path='login' element={<div> Login page</div>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
