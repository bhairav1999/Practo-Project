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
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const Sergeries = () => {
  const[sergery,setSergery]=useState([])
  const [show, setShow] = useState(false);
  const[city,setCity]=useState([])
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const[cityname,setCityName]=useState("")
  
  const[name,setName]=useState("")
  const[mobileno,setMobileNo]=useState("")
 
  const selectcity=async()=>{
    const res=await axios.get("./alldata/surgery/cities.json")
    setCity(res.data)
   
  }
  useEffect(()=>{
    async function fetchData() {
         const res= await axios.get('./alldata/surgery/popularsergeries.json') 
        
         if(res.data.length>0){
          setSergery(res.data)
         }
       }
       fetchData();
  
  },[])
  const onSubmit=(e)=>{
    alert(`City:${cityname},Name:${name},MobileNO:${mobileno}`)
    e.preventDefault();
  }
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
<img src={element.imgpath}  class="imgsize" alt="" onClick={handleShow}/>

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


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{"fontSize":"15px"}}>Book an appointment for Kidney Stone with our expert surgeon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       
      <form onSubmit={onSubmit}>


<div class="mb-3 mt-3">
  <input type="text" class="form-control form-control-lg" value={name} onChange={e=>setName(e.target.value)} placeholder="Name*"/>
</div>
<div class="mb-3 mt-3">
  <input type="text" class="form-control form-control-lg" value={mobileno} onChange={e=>setMobileNo(e.target.value)} placeholder="Contact Number*"/>
</div>
<div class="mb-3 mt-3">
<select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onClick={selectcity} onChange={e=>setCityName(e.target.value)}>
 <option selected>Select City</option> 
{city.map((cities,index)=>{
return <option value={cities.city_name}>{cities.city_name}</option>
})}


</select>
</div>
<div class="d-grid gap-2">
<button class="btn btn-primary" type="submit">Book Appointment</button>
<span style={{display:"block",fontSize:"10px",textAlign:"center"}}>By submitting the form, you agree to Practo's  T&C</span>
</div>



</form>
        </Modal.Body>
     
      </Modal>
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