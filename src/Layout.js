import React from 'react';
import {Link} from 'react-router-dom';

export default function Layout () {
  return (
    <div className="d-flex p-3">
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent d-flex justify-content-between">
        <Link to="/"><button className="circle p-2 m-2" /></Link>
        <Link className="navbar-brand" to="/">Miriam Gonzalez</Link>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav my-2 mt-2 my-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/resume">
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>

        </div>
      </nav>

    </div>
  );
}
