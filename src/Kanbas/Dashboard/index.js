import db from "../Database";
import { Link } from "react-router-dom";

function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }
) {
  
  
  // const [courses, setCourses] = useState(db.courses);
  // const [course, setCourse] = useState({
  //   name: "New Course",      number: "New Number",
  //   startDate: "2023-09-10", endDate: "2023-12-15",
  // });

  // const addNewCourse = () => {
  //   setCourses([...courses,
  //             { ...course,
  //               _id: new Date().getTime() }]);
  // };
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
    <div className="col-12 col-md-12 col-xl-12 col-lg-12">
      <h2 style={{ marginTop: '10px', paddingLeft: '20px', color: 'gray' }}>Dashboard</h2>
    
      <hr />
  

      <h3 style={{paddingLeft: '20px'}}>Published Courses ({courses.length})</h3>
      {/* <h5 style={{paddingLeft: '20px'}}>Course</h5> */}
      <div style={{paddingLeft: '20px', paddingTop:'20px',paddingBottom:'30px',paddingRight:'20px'}}>
      <input value={course.name} className="form-control"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input value={course.number} className="form-control"
             onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />

      <br/>
      <button style={{backgroundColor:'green'}}className="btn btn-danger" onClick={addNewCourse }  >
        Add
      </button>
      <button style={{backgroundColor:'blue'}}className="btn btn-danger" onClick={updateCourse} >
        Update
      </button>

      </div>
      
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 wd-dashboard-grid d-flex flex-row flex-wrap" style={{paddingLeft: '20px'}}>
        {courses.map((course, index) => (
          <div className="col" key={course._id}>
            <div className="card h-100">
              < img src="/images/react.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{course.name}</h5>

                <Link
                  key={course._id}
                  to={`/Kanbas/Courses/${course._id}`}
                  className="btn btn-primary"
                >
                  {course.name}
                  {/* {`${course.name}`}  */}
                </Link>
                <br/>
                <br/>
                < >
                <button style={{backgroundColor:' #FFC72C', color:'black', marginRight: '4px'}}className="btn btn-danger"
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}>
              Edit
            </button>
            <button className="btn btn-danger"
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course);
              }}>
              Delete
            </button>
                </>
               
              <br/>
              <br/>

                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p >
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;