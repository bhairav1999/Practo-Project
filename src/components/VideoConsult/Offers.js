import React from "react";
import { Link } from "react-router-dom";

const Offers = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <h3>Offers</h3>
      </div>
      <div class="row mt-3">
        <div
          class="col-md-4  rounded"
          style={{ "background-color": "#96d3bf" }}
        >
          <div className="row">
            <div className="col-8 mt-4 mb-4 ml-4 me-3">
              <h4>Download the app & get ₹200 Health Cash</h4>
              <h6>
                {/* <a
                  href="https://play.google.com/store/apps/details?id=com.practo.fabric&referrer=af_tranid%3DK7yYc6dy5Cfr4-BLwrQVLA%26pid%3Dlandingpage%26c%3DOriginal"
                  style={{ "text-decoration": "none" }}
                > */}
                <div className="text-dark">
                  Download App{" "}
                  <i className="bi bi-arrow-right-circle-fill ml-1"></i>
                </div>
                {/* </a> */}
              </h6>
            </div>
            <div className="col-2 mt-5   ">
              {" "}
              <img
                src="./assets/img/offers/phone.png"
                alt=""
                style={{
                  width: "100px",
                  height: "100px",
                  "margin-top": " 40px",
                }}
              />
            </div>
          </div>
        </div>
        <div
          class="col-md-4 offset-md-4  rounded mt-2"
          style={{ "background-color": "#fce5f4" }}
        >
          {" "}
          <div className="row ">
            <div className="col-8 mt-4 mb-4 ml-4 me-3">
              <h4>Consult with Specialists at just ₹100</h4>
              <h6>
                <div className="text-dark ">
                  <Link
                    to="/Consult-Doctor"
                    style={{ "text-decoration": "none", color: "black" }}
                  >
                    Consult Now
                    <i className="bi bi-arrow-right-circle-fill ml-1"></i>
                  </Link>
                </div>
              </h6>
            </div>
            <div className="col-2 mt-5   ">
              {" "}
              <img
                src="./assets/img/offers/doc.png"
                alt=""
                style={{
                  width: "90px",
                  height: "100px",
                  "margin-top": " 38px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
