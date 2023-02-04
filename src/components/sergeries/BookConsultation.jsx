import axios from 'axios'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
const BookConsultation = () => {
  const[city,setCity]=useState([])
  const[ailment,setAilment]=useState([])

  const[cityname,setCityName]=useState("")
  const[ailmentname,setAilmentName]=useState("")
  const[name,setName]=useState("")
  const[mobileno,setMobileNo]=useState("")
 
  const selectcity=async()=>{
    const res=await axios.get("./alldata/surgery/cities.json")
    setCity(res.data)
   
  }
  const selectAilment=async ()=>{
  const res= await axios.get('./alldata/surgery/selectailment.json') 
      
  if(res.data.length>0){
    console.log(res.data)
   setAilment(res.data)
  }

}

const onSubmit=(e)=>{
  alert(`City:${cityname},Ailment:${ailmentname},Name:${name},MobileNO:${mobileno}`)
  e.preventDefault();
}
  return (
    <div class="">
        <h4>Book your consultation today</h4>
      
        <form onSubmit={onSubmit}>
  <div class="mb-3 mt-3">
  <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onClick={selectcity} onChange={e=>setCityName(e.target.value)}>
   <option selected>Select City</option> 
  {city.map((cities,index)=>{
return <option value={cities.city_name}>{cities.city_name}</option>
  })}
  

</select>
  </div>
 
  <div class="mb-3">
  <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onClick={selectAilment} onChange={e=>setAilmentName(e.target.value)}>
  <option selected>Select Ailment*</option>
  {ailment.map((ailments,index)=>{
return <option value={ailments.ailment_name}>{ailments.ailment_name}</option>
  })}
</select>
  </div>
  <div class="mb-3 mt-3">
    <input type="text" class="form-control form-control-lg" value={name} onChange={e=>setName(e.target.value)} placeholder="Name*"/>
  </div>
  <div class="mb-3 mt-3">
    <input type="text" class="form-control form-control-lg" value={mobileno} onChange={e=>setMobileNo(e.target.value)} placeholder="Contact Number*"/>
  </div>
  
  <div class="d-grid gap-2">
  <button class="btn btn-primary" type="submit">Book Appointment</button>
 <span style={{display:"block",fontSize:"10px",textAlign:"center"}}>By submitting the form, you agree to Practo's  T&C</span>
</div>



</form>

</div>

    
  )
}

export default BookConsultation