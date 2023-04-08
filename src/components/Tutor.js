import React, { useEffect, useState } from 'react';
import TutorAPI from '../APIs/TutorApi'
const Tutor = () => {
    const [tutorList, setTutorList] = useState([])
    useEffect(()=>{
        TutorAPI.getTutors(setTutorList)
    },[])
    return (
        <>
        <h2>Subjects We Tutor In</h2>
       <div className='table table-light mt-3'>
       <thead className='thead-light'>
            <tr>
                <th scope='col'>ID</th>
                <th scope='col'>Tutor</th>
                <th scope ='col'>Contact</th>
            </tr>
        </thead>
        <tbody>{
            tutorList.map(t =>
            <tr key={t.id}>
                <td>{t.id}</td>
                <td>{t.username}</td>
                <td>{t.email}</td>
            </tr>)
} </tbody>
       </div> 
       </>
    )
}
export default Tutor