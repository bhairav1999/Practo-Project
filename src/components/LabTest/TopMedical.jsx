import React from "react";
import "./TopMedical.css";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import {
  MDBCard,
  MDBCardHeader,
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

const TopMedical = () => {
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

<div className="mt-5"><span className="h3 "><b>Top booked Medical tests</b></span> 
<p className="h6 ms-3">Get 10% Health Cashback* T&C</p>
</div>
      <div className="row mt-5">
        <Slider {...settings}>
          <div>
            <MDBCard>
              <MDBCardHeader>
                <img
                  className="img100 "
                  src="https://www.practo.com/tests/public/icons/testprofiles/lipid_profile.png"
                  alt=""
                />{" "}
                <span className="" >Lipid Profile</span>{" "}
              </MDBCardHeader>
              <MDBListGroup flush>
                <MDBListGroupItem className="click">
                  <span className="h6">Ldl Cholesterol Test</span>{" "}
                  <p className="fs-7">
                    Also know as Cholesterol ldi Enzymatic colorimetric Method
                    Blood
                  </p>
                </MDBListGroupItem>
                <MDBListGroupItem className="click">
                  <span className="h6">Hdl Cholesterol Test</span>{" "}
                  <p className="fs-7">
                    Also know as Cholesterol Hdi Enzymatic colorimetric Method
                    Blood
                  </p>
                </MDBListGroupItem>
                <MDBListGroupItem className="click">
                  <span className="h6">Vdl Cholesterol Test</span>{" "}
                  <p className="fs-7">
                    Also know as Cholesterol ldi Enzymatic colorimetric Method
                    Blood
                  </p>
                </MDBListGroupItem>
                <MDBListGroupItem className="click">
                  <span className="h6">Total Cholesterol Test</span>{" "}
                  <p className="fs-7">
                    Also know as Cholesterol ldi Enzymatic colorimetric Method
                    Blood
                  </p>
                </MDBListGroupItem>
                <MDBListGroupItem className="click">
                  <span className="h6">Triglycerides Blood Test</span>{" "}
                  <p className="fs-7">
                    Also know as Cholesterol ldi Enzymatic colorimetric Method
                    Blood
                  </p>
                </MDBListGroupItem>
              </MDBListGroup>
              <div class="card-footer ">
                <button type="button" class="btn btn-info h2 fw-bold">
                  Book Now
                </button>
              </div>
            </MDBCard>
          </div>
          <div>
            <MDBCard>
              <MDBCardHeader >
                <img
                  className="img100 "
                  src="https://www.practo.com/tests/public/icons/testprofiles/liver_profile.png"
                  alt=""
                />{" "}
                Liver Profile
              </MDBCardHeader>
             <MDBListGroup flush>
                <MDBListGroupItem className="click">
                  <span className="h6">Ldl Cholesterol Test</span>{" "}
                  <p className="fs-7">
                    Also know as Cholesterol ldi Enzymatic colorimetric Method
                    Blood
                  </p>
                </MDBListGroupItem>
                <MDBListGroupItem className="click">
                  <span className="h6">Hdl Cholesterol Test</span>{" "}
                  <p className="fs-7">
                    Also know as Cholesterol Hdi Enzymatic colorimetric Method
                    Blood
                  </p>
                </MDBListGroupItem>
                <MDBListGroupItem className="click">
                  <span className="h6">Vdl Cholesterol Test</span>{" "}
                  <p className="fs-7">
                    Also know as Cholesterol ldi Enzymatic colorimetric Method
                    Blood
                  </p>
                </MDBListGroupItem>
                <MDBListGroupItem className="click">
                  <span className="h6">Total Cholesterol Test</span>{" "}
                  <p className="fs-7">
                    Also know as Cholesterol ldi Enzymatic colorimetric Method
                    Blood
                  </p>
                </MDBListGroupItem>
                <MDBListGroupItem className="click">
                  <span className="h6">Triglycerides Blood Test</span>{" "}
                  <p className="fs-7">
                    Also know as Cholesterol ldi Enzymatic colorimetric Method
                    Blood
                  </p>
                </MDBListGroupItem>
              </MDBListGroup>
              <div class="card-footer ">
                <button type="button" class="btn btn-info h2 fw-bold">
                  Book Now
                </button>
              </div>
            </MDBCard>
          </div>



          <div>
            <MDBCard>
              <MDBCardHeader >
                <img
                  className="img100 "
                  src="https://www.practo.com/tests/public/icons/testprofiles/blood_sugar.png"
                  alt=""
                />
                Blood Sugar
              </MDBCardHeader>
             <MDBListGroup flush>
                <MDBListGroupItem className="click">
                  <span className="h6">Ldl Cholesterol Test</span>{" "}
                  <p className="fs-7">
                    Also know as Cholesterol ldi Enzymatic colorimetric Method
                    Blood
                  </p>
                </MDBListGroupItem>
                <MDBListGroupItem className="click">
                  <span className="h6">Hdl Cholesterol Test</span>{" "}
                  <p className="fs-7">
                    Also know as Cholesterol Hdi Enzymatic colorimetric Method
                    Blood
                  </p>
                </MDBListGroupItem>
                <MDBListGroupItem className="click">
                  <span className="h6">Vdl Cholesterol Test</span>{" "}
                  <p className="fs-7">
                    Also know as Cholesterol ldi Enzymatic colorimetric Method
                    Blood
                  </p>
                </MDBListGroupItem>
                <MDBListGroupItem className="click">
                  <span className="h6">Total Cholesterol Test</span>{" "}
                  <p className="fs-7">
                    Also know as Cholesterol ldi Enzymatic colorimetric Method
                    Blood
                  </p>
                </MDBListGroupItem>
                <MDBListGroupItem className="click">
                  <span className="h6">Triglycerides Blood Test</span>{" "}
                  <p className="fs-7">
                    Also know as Cholesterol ldi Enzymatic colorimetric Method
                    Blood
                  </p>
                </MDBListGroupItem>
              </MDBListGroup>
              <div class="card-footer ">
                <button type="button" class="btn btn-info h2 fw-bold">
                  Book Now
                </button>
              </div>
            </MDBCard>
          </div>





          <div>
            <MDBCard>
              <MDBCardHeader >
                <img
                  className="img100 "
                  src="https://www.practo.com/tests/public/icons/testprofiles/thyroid_profile.svg"
                  alt=""
                />{" "}
                Thyroid Test
              </MDBCardHeader>
            <MDBListGroup flush>
                <MDBListGroupItem className="click">
                  <span className="h6">Ldl Cholesterol Test</span>{" "}
                  <p className="fs-7">
                    Also know as Cholesterol ldi Enzymatic colorimetric Method
                    Blood
                  </p>
                </MDBListGroupItem>
                <MDBListGroupItem className="click">
                  <span className="h6">Hdl Cholesterol Test</span>{" "}
                  <p className="fs-7">
                    Also know as Cholesterol Hdi Enzymatic colorimetric Method
                    Blood
                  </p>
                </MDBListGroupItem>
                <MDBListGroupItem className="click">
                  <span className="h6">Vdl Cholesterol Test</span>{" "}
                  <p className="fs-7">
                    Also know as Cholesterol ldi Enzymatic colorimetric Method
                    Blood
                  </p>
                </MDBListGroupItem>
                <MDBListGroupItem className="click">
                  <span className="h6">Total Cholesterol Test</span>{" "}
                  <p className="fs-7">
                    Also know as Cholesterol ldi Enzymatic colorimetric Method
                    Blood
                  </p>
                </MDBListGroupItem>
                <MDBListGroupItem className="click">
                  <span className="h6">Triglycerides Blood Test</span>{" "}
                  <p className="fs-7">
                    Also know as Cholesterol ldi Enzymatic colorimetric Method
                    Blood
                  </p>
                </MDBListGroupItem>
              </MDBListGroup>
              <div class="card-footer ">
                <button type="button" class="btn btn-info h2 fw-bold">
                  Book Now
                </button>
              </div>
            </MDBCard>
          </div>





          <div>
            <MDBCard>
              <MDBCardHeader >
                <img
                  className="img100 "
                  src="https://www.practo.com/tests/public/icons/testprofiles/pregnancy_test.svg"
                  alt=""
                />{" "}
                Pregnancy test
              </MDBCardHeader>
             <MDBListGroup flush>
                <MDBListGroupItem className="click">
                  <span className="h6">Ldl Cholesterol Test</span>{" "}
                  <p className="fs-7">
                    Also know as Cholesterol ldi Enzymatic colorimetric Method
                    Blood
                  </p>
                </MDBListGroupItem>
                <MDBListGroupItem className="click">
                  <span className="h6">Hdl Cholesterol Test</span>{" "}
                  <p className="fs-7">
                    Also know as Cholesterol Hdi Enzymatic colorimetric Method
                    Blood
                  </p>
                </MDBListGroupItem>
                <MDBListGroupItem className="click">
                  <span className="h6">Vdl Cholesterol Test</span>{" "}
                  <p className="fs-7">
                    Also know as Cholesterol ldi Enzymatic colorimetric Method
                    Blood
                  </p>
                </MDBListGroupItem>
                <MDBListGroupItem className="click">
                  <span className="h6">Total Cholesterol Test</span>{" "}
                  <p className="fs-7">
                    Also know as Cholesterol ldi Enzymatic colorimetric Method
                    Blood
                  </p>
                </MDBListGroupItem>
                <MDBListGroupItem className="click">
                  <span className="h6">Triglycerides Blood Test</span>{" "}
                  <p className="fs-7">
                    Also know as Cholesterol ldi Enzymatic colorimetric Method
                    Blood
                  </p>
                </MDBListGroupItem>
              </MDBListGroup>
              <div class="card-footer ">
                <button type="button" class="btn btn-info h2 fw-bold">
                  Book Now
                </button>
              </div>
            </MDBCard>
          </div>
        </Slider>
      </div>
      
    </>
  );
};

export default TopMedical;
