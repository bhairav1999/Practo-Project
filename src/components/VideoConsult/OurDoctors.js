import React from "react";

const OurDoctors = () => {
  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className=" col-12 text-center ">
            <h3>How it works</h3>
          </div>
          <div className="col-12 text-center mt-5">
            <img
              className="img-fluid ml-3"
              src="./assets/img/OurDoc/process.JPG"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div class="row justify-content-center mt-5 mb-5 bg-dark">
          <div class="col-2 text-white text-center mt-4 mb-4">
            <span>
              <h3>2,00,000+</h3>
            </span>
            <span>Happy Users</span>
          </div>
          <div class="col-2 text-white text-center mt-4 mb-4">
            {" "}
            <span>
              <h3>20,000+</h3>
            </span>
            <span>Verified Doctors</span>
          </div>
          <div class="col-2 text-white text-center mt-4 mb-4">
            {" "}
            <span>
              <h3>25+</h3>
            </span>
            <span>Specialities</span>
          </div>
          <div class="col-2 text-white text-center mt-4 mb-4">
            {" "}
            <span>
              <h3>4.5 / 5</h3>
            </span>
            <span>App Rating</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDoctors;
