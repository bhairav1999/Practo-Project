import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
import './Footer.css'
export default function Footer() {
  return (
    <MDBFooter bgColor className='text-white text-center text-lg-left bgColor'>
      <MDBContainer className='p-4'>
        <MDBRow>
           
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0 mt-5'>
            <h5 className='text-uppercase'>Practo</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='/' className='text-white'>
                About
                </a>
              </li>
              <li>
                <a href='/' className='text-white'>
                Blog
                </a>
              </li>
              <li>
                <a href='/' className='text-white'>
                Career
                </a>
              </li>
              <li>
                <a href='/' className='text-white'>
                Press
                </a>
              </li>
              <li>
                <a href='/' className='text-white'>
                Contact Us
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0 mt-5'>
            <h5 className='text-uppercase'>For Patients</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='/' className='text-white'>
                Search for doctors
                </a>
              </li>
              <li>
                <a href='/' className='text-white'>
                Search for clinics
                </a>
              </li>
              <li>
                <a href='/' className='text-white'>
                search for hospital
                </a>
              </li>
              <li>
                <a href='/' className='text-white'>
                Book Diagnostic Tests
                </a>
              </li>
              <li>
                <a href='/' className='text-white'>
                Health app
                </a>
              </li>
            </ul>
          </MDBCol>
          
         

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0 mt-5'>
            <h5 className='text-uppercase'>For hospitals</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='/' className='text-white'>
                Insta by Practo
                </a>
              </li>
              <li>
                <a href='/' className='text-white'>
                Qikwell by Practo
                </a>
              </li>
              <li>
                <a href='/' className='text-white'>
                Practo Profile
                </a>
              </li>
              <li>
                <a href='/' className='text-white'>
                Practo Reach
                </a>
              </li>
              <li>
                <a href='/' className='text-white'>
                Practo Drive
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0 mt-5'>
            <h5 className='text-uppercase mb-0'>Social</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='/' className='text-white'>
                Facebook
                </a>
              </li>
              <li>
                <a href='/' className='text-white'>
                Twitter
                </a>
              </li>
              <li>
                <a href='/' className='text-white'>
                Linkden
                </a>
              </li>
              <li>
                <a href='/' className='text-white'>
                Youtube
                </a>
              </li>
              <li>
                <a href='/' className='text-white'>
                Github
                </a>
              </li>
            </ul>
          </MDBCol>

          
        </MDBRow>
      </MDBContainer>
      <div className='text-center p-3 mt-5'>
      <div><img src="https://www.practostatic.com/web-assets/images/white_practo_logo.svg" alt=""/></div>
        <div id="copy">
            <p>Copyright © 2023, Practo. All rights reserved.</p>
        </div>
      </div>
      {/* <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white' href='https://www.practo.com/'>
          MDBootstrap.com
        </a>
      </div> */}
    </MDBFooter>
  );
}