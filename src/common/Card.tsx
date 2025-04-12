import React from "react";
import "../styles/cards.css";
import Transporte from "/img/camion.png";
import { Instrumento } from "../types/instrumento";
import { Link, useNavigate } from "react-router-dom";


interface CardProps {
  item: Instrumento;
}

const Card: React.FC<CardProps> = ({ item }) => {
  const navigate = useNavigate();
   
  const handleLink = (id: number) => {
    navigate(`/detalle/${id}`);
  };


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
      <button className="item-button" onClick={()=>handleLink(item.id)}>Detalle</button>
    </div>
  );
};

export default Card;
