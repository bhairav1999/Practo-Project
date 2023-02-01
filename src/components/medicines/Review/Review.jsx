import React,{useEffect,useState} from 'react'
import './Review.css'
import AppDownload from '../AppDownload/AppDownload'
function Review() {

  const [review, setReview] =useState([]);
  useEffect( ()=>{
   const getReview= async()=>{
     const reqReview= await fetch("/alldata/medicines/MedicinesReview.json");
     const resReview= await  reqReview.json();
     console.log( resReview);
     setReview( resReview);
   }
   getReview();
  },[]);

  return (
    <>
    <div className="container">
	<div className="row">

    <div className="col-md-10 sm-3 col-center m-auto">
    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>

  {/* //__________________________________________________________  */}
  <div class="carousel-inner team reviewContent justify-content-center">
  {
    review.map( (e, index)=>(
    <div className={ index===0? "carousel-item active":"carousel-item" } key={e.id }> 
  <h3>{e.Heading}</h3>
    <div class="col-md-6  col-center m-auto team_member">
    <p className='paragraph'>{e.paragraph}</p>
      <div className='row content'>
        <div class="col-md-2  team_img">
        <img src={e.Rimage} alt="Team_image"/>
      </div>
      <div class="col-md-5 ">
        <h6>{e.viewerName}</h6> 
        <p className='clock'>{e.ReviewTime}</p>
      </div>
      </div>
    </div>
    </div>
    ))
}
 </div>

{/* //_________________________________________________________ */}

  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
	</div>
</div>
<hr />
<AppDownload/>
    </>
  )
}

export default Review


