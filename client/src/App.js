import logo from './logo.svg';
import './App.css';
import { Routes,Route } from "react-router-dom";
import SignIn from './component/SignIn.js';
import SignUp from './component/SignUp.js';
import StudentDashbord from "./component/StudentDashbord.js"
import CourseListing from './component/courseListing.js';
import CourseDetails from './component/courseDetails.js';
function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/" element={<SignIn></SignIn>} />
      <Route path="sign-up" element={<SignUp></SignUp>} />
       <Route path="task-dashboard" element={<StudentDashbord></StudentDashbord>} />
        <Route path="task-dashboard/all-courses" element={<CourseListing></CourseListing>} />
        <Route path="task-dashboard/all-courses/course-detail" element={<CourseDetails></CourseDetails>} />  
        <Route path="task-dashboard/course-detail" element={<CourseDetails></CourseDetails>} />
    </Routes>
    </div>
  );
}

export default App;
