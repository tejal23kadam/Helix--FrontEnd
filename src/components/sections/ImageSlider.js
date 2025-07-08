import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import '../../../src/slider.css'
const ImageSlider = ({ id, images, direction }) => {

  const [slides, setSlides] = useState([]);

  useEffect(() => {
    setSlides([...images, ...images])
  }, [images])

  return (
    <div className="slider" id={id}>
      <div className={`slider-track ${direction === "right" ? "scrollRight" : "ScrollLeft"}`}>


        {slides.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;