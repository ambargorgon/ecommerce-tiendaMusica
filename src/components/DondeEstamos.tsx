const DondeEstamos: React.FC = () => {
    return (
        <div id='dondeEstamos' style={{ position: "relative", width: "100%", paddingBottom: "35%" }}>
          <iframe
            src="https://maps.google.com/maps?q=av.+las+heras+y+san+martin%2C+mendoza&output=embed"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: 0,
            }}
            loading="lazy"
            title="Mapa de ubicación"
          ></iframe>
        </div>
      );
    };

export default DondeEstamos;
