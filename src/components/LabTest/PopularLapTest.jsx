import React ,{useState ,useEffect} from "react";
import OurPartnerLabs from "./OurPartnerLabs";
import "./SlideBar.css";
import axios from 'axios'


import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  MDBCard,
  MDBCardFooter,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <MdNavigateNext className="icon" />
      </button>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <GrFormPrevious className="icon" />
      </button>
    </div>
  );
}


const PopularLapTest = () => {

  const[labpopular,setlabpopular]=useState([])

  useEffect(()=>{
    async function popularData() {
         const res= await axios.get('./alldata/LabTest/popular.json') 
        
         if(res.data.length>0){
          setlabpopular(res.data)
         }
       }
       popularData();
  
  },[])

  const a = labpopular;
  const c = a.filter((e) => e.id > 9)
  
  const d = a.filter((e) => e.id > 13)

  const f = a.filter((e) => e.id > 14)


  const[showtab, setShowtab]= useState(1);

  const handletab = (e)=>{
   setShowtab(e);

  }



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
      <p className="h3  mt-5 mb-4">
        <b>Popular Health Checkup Packages</b>
      </p>






      <div
        class="btn-group mb-3"
        role="group"
        aria-label="Basic outlined example"
      >
      <button className= {showtab===1? "nav-link active btn  ms-3 rounded": "nav-link btn btn-outline-dark ms-3 rounded" }  onClick={()=>handletab(1)}> Featured Checkups</button>
        
                    <button className={ showtab===2 ? "nav-link active btn ms-3 rounded ": "nav-link btn btn-outline-dark ms-3 rounded"}  onClick={()=>handletab(2)}> Women's Health</button>
        
         <button className={ showtab===3 ? "nav-link active btn ms-3 rounded": "nav-link btn btn-outline-dark ms-3 rounded"}  onClick={()=>handletab(3)}> Men's Health</button>
       
      </div>

      <div class="tab-content text-dark" id="pills-tabContent">

{/* start tab 1*/} 
<div  className= { showtab===1 ? "tab-pane fade show active":"tab-pane fade show"} > 
<div className="row">
        <Slider {...settings}>

        {c.map((e, i) => {
                    return (
                      <div key={i}>
            <MDBCard>
              <MDBCardImage
                className="shadow1"
                position="top"
                alt="..."
                src={e.img}
              />
              <MDBCardBody>
                <MDBCardTitle className="h5 ">
                  {e.title}
                </MDBCardTitle>
                <MDBCardText className="fs-6">
                  {e.subtitle}
                </MDBCardText>
                <MDBCardText className="h6 mb-4">{e.test}</MDBCardText>
              </MDBCardBody>

              <MDBCardFooter background="transparent">
                <div className="">
                  <span className="h5 fw-bold">{e.prise} </span>
                  <strike className="h6 text-muted">{e.subPrise}</strike>{" "}
                  <span className="text-success  h6">{e.discount}</span>{" "}
                  <span>
                    <button
                      type="button"
                      className="btn btn-info fw-bold ms-3 mt-3 h6"
                    >
                      Book Now
                    </button>
                  </span>
                </div>
              </MDBCardFooter>
            </MDBCard>
          </div> 
                    )

                })}


          

          
        </Slider>
      </div>
</div>



<div  className= { showtab===2 ? "tab-pane fade show active":"tab-pane fade "} > 
<div className="row">
        <Slider {...settings}>

        {f.map((e, i) => {
                    return (
                      <div key={i}>
            <MDBCard>
              <MDBCardImage
                className="shadow1"
                position="top"
                alt="..."
                src={e.img}
              />
              <MDBCardBody>
                <MDBCardTitle className="h5 ">
                  {e.title}
                </MDBCardTitle>
                <MDBCardText className="fs-6">
                  {e.subtitle}
                </MDBCardText>
                <MDBCardText className="h6 mb-4">{e.test}</MDBCardText>
              </MDBCardBody>

              <MDBCardFooter background="transparent">
                <div className="">
                  <span className="h5 fw-bold">{e.prise} </span>
                  <strike className="h6 text-muted">{e.subPrise}</strike>{" "}
                  <span className="text-success  h6">{e.discount}</span>{" "}
                  <span>
                    <button
                      type="button"
                      className="btn btn-info fw-bold ms-3 mt-3 h6"
                    >
                      Book Now
                    </button>
                  </span>
                </div>
              </MDBCardFooter>
            </MDBCard>
          </div> 
                    )

                })}


          

          
        </Slider>
      </div>
</div>



<div  className= { showtab===3 ? "tab-pane fade show active":"tab-pane fade "} > 
<div className="row">
        <Slider {...settings}>

        {d.map((e, i) => {
                    return (
                      <div key={i}>
            <MDBCard>
              <MDBCardImage
                className="shadow1"
                position="top"
                alt="..."
                src={e.img}
              />
              <MDBCardBody>
                <MDBCardTitle className="h5 ">
                  {e.title}
                </MDBCardTitle>
                <MDBCardText className="fs-6">
                  {e.subtitle}
                </MDBCardText>
                <MDBCardText className="h6 mb-4">{e.test}</MDBCardText>
              </MDBCardBody>

              <MDBCardFooter background="transparent">
                <div className="">
                  <span className="h5 fw-bold">{e.prise} </span>
                  <strike className="h6 text-muted">{e.subPrise}</strike>{" "}
                  <span className="text-success  h6">{e.discount}</span>{" "}
                  <span>
                    <button
                      type="button"
                      className="btn btn-info fw-bold ms-3 mt-3 h6"
                    >
                      Book Now
                    </button>
                  </span>
                </div>
              </MDBCardFooter>
            </MDBCard>
          </div> 
                    )

                })}


          

          
        </Slider>
      </div>
</div>




</div>










      <OurPartnerLabs />
    </>
  );
};

export default PopularLapTest;
