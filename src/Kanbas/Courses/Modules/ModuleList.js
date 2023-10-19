import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css'


function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;

    return (
        <div>
            <button type="button" className="btn btn-outline-secondary btn-light float-end"><i className="fas fa-ellipsis-v fa"></i></button>
            <button type="button" className="btn btn-danger float-end"> <i className="fa-solid fa-plus"></i> Module</button>
            <div className="btn-group float-end">
                <select className="btn btn-outline-secondary btn-light float-end" style={{ height: '37px' }}>
                    <option><i className="fa-solid fa-file-export"></i>Publish All</option>
                    <option>Option1</option>
                </select>
            </div>

            <button type="button" className="btn btn-outline-secondary btn-light float-end">View Progress</button>
            <button type="button" className="btn btn-outline-secondary btn-light float-end">Collapse All</button>
            <br />
            <br />

            <hr />
            <div  >
            <ul className="list-group">
            {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
            <li key={index} className="list-group-item list-group-item-secondary"  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '30px 0' }}>
           <div style={{ display: 'flex', alignItems: 'center' }}>
          <i className="fa-solid fa-bars dropdown-toggle" style={{ marginRight: '5px' }}></i>
          <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
            <h3 style={{ margin: '0', marginRight: '5px' }}>{module.name}</h3>
            <p style={{ margin: '0' }}>{module.description}</p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <i className="fa-solid fa-ellipsis-vertical float-end" style={{ marginLeft: '10px' }}></i>
            <i className="fa-regular fa-plus float-end" style={{ color: 'green', marginLeft: '10px' }}></i>
            <i className="fa-solid fa-circle-check dropdown-toggle float-end" style={{ color: 'green', marginLeft: '10px' }}></i>
            </div>
          </li>
      ))
      }

    </ul>
    <br />
            <br />
    </div>
        </div>
    );
}

export default ModuleList;
