import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";





const Navbar = () => {
  return (
<div id="navbar">
<div class="logo">
<a class="navbar-brand" href="/">Practo</a>
</div>

<div class="box">

    <Link to="./FindDocters">Find Doctors</Link>
   
</div>

<div class="box">
   
    <Link to="./Consult">Video consult</Link>
</div>

<div class="box">

    <Link to="./Header">Medicines</Link>
    
</div>

<div class="box">
    
    <Link to="./LabTestAllComp">Lab Tests</Link>
</div>

<div class="box">
    
    <Link to="./Sergeries">Surgeries</Link>
</div>

<span>
     <span class="badge bg-primary m-0">new</span>
     <div class="btn-group">
 <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
  For Corporates
 </button>
 <ul class="dropdown-menu">
  <li><a class="dropdown-item" href="#">Regular link</a></li>
   <li><a class="dropdown-item active" href="#" aria-current="true">Active link</a></li>
   <li><a class="dropdown-item" href="#">Another link</a></li>
  </ul>
</div>
<div class="btn-group">
  <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
   For Providers
  </button>
  <ul class="dropdown-menu">
   <li><a class="dropdown-item" href="#">Regular link</a></li>
   <li><a class="dropdown-item active" href="#" aria-current="true">Active link</a></li>
  <li><a class="dropdown-item" href="#">Another link</a></li>
 </ul>
</div>
 <div class="btn-group">
  <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Security & Help
   </button>
   <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Regular link</a></li>
   <li><a class="dropdown-item active" href="#" aria-current="true">Active link</a></li>
<li><a class="dropdown-item" href="#">Another link</a></li>
  </ul>
</div>
<span><a href="">Login/SignUp</a></span>
      </span>
</div>


  )
}

export default Navbar
