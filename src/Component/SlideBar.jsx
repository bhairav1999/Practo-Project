import React from "react";
import "./SlideBar.css";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LabtestFind from './LabtestFind'
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardFooter,
} from "mdb-react-ui-kit";

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

const SlideBar = () => {
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
    <>
    <p className="h2 mt-5 mb-5">Top Booked Diagnostic Tests</p>
      <div className=" row mt-5 ">
      
        <Slider {...settings}>
          <div className="col col-sm-1 col-md-1 shadow ">
            <MDBCard background="white" shadow="0" className="mb-3">
              <MDBCardBody className="text-success">
                <MDBCardTitle>COVID RT-PCR</MDBCardTitle>
                <MDBCardText>
                  Covid -19 Virus Qualitative Pcr Throat Swab
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter background="transparent" className="text-center">
                <a href="#" class="btn1">
                  ADD
                </a>
              </MDBCardFooter>
            </MDBCard>
          </div>
          <div className="col col-sm-1 col-md-1 shadow">
            <MDBCard background="white" shadow="0" className="mb-3">
              <MDBCardBody className="text-success">
                <MDBCardTitle>Success card title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter background="transparent" className="text-center">
                <a href="#" class="btn1">
                  ADD
                </a>
              </MDBCardFooter>
            </MDBCard>
          </div>
          <div className="col col-sm-1 col-md-1 shadow">
            <MDBCard background="white" shadow="0" className="mb-3">
              <MDBCardBody className="text-success">
                <MDBCardTitle>Success card title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter background="transparent" className="text-center">
                <a href="#" class="btn1">
                  ADD
                </a>
              </MDBCardFooter>
            </MDBCard>
          </div>
          <div className="col col-sm-1 col-md-1 shadow">
            <MDBCard background="white" shadow="0" className="mb-3">
              <MDBCardBody className="text-success">
                <MDBCardTitle>Success card title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter background="transparent" className="text-center">
                <a href="#" class="btn1">
                  ADD
                </a>
              </MDBCardFooter>
            </MDBCard>
          </div>
          <div className="col col-sm-1 col-md-1 shadow">
            <MDBCard background="white" shadow="0" className="mb-3">
              <MDBCardBody className="text-success">
                <MDBCardTitle>Success card title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter background="transparent" className="text-center">
                <a href="#" class="btn1">
                  ADD
                </a>
              </MDBCardFooter>
            </MDBCard>
          </div>
        
          <div className="col col-sm-1 col-md-1 shadow">
            <MDBCard background="white" shadow="0" className="mb-3">
              <MDBCardBody className="text-success">
                <MDBCardTitle>Success card title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter background="transparent" className="text-center">
                <a href="#" class="btn1">
                  ADD
                </a>
              </MDBCardFooter>
            </MDBCard>
          </div>
        </Slider>
      </div>
      <LabtestFind/>
    </>
  );
};

export default SlideBar;
