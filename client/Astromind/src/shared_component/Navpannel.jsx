import React from "react";
import "./Navpannel.css"; // Include your CSS file for styling
import { FaHome, FaBook, FaMicroscope, FaGamepad, FaSearch, FaInfoCircle, FaUserPlus, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { LuOrbit } from "react-icons/lu";


const Navpannel = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-logo">
        <img src="/nav_logo.png" alt="Astrominds Logo" className="logo" />
        <span>ASTROMINDS</span>
      </div>
      <div> 

      <ul className="nav-items">
        <li className="nav-item">
          <Link to="/">
          <FaHome />
          </Link>
        </li>
        <li className="nav-item">
          <Link to ="/coursse">
          <FaBook />
          </Link>
        </li> 
        <li className="nav-item">
          <FaMicroscope />
        </li>
        <li className="nav-item">
          <Link to="/games">
          <FaGamepad />
          </Link>
        </li>
        <li className="nav-item">
          <FaSearch />
        </li>
        <li className="nav-item">
          <FaInfoCircle />
        </li>
        <li className="nav-item">
          <Link to="/signin">
          <FaUserPlus />
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/signup">
          <FaUser />
          </Link>
        </li>
        <li className="nav-item">
          <Link to="https://avisek.github.io/Mars-Orbiter-Mission/">
          <LuOrbit />
          </Link>
        </li>
      </ul>
      </div>
      <div></div>
    </nav>
  );
};

export default Navpannel;
