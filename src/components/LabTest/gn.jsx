import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import '../css/slider.css'
import jd from '../db.json'

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
const Slider2 = () => {

    const a = jd;
    const c = a.filter((e) => e.id > 9)

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
        <div className='container mt-5'>
            <Slider {...settings} >
                {c.map((e, i) => {
                    return (
                        <div key={i} class="card col-4" >
                            <img src={e.image} class="card-img-top" height='350px' alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{e.title}</h5>
                                <p class="card-text">{e.body}</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    )

                })}
            </Slider>
        </div>
    )
}

export default Slider2