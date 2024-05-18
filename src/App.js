import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/shared/Layout';
import Dashboard from './components/Dashboard';
import Courses from './components/Courses';
import Assignments from './components/Assignments';
import Dailytask from './components/Dailytask';
import Chatbox from './components/Chatbox';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="courses" element={<Courses />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="dailytask" element={<Dailytask />} />
          <Route path="chatbox" element={<Chatbox />} />
        
        </Route>
        <Route path='login' element={<div> Login page</div>}/>
      </Routes>
    </Router>
  );
}

export default App;
