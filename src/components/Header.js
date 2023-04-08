import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import './CSS/header.css';
import Auth from "./Auth";
/*
import { Auth } from './Auth.js';
import LoggedInHeader from './LoggedInHeader';
import NotLoggedInHeader from './NotLoggedInHeader';
*/
const Header = () => {        
   // const { isAuthenticated } = useContext(AuthContext);
    return (
        
    <section>
        <div className="logo">
            <hr className="top-line"/>
            <div className="logo-line">
                <hr className="vertical-line"/>
                <p className="text-logo">Mara <br/> Tutoring</p>
            </div>
            <hr className="bottom-line"/>
        </div>
        <div id="hamburger" classs="hamburger">
            <hr className='hr1'/>
            <hr className='hr2'/>
            <hr className='hr3'/>
        </div>
        <div className="navigation-div">
            <nav className="navbar navbar-expand-lg bg-light navigation top-nav">
                <Link  className="nav-link links" to="/">Home</Link>
                <Link className='nav-link links' to="/tutor">Tutors</Link>
                <Link className="nav-link links" to="/schedule">Schedule</Link>
                <Link className='nav-link links' to="/subjects">Subjects</Link>
                <Link className="nav-link links" to="/about">About</Link>
                <Link className="nav-link links" to="/account">Account</Link>
                <Link className="nav-link btn links" to="/">Logout</Link>
            </nav>
        </div>
    </section>
    )
}

export default Header;
/*
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CSS/header.css';

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hamburgerRef = useRef(null);
  const topNavRef = useRef(null);

  const handleToggle = () => {
    setIsExpanded((prevState) => !prevState);
  };

  useEffect(() => {
    const elements = topNavRef.current.children;

    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.toggle('show', isExpanded);
    }

    if (hamburgerRef.current) {
      if (hamburgerRef.current.style.marginBottom === '10rem') {
        hamburgerRef.current.style.marginBottom = '0';
      } else {
        hamburgerRef.current.style.marginBottom = '10rem';
      }
    }
  }, [isExpanded]);

  const handleRotate = () => {
    const hamburger = hamburgerRef.current;

    if (hamburger) {
      hamburger.classList.toggle('change');
    }
  };

  return (
    <section>
      <div className="logo">
        <hr className="top-line" />
        <div className="logo-line">
          <hr className="vertical-line" />
          <p className="text-logo">
            Mara <br /> Tutoring
          </p>
        </div>
        <hr className="bottom-line" />
      </div>
      <div id="hamburger" className="hamburger" ref={hamburgerRef} onClick={() => handleRotate()}>
        <hr className="hr1" />
        <hr className="hr2" />
        <hr className="hr3" />
      </div>
      <div className="navigation-div">
        <nav className="navbar navbar-expand-lg bg-light navigation top-nav" ref={topNavRef}>
          <Link className="nav-link links" to="/" onClick={() => handleToggle()}>
            Home
          </Link>
          <Link className="nav-link links" to="/schedule" onClick={() => handleToggle()}>
            Schedule
          </Link>
          <Link className="nav-link links" to="/subjects" onClick={() => handleToggle()}>
            Subjects
          </Link>
          <Link className="nav-link links" to="/about" onClick={() => handleToggle()}>
            About
          </Link>
          <Link className="nav-link links" to="/account" onClick={() => handleToggle()}>
            Account
          </Link>
          <Link className="nav-link btn links" to="/auth" onClick={() => handleToggle()}>
            Login | Signup
          </Link>
        </nav>
      </div>
    </section>
  );
};

export default Header;
*/