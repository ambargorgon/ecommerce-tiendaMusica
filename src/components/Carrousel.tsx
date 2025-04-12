import { useState } from "react";
import "../styles/carrousel.css"

const images: string[] = [
  "/img/banner3.png",
  "/img/banner.png",
  "/img/banner2.png",
  ];

const Carrousel: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Slide ${i + 1}`}
          className={`carousel-img ${i === index ? "active" : ""}`}
        />
      ))}
      <button onClick={prevSlide} className="carousel-btn">‹</button>
      <button onClick={nextSlide} className="carousel-btn">›</button>
    </div>
  );
};

export default Carrousel;
