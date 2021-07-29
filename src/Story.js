import React from 'react';
import pic from './img/class.jpg';
import lego from './img/lego.jpg';
import grad from './img/graduation.JPG';

export default function Story () {
  return (
    <div className="bg-white">
      <div className="container">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>My Story</th>

            </tr>
          </thead>
          <tbody>
            <tr>

              <td>
                I'm a Full Stack Developer form Mexico, based in Barcelona. Previously, I used to work in finance and Corporate Banking before I took a leap into the tech world.
                I graduated from a Full Stack Development Bootcamp at CodeOp, which is an international school for women in Barcelona.

                Once I tried how straight forward and satisfying coding was, I never looked back.
                I really enjoy the logic and problem-solving that goes behind the code.
              </td>

            </tr>
            <tr>

              <td><img src={pic} className="w-50 mole" alt="logo" /></td>
              <td><img src={lego} className="w-50 mole" alt="logo" /></td>
              <td><img src={grad} className="w-50 mole" alt="logo" /></td>
            </tr>
            <tr>

              <td>
                More about me... I like to spend my time around surrounded by people I love and my dog, Rocco 🐕. I am movie enthusiast, boardgame explorer and a certified wine sommelier. Cheers!
                😊{' '}
              </td>

              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
