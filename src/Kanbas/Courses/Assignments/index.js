import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css'

function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (

        <div>
            <div style={{ display: "flex" }}>
                <input
                    type="text"
                    id="input1"
                    placeholder="Search for Assignment"
                    style={{ width: "200px", marginRight: "auto" }}
                />
                <button type="button" className="btn btn-outline-secondary btn-light">
                    <i className="fa-solid fa-plus"></i> Group
                </button>
                <button type="button" className="btn btn-danger">
                    <i className="fa-solid fa-plus"></i> Module
                </button>
                <button type="button" className="btn btn-outline-secondary btn-light">
                    <i className="fas fa-ellipsis-v fa"></i>
                </button>
            </div>
            <hr />
            <br />
            <ul class="list-group">
            <li className="list-group-item list-group-item-secondary">
      <i className="fa-solid fa-bars dropdown-toggle"></i> Assignments for course {courseId}
      <i className="fa-solid fa-ellipsis-vertical float-end" style={{ marginLeft: "10px" }}></i>
      <i className="fa-regular fa-plus float-end" style={{ marginLeft: "10px" }}></i>
      <input
        type="text"
        className="form-control rounded float-end border-dark"
        id="input1"
        placeholder="40% of Total"
        readOnly
        style={{ width: "120px", height: "20px", backgroundColor: "#E2E3E5" }}
      />
    </li>
        
            <div className="list-group">
                {courseAssignments.map((assignment) => (
                    <Link
                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                    className="list-group-item"
                    style={{ borderLeft: "5px solid green" }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <i className="fa-solid fa-bars"></i>
                        <i className="fa-solid fa-book-open" style={{ paddingLeft: "10px", color: "green" }}></i>
                      </div>
                      <div style={{ flex: "1", marginLeft: "60px", marginRight: "60px" }}>
                        <div style={{ marginBottom: "10px" }}>
                          <a href="./AssignmentEditor/screen.html" style={{ color: "black", textDecoration: "none", fontSize: "14pt" }}>
                            {courseId}+{assignment._id}+{assignment.title}
                          </a>
                        </div>
                        <div style={{ color: "gray", fontSize: "10pt" }}>
                        <span style={{ color: "red" }}>Multiple Modules</span>  | Due Sep 18, 2022 at 11:59pm | 100 pts
                        </div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <i className="fa-solid fa-ellipsis-vertical" style={{ marginLeft: "10px" }}></i>
                        <i className="fa-solid fa-circle-check" style={{ color: "green", marginLeft: "10px" }}></i>
                      </div>
                    </div>
                  </Link>
                  
                  
                    
                ))}
                
            </div>
            </ul>
        </div>
        
    );
}
export default Assignments;