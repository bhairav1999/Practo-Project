import React from 'react'

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Product.css'
import { GrFormPrevious } from "react-icons/gr"
import { MdNavigateNext } from "react-icons/md"

import Section1 from '../Section1/Section1';

function Product() {

    function SampleNextArrow(props) {
        const { onClick } = props
        return (
          <div className='control-btn' onClick={onClick}>
            <button className='next'>
              <MdNavigateNext className='icon' />
            </button>
          </div>
        )
      }
      
      function SamplePrevArrow(props) {
        const { onClick } = props
        return (
          <div className='control-btn' onClick={onClick}>
            <button className='prev'>
              <GrFormPrevious className='icon' />
            </button>
          </div>
        )
      }

      var settings = { dots: false, infinite: false, speed: 500, slidesToShow: 4,slidesToScroll: 1,initialSlide: 0,
        nextArrow:<SampleNextArrow/>,
        prevArrow:<SamplePrevArrow/>,
     
        responsive: [
          { breakpoint: 1024,
           settings: {
              slidesToShow: 4, slidesToScroll: 3, infinite: true, dots: true }
          },
          {  breakpoint: 600,
            settings: {slidesToShow: 4,slidesToScroll: 3, initialSlide: 1  }
          },
          {  breakpoint: 480,
            settings: {  slidesToShow:4,  slidesToScroll: 3 }
          }
        ]
      };
     




  return (
    <>
      <div className='container'>
    <div className='heading'>
      <p> Popular Products</p>
  </div>
    <div className='row'>

   
    <Slider {...settings}>

          <div>   
          <div class="col">
    <div class="card">
    <a href="http://">
    <img src="/assets/img/productimg/p1.png" class="card-img-top"  alt="..."/>  </a>
      <div class="card-body">
        <p class="card-text">Zincovit Tablet covid_essential</p>
        <h5 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
</svg> 105.00</h5>
      </div>
    </div>
  </div>
</div>

<div>   
          <div class="col">
    <div class="card">
    <a href="http://">
    <img src="/assets/img/productimg/p2.png" class="card-img-top" alt="..."/>  </a>
      <div class="card-body">
        <p class="card-text">NANO LEO CAPSULES</p>
        <h5 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
</svg> 750.00</h5>
      </div>
    </div>
  </div>
</div>


<div>   
          <div class="col">
    <div class="card">
    <a href="http://">
    <img src="/assets/img/productimg/p3.png" class="card-img-top" alt="..."/>  </a>
      <div class="card-body">
        <p class="card-text">BECOSULES CAPSULE 20 S</p>
        <h5 class="card-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
</svg> 50.20</h5>
      </div>
    </div>
  </div>
</div>


<div>   
          <div class="col">
    <div class="card">
    <a href="http://">
    <img src="/assets/img/productimg/p4.png" class="card-img-top" alt="..."/>  </a>
      <div class="card-body">
        <p class="card-text">PREGA NEWS CARD 1'S</p>
        <h5 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
</svg> 60.00</h5>
      </div>
    </div>
  </div>
</div>

<div>   
          <div class="col">
    <div class="card">
    <a href="http://">
    <img src="/assets/img/productimg/p5.png" class="card-img-top" alt="..."/>  </a>
      <div class="card-body">
        <p class="card-text">SUPRADYN DAILY TABLET 15'S</p>
        <h5 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
</svg> 54.90</h5>
      </div>
    </div>
  </div>
</div>


<div>   
          <div class="col">
    <div class="card">
    <a href="http://">
    <img src="/assets/img/productimg/p6.png" class="card-img-top" alt="..."/>  </a>
      <div class="card-body">
        <p class="card-text">NEROBION FORTE TABLET 30'S</p>
        <h5 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
</svg> 38.10</h5>
      </div>
    </div>
  </div>
</div>


<div>   
          <div class="col">
    <div class="card">
    <a href="http://">
    <img src="/assets/img/productimg/p7.png" class="card-img-top" alt="..."/>  </a>
      <div class="card-body">
        <p class="card-text">SHELAL 500MG TABLET 15'S</p>
        <h5 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
</svg> 119.50</h5>
      </div>
    </div>
  </div>
</div>

<div>   
          <div class="col">
    <div class="card">
    <a href="http://">
    <img src="/assets/img/productimg/p8.png" class="card-img-top" alt="..."/>  </a>
      <div class="card-body">
        <p class="card-text">VICKS VAPORUB 10GM</p>
        <h5 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
</svg> 40.00</h5>
      </div>
    </div>
  </div>
</div>

<div>   
          <div class="col">
    <div class="card">
    <a href="http://">
    <img src="/assets/img/productimg/p9.png" class="card-img-top" alt="..."/>  </a>
      <div class="card-body">
        <p class="card-text">ELECTRAL POWDER <br/>Covid_essential 21.8GM</p>
        <h5 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
</svg> 21.95</h5>
      </div>
    </div>
  </div>
</div>

<div>   
          <div class="col">
    <div class="card">
    <a href="http://">
    <img src="/assets/img/productimg/p10.png" class="card-img-top" alt="..."/>  </a>
      <div class="card-body">
        <p class="card-text">BOOM69 CAPSULES 30'S</p>
        <h5 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
</svg>870.00</h5>
      </div>
    </div>
  </div>
</div>


<div>   
          <div class="col">
    <div class="card">
    <a href="http://">
    <img src="/assets/img/productimg/p11.png" class="card-img-top" alt="..."/>  </a>
      <div class="card-body">
        <p class="card-text">MOOV SPRAY PAIN_CARE 80GM</p>
        <h5 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
</svg> 309.00</h5>
      </div>
    </div>
  </div>
</div>

<div>   
          <div class="col">
    <div class="card">
    <a href="http://">
    <img src="/assets/img/productimg/p12.png" class="card-img-top" alt="..."/>  </a>
      <div class="card-body">
        <p class="card-text">DETTOL ANTISEPTIC LIQUID 250ML</p>
        <h5 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
</svg> 127.77</h5>
      </div>
    </div>
  </div>
</div>

<div>   
          <div class="col">
    <div class="card">
    <a href="http://">
    <img src="/assets/img/productimg/p13.png" class="card-img-top" alt="..."/>  </a>
      <div class="card-body">
        <p class="card-text">SHELCAL XT TABLET 15'S</p>
        <h5 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
</svg> 377.25</h5>
      </div>
    </div>
  </div>
</div>

<div>   
          <div class="col">
    <div class="card">
    <a href="http://">
    <img src="/assets/img/productimg/p14.png" class="card-img-top" alt="..."/>  </a>
      <div class="card-body">
        <p class="card-text">VOLINI SPRY 60ML</p>
        <h5 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
</svg> 208.00</h5>
      </div>
    </div>
  </div>
</div>

<div>   
          <div class="col">
    <div class="card">
    <a href="http://">
    <img src="/assets/img/productimg/p15.png" class="card-img-top" alt="..."/>  </a>
      <div class="card-body">
        <p class="card-text">KOFLET SYRUP 100ML</p>
        <h5 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
</svg> 100.00</h5>
      </div>
    </div>
  </div>
</div>

<div>   
          <div class="col">
    <div class="card">
    <a href="http://">
    <img src="/assets/img/productimg/p16.png" class="card-img-top" alt="..."/>  </a>
      <div class="card-body">
        <p class="card-text">KAMASUTRA CONDOMS DOTTED SEXUAL_WELLNESS 12'S</p>
        <h5 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
</svg> 120.00</h5>
      </div>
    </div>
  </div>
</div>

<div>   
          <div class="col">
    <div class="card">
    <a href="http://">
    <img src="/assets/img/productimg/p17.png" class="card-img-top" alt="..."/>  </a>
      <div class="card-body">
        <p class="card-text">RETRAFOL PLUS TABLET 10'S</p>
        <h5 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
</svg> 218.00</h5>
      </div>
    </div>
  </div>
</div>

<div>   
          <div class="col">
    <div class="card">
    <a href="http://">
    <img src="/assets/img/productimg/p18.png" class="card-img-top" alt="..."/>  </a>
      <div class="card-body">
        <p class="card-text">PUDIN HARA CAPSULES 10'S</p>
        <h5 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
</svg> 30.00</h5>
      </div>
    </div>
  </div>
</div>

<div>   
          <div class="col">
    <div class="card">
    <a href="http://">
    <img src="/assets/img/productimg/P19.PNG" class="card-img-top" alt="..."/>  </a>
      <div class="card-body">
        <p class="card-text">SHELCAL HD TABLET 15'S</p>
        <h5 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
</svg> 124.95</h5>
      </div>
    </div>
  </div>
</div>

<div>   
          <div class="col">
    <div class="card">
    <a href="http://">
    <img src="/assets/img/productimg/p20.png" class="card-img-top" alt="..."/>  </a>
      <div class="card-body">
        <p class="card-text">SCALPE+ SHAMPOO 75ML</p>
        <h5 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
</svg> 280.00</h5>
      </div>
    </div>
  </div>
</div>

<div>   
          <div class="col">
    <div class="card">
    <a href="http://">
    <img src="/assets/img/productimg/p21.png" class="card-img-top" alt="..."/>  </a>
      <div class="card-body">
        <p class="card-text">KERABOOST TABLET 10'S</p>
        <h5 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
</svg> 191.00</h5>
      </div>
    </div>
  </div>
</div>

<div>   
          <div class="col">
    <div class="card">
    <a href="http://">
    <img src="/assets/img/productimg/p22.png" class="card-img-top" alt="..."/>  </a>
      <div class="card-body">
        <p class="card-text">HAIRBLESS TABLET 10'S</p>
        <h5 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
</svg> 215.00</h5>
      </div>
    </div>
  </div>
</div>

{/* ----------------------------------------- */}
          
        </Slider>

    </div>
  </div>
  <Section1/>
    </>
  )
}

export default Product;
