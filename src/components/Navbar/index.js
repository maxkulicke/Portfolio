import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css"
import { Navbar, Nav } from 'react-bootstrap'
const resumé = require("../../assets/Max_Kulicke_Resumé.pdf")

function MyNavbar() {
  const location = useLocation();

  return (
    <div className="nav">
      <Navbar fixed="top" className="nav shadow" id="navbar">
        <Nav className="mr-auto">
          <Nav.Link href="">
            <Link
              to="/"
              className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
              Home
        </Link>
          </Nav.Link>
          <Nav.Link href="">
            <Link
              to="/about"
              className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
              About
        </Link></Nav.Link>
          <Nav.Link href="">
            <Link
              to="/portfolio"
              className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
              Portfolio
        </Link>
          </Nav.Link>
          <Nav.Link href="">
            <Link
              to="/music"
              className={location.pathname === "/music" ? "nav-link active" : "nav-link"}>
              Music
        </Link>
          </Nav.Link>
          <Nav.Link href="">
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
              Contact
        </Link>
          </Nav.Link>
        </Nav>

        <Nav className="ml-auto">
          <Nav.Link
            href="https://github.com/maxkulicke" className="nav-link"
            target="_blank" rel="noopener noreferrer">
            Github
          </Nav.Link>
          <Nav.Link
            href="https://www.linkedin.com/in/max-kulicke-54516428/" className="nav-link"
            target="_blank" rel="noopener noreferrer">
            LinkedIn
          </Nav.Link>
          <Nav.Link
            href={resumé} download={resumé} className="nav-link"
            target="_blank" rel="noopener noreferrer">
            Resumé
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default MyNavbar;

{/* <li>
        <a href="https://github.com/maxkulicke" className="nav-link"
          target="_blank" rel="noopener noreferrer">
          Github </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/max-kulicke-54516428/" className="nav-link"
          target="_blank" rel="noopener noreferrer">
          LinkedIn </a>
      </li>
      <li>
        <a href={resumé} download={resumé} className="nav-link"
          target="_blank" rel="noopener noreferrer">
          Resumé </a>
      </li> */}


{/* <div className="nav" id="nav">
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

  <div className="nav-right ml-auto">
    <ul className="nav ml-auto" id="">
      <li>
        <a href="https://github.com/maxkulicke" className="nav-link"
          target="_blank" rel="noopener noreferrer">
          Github </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/max-kulicke-54516428/" className="nav-link"
          target="_blank" rel="noopener noreferrer">
          LinkedIn </a>
      </li>
      <li>
        <a href={resumé} download={resumé} className="nav-link"
          target="_blank" rel="noopener noreferrer">
          Resumé </a>
      </li>
    </ul>
  </div>
</div> */}