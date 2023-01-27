import React from 'react'
import { GrFormPrevious } from "react-icons/gr"
import { MdNavigateNext } from "react-icons/md"
import './Fifth.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBCardImage
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
const Fifth = () => {
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
            <div className='container'>
                <h2>Read top articles from health experts </h2>
                <Slider {...settings}>
                    <div>
                        <MDBCard>
                            <MDBCardImage src='./assets/img/slider/skin.png' alt='...' position='top' />
                            <MDBCardBody>
                                <div className="c-article-card_details">
                                    <div className="u-t-bold u-m-b-5 u-title-font">5 Ways to Burn Calories Without Exercising!</div>
                                    <div className="u-base-font c-article-card_author u-m-b-5 u-t-bold">
                                        <span>Ms.Swati Kapoor</span>,
                                        <span> Dietitian/Nutritionist</span>
                                    </div>
                                    <div>
                                        <span className="u-t-bold u-t-regular u-t-grey">275</span>
                                        <span className="u-t-regular u-t-grey u-t-bold">Likes</span>
                                        <span className="c-article-card_bullet">
                                            ●</span>
                                        <span className="u-m-l-10 u-t-bold u-t-regular u-t-grey">
                                            34140</span>
                                        <span className="u-t-regular u-t-grey u-t-bold">Views
                                        </span>
                                    </div>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                    <div>
                        <MDBCard>
                            <MDBCardImage src='./assets/img/slider/weight.png' alt='...' position='top' />
                            <MDBCardBody>
                                <div className="c-article-card_details">
                                    <div className="u-t-bold u-m-b-5 u-title-font">5 Ways to Burn Calories Without Exercising!</div>
                                    <div className="u-base-font c-article-card_author u-m-b-5 u-t-bold">
                                        <span>Ms.Swati Kapoor</span>,
                                        <span> Dietitian/Nutritionist</span>
                                    </div>
                                    <div>
                                        <span className="u-t-bold u-t-regular u-t-grey">275</span>
                                        <span className="u-t-regular u-t-grey u-t-bold">Likes</span>
                                        <span className="c-article-card_bullet">
                                            ●</span>
                                        <span className="u-m-l-10 u-t-bold u-t-regular u-t-grey">
                                            34140</span>
                                        <span className="u-t-regular u-t-grey u-t-bold">Views
                                        </span>
                                    </div>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                    <div>
                        <MDBCard>
                            <MDBCardImage src='./assets/img/slider/heart.png' alt='...' position='top' />
                            <MDBCardBody>
                                <div className="c-article-card_details">
                                    <div className="u-t-bold u-m-b-5 u-title-font">5 Ways to Burn Calories Without Exercising!</div>
                                    <div className="u-base-font c-article-card_author u-m-b-5 u-t-bold">
                                        <span>Ms.Swati Kapoor</span>,
                                        <span> Dietitian/Nutritionist</span>
                                    </div>
                                    <div>
                                        <span className="u-t-bold u-t-regular u-t-grey">275</span>
                                        <span className="u-t-regular u-t-grey u-t-bold">Likes</span>
                                        <span className="c-article-card_bullet">
                                            ●</span>
                                        <span className="u-m-l-10 u-t-bold u-t-regular u-t-grey">
                                            34140</span>
                                        <span className="u-t-regular u-t-grey u-t-bold">Views
                                        </span>
                                    </div>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                    <div>
                        <MDBCard>
                            <MDBCardImage src='./assets/img/slider/drug.png' alt='...' position='top' />
                            <MDBCardBody>
                                <div className="c-article-card_details">
                                    <div className="u-t-bold u-m-b-5 u-title-font">5 Ways to Burn Calories Without Exercising!</div>
                                    <div className="u-base-font c-article-card_author u-m-b-5 u-t-bold">
                                        <span>Ms.Swati Kapoor</span>,
                                        <span> Dietitian/Nutritionist</span>
                                    </div>
                                    <div>
                                        <span className="u-t-bold u-t-regular u-t-grey">275</span>
                                        <span className="u-t-regular u-t-grey u-t-bold">Likes</span>
                                        <span className="c-article-card_bullet">
                                            ●</span>
                                        <span className="u-m-l-10 u-t-bold u-t-regular u-t-grey">
                                            34140</span>
                                        <span className="u-t-regular u-t-grey u-t-bold">Views
                                        </span>
                                    </div>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                    <MDBCard>
                        <MDBCardImage src='./assets/img/slider/lemon.png' alt='...' position='top' />
                        <MDBCardBody>
                            <div className="c-article-card_details">
                                <div className="u-t-bold u-m-b-5 u-title-font">5 Ways to Burn Calories Without Exercising!</div>
                                <div className="u-base-font c-article-card_author u-m-b-5 u-t-bold">
                                    <span>Ms.Swati Kapoor</span>,
                                    <span> Dietitian/Nutritionist</span>
                                </div>
                                <div>
                                    <span className="u-t-bold u-t-regular u-t-grey">275</span>
                                    <span className="u-t-regular u-t-grey u-t-bold">Likes</span>
                                    <span className="c-article-card_bullet">
                                        ●</span>
                                    <span className="u-m-l-10 u-t-bold u-t-regular u-t-grey">
                                        34140</span>
                                    <span className="u-t-regular u-t-grey u-t-bold">Views
                                    </span>
                                </div>
                            </div>

                        </MDBCardBody>
                    </MDBCard>
                </Slider>
                <div className='text-content ml-5'>
                    <a href="#" className="btn btn-primary">More Articals</a>
                </div>
            </div>

        </>

    );
}





export default Fifth
