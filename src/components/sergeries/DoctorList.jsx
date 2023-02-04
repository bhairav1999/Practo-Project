import { elementAcceptingRef } from '@mui/utils'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const DoctorList = () => {

const[doctors,setDoctors]=useState([])
const location=useLocation();

  useEffect(()=>{
    async function fetchData() {
         const res= await axios.get('./alldata/surgery/drdetails.json') 
        console.log(res.data)
         if(res.data.length>0){
         

          const drData = res.data.filter( (dr) => dr.city===location.state.city && dr.speciality==location.state.speciality)
          setDoctors(drData)

          console.log(drData)
         }
       }
       fetchData();
  
  },[])

  return (
    <div className='container mt-5'>
      <h4>{doctors.length} doctors available in {location.state.city}</h4>
<p>Book appointments with minimum wait-time & verified doctor details</p>
<hr />
     {doctors.map((doctor)=>{
      return   <div class="card mb-3" style={{"border":"none"}}>
      
     
      <div class="row g-0">
        <div class="col-md-4">
      
          <img src={doctor.imgpath} class="img-fluid" alt="..." style={{"borderRadius":"50%","width":"30%"}}/>
        </div>
        <div class="col-md-4">
          <div class="card-body">
            <h5 class="card-title">{doctor.dr_name}</h5>
            <p class="card-text">{doctor.speciality}</p>
            <p class="card-text">{doctor.hospital_name}</p>
            <p class="card-text">{doctor.experience}</p>
            <p class="card-text">{doctor.address}</p>
            <p class="card-text">{doctor.consultation_fee}</p>
            
          </div>
        </div>
        <div class="col-md-4">
       
            
         <b style={{"color":"green","textAlign":"center"}}>Available Today</b>
         <div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Book Clinic Visit
  <br /><small>No Booking Fee</small>
  </button>
  <button type="button" class="btn btn-outline-info">Video Consult</button>  
</div>   

          </div>
      </div>

      <hr/>

    </div>
     })}
       
   
     
    </div>
  )
}

export default DoctorList