import React from 'react';
import './navBar.css';
import { Link } from 'react-router-dom';


export const Navbar = () => {
  return (
   <>
     <section id="header" className="header">
        <a>
            {/* <!-- <img src="./img/logo.jpg" alt="logo" className="logo"> --> */}
             <h3>SSZ</h3>
        </a>
        <div>
            <ul id="navbar" className="navbar">
                <li><Link to="/" className='active'>Home</Link></li>
                    <li><Link to="/courses">All Courses</Link></li>
                    <li><Link to="/pdf">Pdf Notes</Link></li>
                    <li className="mycourses"><Link to="/mycourses">My Courses</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <a href="#" id="close" className="close"><i className="fa-solid fa-xmark"></i></a>
            </ul>
        </div>
        <div id="mobile" className="mobile">    
            <i className="fas fa-outdent" id="bar"></i>
        </div>
    </section>
   </>
  );
};
