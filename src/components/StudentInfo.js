import React, { useEffect, useState } from 'react'
import UserAPI from '../APIs/UserAPI'
import { Link} from "react-router-dom";
import { getSignedInUser } from '../Util/auth'
const StudentInfo=()=>{
    const [sessionList,setSessionList]=useState([])
    const user=getSignedInUser()
    const username=user.username
    useEffect(()=>{
        UserAPI.getStudentSession(setSessionList)
        console.log(sessionList)
    },[])
    return(
        <>
        <h2> Welcome {username}! </h2>
       
        {sessionList.length===0?
        <div className='empty'>
            
            <p>No Past sessions</p>
        <Link className='btn' to="/courses">Add a Session</Link>
        </div>: <>
         <h3 className="mt-4">Your past sessions</h3>
        <div className='table table-light mt-5'>
       <thead className='thead-light'><tr>
        <th scope='col'>#</th>
        <th scope='col'>Subject</th>
        <th scope='col'>Tutor</th>
        <th scope='col'>Time Period</th>
        <th scope='col'>Rating</th>
        </tr></thead>
       
        <tbody>{sessionList.map(s=><tr><td>{s.id}</td>
        <td>{s.course.subject.name}</td>
        <td>{s.course.tutor.username}</td>
        <td>{s.start.join('/').substring(0,8)} - {s.end.join('/').substring(0,8)}</td>
        <td>{s.rating}</td>
        </tr>
        
        
        )}</tbody>
        </div>
        </>
        }
       
        </>
    )
}

export default StudentInfo