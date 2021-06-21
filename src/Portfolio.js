import React from 'react';
import photo from './img/photography.png';
import finance from './img/finance-bud.png';

const cards = [
  {
    name: 'Finance Buddy',
    img: finance,
    url: 'https://finance-bud.herokuapp.com/Home',
    p: 'First MVP Project in Bootcamp Frontend App.',
  },
  {
    name: 'Photography',
    img: photo,
    url: 'https://miriamglzr.wixsite.com/portfolio',
    p: 'Some of my work doing photography for Digital Marketing and Portraits.',
  },
];

export default function Portfolio () {
  return (
    <div className="bg-white">
      <div className="container m-5 p-5">

        {cards.map ((e, i) => {
          return (
            <div className="card holder pt-3 m-3" key={i}>
              <img className="card-img-top" src={e.img} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{e.name}</h5>
                <p className="card-text">
                  {e.p}
                </p>
                <a href={e.url} className="btn btn-success">
                  Visit here
                </a>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}
