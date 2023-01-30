import React from "react";
import PopularLapTest from './PopularLapTest';

import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <MdNavigateNext className="icon" />
      </button>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <GrFormPrevious className="icon" />
      </button>
    </div>
  );
}

const LabtestFind = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <p className="h3  mt-5 mb-5"><b>Find Tests by Health Concern</b></p>
      <div className=" row mt-5 ">
        <Slider {...settings}>
        
          <div >
            <img src="https://www.practo.com/tests/public/images/landingpage_icons/Fever.svg?v=1569493559" alt="" />
            <p className="ms-5 mt-4">Fever</p>
          </div>
          <div>
            <img src="https://www.practo.com/tests/public/images/landingpage_icons/Diabetes.svg?v=1569493559" alt="" />
            <p className="ms-5 mt-4">Diabetes</p>
          </div>
          <div>
            <img src="https://www.practo.com/tests/public/images/landingpage_icons/Skin.svg?v=1569493559" alt="" />
            <p className="ms-5 mt-4">Skin</p>
          </div>
          <div>
            <img src="https://www.practo.com/tests/public/images/landingpage_icons/Kidney.svg?v=1569493559" alt="" />
            <p className="ms-5 mt-4">kidney</p>
          </div>
          <div>
           <img src="https://www.practo.com/tests/public/images/landingpage_icons/Stomach.svg?v=1569493559" alt="" />
            <p className="ms-5 mt-4">Digestion</p>
          </div>
          <div>
          <img src="https://www.practo.com/tests/public/images/landingpage_icons/Cancer.svg?v=1569493559" alt="" />
            <p className="ms-5 mt-4">Cancer</p>
          </div>
          <div>
          <img src="https://www.practo.com/tests/public/images/landingpage_icons/Bones.svg?v=1569493559" alt="" />
            <p className="ms-5 mt-4">Bone</p>
          </div>
          <div>
          <img src="https://www.practo.com/tests/public/images/landingpage_icons/Sexual_wellness.svg?v=1569493559" alt="" />
            <p className="ms-5 mt-4">Sexual Wellness</p>
          </div>
          
        </Slider>
      </div>
      <PopularLapTest />
    </>
  );
};

export default LabtestFind;
