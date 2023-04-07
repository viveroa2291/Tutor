import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
const Schedule=()=>{
return (<>
<h1 className='text-center mb-4'>Schedule a Session</h1>
<div className='wrapper'>
<div className='inner-wrapper'>
<FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
<Link className='btn'>Book a Session</Link>
<p>Select a course you want to recieve tutoring in</p>
</div>
<div className='inner-wrapper'><FontAwesomeIcon icon="fa-solid fa-person-chalkboard" />
<Link className='btn'>Post a Session</Link>
<p>Add a course you want to tutor, add a rate and allow students to schedule you</p>
</div>
</div>
</>
)
}
export default Schedule;