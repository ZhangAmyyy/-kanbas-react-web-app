import db from "../Database";
import { Navigate, Route, Routes, useParams,Link, useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import '@fortawesome/fontawesome-free/css/all.min.css';


function Courses() {
  const { courseId } = useParams();
  // const location = useLocation();
  const {pathname} = useLocation();
  const course = db.courses.find((course) => course._id === courseId);
  const [empty, kanbas, courses, id, screen] = pathname.split("/");
  // const links=getCourseLinks();
  // const selectedLabel = links.find(link => location.pathname.includes(link.to))?.label;
  return (
    <div>
    <div style={{ display: "flex", alignItems: "center", color: "red" }}>
      <i className="fa-solid fa-bars fa-2x" style={{ marginRight: "20px" }}></i>
      <Link to={`/Kanbas/Courses/${course._id}`} style={{ textDecoration: "none", color: "red" }}>
      <h1>{course.name} <span style={{ color: "black" }}> {'>'}{screen}</span></h1>
        {/* {selectedLabel && <span style={{ marginLeft: "10px" }}>{'>'} {selectedLabel}</span>} */}
        
      </Link>
      <button type="button" className="btn btn-outline-secondary btn-light ms-auto"><i className="fa-solid fa-glasses"></i>Student View</button>

    </div>
    <hr />
    <div style={{ display: "flex" }}>
      <div style={{ flex: "0 0 20%", marginRight: "20px" }}> <CourseNavigation /></div>
   
      <div style={{ flex: "1" }}>
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor/>}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
      </div>

    </div>
   

    </div>
  );
}
export default Courses;

