import React from "react";
import OurPartnerLabs from './OurPartnerLabs'
import "./SlideBar.css";


import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  MDBCard,
  MDBCardFooter,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  
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

const WomensHealth = () => {
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
      <p className="h3  mt-5 mb-4"><b>Popular Health Checkup Packages</b></p>
      <div class="btn-group mb-3" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary">Featured Checkups</button>
  <button type="button" class="btn btn-outline-primary">Women's Health</button>
  <button type="button" class="btn btn-outline-primary">Men's Health</button>
</div>
      <div className="row">
        <Slider {...settings}>
          <div>
            <MDBCard>
              <MDBCardImage className="shadow1"
                position="top"
                alt="..."
                src="https://images1-fabric.practo.com/dx/labs/PRL-HWP/logo.jpg/360x240"
              />
              <MDBCardBody>
                <MDBCardTitle className="h5 ">
                  Basic Womer Health Checkup
                </MDBCardTitle>
                <MDBCardText className="fs-6">
                  Ideal for individuals aged 15-40 years
                </MDBCardText>
                <MDBCardText className="h6 mb-4">85 tests included</MDBCardText>
              </MDBCardBody>

              <MDBCardFooter background="transparent">
                <div className="">
                  <span className="h5 fw-bold">₹1099 </span>
                  <strike className="h6 text-muted">₹1400</strike>{" "}
                  <span className="text-success  h6">22% off</span>{" "}
                  <span>
                    <button
                      type="button"
                      className="btn btn-info fw-bold ms-3 mt-3 h6"
                    >
                      Book Now
                    </button>
                  </span>
                </div>
              </MDBCardFooter>
            </MDBCard>
          </div>

          <div>
            <MDBCard>
              <MDBCardImage className="shadow1"
                position="top"
                alt="..."
                src="https://images1-fabric.practo.com/dx/labs/PRL-VDHC/logo.jpg/360x240"
              />
              <MDBCardBody>
                <MDBCardTitle className="h5 ">
                  Basic Womer Health Checkup
                </MDBCardTitle>
                <MDBCardText className="fs-6">
                  Ideal for individuals aged 15-40 years
                </MDBCardText>
                <MDBCardText className="h6 mb-4">85 tests included</MDBCardText>
              </MDBCardBody>

              <MDBCardFooter background="transparent">
                <div className="">
                  <span className="h5 fw-bold">₹1099 </span>
                  <strike className="h6 text-muted">₹1400</strike>{" "}
                  <span className="text-success  h6">22% off</span>{" "}
                  <span>
                    <button
                      type="button"
                      className="btn btn-info fw-bold ms-3 mt-3 h6"
                    >
                      Book Now
                    </button>
                  </span>
                </div>
              </MDBCardFooter>
            </MDBCard>
          </div>

          <div>
            <MDBCard>
              <MDBCardImage className="shadow1"
                position="top"
                alt="..."
                src="https://images1-fabric.practo.com/dx/labs/PRL-YIHC/logo_0gMZNaj.jpg/360x240"
              />
              <MDBCardBody>
                <MDBCardTitle className="h5 ">
                  Basic Womer Health Checkup
                </MDBCardTitle>
                <MDBCardText className="fs-6">
                  Ideal for individuals aged 15-40 years
                </MDBCardText>
                <MDBCardText className="h6 mb-4">85 tests included</MDBCardText>
              </MDBCardBody>

              <MDBCardFooter background="transparent">
                <div className="">
                  <span className="h5 fw-bold">₹1099 </span>
                  <strike className="h6 text-muted">₹1400</strike>{" "}
                  <span className="text-success  h6">22% off</span>{" "}
                  <span>
                    <button
                      type="button"
                      className="btn btn-info fw-bold ms-3 mt-3 h6"
                    >
                      Book Now
                    </button>
                  </span>
                </div>
              </MDBCardFooter>
            </MDBCard>
          </div>

          <div>
            <MDBCard>
              <MDBCardImage className="shadow1"
                position="top"
                alt="..."
                src="https://images1-fabric.practo.com/dx/labs/PRL-AYIHC/logo.jpg/360x240"
              />
              <MDBCardBody>
                <MDBCardTitle className="h5 ">
                  Basic Womer Health Checkup
                </MDBCardTitle>
                <MDBCardText className="fs-6">
                  Ideal for individuals aged 15-40 years
                </MDBCardText>
                <MDBCardText className="h6 mb-4">85 tests included</MDBCardText>
              </MDBCardBody>

              <MDBCardFooter background="transparent">
                <div className="">
                  <span className="h5 fw-bold">₹1099 </span>
                  <strike className="h6 text-muted">₹1400</strike>{" "}
                  <span className="text-success  h6">22% off</span>{" "}
                  <span>
                    <button
                      type="button"
                      className="btn btn-info fw-bold ms-3 mt-3 h6"
                    >
                      Book Now
                    </button>
                  </span>
                </div>
              </MDBCardFooter>
            </MDBCard>
          </div>

          <div>
            <MDBCard>
              <MDBCardImage className="shadow1"
                position="top"
                alt="..."
                src="https://images1-fabric.practo.com/dx/labs/PRL-CFBC/logo_XZ8poyA.jpg/360x240"
              />
              <MDBCardBody>
                <MDBCardTitle className="h5 ">
                  Basic Womer Health Checkup
                </MDBCardTitle>
                <MDBCardText className="fs-6">
                  Ideal for individuals aged 15-40 years
                </MDBCardText>
                <MDBCardText className="h6 mb-4">85 tests included</MDBCardText>
              </MDBCardBody>

              <MDBCardFooter background="transparent">
                <div className="">
                  <span className="h5 fw-bold">₹1099 </span>
                  <strike className="h6 text-muted">₹1400</strike>{" "}
                  <span className="text-success  h6">22% off</span>{" "}
                  <span>
                    <button
                      type="button"
                      className="btn btn-info fw-bold ms-3 mt-3 h6"
                    >
                      Book Now
                    </button>
                  </span>
                </div>
              </MDBCardFooter>
            </MDBCard>
          </div>

          <div>
            <MDBCard>
              <MDBCardImage className="shadow1"
                position="top"
                alt="..."
                src="https://images1-fabric.practo.com/dx/labs/PRL-AHCP/logo_92jA83w.jpg/360x240"
              />
              <MDBCardBody>
                <MDBCardTitle className="h5 ">
                  Basic Womer Health Checkup
                </MDBCardTitle>
                <MDBCardText className="fs-6">
                  Ideal for individuals aged 15-40 years
                </MDBCardText>
                <MDBCardText className="h6 mb-4">85 tests included</MDBCardText>
              </MDBCardBody>

              <MDBCardFooter background="transparent">
                <div className="">
                  <span className="h5 fw-bold">₹1099 </span>
                  <strike className="h6 text-muted">₹1400</strike>{" "}
                  <span className="text-success  h6">22% off</span>{" "}
                  <span>
                    <button
                      type="button"
                      className="btn btn-info fw-bold ms-3 mt-3 h6"
                    >
                      Book Now
                    </button>
                  </span>
                </div>
              </MDBCardFooter>
            </MDBCard>
          </div>

          <div>
            <MDBCard >
              <MDBCardImage className="shadow1"
                position="top"
                alt="..."
                src="https://images1-fabric.practo.com/dx/labs/PRL-BOHC/logo.jpeg/360x240"
              />
              <MDBCardBody>
                <MDBCardTitle className="h5 ">
                  Basic Womer Health Checkup
                </MDBCardTitle>
                <MDBCardText className="fs-6">
                  Ideal for individuals aged 15-40 years
                </MDBCardText>
                <MDBCardText className="h6 mb-4">85 tests included</MDBCardText>
              </MDBCardBody>

              <MDBCardFooter background="transparent">
                <div className="">
                  <span className="h5 fw-bold">₹1099 </span>
                  <strike className="h6 text-muted">₹1400</strike>{" "}
                  <span className="text-success  h6">22% off</span>{" "}
                  <span>
                    <button
                      type="button"
                      className="btn btn-info fw-bold ms-3 mt-3 h6"
                    >
                      Book Now
                    </button>
                  </span>
                </div>
              </MDBCardFooter>
            </MDBCard>
          </div>

          
         
          <div>
            <MDBCard>
              <MDBCardImage  className="shadow1"
                position="top"
                alt="..."
                src="https://images1-fabric.practo.com/dx/labs/PRL-FBC/logo.jpeg/360x240"
              />
              <MDBCardBody >
                <MDBCardTitle className="h5   ">
                  Basic Womer Health Checkup
                </MDBCardTitle>
                <MDBCardText className="fs-6">
                  Ideal for individuals aged 15-40 years
                </MDBCardText>
                <MDBCardText className="h6 mb-4">85 tests included</MDBCardText>
              </MDBCardBody>

              <MDBCardFooter background="transparent">
                <div className="">
                  <span className="h5 fw-bold">₹1099 </span>
                  <strike className="h6 text-muted">₹1400</strike>{" "}
                  <span className="text-success  h6">22% off</span>{" "}
                  <span>
                    <button
                      type="button"
                      className="btn btn-info fw-bold ms-3 mt-3 h6"
                    >
                      Book Now
                    </button>
                  </span>
                </div>
              </MDBCardFooter>
            </MDBCard>
          </div>
        </Slider>
      </div>
      <OurPartnerLabs/>
    </>
  );
};

export default WomensHealth;
