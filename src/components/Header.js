import React, { useContext } from 'react';
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
        <div class="logo">
            <hr class="top-line"/>
            <div class="logo-line">
                <hr class="vertical-line"/>
                <p class="text-logo">Mara <br/> Tutoring</p>
            </div>
            <hr class="bottom-line"/>
        </div>
        <div className="navigation-div">
        <nav className="navbar navbar-expand-lg bg-light navigation">
          
                <Link  class="nav-link links" to="/">Home</Link>
                <Link className="nav-link links" to="/schedule">Schedule</Link>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle links" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Subjects</a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><Link className="dropdown-item" to="/math">Math</Link></li>
                    <li><Link className="dropdown-item" to="/science">Science</Link></li>
                    <li><Link className="dropdown-item" to="/english">English</Link></li>
                    <li><Link className="dropdown-item" to="/writing">Writing</Link></li>
                    </ul>
                </li>
                {/*
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle links" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Levels</a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><Link className="dropdown-item" to="/elementary">Elementary</Link></li>
                    <li><Link className="dropdown-item" to="/middle">Middle</Link></li>
                    <li><Link className="dropdown-item" to="/high">High</Link></li>
                    <li><Link className="dropdown-item" to="/undergrad">Undergrad</Link></li>
                    <li><Link className="dropdown-item" to="/post">Post Grad</Link></li> 
                    <li><Link className="dropdown-item" to="/other">Other</Link></li>
                    </ul>
                </li>
                */}
                <Link className="nav-link links" to="/about">About</Link>
                <Link className="nav-link links" to="/account">Account</Link>
                <Link className="nav-link btn links" to="/auth">Login | Signup</Link>
            </ul>
          </div>
     
          
        </nav>
      </div>
        
           </section>
    )
}

export default Header;
