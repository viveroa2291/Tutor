import CourseApi from "../APIs/CourseApi";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
const Courses=()=>{
    const [courseList,setCourseList]=useState([])
    useEffect(()=>{
        CourseApi.getCourses(setCourseList)
    },[])
    return (
        <>
        <h2>Book a Session</h2>
        {courseList.length===0?
        <div className='empty'>
            
            <p>No Available Courses</p>
        
        </div>: <>
      
        <div className='table table-light mt-5'>
       <thead className='thead-light'><tr>
        <th scope='col'>#</th>
        <th scope='col'>Subject</th>
        <th scope='col'>Tutor</th>
        <th scope='col'>Hourly Rate</th>
        <th scope='col'>Tutor Availability</th>
        <th scope="col">Action</th>
        </tr></thead>
        <tbody>
        {
            courseList.map(t =>
            <tr key={t.id}>
                <td>{t.id}</td>
                <td>{t.subject.name}</td>
                <td>{t.tutor.username}</td>
                <td>{t.hourly}</td>
                <td>{t.availability}</td>
                <td><Link><FontAwesomeIcon icon="fa-solid fa-calendar-plus" /></Link></td>
            </tr>)
}
        </tbody>
        </div>
        </>
        }
        
        </>
        )
}

export default Courses;