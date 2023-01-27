import React from 'react'
import './WhatCoursal.css'
const WhatCoursal = () => {
  return (
    <div className='container'>
<div id="carouselWithIndicators" class="carousel slide" data-bs-ride="carousel">
  <ol class="carousel-indicators">
    <li data-bs-target="#carouselWithIndicators" data-bs-slide-to="0" class=""></li>
    <li data-bs-target="#carouselWithIndicators" data-bs-slide-to="1" class=""></li>
    <li data-bs-target="#carouselWithIndicators" data-bs-slide-to="2" class="active" aria-current="true"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item">
    <div id="carousel">
        <h1>What our users have to say</h1>
        <p>Very helpful. Far easier than doing same things on computer. Allow quick and easy search with speedybooking.
            Even maintains history of Doctors visited</p>
        <h5>Amit Sharma</h5>
    </div>
    </div>
    <div class="carousel-item">
    <div id="carousel">
        <h1>What our users have to say</h1>
        <p>Very helpful. Far easier than doing same things on computer. Allow quick and easy search with speedybooking.
            Even maintains history of Doctors visited</p>
        <h5>Amit Sharma</h5>
    </div>
    </div>
    <div class="carousel-item active">
    <div id="carousel">
        <h1>What our users have to say</h1>
        <p>Very helpful. Far easier than doing same things on computer. Allow quick and easy search with speedybooking.
            Even maintains history of Doctors visited</p>
        <h5>Amit Sharma</h5>
    </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselWithIndicators" role="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselWithIndicators" role="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </a>
</div>
    </div>
  )
}

export default WhatCoursal
