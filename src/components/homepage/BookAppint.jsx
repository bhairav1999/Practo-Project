import React from 'react'
import { GrFormPrevious } from "react-icons/gr"
import { MdNavigateNext } from "react-icons/md"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './BookAppint.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
  } from 'mdb-react-ui-kit';
function SampleNextArrow(props) {
    const { onClick } = props
    return (
        <div className='control-btn' onClick={onClick}>
            <button className='next'>
                <MdNavigateNext className='icon' />
            </button>
        </div>
    )
}

function SamplePrevArrow(props) {
    const { onClick } = props
    return (
        <div className='control-btn' onClick={onClick}>
            <button className='prev'>
                <GrFormPrevious className='icon' />
            </button>
        </div>
    )
}
const BookAppint = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <div className='container mt-5'>
                <p className='h2 mt-5'>Read top articles from health experts </p>
                <div>
      
        <Slider {...settings}>
          <div >
          <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='/assets/img/bookappoint/Book2.jpg' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
      <h4>
          Gynocologist
        </h4>
        <p>Explore for womens health</p>
      </MDBCardBody>
    </MDBCard>
          </div>
          <div>
           <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='/assets/img/bookappoint/BookLast.jpg' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <h4>
          Gastroentrologist
        </h4>
        <p>Explore issues related to dignostic</p>
      </MDBCardBody>
    </MDBCard>
          </div>
          <div>
           <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='/assets/img/bookappoint/Book4.jpg' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
      <h4>
          Physiotherpist
        </h4>
        <p>pulled muscles?</p>
      </MDBCardBody>
    </MDBCard>
          </div>
          <div>
           <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='/assets/img/bookappoint/Book5.jpg' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
      <h4>
         General surgeon
        </h4>
        <p>Need to get operated?</p>
      </MDBCardBody>
    </MDBCard>
          </div>
          <div>
           <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='/assets/img/bookappoint/Book7.jpg' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
      <h4>
          Physiotherpist
        </h4>
        <p>pulled muscles?</p>
      </MDBCardBody>
    </MDBCard>
          </div>
          <div>
           <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='/assets/img/bookappoint/Book8.jpg' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
      <h4>
         General Physician
        </h4>
        <p>Find the right family doctor</p>
      </MDBCardBody>
    </MDBCard>
          </div>
        </Slider>
      </div>
            </div>
        </>

    );
}





export default BookAppint