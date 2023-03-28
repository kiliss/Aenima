import React from "react";
import "./Hero.css";
import IcPin from "../Svgs/icPin/IcPin";
import navSlider from "../../assets/img/Nav.png";
import Image from "next/image";
import Arrow from "../Svgs/Arrow/Arrow";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__content">
        <div className="title">
          <IcPin/>
          <h1 className="hero__title"> AMERICA DEL SUR</h1>
        </div>
        <div className="text__container">
          <p className="hero__subtitle">
            Lugares Maravillosos por America del Sur
          </p>
          <p className="hero__subtitle2">
            Estos son algunos lugares que eligen la mayoría de los turistas que
            visitan America del Sur.
          </p>
        </div>
      </div>
      <div className="hero__adventure">
        <div className="hero__adventure__container">
          <h4 className="hero__text__adventure">PRÓXIMA AVENTURA</h4>
          <div className="arrow">
          <Arrow/>
          </div>
        </div>
        <h5 className="hero__text__location">Europa Meridional</h5>
        <p className="hero__text__info">
          Forman parte veinte países, ej. España, Francia, etc.
        </p>
      </div>
      <Image src={navSlider} alt="navSlider" className="heroNav" />
    </div>
  );
}

export default Hero;
