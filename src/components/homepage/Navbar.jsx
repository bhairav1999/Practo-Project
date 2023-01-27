import React from 'react'
import './Navbar.css'

import { Link } from "react-router-dom";





const Navbar = () => {
  return (
    <div className="container1">
<div id="navbar">
<div className="logo">

<Link to="./">Practo</Link>
</div>

<div className="box">

    <Link to="./FindDocters">Find Doctors</Link>
   
</div>

<div className="box">
   
    <Link to="./Consult">Video consult</Link>
</div>

<div className="box">

    <Link to="./Header">Medicines</Link>
    
</div>

<div className="box">
    
    <Link to="./LabTestAllComp">Lab Tests</Link>
</div>

<div className="box">
    
    <Link to="./Sergeries">Surgeries</Link>
</div>

<span>
     <span className="badge bg-primary m-0">new</span>
     <div className="btn-group">
 <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
  For Corporates
 </button>
 <ul className="dropdown-menu">
  <li><a className="dropdown-item" href="#">Regular link</a></li>
   <li><a className="dropdown-item active" href="#" aria-current="true">Active link</a></li>
   <li><a className="dropdown-item" href="#">Another link</a></li>
  </ul>
</div>
<div className="btn-group">
  <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
   For Providers
  </button>
  <ul className="dropdown-menu">
   <li><a className="dropdown-item" href="#">Regular link</a></li>
   <li><a className="dropdown-item active" href="#" aria-current="true">Active link</a></li>
  <li><a className="dropdown-item" href="#">Another link</a></li>
 </ul>
</div>
 <div className="btn-group">
  <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Security & Help
   </button>
   <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Regular link</a></li>
   <li><a className="dropdown-item active" href="#" aria-current="true">Active link</a></li>
<li><a className="dropdown-item" href="#">Another link</a></li>
  </ul>
</div>
<span><a href="">Login/SignUp</a></span>
      </span>
</div>
</div>

  )
}

export default Navbar
