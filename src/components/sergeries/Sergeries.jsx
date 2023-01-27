import React,{useState,useEffect} from 'react'
import axios from 'axios'
import sergery from "./sergery.css"
import BookConsultation from "./BookConsultation"
import Departments from "./Departments"
import PractoCareBenefit from "./PractoCareBenefit"
import EndtoEndCare from "./EndtoEndCare"
import Clinic from './Clinic'
import Image from "react-bootstrap/Image";
import HowItWorks from "./HowItWorks"
import KnowMore from './KnowMore'
const Sergeries = () => {
  const[sergery,setSergery]=useState([])


  useEffect(()=>{
    async function fetchData() {
         const res= await axios.get('./alldata/popularsergeries.json') 
        
         if(res.data.length>0){
          setSergery(res.data)
         }
       }
       fetchData();
  
  },[])
  return (
    <>
       <header></header>
    <div class="container position-relative">
   <div className='row position-relative'>
<img className="img-fluid" style={{marginTop:"20px"}} src="/assets/img/psergeries/sergery_banner.png" alt='Sergery'/>

</div>
<div className='row mt-5 position-relative'>
<h5>We are experts in Surgical solutions for 50+ ailments.</h5>
</div>
<div class="row mt-3 position-relative">
    <div class="col-7  rounded border-white-2 border position-relative" >
      <div className='mt-4 ms-3 mb-3'>
 <h6>Popular Sergeries</h6>
  </div>
 


  {sergery.map((element,index)=>{
return  <div class="column ms-4">
<img src={element.imgpath}  class="imgsize" alt=""/>

<span class="caption">{element.sergery_name}</span>
</div>
  })}
 
  
     
   
    </div>
    <div className='col-1'>

    </div>
    <div class="col-4 position-sticky backgrount-attachment-fixed shadow-lg p-3 ml-3 bg-body rounded">

        
        <BookConsultation/>
      
    </div>
  </div>

</div>

<Departments/>
<hr class="rounded mt-5"></hr> 
<Clinic/>
<hr class="rounded mt-3"></hr>
<PractoCareBenefit/>
<hr class="rounded mt-5"></hr>
<EndtoEndCare/>
<HowItWorks/>
<hr class="rounded mt-5"></hr>
<KnowMore/>
<footer></footer>
   </>     
   
  )
}

export default Sergeries