import React from "react";
// Utils
import "swiper/swiper.scss";

// Components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import CarouselItem from "./CarouselItem";

// Images
import SlideOne from "../assets/images/slider/slide-1.jpg";
import SlideTwo from "../assets/images/slider/slide-2.jpg";
import SlideThree from "../assets/images/slider/slide-3.jpg";

SwiperCore.use([Autoplay]);

const HomeCarousel = () => {
  const config = {
    spaceBetween: 50,
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
    },
    loop: true,
    // onSlideChange: () => console.log("slide change"),
    // onSwiper: (swiper) => console.log(swiper),
  };

  return (
    <div className="home-page-carousel-wrapper">
      <Swiper {...config}>
        <SwiperSlide>
          <CarouselItem slideImg={SlideOne} />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem slideImg={SlideTwo} />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem slideImg={SlideThree} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeCarousel;
