import React, { useEffect, useState } from 'react';
import SubjectAPI from '../APIs/SubjectApi'
const Subjects=()=>{
    const [subjectList,setSubjectList]=useState([])
    useEffect(()=>{
        SubjectAPI.getSubjects(setSubjectList)
    },[])
    return (
        <>
        <h2>Subjects We Tutor In</h2>
      <div className='table-div'>
           <table className='table table-light mt-3'>
           <thead className='thead-light'><tr>
            <th scope='col'>#</th>
            <th scope='col'>Category</th>
            <th scope='col'>Subject</th>
            <th scope='col'>Description</th>
            </tr></thead>
    
            <tbody>{
                subjectList.map(s =>
                <tr key={s.id}>
                    <td>{s.id}</td>
                    <td>{s.category}</td>
                    <td>{s.name}</td>
                    <td>{s.description}</td>
                </tr>)
    }</tbody>
           </table> 
      </div >
       </>
    )
}
export default Subjects
