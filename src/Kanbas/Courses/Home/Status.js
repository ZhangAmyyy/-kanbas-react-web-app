import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css'

function Status() {
  return (
    <div >
      <p style={{ fontSize: "18pt" }}>Course Status</p>
      <button type="button" className="btn btn-secondary btn-sm">
        <i className="fa-solid fa-ban"></i>Unpublish
      </button>
      <button type="button" className="btn btn-success btn-sm">
        <i className="fa-solid fa-circle-check" style={{ color: "white" }}></i>
        Published
      </button>
      <br />
      <br />
      {/* Import Existing Content */}
      <div className="row">
        <div className="col mb-1">
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            style={{ textAlign: "left", width: "190px" }}
          >
            <i className="fa-solid fa-file-import" style={{ color: "white", marginRight: "5px" }}></i>
            Import Existing Content
          </button>
        </div>
      </div>
      {/* Import from Commons */}
      <div className="row">
        <div className="col mb-1">
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            style={{ textAlign: "left", width: "190px" }}
          >
            <i className="fa-solid fa-arrow-right-from-bracket" style={{ color: "white", marginRight: "5px" }}></i>
            Import from Commons
          </button>
        </div>
      </div>
      {/* Choose Home Page */}
      <div className="row">
        <div className="col mb-1">
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            style={{ textAlign: "left", width: "190px" }}
          >
            <i className="fa-solid fa-dharmachakra" style={{ color: "white", marginRight: "5px" }}></i>
            Choose Home Page
          </button>
        </div>
      </div>
      {/* View Course Stream */}
      <div className="row">
        <div className="col mb-1">
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            style={{ textAlign: "left", width: "190px" }}
          >
            <i className="fa-solid fa-chart-simple" style={{ color: "white", marginRight: "5px" }}></i>
            View Course Stream
          </button>
        </div>
      </div>
      {/* New Announcements */}
      <div className="row">
        <div className="col mb-1">
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            style={{ textAlign: "left", width: "190px" }}
          >
            <i className="fa-solid fa-bullhorn" style={{ color: "white", marginRight: "5px" }}></i>
            New Announcements
          </button>
        </div>
      </div>
      {/* New Analytics */}
      <div className="row">
        <div className="col mb-1">
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            style={{ textAlign: "left", width: "190px" }}
          >
            <i className="fa-solid fa-chart-simple" style={{ color: "white", marginRight: "5px" }}></i>
            New Analytics
          </button>
        </div>
      </div>
      {/* View Course Notification */}
      <div className="row">
        <div className="col mb-1">
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            style={{ textAlign: "left", width: "190px" }}
          >
            <i className="fa-solid fa-bell" style={{ color: "white", marginRight: "5px" }}></i>
            View Course Notification
          </button>
        </div>
      </div>
      <br />
      <p style={{ fontSize: "12pt" }}>To Do</p>
      <hr />
      <table>
        <tr>
          <td>
            <i className="fa-solid fa-1" style={{ color: "red" }}></i>
          </td>
          <td>
            <span style={{ marginLeft: "10px", color: "red", fontSize: "11pt" }}>Grade A1 - ENV + HTML</span>
          </td>
          <td>
            <i className="fa-solid fa-xmark float-end" style={{ color: "gray" }}></i>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <span style={{ marginLeft: "10px", color: "gray", fontSize: "10pt" }}>100 points, Sep 18 at 11:59pm</span>
          </td>
        </tr>
      </table>
      <br />
      <span>
      </span>
      <span style={{ fontSize: "12pt" }}>
        Coming up{" "}
        <span className="float-end" style={{ fontSize: "10pt", color: "red", marginLeft: "5px" }}>
          View Calendar
        </span>
        <i className="fa-solid fa-calendar-days float-end"></i>{" "}
      </span>
      <hr />
      <table>
        <tr>
          <td>
            <i className="fa-solid fa-calendar-days float-end"></i>
          </td>
          <td>
            <span style={{ marginLeft: "10px", color: "red", fontSize: "11pt" }}>Lecture</span>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <span style={{ marginLeft: "10px", color: "gray", fontSize: "10pt" }}>CS4550.12631.202410</span>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <span style={{ marginLeft: "10px", color: "gray", fontSize: "10pt" }}>Sep 11 at 11:45am</span>
          </td>
        </tr>
      </table>
      <br />
      <table>
        <tr>
          <td>
            <i className="fa-solid fa-calendar-days float-end"></i>
          </td>
          <td>
            <span style={{ marginLeft: "10px", color: "red", fontSize: "11pt" }}>CS5610 06 SP23 Lecture</span>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <span style={{ marginLeft: "10px", color: "gray", fontSize: "10pt" }}>CS4550.12631.202410</span>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <span style={{ marginLeft: "10px", color: "gray", fontSize: "10pt" }}>Sep 11 at 6pm</span>
          </td>
        </tr>
      </table>
      <br />
      <table>
        <tr>
          <td>
            <i className="fa-solid fa-calendar-days float-end"></i>
          </td>
          <td>
            <span style={{ marginLeft: "10px", color: "red", fontSize: "11pt" }}>CS5610 Web Development</span>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <span style={{ marginLeft: "10px", color: "red", fontSize: "11pt" }}>Summer 1 2023-LECTURE</span>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <span style={{ marginLeft: "10px", color: "gray", fontSize: "10pt" }}>CS4550.12631.202410</span>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <span style={{ marginLeft: "10px", color: "gray", fontSize: "10pt" }}>Sep 11 at 7pm</span>
          </td>
        </tr>
      </table>
      <br />
      <span style={{ color: "red", fontSize: "10pt" }}>12 more in the next week ...</span>
    </div>
  );
}

export default Status;
