import React from 'react';
import {Link} from 'react-router-dom';
import mole1 from './img/mole.png';
import mole2 from './img/mole2.png';
import mole3 from './img/mole3.png';
import me from './img/me.jpg';

export default function Home () {
  return (
    <div>
      <header className="App-header">
        <div className="container ">
          <img src={me} className="profile" alt="me" />
          <h1 className="fw-bold fs-1 justify-content-start">
            Hello,
          </h1>
          <h4 className="fs-2">I'm Miriam Gonzalez</h4>
          <p className="display-6 fs-4">
            A Full Stack Web Developer based in Barcelona. My skills include from frontend JavasScript, ReactJS to Restful API to backend NodeJS.
            <br />
            <br />
            I'm a dog-lover, movie enthusiast and a certified wine sommelier!
          </p>
        </div>
        <div className="container">

          <div className="row">
            <div className="col menu-mole">
              <Link to="/resume">
                <p className="display-6 fs-3 first-txt">
                  Resume
                </p>
                <img src={mole1} className="App-logo" alt="Resume" />
              </Link>
            </div>
            <div className="col menu-mole ">
              <Link to="/portfolio">
                <p className="display-6 fs-3 first-txt">
                  Portfolio
                </p>
                <img src={mole2} className="App-logo" alt="Portfolio" />
              </Link>
            </div>
            <div className="col menu-mole">
              <Link to="/contact">
                <p className="display-6 fs-4  first-txt">
                  Contact
                </p>
                <img src={mole3} className="App-logo" alt="Contact me" />
              </Link>
            </div>
          </div>
        </div>

      </header>
    </div>
  );
}
