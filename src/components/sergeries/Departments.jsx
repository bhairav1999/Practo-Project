import React, { useEffect, useState } from 'react'
//import allinfodata from "/alldata/allinfodata"
import axios from 'axios'
import { json } from 'react-router-dom'
const Departments = () => {
  const[department,setDepartment]=useState([])


useEffect(()=>{
  async function fetchData() {
       const res= await axios.get('./alldata/departmentsdata.json') 
      
       if(res.data.length>0){
        setDepartment(res.data)
       }
     }
     fetchData();

},[])
return (

<div className='container'>

        <div class="row mt-5 rounded border-white-2 border">

      <div className='mt-4 ms-3 mb-3'>
 <h4>Our Departments</h4>
  </div>
 
  {department.map((element,index)=>{
return  <div class="card column1 rounded"  style={{width:"12rem",border:"none",padding:"30px"}}>
<img src={element.imgpath} class="card-img-top " alt="..."/>
<div class="card-body">
  <h5 class="card-title" style={{fontSize:"13px"}}>{element.sergeries}</h5>
  <p class="card-text" style={{fontSize:"12px"}}>{element.ailments}</p>
 
</div>
</div>
  })}
 
   
    

        </div>
       
        </div>
  )
}

export default Departments