import React, { useEffect, useState } from 'react';
import UserAPI from '../APIs/UserAPI';
import CourseApi from "../APIs/CourseApi";
import SessionApi from '../APIs/SessionApi';
import { Link} from "react-router-dom";
import { getSignedInUser } from '../Util/auth';
import './CSS/student.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const StudentInfo=()=>{
    const [subjectList, setSubjectList] = useState([]);
    const [sessionList,setSessionList]=useState([])
    const [courseList,setCourseList]=useState([]);
    const [tutorList,setTutorList]=useState([]);
    const [Availability, setAvailability] = useState("");
    const [Hourly, setHourly] = useState(0);
    const [CourseID,setCourseID]=useState(0);
    const [SubjectID, setSubjectID]=useState(0)
    const user=getSignedInUser()
    const username=user.username
    const handleSubmit = (event) => {
        const course = {
          "hourly": Hourly,
          "availability": Availability,
        }
        console.log(course)
   // CourseApi.addCourse(course)
    event.preventDefault()
    
      };
    useEffect(()=>{
        UserAPI.getStudentSession(setSessionList)
        CourseApi.getCourseByUser(setCourseList)
        SessionApi.getTutorSession(setTutorList)
       
    },[])
    return(
        <>
        <h2 className='welcome-username'> Welcome to your home {username}! </h2>
        <hr className='tutoring-hr'/>
        <section className='student-body'> 
        <section className='left-side'>
             {sessionList.length===0?
            <div className='empty'>
                <p>No Past sessions</p>
            <Link className='btn' to="/courses">Add a Session</Link>
            </div>: 
        <>
            <h3 className="mt-3 enrolled-sessions-title">Your Enrolled Sessions</h3>
            <hr className='tutoring-hr'/>
            <table className='table table-light mt-3'>
        <thead className='thead-light'><tr>
            <th scope='col'>#</th>
            <th scope='col'>Subject</th>
            <th scope='col'>Tutor</th>
            <th scope='col' className='time-period'>Time Period</th>
            <th scope='col'>Rating</th>
            <th scope='col'>Actions</th>
            </tr></thead>
        
            <tbody>{sessionList.map((s)=>(<tr><td>{s.id}</td>
            <td>{s.course.subject.name}</td>
            <td>{s.course.tutor.username}</td>
            <td className='time-period-description'>{s.start.join('/').substring(0,8)} - {s.end.join('/').substring(0,8)}</td>
            <td>{s.rating}</td>
            <td><FontAwesomeIcon icon="fa-solid fa-pen-to-square" /></td>
            </tr>
            ))}</tbody>
            </table>
            </>}

            <h3 className='mt-5 mb-2 tutoring-sessions-title'>Your Tutoring Sessions</h3>
            <hr className='tutoring-hr'/>
            <table className='table table-light mt-3'>
                <thead className='thead-light'>
            <tr> 
                <th>Subject</th>
                <th>Period</th>
                <th>User</th>
                <th>User Email</th>
                <th>Cost</th>
            </tr>
                </thead>
                <tbody>{
                    tutorList.map((t)=>(
                        <tr>
                            <td>{t.course.subject.name}</td>
                            <td className='tutor-period'>{t.start.join("/").substring(0,8)} {t.start.join(":").substring(9)} - {t.end.join("/").substring(0,8)} {t.end.join(":").substring(9)}</td>
                            <td>{t.user.username}</td>
                            <td><a href="mailto:`${t.user.email}`">{t.user.email}</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
        <section className='right-side'>
            <h3 className="mt-3 courses-offer-title">Courses you Offer</h3>
            <hr className='tutoring-hr'/>
            <table className="table table-light mt-3">
                <thead className="thead-light">
                <tr>
                    <th>#</th>
                    <th>Subject</th>
                    <th>Availability</th>
                    <th>Hourly</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>

                {courseList.map((c) => (
                    <tr>
                    <td>{c.id}</td>
                    <td>{c.subject.name}</td>
                    <td>{c.availability}</td>
                    <td>${c.hourly}</td>
                    <td><button data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={(()=>setCourseID(c.id))}><FontAwesomeIcon icon="fa-solid fa-pen-to-square" /></button></td>
                    </tr>
                ))}
                    </tbody>
              </table>
              </section>
        
        
         
        
          <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Edit Course
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form className="form" onSubmit={handleSubmit}>
                <select
                      className="form-control"
                      value={SubjectID}
                      onChange={(event) => {
                        setSubjectID(event.target.value);
                      }}
                    >
                      <option disabled selected>
                        Select an Option
                      </option>
                      {subjectList.map((s) => (
                        <option key={s.id} value={s.id}>{s.name} </option>
                      ))}
                    </select>
                  
                  <div className="row mb-3">
                    <label className="form-label">Hourly Rate</label>
                    <input
                      type="number"
                      className="form-control"
                      required
                      min="0"
                      step="0.01"
                      value={Hourly}
                      onChange={(event) => {
                        setHourly(event.target.value);
                      }}
                    />
                  </div>

                    <div className="row mb-3">
                        <label className="form-label">Availability</label>
                        <input
                        type="text"
                        className="form-control"
                        value={Availability}
                        onChange={(event) => {
                            setAvailability(event.target.value);
                        }}
                        ></input>
                    </div>
                    <div className="modal-footer">
                        <input type="submit" className="btn" value="Submit"></input>
                        <button
                        type="button"
                        className="btn"
                        data-bs-dismiss="modal"
                        >
                        Close
                        </button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </section>

        </>
    )
}

export default StudentInfo