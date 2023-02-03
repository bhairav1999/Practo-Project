import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import './Fifth.css'
import axios from 'axios';


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
const SliderMain = () => {
    const [User, setUser] = useState([]);
    async function userdata() {
        const response = await axios.get(`./alldata/finddocter/db1.json`)
        if (response.data.length > 0)
            setUser(response.data);

    }

    useEffect(() => {
        userdata();
    }, []);
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
            <div className=' m-3 d-flex justify-content-center align-items-center'>
                <h2>Read top articles from health experts</h2>

            </div>
            <Slider {...settings} >
                {User && User.map((e, i) => {
                    return (
                        <div key={i} className="card col-4" >
                            <img src={e.img} className="card-img-top" height='200px' alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{e.title}</h5>
                                <p classn="card-text">{e.drname},{e.drspecility}</p>
                                <p className='card-text'><span>{e.drlike} Likes | {e.drviews}  Views</span></p>

                            </div>

                        </div>
                    )

                })}

            </Slider>
            <div className=' mt-3 d-flex justify-content-center align-items-center'>
                <a href="#" className="btn btn-primary text-center">More artical</a>
            </div>

        </div>
    )
}

export default SliderMain