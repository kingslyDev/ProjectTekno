// Card.jsx
import React from 'react';

const Card = (props) => {
  return (
    <div className="timeline__item">
      <h2 className="timeline__title">{props.title}</h2>
      <span className="timeline_date">{props.under}</span>
      <p className="timeline__description">{props.description}</p>
      <p className="timeline__price">{props.price}</p>
    </div>
  );
};

export default Card;
