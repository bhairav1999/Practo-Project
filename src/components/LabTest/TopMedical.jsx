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

<div className="mt-5"><span className="h1 ">Top booked Medical tests</span> 
<p className="fs-4">Get 10% Health Cashback* T&C</p>
</div>
      <div className="row mt-5">
        <Slider {...settings}>
          <div>
            <MDBCard>
              <MDBCardHeader>
                <img
                  className="img "
                  src="https://www.practo.com/tests/public/icons/testprofiles/lipid_profile.png"
                  alt=""
                />{" "}
                <span >Lipid Profile</span>{" "}
              </MDBCardHeader>
              <MDBListGroup flush>
                <MDBListGroupItem className="click">
                  <span className="h4">Ldl Cholesterol Test</span>{" "}
                  <p className="fs-5">
                    Also know as Cholesterol ldi Enzymatic colorimetric Method
                    Blood
                  </p>
                </MDBListGroupItem>
                <MDBListGroupItem className="click">
                  <span className="h4">Hdl Cholesterol Test</span>{" "}
                  <p className="fs-5">
                    Also know as Cholesterol Hdi Enzymatic colorimetric Method
                    Blood
                  </p>
                </MDBListGroupItem>
                <MDBListGroupItem className="click">
                  <span className="h4">Vdl Cholesterol Test</span>{" "}
                  <p className="fs-5">
                    Also know as Cholesterol ldi Enzymatic colorimetric Method
                    Blood
                  </p>
                </MDBListGroupItem>
                <MDBListGroupItem className="click">
                  <span className="h4">Total Cholesterol Test</span>{" "}
                  <p className="fs-5">
                    Also know as Cholesterol ldi Enzymatic colorimetric Method
                    Blood
                  </p>
                </MDBListGroupItem>
                <MDBListGroupItem className="click">
                  <span className="h4">Triglycerides Blood Test</span>{" "}
                  <p className="fs-5">
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
                  className="img "
                  src="https://www.practo.com/tests/public/icons/testprofiles/liver_profile.png"
                  alt=""
                />{" "}
                Liver Profile
              </MDBCardHeader>
              <MDBListGroup flush>
                <MDBListGroupItem className="click">
                  <span className="h4">Ldl Cholesterol Test</span>{" "}
                  <p className="fs-5">
                    Also know as Cholesterol ldi Enzymatic colorimetric Method
                    Blood
                  </p>
                </MDBListGroupItem>
                <MDBListGroupItem className="click">
                  <span className="h4">Hdl Cholesterol Test</span>{" "}
                  <p className="fs-5">
                    Also know as Cholesterol Hdi Enzymatic colorimetric Method
                    Blood
                  </p>
                </MDBListGroupItem>
                <MDBListGroupItem className="click">
                  <span className="h4">Vdl Cholesterol Test</span>{" "}
                  <p className="fs-5">
                    Also know as Cholesterol ldi Enzymatic colorimetric Method
                    Blood
                  </p>
                </MDBListGroupItem>
                <MDBListGroupItem className="click">
                  <span className="h4">Total Cholesterol Test</span>{" "}
                  <p className="fs-5">
                    Also know as Cholesterol ldi Enzymatic colorimetric Method
                    Blood
                  </p>
                </MDBListGroupItem>
                <MDBListGroupItem className="click">
                  <span className="h4">Triglycerides Blood Test</span>{" "}
                  <p className="fs-5">
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
                  className="img "
                  src="https://www.practo.com/tests/public/icons/testprofiles/blood_sugar.png"
                  alt=""
                />
                Blood Sugar
              </MDBCardHeader>
              <MDBListGroup flush>
                <MDBListGroupItem className="click">
                  <span className="h4">Ldl Cholesterol Test</span>{" "}
                  <p className="fs-5">
                    Also know as Cholesterol ldi Enzymatic colorimetric Method
                    Blood
                  </p>
                </MDBListGroupItem>
                <MDBListGroupItem className="click">
                  <span className="h4">Hdl Cholesterol Test</span>{" "}
                  <p className="fs-5">
                    Also know as Cholesterol Hdi Enzymatic colorimetric Method
                    Blood
                  </p>
                </MDBListGroupItem>
                <MDBListGroupItem className="click">
                  <span className="h4">Vdl Cholesterol Test</span>{" "}
                  <p className="fs-5">
                    Also know as Cholesterol ldi Enzymatic colorimetric Method
                    Blood
                  </p>
                </MDBListGroupItem>
                <MDBListGroupItem className="click">
                  <span className="h4">Total Cholesterol Test</span>{" "}
                  <p className="fs-5">
                    Also know as Cholesterol ldi Enzymatic colorimetric Method
                    Blood
                  </p>
                </MDBListGroupItem>
                <MDBListGroupItem className="click">
                  <span className="h4">Triglycerides Blood Test</span>{" "}
                  <p className="fs-5">
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
                  className="img "
                  src="https://www.practo.com/tests/public/icons/testprofiles/thyroid_profile.svg"
                  alt=""
                />{" "}
                Thyroid Test
              </MDBCardHeader>
             <MDBListGroup flush>
                <MDBListGroupItem className="click">
                  <span className="h4">Ldl Cholesterol Test</span>{" "}
                  <p className="fs-5">
                    Also know as Cholesterol ldi Enzymatic colorimetric Method
                    Blood
                  </p>
                </MDBListGroupItem>
                <MDBListGroupItem className="click">
                  <span className="h4">Hdl Cholesterol Test</span>{" "}
                  <p className="fs-5">
                    Also know as Cholesterol Hdi Enzymatic colorimetric Method
                    Blood
                  </p>
                </MDBListGroupItem>
                <MDBListGroupItem className="click">
                  <span className="h4">Vdl Cholesterol Test</span>{" "}
                  <p className="fs-5">
                    Also know as Cholesterol ldi Enzymatic colorimetric Method
                    Blood
                  </p>
                </MDBListGroupItem>
                <MDBListGroupItem className="click">
                  <span className="h4">Total Cholesterol Test</span>{" "}
                  <p className="fs-5">
                    Also know as Cholesterol ldi Enzymatic colorimetric Method
                    Blood
                  </p>
                </MDBListGroupItem>
                <MDBListGroupItem className="click">
                  <span className="h4">Triglycerides Blood Test</span>{" "}
                  <p className="fs-5">
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
                  className="img "
                  src="https://www.practo.com/tests/public/icons/testprofiles/pregnancy_test.svg"
                  alt=""
                />{" "}
                Pregnancy test
              </MDBCardHeader>
              <MDBListGroup flush>
                <MDBListGroupItem className="click">
                  <span className="h4">Ldl Cholesterol Test</span>{" "}
                  <p className="fs-5">
                    Also know as Cholesterol ldi Enzymatic colorimetric Method
                    Blood
                  </p>
                </MDBListGroupItem>
                <MDBListGroupItem className="click">
                  <span className="h4">Hdl Cholesterol Test</span>{" "}
                  <p className="fs-5">
                    Also know as Cholesterol Hdi Enzymatic colorimetric Method
                    Blood
                  </p>
                </MDBListGroupItem>
                <MDBListGroupItem className="click">
                  <span className="h4">Vdl Cholesterol Test</span>{" "}
                  <p className="fs-5">
                    Also know as Cholesterol ldi Enzymatic colorimetric Method
                    Blood
                  </p>
                </MDBListGroupItem>
                <MDBListGroupItem className="click">
                  <span className="h4">Total Cholesterol Test</span>{" "}
                  <p className="fs-5">
                    Also know as Cholesterol ldi Enzymatic colorimetric Method
                    Blood
                  </p>
                </MDBListGroupItem>
                <MDBListGroupItem className="click">
                  <span className="h4">Triglycerides Blood Test</span>{" "}
                  <p className="fs-5">
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
