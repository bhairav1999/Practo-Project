import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineRight } from "react-icons/ai";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import "./special.css";
import { Button } from "react-bootstrap";
import { CommanData } from "./CommanHealthData";

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

const CommanHealth = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
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
          <h2 className="">Common Health Concerns</h2>
        </div>
        <div className="col-md-6  d-flex justify-content-end">
          <Button className="mt-4">See All Specialities</Button>
        </div>
      </div>
      <div className="row mt-3 mb-5">
        <div className="col-md-6 ">
          <h6 className="">Consult a doctor online for any health issue</h6>
        </div>
        <div className="col-md-4"></div>
      </div>

      <Slider {...settings}>
        {CommanData &&
          CommanData.map((user, i) => {
            return (
              <div key={i} class="card m-5" style={{ width: "50px" }}>
                <img src={user.image} class="card-img-top" alt="..." />

                <div class="card-body">
                  <h6 class="card-title">{user.name}</h6>
                  <p class="card-text">{user.price}</p>
                  <span class="card-text  ">
                    {user.button}
                    <AiOutlineRight />
                  </span>
                </div>
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default CommanHealth;
