import React from 'react'
import Instrumentos from "../../instrumentos.json";
import Card from '../common/Card';
import "../styles/cards.css"

const CardContainer = () => {
    const productos = Instrumentos.instrumentos;
    return (
    <div className='card-list'>
        {productos.map((el, index)=> 
            <Card key={index} item={el}/>
        )}
    </div>
  )
}

export default CardContainer