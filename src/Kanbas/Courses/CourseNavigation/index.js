import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import './index.css'


function CourseNavigation() {
    const { courseId } = useParams();
    function getCourseLinks() {
        
        const links = [
            { to: `/Kanbas/Courses/${courseId}/Home`, label: "Home" },
            { to: `/Kanbas/Courses/${courseId}/Modules`, label: "Modules" },
            { to: `/Kanbas/Courses/${courseId}/Piazza`, label: "Piazza" },
            { to: `/Kanbas/Courses/${courseId}/ZoomMeetings`, label: "Zoom Meetings" },
            { to: `/Kanbas/Courses/${courseId}/Assignments`, label: "Assignments" },
            { to: `/Kanbas/Courses/${courseId}/Quizzes`, label: "Quizzes" },
            { to: `/Kanbas/Courses/${courseId}/Grades`, label: "Grades" },
            { to: `/Kanbas/Courses/${courseId}/People`, label: "People" },
            { to: `/Kanbas/Courses/${courseId}/PanoptoVideo`, label: "Panopto Video" },
            { to: `/Kanbas/Courses/${courseId}/Disccusion`, label: "Disccusion" },
            { to: `/Kanbas/Courses/${courseId}/Announcements`, label: "Announcements" },
            { to: `/Kanbas/Courses/${courseId}/Pages`, label: "Pages" },
            { to: `/Kanbas/Courses/${courseId}/Files`, label: "Files" },
            { to: `/Kanbas/Courses/${courseId}/Rubrics`, label: "Rubrics" },
            { to: `/Kanbas/Courses/${courseId}/Outcomes`, label: "Outcomes" },
            { to: `/Kanbas/Courses/${courseId}/Collaborations`, label: "Collaborations" },
            { to: `/Kanbas/Courses/${courseId}/Syllabus`, label: "Syllabus" },
            { to: `/Kanbas/Courses/${courseId}/ProgressReports`, label: "Progress Reports (EAB Navigate)" },
            { to: `/Kanbas/Courses/${courseId}/Settings/CourseDetails`, label: "Settings" },
          ];
          return links;
    
    }
  
  const location = useLocation();
  const links = getCourseLinks();
 

  return (
    <div className="col-2 col-md-2 col-xl-2 d-none d-lg-block">
      <p className="d-none d-lg-block" style={{ marginLeft: "20px", color: "gray",whiteSpace: "nowrap" }}>
        202410_1 Fall 2023 Semest...
      </p>
      <ul className="wd-course-navigation d-none d-md-block col-xl-3">
        {links.map((link, index) => (
          <li key={index} className={location.pathname.includes(link.to) ? "wd-active" : ""}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseNavigation;
