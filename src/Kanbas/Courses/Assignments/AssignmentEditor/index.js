import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css'


function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);


  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
         <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
    <i className="fa-regular fa-circle-check" style={{ color: "green", marginRight: "10px" }}></i>
    <span style={{ color: "green", marginRight: "10px" }}>Published</span>
    <button type="button" className="btn btn-outline-secondary btn-light"><i className="fas fa-ellipsis-v fa"></i></button>
  </div>
  <hr />
  <br />

      <h2>Assignment Name</h2>
      <input value={`${assignment._id} + ${assignment.title}`} 
             className="form-control mb-2" />
        <div>
    <input type="text" id="input1" className="w-100" placeholder="This assignment describes how to install..." style={{ height: "100px" }} />
    <br />
    <br />
    <div className="col-12 col-md-12 col-xl-12">
        <div className="form-group row">
            <label htmlFor="points" className="col-sm-4 col-form-label" style={{ textAlign: "right" }}>Points</label>
            <div className="col-sm-8">
                <input type="text" className="form-control" placeholder="100" style={{ width: "400px" }} />
            </div>
        </div>
        <br />
        <div className="form-group row">
            <label htmlFor="assignmentGroup" className="col-sm-4 col-form-label" style={{ textAlign: "right" }}>Assignment Group</label>
            <div className="col-sm-8">
                <select className="form-control" style={{ width: "400px" }}>
                    <option><i className="fa-solid fa-file-export"></i>ASSIGNMENTS</option>
                    <option>Option1</option>
                </select>
            </div>
        </div>
        <br />
        <div className="form-group row">
            <label htmlFor="displayGrade" className="col-sm-4 col-form-label" style={{ textAlign: "right" }}>Display Grade as</label>
            <div className="col-sm-8">
                <select className="form-control" style={{ width: "400px" }}>
                    <option><i className="fa-solid fa-file-export"></i>Percentage</option>
                    <option>Option1</option>
                </select>
            </div>
        </div>
        <br />
        <div className="form-group row">
            <div className="col-sm-8 offset-sm-4">
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="countAssignment" />
                    <label className="form-check-label" htmlFor="countAssignment">Do not count this assignment towards the final grade</label>
                </div>
            </div>
        </div>
        <br />
        <div className="form-group row">
            <label htmlFor="displayGrade" className="col-sm-4 col-form-label" style={{ textAlign: "right" }}>Submission Type</label>
            <div className="form-group border border-secondary p-3 col-sm-8 col-form-label" style={{ borderRadius: "5px", width: "400px", marginLeft: "10px" }}>
                <select style={{ width: "90%" }}>
                    <option value="online" selected>Online</option>
                    <option value="offline">Option 1</option>
                    <option value="away">Option 2</option>
                    <option value="busy">Option 3</option>
                </select>
                <br />
                <label><b>Online Entry Options:</b></label>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" defaultChecked />
                    <label className="form-check-label" htmlFor="option1">Text Entry</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" defaultChecked />
                    <label className="form-check-label" htmlFor="option2">Website URL</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" defaultChecked />
                    <label className="form-check-label" htmlFor="option3">Media Recordings</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label className="form-check-label" htmlFor="option4">Student Annotation</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label className="form-check-label" htmlFor="option5">File Uploads</label>
                </div>
            </div>
        </div>
        <br />
        <div className="form-group row">
    <label htmlFor="displayGrade" className="col-sm-4 col-form-label text-end">Assign</label>
    <div className="form-group border border-secondary p-3 col-sm-8 d-flex flex-column align-items-start" style={{ borderRadius: "0px", width: "400px", marginLeft: "10px" }}>
        <span><b>Assign to</b></span>
        <div className="col-sm-8 mb-2">
            <input type="text" className="form-control" style={{ width: "100%" }} />
        </div>
        <span><b>Due</b></span>
        <div className="mb-2">
            <input type="date" className="form-control" style={{ width: "100%" }} />
        </div>
        <table className="mb-2">
            <tbody>
                <tr>
                    <td><b>Available from</b> </td>
                    <td><b>Until</b> </td>
                </tr>
                <tr>
                    <td> <input type="date" className="form-control" /></td>
                    <td> <input type="date" className="form-control" /></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>


        <div className="form-group row">
        <label htmlFor="displayGrade" className="col-sm-4 col-form-label" style={{ textAlign: "right" }}></label>
        <div className="form-group border border-secondary p-3 col-sm-8 col-form-label" style={{ borderRadius: "0px", width: "400px", marginLeft: "10px", backgroundColor: "gray", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <span><i className="fa-solid fa-plus"></i>Add</span>
    </div>
</div>
</div>
</div>

<hr />
<div className="form-group row align-items-center">
    <div className="col-sm-5">
        <div className="form-check">
            <input type="checkbox" className="form-check-input" id="countAssignment" />
            <label className="form-check-label" htmlFor="countAssignment">Do not count this assignment towards the final grade</label>
        </div>
    </div>
    <div className="col-sm-7 d-flex justify-content-end">
    <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-secondary">
        Cancel
      </Link>
      <button onClick={handleSave} className="btn btn-success me-2">
        Save
      </button>
    </div>
   
    </div>
    <hr />

    </div>
  );
}


export default AssignmentEditor;