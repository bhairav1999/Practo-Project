import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { json } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
const Departments = () => {
  const[department,setDepartment]=useState([])
  const[ailment,setAilment]=useState([])
   const [lgShow, setLgShow] = useState(false);

useEffect(()=>{
  async function fetchData() {
       const res= await axios.get('./alldata/surgery/departmentsdata.json') 
      
       if(res.data.length>0){
        setDepartment(res.data)
       }
     }
     fetchData();

},[])

const selectAilment=async ()=>{
  const res= await axios.get('./alldata/surgery/ailment.json') 
      
  if(res.data.length>0){
    console.log(res.data)
    const ailmentData = res.data.filter( (ail) => ail.sergeries==="General Sergery")
    
   setAilment(ailmentData)
  }
  setLgShow(true)
}
return (

<div className='container'>

        <div class="row mt-5 rounded border-white-2 border">

      <div className='mt-4 ms-3 mb-3'>
 <h4>Our Departments</h4>
  </div>
 
  {department.map((element,index)=>{
return  <div class="card column1 rounded" onClick={selectAilment}  style={{width:"12rem",border:"none",padding:"30px"}}>
<img src={element.imgpath} class="card-img-top " alt="..." />
<div class="card-body">
  <h5 class="card-title" style={{fontSize:"13px"}}>{element.sergeries}</h5>
  <p class="card-text" style={{fontSize:"12px"}}>{element.ailments}</p>
 
</div>
</div>
  })}
 
 <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-vcenter"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-vcenter">
          Select {ailment.sergeries} Ailment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {ailment.map((ailments,index)=>{
          
return <div>

<img src={ailments.images[0]['imgpath']}  class="imgsize" alt=""/>

<span class="caption">{ailments.sergeries}</span>
</div>
  })}
        </Modal.Body>
      </Modal>
    

        </div>
       
        </div>
  )
}

export default Departments