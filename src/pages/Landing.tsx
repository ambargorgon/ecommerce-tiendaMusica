import React from "react";
import CardContainer from "../components/CardContainer";
import DondeEstamos from "../components/DondeEstamos";
import SobreNosotros from "../components/SobreNosotros";
import Carrousel from "../components/Carrousel";

const Landing: React.FC = () => {
  return (
    <>
    <Carrousel />
      <p className="titulo-seccion" id="productos">PRODUCTOS</p>
      <CardContainer />

      <div>
        <p className="titulo-seccion">
          DÓNDE ESTAMOS
        </p>
        <DondeEstamos />
      </div>
      <p className="titulo-seccion">
          SOBRE NOSOTROS
        </p>
        <SobreNosotros />
    </>
  );
};

export default Landing;
