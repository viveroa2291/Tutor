import React, { useState }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
const Schedule=()=>{
    const [CourseID,setCourseID]=useState("")
    const [Availability,setAvailability]=useState("")
    const [Hourly,setHourly]=useState(0)
    const handleSubmit=event=>{
        const login={
          "id":CourseID,
          "hourly":Hourly,
          "availability":Availability
        }
    }
return (

<>
<h2 className='text-center mb-5'>Schedule a Session</h2>
<div className='wrapper'>
<div className='inner-wrapper'>
<FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
<Link className='btn'>Book a Session</Link>
<p>Select a course you want to recieve tutoring in</p>
</div>
<div className='inner-wrapper'><FontAwesomeIcon icon="fa-solid fa-person-chalkboard" />

<button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Add a Session</button>
<p>Add a course you want to tutor, add a rate and allow students to schedule you</p>

      
</div>
<div className="modal fade" id="staticBackdrop" 
         data-bs-backdrop="static" 
         data-bs-keyboard="false" 
         tabIndex="-1" 
         aria-labelledby="staticBackdropLabel"
         aria-hidden="true">
         <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Add a Session</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form className='form' onSubmit={handleSubmit} >
           <div className='row mb-3'>
                    <label className='form-label'>Course</label>
                    <select className='form-control' value={CourseID} onChange={(event)=>{setCourseID(event.target.value)}}></select>
                </div >
        <div className='row mb-3'>
            <label className='form-label'>Hourly Rate</label>
                    <input type="number" className='form-control' required min="0" step="0.01" value={Hourly} onChange={ (event) => { setHourly(event.target.value) } }
                           />
        </div>
           
           <div className='row mb-3'>
           
                    <label className='form-label'>Availability</label>
                    <input type="text" className='form-control' value={Availability} onChange={(event)=>{setAvailability(event.target.value)}}></input>
                </div>
                <div className="modal-footer">
              <input type="submit" className="btn" value="Submit"></input>
                <button type="button" className="btn" data-bs-dismiss="modal">Close</button>
                
              </div>

                </form>
              </div>
            </div>
          </div>
</div>
</div>

</>
)
}
export default Schedule;