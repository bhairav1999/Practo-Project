
import React,{useEffect,useState} from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './BrowserMedicines.css'
import { GrFormPrevious } from "react-icons/gr"
import { MdNavigateNext } from "react-icons/md"

import Product from '../MedicineProduct/Product';

//________________________________________________________


function BrowserMedicines() {
  
  const [health, setHealth] =useState();
  const [categories,setCategories]=useState()
 useEffect( ()=>{
  const getBanner= async()=>{
    const reqData1= await fetch("/alldata/medicines/BrowserMedicinesHealthCond.json");
    const resData1= await reqData1.json();
    console.log(resData1);
    setHealth(resData1);
  }
getBanner();

const getCondiations= async()=>{
  const CondData= await fetch("/alldata/medicines/BrowserMedicinesCategoriesdata.json");
  const CondresData= await CondData.json();
  console.log(CondresData);
  setCategories(CondresData);
}
getCondiations();

 },[]);


//---------Sliderbutton-------------
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

//---------------------------------------------


//!Health Condiations-----------------------------------------------
  var settings = { dots: false, infinite: false, speed: 500, slidesToShow: 4,slidesToScroll: 1,initialSlide: 0,
    nextArrow:<SampleNextArrow/>,
    prevArrow:<SamplePrevArrow/>,
  };
 
  return (
    <>
      <div className='container'>
        <div className='heading'>
          <h4>Browser medicines & health products</h4>
          <p> Health Condiation</p>
        </div>

        <div className='row '>
        <Slider {...settings}>
          {
            health &&
            health.map((e,index)=>{
              return(
                <div key={e.id}>
                <a href="http://">
                  <img src={e.bimage} class="imageResponsive" alt="..." /></a>
              </div>
              )
            })

          }
           </Slider>
        </div>
      </div>
      {/* //-------------------------------------------------------------------------- */}


      {/* //!Catagories--------------------------------------------------- */}
      <div className='container'>
        <div className='heading'>
          <p> Categories</p>
        </div>
        <div className='row'>

        <Slider {...settings}>
          {
            categories &&
            categories.map((e,index)=>{
              return(
                <div key={e.id}>
                <a href="http://">
                  <img src={e.cimage} class="imageResponsive" alt="..." /></a>
              </div>
              )
            })

          }
           </Slider>
        </div>
      </div>

      <Product />
    </>
  )
}

export default BrowserMedicines;

//________________________________________________________________________________________

