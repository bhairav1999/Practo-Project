import React from "react";
import "./ThousandCarosul.css";
import DownlodPracto from './DownlodPracto'

const ThousandCarosul = () => {
  return (
    <>
      <div class="container-fluid">
        <div class="row mb-5">
          <div class="col-12">
            <h3 class="display- fw-bold text-center mt-7 mb-2">
              Thousands of Happy Customers
            </h3>
          </div>
        </div>
        <div
          id="carouselExampleDark"
          class="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <ol class="carousel-indicators mb-6">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </ol>
          <div class="carousel-inner mt-5 ">
            <div class="carousel-item">
              <div id="carousel">
                <p className="fs-3">
                  "Very professional phlebo. Excellent job in collecting the
                  sample. No pain at all. Got my report also within 24 hours."
                </p>

                <p className="fs-5">Malathi</p>
              </div>
            </div>
            <div class="carousel-item">
              <div id="carousel">
                <p className="fs-3">
                  "Everything went very well and smoothly. Technician was right
                  on time. Really happy with the service."
                </p>

                <p className="fs-5">Ashish Garnaik</p>
              </div>
            </div>
            <div class="carousel-item active">
              <div id="carousel">
                <p className="fs-3">
                  "Good service, Practo is avoiding to stand in que for health
                  checkup."
                </p>

                <p className="fs-5">Lalita Hegde</p>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselWithIndicators"
            role="button"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselWithIndicators"
            role="button"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </a>
        </div>
      </div>
      <DownlodPracto/>
    </>
  );
};

export default ThousandCarosul;
