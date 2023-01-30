import React from 'react'
import { NavLink } from "react-router-dom";
import './Navbar.css'
import {
  
  MDBNavbarItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
const Navbar = () => {
  return (
    <>


<nav class="navbar navbar-expand-lg shadow mt-1">
  <div class="container  ">

  <div className="logo">
  <NavLink className="nav-link active ms-2 " to="/">
  <img  className='NavLogo me-5' src="https://upload.wikimedia.org/wikipedia/en/6/64/Practo_new_logo.png?20180609150803" alt="practo logo"/>
              </NavLink>
       </div>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
       
        
        <NavLink className="nav-link active ms-2 " to="/FindDocters">
        <b>Find Doctors</b>
              </NavLink>
        <NavLink className="nav-link active ms-2 " to="/Consult">
        <b>Video consult</b>
              </NavLink>
        <NavLink className="nav-link active ms-2 " to="/Header">
       <b> Medicines</b>
              </NavLink>
        <NavLink className="nav-link active ms-2 " to="/LabTestAllComp">
     <b>   Lab Tests</b>
              </NavLink>
        <NavLink className="nav-link active ms-2" to="/Sergeries">
      <b>  Surgeries</b>
              </NavLink>


              <MDBNavbarItem className='navmar'>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
               <b>For Providers</b>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Practo Primes</MDBDropdownItem>
                  <MDBDropdownItem link>Softwares for Providers</MDBDropdownItem>
                  <MDBDropdownItem link>List Your Practice for free</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>


            <MDBNavbarItem >
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
              <b> Security</b>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Data Security</MDBDropdownItem>
                  <MDBDropdownItem link>Help</MDBDropdownItem>
                  
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
              
            <NavLink
            className="btn ms-3 btn-outline-dark my-2 my-sm-0  "
            to="/LoginForm"
         >
            Login
          </NavLink>
          <NavLink
            className="btn btn-outline-dark my-2 my-sm-0 ms-2 ml-3 "
            to="/register"
          >
            Register
          </NavLink>
    </div>
    </div>
  </div>
</nav>












    </>
  )
}

export default Navbar




// import React from 'react'
// import './Navbar.css'
// const Navbar = () => {
//   return (
//     // <div className="container">
//     //   <div className='row'>
//     //     <div className='col sm-12 md-12 lg-12'>
// <div id="navbar">
//        
//         <div className="box">
//             <h4><a href="findDr.html">Find Doctors</a></h4>
           
//         </div>
//         <div className="box">
//             <h4>Video Consult</h4>
//         </div>

//         <div className="box">
//             <h4><a href="medicines.html">Medicines</a></h4>
//         </div>
//         <div className="box">
//             <h4>Lab Tests</h4>
//         </div>
//         <div className="box">
//             <h4>Surgeries</h4>
//         </div>

// <div className="m-auto p-1 d-inline-block">
// <div className="m-auto p-1 d-inline-block">
// <div className="btn-group">
//           <div className='badge'> <span className="badge bg-primary">New</span></div>
//   <button type="button" className="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
//     For Corporates
//   </button>
//   <ul className="dropdown-menu">
//     <li><a className="dropdown-item" href="/">Health and Welness plans</a></li>
//     <li><a className="dropdown-item active" href="/" aria-current="true">Group Insurance</a></li>
//   </ul>
// </div>
// </div>

// <div className="m-auto p-1  d-inline-block">
// <div className="btn-group">
//   <button type="button" className="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
//     For Providers
//   </button>
//   <ul className="dropdown-menu">
//     <li><a className="dropdown-item" href="/">Practo Primes</a></li>
//     <li><a className="dropdown-item " href="/">Softwares for Providers</a></li>
//     <li><a className="dropdown-item" href="/">List Ypur Practice for free</a></li>
//     <li><a className="dropdown-item " href="/" >ABDM</a></li>
//   </ul>
// </div>
// </div>

//  <div className="m-auto  d-inline-block">
//  <div className="btn-group">
//   <button type="button" className="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
//    Security & Help
//   </button>
//   <ul className="dropdown-menu">
//     <li><a className="dropdown-item" href="/">Data Security</a></li>
//     <li><a className="dropdown-item " href="/">Help</a></li>
//   </ul>
// </div>
//   </div>       
// </div>
// <div id="login">
//             <div><a href="login.html">Login</a></div>
//             <div> / </div>
//             <div><a href="register.html">Signup</a></div>
//         </div>
// </div>

//     // </div>
//     // </div>
//     // </div>  
//   )
// }

// export default Navbar