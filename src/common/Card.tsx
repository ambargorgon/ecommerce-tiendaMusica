import React from "react";
import "../styles/cards.css";
import Transporte from "/img/camion.png";
import { Instrumento } from "../types/instrumento";
import { Link } from "react-router-dom";


interface CardProps {
  item: Instrumento;
}

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div className="card-container">
      <img src={item.imagen} alt={item.instrumento} />
      <div className="card-info">
        <p className="item-title">
          {item.instrumento}
        </p>
        <p className="item-price">${item.precio}</p>
        {item.costoEnvio === "G" ? (
          <div className="item-enviogratis">
            <img src={Transporte} alt="envio" />
            <p>Envio Gratis a todo el país</p>
          </div>
        ) : (
          <p className="item-envio">
            Costo de Envío interior de Argentina: ${item.costoEnvio}
          </p>
        )}
        <p>{item.cantidadVendida} vendidos</p>
      </div>
      <button className="item-button"><Link to={`detalle/${item.id}`}>Detalle</Link></button>
    </div>
  );
};

export default Card;
