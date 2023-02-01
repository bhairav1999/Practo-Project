import React,{useState,useEffect} from 'react'
import'./Header.css'
import BrowserMedicines from '../browserMedicines/BrowserMedicines'
import * as Icon from 'react-bootstrap-icons'

function Header() {


  const [banner, setBanner] =useState([]);
 useEffect( ()=>{
  const getBanner= async()=>{
    const reqData= await fetch("/alldata/medicines/HeaderData.json");
    const resData= await reqData.json();
    console.log(resData);
    setBanner(resData);
  }
getBanner();
 },[]);


  return (
    <>
    <div className='container'>
   {/* header */}
   <div className='row'>
    <img src="/assets/img/header.png" alt="" srcset="" />

   </div>
    {/* Search box */}
    <div className='row'>
    <div className='col-sm-10'>
<form class="nosubmit">
  <input class="nosubmit" type="search" placeholder="Search for medicines, health products and more..."/>
</form>
</div>
{/* Cart button */}
<div className='col-sm-2 '>
<button type="button" class="btn btn-primary btn-sm"><Icon.CartFill></Icon.CartFill>  VIEW CART</button>
</div>
    </div>
    <hr />
    {/* Carousel */}

    <div className='carousel'>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner">
    {/* //____________Map Function___________ */}
  {
    banner.map( (banner, index)=>(
    <div className={ index===0? "carousel-item active":"carousel-item" } key={banner.id }>
      <img src={banner.bimage} className="d-block w-100 bg-info" alt='...'/>
    </div>
    ))
}
   
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
    </div>
    <hr />
    <BrowserMedicines/>
    </>
  )
}

export default Header
