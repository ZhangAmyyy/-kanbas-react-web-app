import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css'
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";


function ModuleList() {
    const { courseId } = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();
  
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
            <li className="list-group-item" style={{ display: 'flex', alignItems: 'center' }}>
  <div style={{ display: 'flex', flexDirection: 'column', flex: 1, paddingRight:'50px'}}>
    <input
      value={module.name}
      onChange={(e) =>
        dispatch(setModule({ ...module, name: e.target.value }))
      }
    />
   <br/>
    <textarea
      value={module.description}
      onChange={(e) =>
        dispatch(setModule({ ...module, description: e.target.value }))
      }
    />
  </div>
  <button style={{backgroundColor:'blue', alignSelf: 'flex-start'}}className="btn btn-danger"  onClick={() => dispatch(updateModule(module))}>

                Update
        </button>

  <button style={{backgroundColor:'green', alignSelf: 'flex-start'}}className="btn btn-danger" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
Add</button>
</li>


            {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
            <li key={index} className="list-group-item list-group-item-secondary"  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '30px 0' }}>
           <div style={{ display: 'flex', alignItems: 'center' }}>
          <i className="fa-solid fa-bars dropdown-toggle" style={{ marginRight: '5px', alignSelf: 'flex-start', marginTop: '10px' }}></i>
          <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px', marginBottom: '10px' }}>
          <ul style={{ listStyleType: 'none' }}>
            <li>  <h3 style={{ margin: '0', marginRight: '5px' }}>{module.name}</h3></li>
            <li> <p style={{ margin: '0' }}>{module.description}</p></li>
            <li> <p style={{ margin: '0' }}>{module._id}</p></li>
          </ul>
          </div>
  
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
        <button style={{alignSelf: 'flex-start'}}className="btn btn-danger"
              onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button>
            <button  style={{alignSelf: 'flex-start', backgroundColor:'green'}}className="btn btn-danger"
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>

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
