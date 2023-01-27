import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import "./special.css";
import { Button } from "react-bootstrap";
import { SpecialData } from "./SpecialData";

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

const Special = () => {
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
    <div className="container mb-5 mt-5">
      <div className="row ">
        <div
          className="col-md-6 justify-content-start 
"
        >
          <h2 className="">25+ Specialities</h2>
        </div>
        <div className="col-md-6  d-flex justify-content-end">
          <Button className="mt-4">See All Specialities</Button>
        </div>
      </div>
      <div className="row mt-3 mb-5">
        <div className="col-md-6 ">
          <h6 className="">Consult with top doctors across specialities</h6>
        </div>
        <div className="col-md-4"></div>
      </div>

      <Slider {...settings}>
        {SpecialData &&
          SpecialData.map((user, i) => {
            return (
              <div key={i} class="card  ">
                <div className="card-body text-center ">
                  <img
                    className=" rounded-circle img-fluid img-responsive center-block d-block mx-auto"
                    src={user.image}
                    alt=""
                    width="50%"
                  />
                  <h5 className="card-title mt-2">{user.name}</h5>
                  <p class="card-text">{user.price}</p>
                  <p class="card-text  ">{user.button}</p>
                </div>
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default Special;
