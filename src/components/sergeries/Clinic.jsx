import React from 'react'
import Slider from "react-slick";
const Clinic = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };
  return (
 <div className='container'>
  <div className='row'>
    <div className='col-12'>
  <div id="demo" class="carousel slide" data-bs-ride="carousel">


  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
  </div>

  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/assets/img/clinic/clinic_image_one.jpg" alt="" class="d-block w-100"/>
    </div>
    <div class="carousel-item">
      <img src="/assets/img/clinic/clinic_image_two.jpg" alt="" class="d-block w-100"/>
    </div>
    <div class="carousel-item">
      <img src="/assets/img/clinic/clinic_image_three.jpg" alt="" class="d-block w-100"/>
    </div>
    <div class="carousel-item">
      <img src="/assets/img/clinic/clinic_image_three.jpg" alt="" class="d-block w-100"/>
    </div>
  </div>


  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
  {/* <div>
        <h2> Our new-age clinics with the latest high-tech equipments</h2>
        <Slider {...settings}>
          <div>
      <img src="/assets/img/clinic/clinic_image_one.jpg" alt="" class="d-block w-100"/>
            <h3></h3>
          </div>
          <div>
      <img src="/assets/img/clinic/clinic_image_one.jpg" alt="" class="d-block w-100"/>
            <h3></h3>
          </div>
          <div>
      <img src="/assets/img/clinic/clinic_image_one.jpg" alt="" class="d-block w-100"/>
            <h3></h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div> */}
</div>

</div>
</div>
  )
}

export default Clinic