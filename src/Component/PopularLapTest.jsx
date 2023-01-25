import React from "react";
import OurPartnerLabs from './OurPartnerLabs'

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
  MDBCardLink,
  MDBListGroup,
  MDBListGroupItem,
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

const PopularLapTest = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <p className="h2  mt-5 mb-5">Popular Health Checkup Packages</p>
      <div className="row">
        <Slider {...settings}>
          <div>
            <MDBCard>
              <MDBCardImage
                position="top"
                alt="..."
                src="https://images1-fabric.practo.com/dx/labs/PRL-HWP/logo.jpg/360x240"
              />
              <MDBCardBody>
                <MDBCardTitle className="h2">
                  Basic Womer Health Checkup
                </MDBCardTitle>
                <MDBCardText>
                  Ideal for individuals aged 15-40 years
                </MDBCardText>
                <MDBCardText className="h4 mb-4">85 tests included</MDBCardText>
              </MDBCardBody>

              <MDBCardFooter background="transparent">
                <div>
                  <span className="h2 fw-bold">₹1099 </span>
                  <strike className="h3 text-muted">₹1400</strike>{" "}
                  <span className="text-success  h3">22% off</span>{" "}
                  <span>
                    <button
                      type="button"
                      className="btn btn-info fw-bold ms-3 mt-3 fs-4"
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
              <MDBCardImage
                position="top"
                alt="..."
                src="https://images1-fabric.practo.com/dx/labs/PRL-VDHC/logo.jpg/360x240"
              />
              <MDBCardBody>
                <MDBCardTitle className="h2">Card title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
                <MDBCardText className="h4 mb-4">85 tests included</MDBCardText>
              </MDBCardBody>
             <MDBCardFooter background="transparent">
                <div>
                  <span className="h2 fw-bold">₹1099 </span>
                  <strike className="h3 text-muted">₹1400</strike>{" "}
                  <span className="text-success  h3">22% off</span>{" "}
                  <span>
                    <button
                      type="button"
                      className="btn btn-info fw-bold ms-3 mt-3 fs-4"
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
              <MDBCardImage
                position="top"
                alt="..."
                src="https://images1-fabric.practo.com/dx/labs/PRL-YIHC/logo_0gMZNaj.jpg/360x240"
              />
              <MDBCardBody>
                <MDBCardTitle className="h2">Card title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
                <MDBCardText className="h4 mb-4">85 tests included</MDBCardText>
              </MDBCardBody>
             <MDBCardFooter background="transparent">
                <div>
                  <span className="h2 fw-bold">₹1099 </span>
                  <strike className="h3 text-muted">₹1400</strike>{" "}
                  <span className="text-success  h3">22% off</span>{" "}
                  <span>
                    <button
                      type="button"
                      className="btn btn-info fw-bold ms-3 mt-3 fs-4"
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
              <MDBCardImage
                position="top"
                alt="..."
                src="https://images1-fabric.practo.com/dx/labs/PRL-AYIHC/logo.jpg/360x240"
              />
              <MDBCardBody>
                <MDBCardTitle className="h2">Card title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
                <MDBCardText className="h4 mb-4">85 tests included</MDBCardText>
              </MDBCardBody>
             <MDBCardFooter background="transparent">
                <div>
                  <span className="h2 fw-bold">₹1099 </span>
                  <strike className="h3 text-muted">₹1400</strike>{" "}
                  <span className="text-success  h3">22% off</span>{" "}
                  <span>
                    <button
                      type="button"
                      className="btn btn-info fw-bold ms-3 mt-3 fs-4"
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
              <MDBCardImage
                position="top"
                alt="..."
                src="https://images1-fabric.practo.com/dx/labs/PRL-CFBC/logo_XZ8poyA.jpg/360x240"
              />
              <MDBCardBody>
                <MDBCardTitle className="h2">Card title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
                <MDBCardText className="h4 mb-4">85 tests included</MDBCardText>
              </MDBCardBody>
             <MDBCardFooter background="transparent">
                <div>
                  <span className="h2 fw-bold">₹1099 </span>
                  <strike className="h3 text-muted">₹1400</strike>{" "}
                  <span className="text-success  h3">22% off</span>{" "}
                  <span>
                    <button
                      type="button"
                      className="btn btn-info fw-bold ms-3 mt-3 fs-4"
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
              <MDBCardImage
                position="top"
                alt="..."
                src="https://images1-fabric.practo.com/dx/labs/PRL-AHCP/logo_92jA83w.jpg/360x240"
              />
              <MDBCardBody>
                <MDBCardTitle className="h2">Card title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
                <MDBCardText className="h4 mb-4">85 tests included</MDBCardText>
              </MDBCardBody>
             <MDBCardFooter background="transparent">
                <div>
                  <span className="h2 fw-bold">₹1099 </span>
                  <strike className="h3 text-muted">₹1400</strike>{" "}
                  <span className="text-success  h3">22% off</span>{" "}
                  <span>
                    <button
                      type="button"
                      className="btn btn-info fw-bold ms-3 mt-3 fs-4"
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
              <MDBCardImage
                position="top"
                alt="..."
                src="https://images1-fabric.practo.com/dx/labs/PRL-BOHC/logo.jpeg/360x240"
              />
              <MDBCardBody>
                <MDBCardTitle className="h2">Card title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
                <MDBCardText className="h4 mb-4">85 tests included</MDBCardText>
              </MDBCardBody>
             <MDBCardFooter background="transparent">
                <div>
                  <span className="h2 fw-bold">₹1099 </span>
                  <strike className="h3 text-muted">₹1400</strike>{" "}
                  <span className="text-success  h3">22% off</span>{" "}
                  <span>
                    <button
                      type="button"
                      className="btn btn-info fw-bold ms-3 mt-3 fs-4"
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
              <MDBCardImage
                position="top"
                alt="..."
                src="https://images1-fabric.practo.com/dx/labs/PRL-TSB/logo.png/360x240"
              />
              <MDBCardBody>
                <MDBCardTitle className="h2">Card title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
                <MDBCardText className="h4 mb-4">85 tests included</MDBCardText>
              </MDBCardBody>
             <MDBCardFooter background="transparent">
                <div>
                  <span className="h2 fw-bold">₹1099 </span>
                  <strike className="h3 text-muted">₹1400</strike>{" "}
                  <span className="text-success  h3">22% off</span>{" "}
                  <span>
                    <button
                      type="button"
                      className="btn btn-info fw-bold ms-3 mt-3 fs-4"
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
              <MDBCardImage
                position="top"
                alt="..."
                src="https://images1-fabric.practo.com/dx/labs/PRL-TSA/logo.png/360x240"
              />
              <MDBCardBody>
                <MDBCardTitle className="h2">Card title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
                <MDBCardText className="h4 mb-4">85 tests included</MDBCardText>
              </MDBCardBody>
             <MDBCardFooter background="transparent">
                <div>
                  <span className="h2 fw-bold">₹1099 </span>
                  <strike className="h3 text-muted">₹1400</strike>{" "}
                  <span className="text-success  h3">22% off</span>{" "}
                  <span>
                    <button
                      type="button"
                      className="btn btn-info fw-bold ms-3 mt-3 fs-4"
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
              <MDBCardImage
                position="top"
                alt="..."
                src="https://images1-fabric.practo.com/dx/labs/PRL-FBC/logo.jpeg/360x240"
              />
              <MDBCardBody>
                <MDBCardTitle className="h2"></MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
                <MDBCardText className="h4 mb-4">85 tests included</MDBCardText>
              </MDBCardBody>
             <MDBCardFooter background="transparent">
                <div>
                  <span className="h2 fw-bold">₹1099 </span>
                  <strike className="h3 text-muted">₹1400</strike>{" "}
                  <span className="text-success  h3">22% off</span>{" "}
                  <span>
                    <button
                      type="button"
                      className="btn btn-info fw-bold ms-3 mt-3 fs-4"
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

export default PopularLapTest;
