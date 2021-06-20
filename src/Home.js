import React from 'react';
import {Link} from 'react-router-dom';
import mole1 from './mole.png';
import mole2 from './mole2.png';
import mole3 from './mole3.png';

export default function Home () {
  return (
    <div>
      <header className="App-header">

        <div className="container">
          <div className="row">
            <div className="col menu-mole">
              {/* <Link to="/resume"> */}
              <p className="display-6 fs-3 first-txt">
                Resume
              </p>
              <img src={mole1} className="App-logo" alt="logo" />
              {/* </Link> */}
            </div>
            <div className="col menu-mole ">
              <p className="display-6 fs-3 first-txt">
                Portfolio
              </p>
              <img src={mole2} className="App-logo" alt="logo" />
            </div>
            <div className="col menu-mole">
              <p className="display-6 fs-4  first-txt">
                Contact
              </p>
              <img src={mole3} className="App-logo" alt="logo" />
            </div>
          </div>
        </div>
        <div className="container ">
          <h1 className="fw-bold fs-1 justify-content-start">
            Hello,
          </h1>
          <h4 className="fs-2">I'm Miriam Gonzalez</h4>
          <p className="display-6 fs-4">
            A Full Stack Web Developer based in Barcelona. My skills include from frontend JavasScript, ReactJS to Restful API to backend NodeJS.

            I'm a certified wine sommelier.
          </p>
        </div>
      </header>
    </div>
  );
}
