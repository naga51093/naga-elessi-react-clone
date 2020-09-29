import React from "react";

const CarouselItem = ({ slideImg }) => {
  return (
    <div className="carousel-item-wrapper">
      <img src={slideImg} alt="slider-img" />
    </div>
  );
};

export default CarouselItem;
