import React from "react";
import "./DownlodPracto.css";
import Distr from './Distr'
import {
    MDBInputGroup,
  } from 'mdb-react-ui-kit';

const DownlodPracto = () => {
  return (
    <>
      <div class="row  bg-light  mt-5">
        <div className="container  ">
          <div className="row justify-content-evenly">
            <div class="col-md-3 mt-4 ms-5">
              <img
                className="img2 ms-5 "
                src="https://www.practo.com/tests/public/images/dweb_app_download.png"
                alt=""
              />
            </div>

            <div class="col-md-5 me-5 mt-5">
              <span className="h1 fw-bold mt-5">Download the Practo app</span>
              <p className="h4 mt-2">Your home for health is one tap away.</p>
              <p className="fs-6 mt-2">
                Book appointments, Order health products, Consult with a doctor
                online, Book health checkups, store health records & read health
                tips
                
              </p>
             
              <div className="h6  mt-4"><b>Send the link to download the app</b></div>
              <MDBInputGroup textBefore='+91' className='mb-5'>
              
        <input className='form-control' type='numb' placeholder="Enter Your Number" />
        <button class="btn btn-outline-dark fw-bold btn-info ms-3 " type="button" id="button-addon2">Send App Link</button>
      </MDBInputGroup>
                <div className="mt-1"><img className="ms-3" src="https://www.practo.com/tests/public/images/google_play.svg?v=1232" alt="" />   <img src="https://www.practo.com/tests/public/images/app_store.svg?v=434" alt="" /></div>
            </div>
          </div>
        </div>
      </div>
      <Distr/>
    </>
  );
};

export default DownlodPracto;
