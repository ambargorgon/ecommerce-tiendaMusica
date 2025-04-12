import { Instrumento } from '../types/instrumento'
import "../styles/detalle.css"
import Camion from "/img/camion.png"
import { Link } from 'react-router-dom';

interface CardProps {
    item: Instrumento;
}

const CardDetalle: React.FC<CardProps> = ({ item }) => {
    return (
        <div>
            <p className="detalle-atras"><Link to={"/"} > ← Inicio</Link></p>
            <div className='detalle-container'>
                <div className='detalle-photo'>
                    <img src={item.imagen} alt={item.imagen} className="detalle-imagen" />
                    <p style={{ fontWeight: "bold", fontSize: "20px" }}>Descripcion:</p>
                    <p className="detalle-descripcion">{item.descripcion}</p>
                </div>
                <div className="detalle-info">
                    <p className="detalle-vendidos">{item.cantidadVendida} vendidos</p>
                    <h3 className="detalle-nombre" style={{ fontSize: "25px" }}>{item.instrumento}</h3>
                    <p className="detalle-precio">${item.precio}</p>
                    <div>
                        <p className="text-gray-700 mb-2" style={{ fontSize: "18px" }}>Marca: {item.marca}</p>
                        <p className="text-gray-500" style={{ fontSize: "18px" }}> Modelo: {item.modelo}</p>
                    </div>
                    {item.costoEnvio === "G" ? (
                        <div className="item-enviogratis">
                            <img src={Camion} alt="envio" />
                            <p>Envio Gratis a todo el país</p>
                        </div>
                    ) : (
                        <p className="item-envio">
                            Costo de Envío interior de Argentina: ${item.costoEnvio}
                        </p>
                    )}
                    <button onClick={() => { alert(`${item.instrumento} añadido al carrito`) }} className="detalle-button">Añadir al Carrito</button>
                </div>
            </div>
        </div>
    )
}

export default CardDetalle