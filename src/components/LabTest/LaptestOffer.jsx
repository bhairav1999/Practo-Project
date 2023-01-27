import React from 'react'
import './LaptestOffer.css'
import SlideBar from './SlideBar'

const LaptestOffer = () => {
  return (
    <>
<div id="carouselExampleControls" className="carousel slide h-100 w-100 mb-5" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./assets/img/LabTestFirstSlider/Carousel_Img1.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="./assets/img/LabTestFirstSlider/Carousel_Img2.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="./assets/img/LabTestFirstSlider/Carousel_Img3.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="./assets/img/LabTestFirstSlider/Carousel_Img4.png" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
{/* end crosuel */}


{/* start coll-12 */}

<div className="row bgColor me-2 ">
    <div className="col col-sm-2 col-md-2">
     <img src="https://www.practo.com/tests/public/images/call_to_order.svg" alt="" className='rounded-circle img-fluid mt-3 ms-5'/>
    </div>

    <div className="col col-sm-5 col-md-5  mt-4">
    <p className='h3 fw-bold'>Need help with booking your test?</p>
    <p className='h5'>Our experts are here to help you</p>
    </div>

<div className="col col-sm-2 col-md-2"></div>
    <div className="col col-sm-2 col-md-2 mt-5 h4">
    <i class="bi bi-telephone-fill"></i> +91 8045684087
    </div>
    
</div>

<SlideBar/>







    </>
  )
}

export default LaptestOffer
