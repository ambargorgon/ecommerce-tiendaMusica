import React from "react";
import { GiGuitarHead } from "react-icons/gi";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header-container">
      <p>Inicio</p>
      <p>Sobre Nosotros</p>
      <div className="logo-container">
        <GiGuitarHead className="header-icon" />
        <h2 className="header-logo">difusa</h2>
      </div>
      <p>Productos</p>
      <p>Carrito</p>
    </header>
  );
};

export default Header;
