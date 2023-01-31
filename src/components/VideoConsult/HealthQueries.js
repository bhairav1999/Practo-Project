import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HealthQueries = () => {
  return (
    <div>
      <div className="container justify-content-evenly">
        <div className="row ">
          <h3>Health Queries</h3>
        </div>
        <div className="row mt-5">
          <div class="col-md-4  ">
            <span className="">
              <span class="border border-white  ">
                <b>Anxiety & No proper sleep</b>
              </span>
              <span className="ml-5">10 Views</span> <br></br>
              <span className="">
                I am going through anxiety from past 2.5 months but from past 3
                weeks feeling be..
              </span>
            </span>
          </div>
          <div class="col-md-4  ">
            <span class="border border-white ">
              <b>Erectile disfunction</b>
            </span>
            <span className="ml-5">18 Views</span> <br></br>
            <span className="">
              I'm suffering Erectile disfunction any treatment.im newly married
              person.peroble...
            </span>
          </div>
          <div class="col-md-4 ">
            <span class="border border-white ">
              <b>No periods after meprate</b>
            </span>
            <span className="ml-5">12 Views</span> <br></br>
            <span className="">
              I've had pcos since 7 yrs and I've all symptoms like hairfall,
              hirsutism, acne.....
            </span>
          </div>
          <div class="col-md-4 mt-4 ">
            <span class="border border-white ">
              <b>Trying to conceive</b>
            </span>
            <span className="ml-5">15 Views</span> <br></br>
            <span className="">
              I'm 29 years old, BMI 27. I've been trying to conceive for the
              last 6-7 months. ...
            </span>
          </div>
          <div class="col-md-4 mt-4 ">
            <span class="border border-white ">
              <b>SWEATY PALMS</b>
            </span>
            <span className="ml-5">16 Views</span> <br></br>
            <span className="">
              I have sweaty palms and feet problem . Generally, i don't have
              very much issue b...
            </span>
          </div>
          <div class="col-md-4 mt-4 ">
            <span class="border border-white ">
              <b>Blood Blister in Mouth???</b>
            </span>
            <span className="ml-5">24 Views</span> <br></br>
            <span className="">
              I had mouth blood blister in mouth only one in right side cheek
              same place one b...
            </span>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-dark text-white mt-5 mb-5">
        <div className="container">
          <div className="row ">
            <div className="col-8 mt-5 mb-5 ">
              <h3>Still delaying your health concerns ?</h3>
              <h6 className="mt-4">Connect with India's top doctors online</h6>
            </div>
            <div className="col-2 mt-5 ">
              <Link to="/Consult-Doctor">
                <Button type="button" class="  btn btn-lg btn-primary ">
                  {" "}
                  Consult Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthQueries;
