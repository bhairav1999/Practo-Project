import React from "react";
import "./DownlodPracto.css";
import Distr from './Distr'
import {
    MDBInputGroup,
  } from 'mdb-react-ui-kit';

const DownlodPracto = () => {
  return (
    <>
      <div class="row  grayColor shadow ">
        <div className="container  ">
          <div className="row justify-content-evenly">
            <div class="col-md-5 mt-2">
              <img
                className="img2 "
                src="https://www.practo.com/tests/public/images/dweb_app_download.png"
                alt=""
              />
            </div>

            <div class="col-md-5 mt-5 mt-8">
              <span className="display-6 fw-bold mt-8">Download the Practo app</span>
              <p className="h3 mt-3">Your home for health is one tap away.</p>
              <p className="fs-5 mt-4">
                Book appointments, Order health products, Consult with a doctor
                online, Book health checkups, store health records & read health
                tips
                
              </p>
             
              <span className="h3  mt-5">Send the link to download the app</span>
              <MDBInputGroup textBefore='+91' className='mb-3 mt-5'>
              
        <input className='form-control' type='numb' placeholder="Enter Your Number" />
        <button class="btn btn-outline-dark fw-bold btn-info ms-3 " type="button" id="button-addon2">Send App Link</button>
      </MDBInputGroup>
                <div className="mt-5"><img className="ms-3" src="https://www.practo.com/tests/public/images/google_play.svg?v=1232" alt="" />   <img src="https://www.practo.com/tests/public/images/app_store.svg?v=434" alt="" /></div>
            </div>
          </div>
        </div>
      </div>
      <Distr/>
    </>
  );
};

export default DownlodPracto;
