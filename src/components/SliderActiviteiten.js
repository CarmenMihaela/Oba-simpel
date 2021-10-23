import React, { useState } from "react";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const SliderActiviteiten = ({ data }) => {
  const [current, setCurrent] = useState(0);

  if (data.length > 7) data.length = 7;
  const length = data.length;

  const currentIndex = (current) => {
    if (current > length - 1) {
      return null;
    }

    return [
      current,
      (current + 1) % length,
      (current + 2) % length,
      (current + 3) % length,
      (current + 4) % length,
    ];
  };

  const nextSlide = () => {
    setCurrent((prevState) => {
      if (prevState === length - 1) return 0;
      return prevState + 1;
    });
  };

  const prevSlide = () => {
    setCurrent((prevState) => {
      if (prevState === 0) return length - 1;
      return prevState - 1;
    });
  };

  if (!Array.isArray(data) || data.length <= 0) {
    return null;
  }

  return (
    <>
      <section className="sliderActiviteiten">
        <button className="arrowBtnLeft">
          <ArrowLeftIcon style={{ fontSize: "200px" }} onClick={prevSlide} />
        </button>
        <button className="arrowBtnRight">
          <ArrowRightIcon style={{ fontSize: "200px" }} onClick={nextSlide} />
        </button>
        <div className="wrapperActiviteiten">
          {currentIndex(current).map((index, position) => {
            const slide = data[index];
            return (
              <div
                className={index === current ? "slideA active" : "slideA"}
                key={index}
                style={{ transform: `translateX(${(position - 1) * 100}%)` }}
              >
                <img
                  src={slide.omslagafbeeldingen[0]}
                  alt=""
                  className="sliderImageActiviteiten"
                />
                <div className="overlayActiviteiten">
                  <h2>{slide.datum}</h2>
                  <h3>{slide.tijd}</h3>
                  <h2>{slide.title}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default SliderActiviteiten;
