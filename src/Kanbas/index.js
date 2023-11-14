import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate} from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./style.css"
import db from "./Database";
import { useState, useEffect} from "react";
import store from "./store";
import { Provider } from "react-redux";
import * as client from "./Courses/client";
import axios from "axios";
function Kanbas() {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  // const URL = "http://localhost:4000/api/courses";
  // const URL = " https://kanbas-node-server-app-qyrs.onrender.com/api/courses"
  const API_BASE = process.env.REACT_APP_API_BASE;
  console.log(API_BASE)
  const URL =  `${API_BASE}/courses`;
  const fetchCourses = async () => {
    const courses = await client.fetchCourses();
    setCourses(courses);
  };
  useEffect(() => {
    fetchCourses();
  }, []);
 
  const addNewCourse = async () => {
    console.log(course)
    const response = await axios.post(URL, course);

    setCourses([...courses, response.data]);
    setCourse({ name: "New Course" });

  };

  
  // const addNewCourse = () => {
  //   setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
  // };
  const deleteCourse = async (course) => {
    const response = await axios.delete(
      `${URL}/${course._id}`
    );
    setCourses(courses.filter(
      (c) => c._id !== course._id));
  };

  const updateCourse = async () => {
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
    console.log(course)
    console.log(courses);
    console.log(response)
    setCourses(
          courses.map((c) => {
            if (c._id === course._id) {
              return course;
            } else {
              return c;
            }
          })
        );
    setCourse({ name: "New Course" });
  };


  // const deleteCourse = (courseId) => {
  //   setCourses(courses.filter((course) => course._id !== courseId));
  // };
  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       } else {
  //         return c;
  //       }
  //     })
  //   );
  // };

   return (
    <Provider store={store}>

    <div className="wd-flex-row-container" style={{ height: '100vh' }} >
      <div style={{ width: '80px', height: '100%', overflowY: 'auto' }}> <KanbasNavigation /></div>
      <div style={{ flex: '1', overflowY: 'auto' }}>
      <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={ <Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>} />
          <Route path="Courses/:courseId/*"   element={
            <Courses courses={courses} />} />

          
        </Routes>

      </div>
    </div>
    </Provider>
   );
 }
 
 export default Kanbas;