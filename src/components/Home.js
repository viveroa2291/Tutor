import React from 'react';
import Header from "./Header";
import { Link, useLocation } from 'react-router-dom';
import './CSS/home.css';
import tutor from '../images/tutor-home.jpeg';
import { getSignedInUser } from '../Util/auth';

const Home = (props) => {
    let location = useLocation();
console.log(location.state);
    const user = getSignedInUser();
    const username = user.username;
   // const { username } = props?.location?.state ?? {};
    
    return (
        <section>
            <section class="home-body">
            <div>
      <h1>Welcome {props.username}!</h1>
      <p>This is the home page.</p>
    </div>
               <div class="left-div">
                    <h2>World Class Tutoring Network</h2>
                    <hr className='hr-title'/>
                    <p class="body-text">Here at Mara Tutoring, we link you up with a tutor that you feel is best fit for you with an endless amount of subjects. </p>
                    <div class="started"><Link class="get-started" to="/signup">Get Started</Link></div>
                </div> 
                <div className='right-div'>
                    <img src={tutor} alt="Tutoring Session" className='tutoring'/>
                </div>
            </section>
            
        </section>
        
    );
};

export default Home;