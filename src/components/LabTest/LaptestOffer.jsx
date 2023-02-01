import React, { useEffect, useState } from 'react'
import './LaptestOffer.css'
import SlideBar from './SlideBar'
import { NavLink } from "react-router-dom";
import axios from 'axios';

const LaptestOffer = () => {


const [laboffer ,setlaboffer] =useState([])

useEffect (()=>{
  async function offerdata (){
    const res =await axios.get("./alldata/LabTest/offer.json")

if (res.data.length > 0) {
  setlaboffer(res.data)
  
}

  }
  offerdata()
},[])

  return (
    <>



{}
<div id="carouselExampleControls" className="carousel slide h-100 w-100 mb-5" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <NavLink
            
            to="/TaxServer"
          >
             <img src="./assets/img/LabTestFirstSlider/Carousel_Img1.png" className="d-block w-100" alt="..."/>
          </NavLink>
     
    </div>
    <div className="carousel-item">
      <img src="./assets/img/LabTestFirstSlider/Carousel_Img2.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      

      <NavLink
            
            to="/TaxServer"
          >
            <img src="./assets/img/LabTestFirstSlider/Carousel_Img3.png" className="d-block w-100" alt="..."/>
          </NavLink>
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

<div className="row  mt-5 text-center">
  <div className="col col-sm-12 col-md-12 col-lg-12">
  <img  className="bgcoloOffer" src="./assets/img/LabTestLogo/doctor.png" alt="" />
  </div>
</div>




<SlideBar/>







    </>
  )
}

export default LaptestOffer
