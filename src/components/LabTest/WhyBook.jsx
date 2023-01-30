import React from "react";
import "./WhyBook.css";
import ThousandCarosul from './ThousandCarosul'

const WhyBook = () => {
  return (
    <>
      <div className="row bg-light  mt-5 ">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <h3 class="h2 text-center mt-5 ">
               <b><b>Why book with us?</b></b>
               <p className="borderWhy"></p>
              </h3>
            </div>
          </div>

          <div class="row justify-content-evenly  mt-2 pt-3 pb-3">
          {/* 1 */}
            <div class="col-md-3 text-center mt-2">
              <img
                src="https://www.practo.com/tests/public/icons/home_sample_pickup.png"
                alt=""
              />
              <p className="h5"><b>Home sample collection for FREE</b></p>
              <p className="h6">
                A certified professional will collect your sample from your
                preferred location
              </p>
            </div>

{/* 2 */}
            <div class="col-md-3 text-center mt-2">
              <img
                src="https://www.practo.com/tests/public/icons/e_reports_on_next_day.png"
                alt=""
              />
              <p className="h5"><b>Get digital report within a day</b></p>
              <p className="h6">
                Our labs ensure turn-around-time of 24 hours from specimen
                pickup
              </p>
            </div>

{/* 3 */}
            <div class="col-md-3 text-center mt-2">
              <img
                src="https://www.practo.com/tests/public/icons/offers.png"
                alt=""
              />
              <p className="h5"><b>Offers and affordable prices</b></p>
              <p className="h6">
                Get great discounts and offers on tests and packages.
              </p>
            </div>


          </div>
        </div>
      </div>









      <div className="row mt-5 mb-5">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <h3 class="h2 text-center mt-4 mb-2">
             <b> How it works?</b>
             <p className="borderWhy"></p>
              </h3>
            </div>
          </div>

          <div class="row justify-content-evenly pt-3 pb-3">
          {/* 1 */}
            <div class="col-md-3 text-center mt-3">
              <img
                src="https://www.practo.com/tests/public/icons/icon_lab.svg"
                alt=""
              />
              
              <p className="h6">
              Search for tests and packages and seamlessly book a home sample collection.
              </p>
            </div>

{/* 2 */}
            <div class="col-md-3 text-center mt-3">
              <img
                src="https://www.practo.com/tests/public/icons/icon_doctor.svg"
                alt=""
              />
              
              <p className="h6">
              We will email you the reports. You can also access your reports within your account on the Practo app
              </p>
            </div>

{/* 3 */}
            <div class="col-md-3 text-center mt-3">
              <img
                src="https://www.practo.com/tests/public/icons/icon_records.svg"
                alt=""
              />
              
              <p className="h6">
              We will send a certified professional to your place to assist you with the sample collection
              </p>
            </div>


          </div>
        </div>
      </div>



















      <div className="row bg-light mt-5  ">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <h3 class="h2  text-center mt-5 mb-2">
             <b> We do greats</b>
             <p className="borderWhy"></p>
              </h3>
            </div>
          </div>

          <div class="row justify-content-evenly pt-3 pb-3">
          {/* 1 */}
            <div class="col-md-3 text-center mt-3">
              <img
                src="https://www.practo.com/tests/public/icons/dogreat/user.png?1563954988"
                alt=""
              />
              <p className="h5">15 Million users every month</p>
              
            </div>

{/* 2 */}
            <div class="col-md-3 text-center mt-3">
              <img
                src="https://www.practo.com/tests/public/icons/dogreat/briefcase.png?1563954997"
                alt=""
              />
              <p className="h5">Trusted by 2,00,000 healthcare professionals</p>
              
            </div>

{/* 3 */}
            <div class="col-md-3 text-center mt-3">
              <img
                src="https://www.practo.com/tests/public/icons/dogreat/location.png?1563955004"
                alt=""
              />
              <p className="h5">We serve in 9 cities</p>
              
            </div>


          </div>
        </div>
      </div>

<ThousandCarosul/>
    </>
  );
};

export default WhyBook;
