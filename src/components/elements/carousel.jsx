import React, { useEffect, useState } from "react";
import "../../styles.css";
import { Carousel, Button } from "react-bootstrap";

const images = [
  require("../../images/add.png"),
  require("../../images/advegd.png"),
];

const images_m = [
  require("../../images/adm.png"),
  require("../../images/advegm.png"),
  require("../../images/ad.png"),
  require("../../images/admango.png"),
];

const ImageCarousel = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const imageset = windowWidth >= 800 ? images : images_m;

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="adimagediv">
      <Carousel fade controls={false} indicators={false} interval={5000}>
        {imageset.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block mx-auto"
              src={image}
              alt="First slide"
              style={{ maxWidth: "80%" }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
