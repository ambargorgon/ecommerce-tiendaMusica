import "../styles/sobreNosotros.css"

const SobreNosotros: React.FC = () => {
  return (
    <div className="sobre-nosotros-container" id='sobreNosotros'>
      <div>
        <div className='nosotros-info'>
          <div>
            <p className="label">Email</p>
            <p className="answer">difusa@gmail.com</p>
            <p className="label">Telefono</p>
            <p className="answer">+54294555112</p>
          </div>
          <div>
            <p className="label">Instagram</p>
            <p className="answer">@difusamusica</p>
            <p className="label">Dirección</p>
            <p className="answer">Av. Las Heras y Av. San Martin, Ciudad de Mendoza</p>
          </div>
        </div>
      </div>
      <p className='presentacion' style={{ color: 'black' }}>
        Difusa es una tienda de instrumentos musicales con ya más de 15
        años de experiencia. Tenemos el conocimiento y la capacidad como para
        informarte acerca de las mejores elecciones para tu compra musical.
      </p>
    </div>
  );
};

export default SobreNosotros;
