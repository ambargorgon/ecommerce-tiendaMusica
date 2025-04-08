import React from "react";
import "../styles/cards.css";
import Transporte from "../img/camion.png";

const images = import.meta.glob("../img/*.jpg", { eager: true });

const getImageByName = (fileName) => {
  const path = `../img/${fileName}`;
  return images[path]?.default;
};
const Card = ({ item }) => {
  return (
    <div className="card-container">
      <img src={getImageByName(item.imagen)} alt={item.instrumento} />
      <div className="card-info">
        <p className="item-title">
          {item.instrumento}, {item.marca}
        </p>
        <p className="item-price">${item.precio}</p>
        {item.costoEnvio === "G" ? (
          <div className="item-enviogratis">
            <img src={Transporte} alt="envio" />
            <p>Envio Gratis a todo el pais</p>
          </div>
        ) : (
          <p className="item-envio">
            Costo de Envio interor de Argentina: ${item.costoEnvio}
          </p>
        )}
        <p>{item.cantidadVendida} vendidos</p>
      </div>
    </div>
  );
};

export default Card;
