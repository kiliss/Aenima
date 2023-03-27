import React from "react";
import "./Section.css";
import CardSection from "../CardSection/CardSection";
import img1 from "../../assets/img/card_01.png";

function Section() {
  return (
    <section className="section">
      <h2 className="title__section">TENDENCIAS</h2>
      <CardSection
        img={img1}
        title="Montañas y magia"
        description="Aquí la descripción para"
        details="Montañas y magia."
        newcard={true}
      />
    </section>
  );
}

export default Section;
