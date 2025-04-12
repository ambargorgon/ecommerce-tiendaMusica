import React from "react";
import { GiGuitarHead } from "react-icons/gi";
import "../styles/header.css";

const Header: React.FC = () => {
  return (
    <header className="header-container">
      <p><a href="/#sobreNosotros">Sobre Nosotros</a></p>
      <p><a href="/#dondeEstamos">Dónde Estamos</a></p>
      <div className="logo-container">
        <GiGuitarHead className="header-icon" />
        <h2 className="header-logo">difusa</h2>
      </div>
      <p><a href="/#productos">Productos</a></p>
      <p><a href="/#carrito">Carrito</a></p>
    </header>
  );
};

export default Header;
