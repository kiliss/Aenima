import "./Section.css";
import CardSection from "../CardSection/CardSection";
import img1 from "../../assets/img/card_01.png";
import img2 from "../../assets/img/card_02.png";
import img3 from "../../assets/img/card_03.png";

function Section() {
  return (
    <section className="section">
      <h2 className="title__section">TENDENCIAS</h2>
      <div className="all__cards">
      <CardSection
        className="cards"
        img={img1}
        title="Montañas y magia"
        description={
          "Aquí la descripción para <strong>Montañas y magia</strong>"
        }
        newcard={true}
      />
      <CardSection
        className="cards"
        img={img2}
        title="Playas y sol"
        description="La descripción de <strong>Playas y sol</strong> debe ser esta."
        newcard={false}
      />
      <CardSection
        className="cards"
        img={img3}
        title="Nieve y aventura"
        description="Contiene la información de <strong>Nieve y aventura</strong>."
        newcard={false}
      />
      </div>
    </section>
  );
}

export default Section;
