import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineRight } from "react-icons/ai";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import "./special.css";
import { Button } from "react-bootstrap";
import axios from "axios";
import { NavLink } from "react-router-dom";
// import { CommanData } from "./CommanHealthData";

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
  const [commanData, setCommanData] = useState([]);
  async function fetchData() {
    const res = await axios.get(
      "./alldata/VideoConsult/CommanHeadlthData.json"
    );

    if (res.data.length > 0) {
      setCommanData(res.data);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
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
          <NavLink to="/Consult-Doctor">
            <Button className="mt-4">See All Specialities</Button>
          </NavLink>
        </div>
      </div>
      <div className="row mt-3 mb-5">
        <div className="col-md-6 ">
          <h5 className="">Consult a doctor online for any health issue</h5>
        </div>
        <div className="col-md-4"></div>
      </div>

      <Slider {...settings}>
        {commanData &&
          commanData.map((user, i) => {
            return (
              <div key={i} class="card m-5" style={{ width: "50px" }}>
                <img src={user.image} class="card-img-top" alt="..." />

                <div class="card-body">
                  <h5 class="card-title">{user.name}</h5>
                  <p class="card-text">{user.price}</p>

                  <NavLink
                    to="/Consult-Doctor"
                    style={{ textDecoration: "none" }}
                  >
                    <span class="card-text  ">
                      {user.button}
                      <AiOutlineRight />
                    </span>
                  </NavLink>
                </div>
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default CommanHealth;
