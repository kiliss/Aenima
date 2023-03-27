import React from "react";
import Image from "next/image";
import "./CardSection.css";

function CardSection({ img, title, description, newcard, details }) {
  return (
    <div className="card">
      <Image src={img} alt="Card01" className="card__img" />
      <div className="card__info">
        {newcard && <p className="card__new">NUEVO</p>}
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description} <b>{details}</b></p>
      </div>
    </div>
  );
}

export default CardSection;
