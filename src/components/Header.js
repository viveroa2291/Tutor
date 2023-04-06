import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import './CSS/header.css';

const Header = () => {
    return (
        <div class="navigation">
            <Router>
            <nav >
                <Link  className="navbar-brand" to="/">Home</Link>
                <Link to="/schedule">Schedule</Link>
                <Link to="/subjects">Subjects</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/about">About</Link>
                <Link to="/account">Account</Link>
            </nav>
        </Router>
        </div>
        
    );
};

export default Header;