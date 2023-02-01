// import React from 'react'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { GrFormPrevious } from "react-icons/gr";
// import { MdNavigateNext } from "react-icons/md";
// import '../css/slider.css'
// import jd from '../db.json'

// function SampleNextArrow(props) {
//     const { onClick } = props;
//     return (
//         <div className="control-btn" onClick={onClick}>
//             <button className="next">
//                 <MdNavigateNext className="icon" />
//             </button>
//         </div>
//     );
// }
// function SamplePrevArrow(props) {
//     const { onClick } = props;
//     return (
//         <div className="control-btn" onClick={onClick}>
//             <button className="prev">
//                 <GrFormPrevious className="icon" />
//             </button>
//         </div>
//     );
// }
// const Slider2 = () => {

//     const a = jd;
//     const c = a.filter((e) => e.id > 9)

//     var settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         nextArrow: <SampleNextArrow />,
//         prevArrow: <SamplePrevArrow />,
//         responsive: [
//             {
//                 breakpoint: 800,
//                 settings: {
//                     slidesToShow: 4,
//                     slidesToScroll: 1,
//                 },
//             },
//         ],
//     };

//     return (
//         <div className='container mt-5'>
//             <Slider {...settings} >
//                 {c.map((e, i) => {
//                     return (
//                         <div key={i} class="card col-4" >
//                             <img src={e.image} class="card-img-top" height='350px' alt="..." />
//                             <div class="card-body">
//                                 <h5 class="card-title">{e.title}</h5>
//                                 <p class="card-text">{e.body}</p>
//                                 <a href="#" class="btn btn-primary">Go somewhere</a>
//                             </div>
//                         </div>
//                     )

//                 })}
//             </Slider>
//         </div>
//     )
// }

// export default Slider2


// <div>
//             <MDBCard>
//               <MDBCardImage
//                 className="shadow1"
//                 position="top"
//                 alt="..."
//                 src="https://images1-fabric.practo.com/dx/labs/PRL-VDHC/logo.jpg/360x240"
//               />
//               <MDBCardBody>
//                 <MDBCardTitle className="h5 ">
//                   Basic Womer Health Checkup
//                 </MDBCardTitle>
//                 <MDBCardText className="fs-6">
//                   Ideal for individuals aged 15-40 years
//                 </MDBCardText>
//                 <MDBCardText className="h6 mb-4">85 tests included</MDBCardText>
//               </MDBCardBody>

//               <MDBCardFooter background="transparent">
//                 <div className="">
//                   <span className="h5 fw-bold">₹1099 </span>
//                   <strike className="h6 text-muted">₹1400</strike>{" "}
//                   <span className="text-success  h6">22% off</span>{" "}
//                   <span>
//                     <button
//                       type="button"
//                       className="btn btn-info fw-bold ms-3 mt-3 h6"
//                     >
//                       Book Now
//                     </button>
//                   </span>
//                 </div>
//               </MDBCardFooter>
//             </MDBCard>
//           </div>

//           <div>
//             <MDBCard>
//               <MDBCardImage
//                 className="shadow1"
//                 position="top"
//                 alt="..."
//                 src="https://images1-fabric.practo.com/dx/labs/PRL-YIHC/logo_0gMZNaj.jpg/360x240"
//               />
//               <MDBCardBody>
//                 <MDBCardTitle className="h5 ">
//                   Basic Womer Health Checkup
//                 </MDBCardTitle>
//                 <MDBCardText className="fs-6">
//                   Ideal for individuals aged 15-40 years
//                 </MDBCardText>
//                 <MDBCardText className="h6 mb-4">85 tests included</MDBCardText>
//               </MDBCardBody>

//               <MDBCardFooter background="transparent">
//                 <div className="">
//                   <span className="h5 fw-bold">₹1099 </span>
//                   <strike className="h6 text-muted">₹1400</strike>{" "}
//                   <span className="text-success  h6">22% off</span>{" "}
//                   <span>
//                     <button
//                       type="button"
//                       className="btn btn-info fw-bold ms-3 mt-3 h6"
//                     >
//                       Book Now
//                     </button>
//                   </span>
//                 </div>
//               </MDBCardFooter>
//             </MDBCard>
//           </div>

//           <div>
//             <MDBCard>
//               <MDBCardImage
//                 className="shadow1"
//                 position="top"
//                 alt="..."
//                 src="https://images1-fabric.practo.com/dx/labs/PRL-AYIHC/logo.jpg/360x240"
//               />
//               <MDBCardBody>
//                 <MDBCardTitle className="h5 ">
//                   Basic Womer Health Checkup
//                 </MDBCardTitle>
//                 <MDBCardText className="fs-6">
//                   Ideal for individuals aged 15-40 years
//                 </MDBCardText>
//                 <MDBCardText className="h6 mb-4">85 tests included</MDBCardText>
//               </MDBCardBody>

//               <MDBCardFooter background="transparent">
//                 <div className="">
//                   <span className="h5 fw-bold">₹1099 </span>
//                   <strike className="h6 text-muted">₹1400</strike>{" "}
//                   <span className="text-success  h6">22% off</span>{" "}
//                   <span>
//                     <button
//                       type="button"
//                       className="btn btn-info fw-bold ms-3 mt-3 h6"
//                     >
//                       Book Now
//                     </button>
//                   </span>
//                 </div>
//               </MDBCardFooter>
//             </MDBCard>
//           </div>

