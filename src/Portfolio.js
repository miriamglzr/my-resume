import React from 'react';
import photo from './img/photography.png';
import finance from './img/finance-bud.png';
import vivino from './img/vivino.png';

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
  {
    name: 'Wine Review',
    img: vivino,
    url: 'https://www.vivino.com/users/miriam_gonza',
    p: 'I enjoy writing fun & short tastings about good wine.',
  },
];

export default function Portfolio () {
  return (
    <div className="bg-white">
      <div className="container m-5 p-5">
        <div className="row">
          {cards.map ((e, i) => {
            return (
              <div className="card holder pt-3 m-3 col-sm" key={i}>
                <img
                  className="card-img-top"
                  src={e.img}
                  alt="Card image cap"
                />
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
        <div
          className="vivino-widget user-profile-widget"
          data-vivino-user-id="miriam_gonza"
          data-vivino-widget-layout="extended"
          data-vivino-widget-type="user"
        >
          <a
            href="https://www.vivino.com/users/miriam_gonza/latest"
            rel="nofollow"
            target="_blank"
          >
            miriam_gonza on Vivino
          </a>
        </div>
      </div>
    </div>
  );
}
