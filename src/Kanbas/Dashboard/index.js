import db from "../Database";
import { Link } from "react-router-dom";
function Dashboard() {
  const courses = db.courses;
  return (
    <div className="col-12 col-md-12 col-xl-12 col-lg-12">
      <h2 style={{ marginTop: '10px', paddingLeft: '20px', color: 'gray' }}>Dashboard</h2>
      <hr />
      <h3 style={{paddingLeft: '20px'}}>Published Courses ({courses.length})</h3>
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
                </Link>
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