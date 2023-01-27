import React from 'react'

const Clinic = () => {
  return (
 <div className='container'>
  <div className='row'>
    <div className='col-8'>
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
</div>
<div className='col-4'>

</div>
</div>
</div>
  )
}

export default Clinic