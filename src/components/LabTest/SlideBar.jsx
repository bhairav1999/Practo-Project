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
  var settings = { dots: false, infinite: false, speed: 500, slidesToShow: 4,slidesToScroll: 1,initialSlide: 0,
    nextArrow:<SampleNextArrow/>,
    prevArrow:<SamplePrevArrow/>,
 
    responsive: [
      { breakpoint: 1024,
       settings: {
          slidesToShow: 4, slidesToScroll: 3, infinite: true, dots: true }
      },
      {  breakpoint: 600,
        settings: {slidesToShow: 4,slidesToScroll: 3, initialSlide: 1  }
      },
      {  breakpoint: 480,
        settings: {  slidesToShow:4,  slidesToScroll: 3 }
      }
    ]
  };
 
  return (
    <>
    <p className="h3 mt-5 mb-5"><b>Top Booked Diagnostic Tests</b></p>
      <div className=" row mt-5 ">
      
        <Slider {...settings}>


          <div className="col col-sm-1 col-md-1  shadow1 ">
            <MDBCard background="white" shadow="0" className="mb-3">
              <MDBCardBody className="text-dark">
                <MDBCardTitle className="h5 text-danger">COVID RT-PCR</MDBCardTitle>
                <MDBCardText className="fs-6  text-secondary">
                  Known as Covid -19 Virus Qualitative Pcr Throat Swab
                </MDBCardText>
                <MDBCardText className="h6 bold">
                  E-Reports on next day
                </MDBCardText>
                <MDBCardText className="h5">
                ₹ 850
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter background="transparent" className="text-center">
                <a href="#" class="btn1">
                  ADD
                </a>
              </MDBCardFooter>
            </MDBCard>
          </div>



          
          <div className="col col-sm-1 col-md-1  shadow1 ">
            <MDBCard background="white" shadow="0" className="mb-3">
              <MDBCardBody className="text-dark">
                <MDBCardTitle className="h5 text-danger">Thyroid Profile</MDBCardTitle>
                <MDBCardText className="fs-6  text-secondary">
                  Known as Covid -19 Virus Qualitative Pcr Throat Swab
                </MDBCardText>
                <MDBCardText className="h6 bold">
                  E-Reports on next day
                </MDBCardText>
                <MDBCardText className="h5">
                ₹ 400
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter background="transparent" className="text-center">
                <a href="#" class="btn1">
                  ADD
                </a>
              </MDBCardFooter>
            </MDBCard>
          </div>

          
          
          <div className="col col-sm-1 col-md-1  shadow1 ">
            <MDBCard background="white" shadow="0" className="mb-3">
              <MDBCardBody className="text-dark">
                <MDBCardTitle className="h5 text-danger">Complete Blood Count</MDBCardTitle>
                <MDBCardText className="fs-6  text-secondary">
                  Known as Covid -19 Virus Qualitative Pcr Throat Swab
                </MDBCardText>
                <MDBCardText className="h6 bold">
                  E-Reports on next day
                </MDBCardText>
                <MDBCardText className="h5">
                ₹ 300
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter background="transparent" className="text-center">
                <a href="#" class="btn1">
                  ADD
                </a>
              </MDBCardFooter>
            </MDBCard>
          </div>

          
          <div className="col col-sm-1 col-md-1  shadow1 ">
            <MDBCard background="white" shadow="0" className="mb-3">
              <MDBCardBody className="text-dark">
                <MDBCardTitle className="h5 text-danger">Lipid Profile</MDBCardTitle>
                <MDBCardText className="fs-6  text-secondary">
                  Known as Covid -19 Virus Qualitative Pcr Throat Swab
                </MDBCardText>
                <MDBCardText className="h6 bold">
                  E-Reports on next day
                </MDBCardText>
                <MDBCardText className="h5">
                ₹ 434
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter background="transparent" className="text-center">
                <a href="#" class="btn1">
                  ADD
                </a>
              </MDBCardFooter>
            </MDBCard>
          </div>
          <div className="col col-sm-1 col-md-1  shadow1 ">
            <MDBCard background="white" shadow="0" className="mb-3">
              <MDBCardBody className="text-dark">
                <MDBCardTitle className="h5 text-danger">Live function Test</MDBCardTitle>
                <MDBCardText className="fs-6  text-secondary">
                  Known as Covid -19 Virus Qualitative Pcr Throat Swab
                </MDBCardText>
                <MDBCardText className="h6 bold">
                  E-Reports on next day
                </MDBCardText>
                <MDBCardText className="h5">
                ₹ 673
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter background="transparent" className="text-center">
                <a href="#" class="btn1">
                  ADD
                </a>
              </MDBCardFooter>
            </MDBCard>
          </div>

          
          <div className="col col-sm-1 col-md-1  shadow1 ">
            <MDBCard background="white" shadow="0" className="mb-3">
              <MDBCardBody className="text-dark">
                <MDBCardTitle className="h5 text-danger">HbA1c</MDBCardTitle>
                <MDBCardText className="fs-6  text-secondary">
                  Known as Covid -19 Virus Qualitative Pcr Throat Swab
                </MDBCardText>
                <MDBCardText className="h6 bold">
                  E-Reports on next day
                </MDBCardText>
                <MDBCardText className="h5">
                ₹ 300
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
