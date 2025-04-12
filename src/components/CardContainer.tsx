import React, { useEffect, useState } from 'react'
import Card from '../common/Card';
import "../styles/cards.css"
import { Instrumento } from '../types/instrumento';

  const CardContainer: React.FC = () => {
    const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch(`http://localhost:8080/instrumentos`)
        .then((res) => {
          if (!res.ok) throw new Error('Error al obtener los instrumentos');
          return res.json();
        })
        .then((data) => {
          setInstrumentos(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }, []);
  
    if (loading) return <p>Cargando instrumentos...</p>;
    return (
    <div className='card-list'>
        {instrumentos.map((el, index)=> 
            <Card key={index} item={el}/>
        )}
    </div>
  )
}

export default CardContainer