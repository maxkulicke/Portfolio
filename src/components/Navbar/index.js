import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css"

const resumé = require("../../assets/resume.pdf")

function Navbar() {
  const location = useLocation();

  return (
    <div className="nav">
      <ul className="nav nav-tabs" id="navbar">
        <li className="nav-item">
          <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
            Home
        </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/about"
            className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
            About
        </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/portfolio"
            className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
            Portfolio
        </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/music"
            className={location.pathname === "/music" ? "nav-link active" : "nav-link"}>
            Music
        </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
            Contact
        </Link>
        </li>
      </ul>

      {/* <div className="nav-right justify-content-end">
        <ul className="nav nav-tabs justify-content-end" id="navbar">
          <li className="nav-item ml-auto">
            <a href="https://github.com/maxkulicke" className="nav-link" target="_blank">Github</a>
          </li>
          <li className="nav-item ml-auto">
            <a href="https://www.linkedin.com/in/max-kulicke-54516428/"
              className="nav-link" target="_blank">LinkedIn</a>
          </li>
          <li className="nav-item ml-auto">
            <a href={resumé} download={resumé} target="_blank"
              className="nav-link"><i class="fa fa-download"></i> Resumé</a>
          </li>
        </ul>
      </div> */}
    </div>
  );
}

export default Navbar;
