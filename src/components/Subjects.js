import React, { useEffect, useState } from 'react';
import SubjectAPI from '../APIs/SubjectApi'
const Subjects=()=>{
    const [subjectList,setSubjectList]=useState([])
    useEffect(()=>{
        console.log("works")
        SubjectAPI.getSubjects(setSubjectList)
    },[])
    return (
        <>
        <h2>Subjects We Tutor In</h2>
       <div className='table table-light mt-3'>
       <thead className='thead-light'><tr>
        <th scope='col'>ID</th>
        <th scope='col'>Subject</th>
        </tr></thead>
        <tbody>{
            subjectList.map(s=>
            <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.subject}</td>
            </tr>)
}</tbody>
       </div> 
       </>
    )
}
export default Subjects