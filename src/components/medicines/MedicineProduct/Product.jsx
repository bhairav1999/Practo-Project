import React,{useEffect,useState} from 'react'

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Product.css'
import { GrFormPrevious } from "react-icons/gr"
import { MdNavigateNext } from "react-icons/md"

import Section1 from '../Section1/Section1';
import * as Icon from 'react-bootstrap-icons'
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';

function Product() {

  const [product,setProduct]=useState();
  const [filter,setFilter]=useState(product);
 const [loading,setLoading]=useState(false);
 let ComponentMounted=true;
 useEffect( ()=>{
  const getProduct= async()=>{
    setLoading(true);
    const response= await fetch("/alldata/medicines/MedicineProduct.json");
   if(ComponentMounted){
    setProduct(await response.clone().json());
    setFilter(await response.json());
    setLoading(false);
   }
    return () => {
      ComponentMounted = false;
    }
  
   }
getProduct();
},[]);
//---------------------------

const Loading = ()=>{
  return(
    <>
   <div>
    <Skeleton height={200}></Skeleton>
   </div>
    </>
  )
}
//------------------------------

const filterProduct = (cat)=>{
  const updateList= product.filter((x)=>x.category===cat)
  setFilter(updateList);
}


//-----------------
const ShowProducts = ()=>{
  return(
    <>
     <div className='buttons d-flex justify-content-center mb-5'>
      <button className='btn btn-outline-dark me-2' onClick={()=>setFilter(product)}>All</button>
      <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct('Capsules')}>Capsules</button>
      <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct('others')}>others</button>

</div>
    </>
  )
 
}


  //-------------------------------------------------------------

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
//--------------------------------------------------------------
      var settings = { dots: false, infinite: false, speed: 500, slidesToShow: 4,slidesToScroll: 1,initialSlide: 0,
        nextArrow:<SampleNextArrow/>,
        prevArrow:<SamplePrevArrow/>,
     
      };
  //---------------------------------------------------------------------   




  return (
    <>
      <div className='container'>
    <div className='row heading'>
      <p> Popular Products</p>
  </div>

  <div className='row mb-20px '>
    {loading ? <Loading/> : <ShowProducts/>}
        <Slider {...settings}>
          {
           filter &&
            filter.map((e,i)=>{
              return(
                
                <div key={e.pid}>   
                <div className="pcol">
          <div className="pcard card">
          <a href="http://">
          <img src={e.pimage} className="pimage card-img-top" alt="..."/>  </a>
            <div className="card-body">
              <p className='pTitle'>{e.pTitle}</p>
              <h6><Icon.CurrencyRupee/> {e.Prize}</h6>

             <NavLink to={`/SingleProduct/${e.pid}`} className='btn btn-outline-success'>Buy Now</NavLink>
            
            </div>
          </div>
        </div>
      </div>
              )
            })

          }
           </Slider>
        </div>
{/* ----------------------------------------- */}
       
  </div>
  <Section1/>
    </>
  )
}

export default Product;
