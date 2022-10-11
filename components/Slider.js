import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Slider = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showArrows={true}
        showStatus={false}
      >
        <div>
          <img src="/images/crysta2.png" />
        </div>
        <div>
          <img src="/images/crysta1.png" />
        </div>
        <div>
          <img src="/images/crysta3.png" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