//           <div>
//             <MDBCard>
//               <MDBCardImage
//                 className="shadow1"
//                 position="top"
//                 alt="..."
//                 src="https://images1-fabric.practo.com/dx/labs/PRL-CFBC/logo_XZ8poyA.jpg/360x240"
//               />
//               <MDBCardBody>
//                 <MDBCardTitle className="h5 ">
//                   Basic Womer Health Checkup
//                 </MDBCardTitle>
//                 <MDBCardText className="fs-6">
//                   Ideal for individuals aged 15-40 years
//                 </MDBCardText>
//                 <MDBCardText className="h6 mb-4">85 tests included</MDBCardText>
//               </MDBCardBody>

//               <MDBCardFooter background="transparent">
//                 <div className="">
//                   <span className="h5 fw-bold">₹1099 </span>
//                   <strike className="h6 text-muted">₹1400</strike>{" "}
//                   <span className="text-success  h6">22% off</span>{" "}
//                   <span>
//                     <button
//                       type="button"
//                       className="btn btn-info fw-bold ms-3 mt-3 h6"
//                     >
//                       Book Now
//                     </button>
//                   </span>
//                 </div>
//               </MDBCardFooter>
//             </MDBCard>
//           </div>

//           <div>
//             <MDBCard>
//               <MDBCardImage
//                 className="shadow1"
//                 position="top"
//                 alt="..."
//                 src="https://images1-fabric.practo.com/dx/labs/PRL-AHCP/logo_92jA83w.jpg/360x240"
//               />
//               <MDBCardBody>
//                 <MDBCardTitle className="h5 ">
//                   Basic Womer Health Checkup
//                 </MDBCardTitle>
//                 <MDBCardText className="fs-6">
//                   Ideal for individuals aged 15-40 years
//                 </MDBCardText>
//                 <MDBCardText className="h6 mb-4">85 tests included</MDBCardText>
//               </MDBCardBody>

//               <MDBCardFooter background="transparent">
//                 <div className="">
//                   <span className="h5 fw-bold">₹1099 </span>
//                   <strike className="h6 text-muted">₹1400</strike>{" "}
//                   <span className="text-success  h6">22% off</span>{" "}
//                   <span>
//                     <button
//                       type="button"
//                       className="btn btn-info fw-bold ms-3 mt-3 h6"
//                     >
//                       Book Now
//                     </button>
//                   </span>
//                 </div>
//               </MDBCardFooter>
//             </MDBCard>
//           </div>

//           <div>
//             <MDBCard>
//               <MDBCardImage
//                 className="shadow1"
//                 position="top"
//                 alt="..."
//                 src="https://images1-fabric.practo.com/dx/labs/PRL-BOHC/logo.jpeg/360x240"
//               />
//               <MDBCardBody>
//                 <MDBCardTitle className="h5 ">
//                   Basic Womer Health Checkup
//                 </MDBCardTitle>
//                 <MDBCardText className="fs-6">
//                   Ideal for individuals aged 15-40 years
//                 </MDBCardText>
//                 <MDBCardText className="h6 mb-4">85 tests included</MDBCardText>
//               </MDBCardBody>

//               <MDBCardFooter background="transparent">
//                 <div className="">
//                   <span className="h5 fw-bold">₹1099 </span>
//                   <strike className="h6 text-muted">₹1400</strike>{" "}
//                   <span className="text-success  h6">22% off</span>{" "}
//                   <span>
//                     <button
//                       type="button"
//                       className="btn btn-info fw-bold ms-3 mt-3 h6"
//                     >
//                       Book Now
//                     </button>
//                   </span>
//                 </div>
//               </MDBCardFooter>
//             </MDBCard>
//           </div>

//           <div>
//             <MDBCard>
//               <MDBCardImage
//                 className="shadow1"
//                 position="top"
//                 alt="..."
//                 src="https://images1-fabric.practo.com/dx/labs/PRL-FBC/logo.jpeg/360x240"
//               />
//               <MDBCardBody>
//                 <MDBCardTitle className="h5   ">
//                   Basic Womer Health Checkup
//                 </MDBCardTitle>
//                 <MDBCardText className="fs-6">
//                   Ideal for individuals aged 15-40 years
//                 </MDBCardText>
//                 <MDBCardText className="h6 mb-4">85 tests included</MDBCardText>
//               </MDBCardBody>

//               <MDBCardFooter background="transparent">
//                 <div className="">
//                   <span className="h5 fw-bold">₹1099 </span>
//                   <strike className="h6 text-muted">₹1400</strike>{" "}
//                   <span className="text-success  h6">22% off</span>{" "}
//                   <span>
//                     <button
//                       type="button"
//                       className="btn btn-info fw-bold ms-3 mt-3 h6"
//                     >
//                       Book Now
//                     </button>
//                   </span>
//                 </div>
//               </MDBCardFooter>
//             </MDBCard>
//           </div>