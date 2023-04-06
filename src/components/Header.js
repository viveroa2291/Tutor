import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import './CSS/header.css';

/*
import { Auth } from './Auth.js';
import LoggedInHeader from './LoggedInHeader';
import NotLoggedInHeader from './NotLoggedInHeader';
*/
const Header = () => {        
   // const { isAuthenticated } = useContext(AuthContext);
    return (

        <nav className="navbar navbar-expand-lg bg-light navigation">
            <Router>
                <Link class="links" to="/">Home</Link>
                <Link class="links" to="/schedule">Schedule</Link>
                <Link class="links" to="/subjects">Subjects</Link>
                <Link class="links" to="/courses">Courses</Link>
                <Link class="links" to="/about">About</Link>
               
                <Link className="links" to="/account">Account</Link> 
                <Link className="links" to="/login">Login/Signup</Link>
               
                <Link class="links" to="/account">Account</Link>
           </Router> 
         
           </nav>
    );
};

export default Header;