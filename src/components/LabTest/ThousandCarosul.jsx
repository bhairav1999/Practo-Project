import React from 'react'
import DownlodPracto from './DownlodPracto'

const ThousandCarosul = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 sm-6 col-center m-auto">
                        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            </div>
                            <div class="carousel-inner reviewContent">
                                <h3 className='h2 mt-5' ><b>Thousands of Happy Customers</b></h3>
                                <div class="carousel-item active team" data-bs-interval="10000">
                                    <div class="col-md-6 sm-3 col-center m-auto team_member">
                                        <p className='paragraph'>"Beautiful application with elegant UI Design. I found this app very useful. Placed Order for a few medicines and recieved in just two days. Recommended application."</p>
                                        <div className='row content'>
                                            {/* <div class="col-md-2 sm-1  team_img">
                                                <img src="/Assesets/img/R1.png" alt="Team_image" />
                                            </div> */}
                                            <div class="col-md-4 sm-1 ">
                                                <h6>Ayush Verma</h6>
                                                
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="carousel-item team" data-bs-interval="2000">
                                    <div class="col-md-6 sm-3 col-center m-auto team_member">
                                        <p className='paragraph'>"Very useful app. It saves time and money and genuine. Keep going Practo. Thank you."</p>
                                        <div className='row content'>
                                            {/* <div class="col-md-2 sm-1  team_img">
                                                <img src="/Assesets/img/R2.png" alt="Team_image" />
                                            </div> */}
                                            <div class="col-md-4 sm-1">
                                                <h6>Rakesh Raki</h6>
                                                
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="carousel-item team">
                                    <div class="col-md-6 sm-3 col-center m-auto team_member">
                                        <p className='paragraph'>"Most useful and saving more money on medicine."</p>
                                        <div className='row content'>
                                            {/* <div class="col-md-2 sm-1 team_img">
                                                <img src="/Assesets/img/R3.png" alt="Team_image" />
                                            </div> */}
                                            <div class="col-md-4 sm-1 ">
                                                <h6>Vamshi Krishna</h6>
                                                
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="carousel-item team" data-bs-interval="2000">
                                    <div class="col-md-6 sm-3 col-center m-auto team_member">
                                        <p className='paragraph'>"Nice app for people who want to manage time for searching medicine."</p>
                                        <div className='row content'>
                                            {/* <div class="col-md-2 sm-1 team_img">
                                                <img src="/Assesets/img/R4.png" alt="Team_image" />
                                            </div> */}
                                            <div class="col-md-4 sm-1">
                                                <h6>Kishor Jha</h6>
                                                
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="carousel-item team" data-bs-interval="2000">
                                    <div class="col-md-6 sm-3 col-center m-auto team_member">
                                        <p className='paragraph'>"I ordered medicine. It was delivered right time. With big discount."</p>
                                        <div className='row content'>
                                            {/* <div class="col-md-2 sm-1 team_img">
                                                <img src="/Assesets/img/R5.png" alt="Team_image" />
                                            </div> */}
                                            <div class="col-md-4 sm-1">
                                                <h6>Mahesh Sisara</h6>
                                               
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            <DownlodPracto/>
        </div>
    )
}

export default ThousandCarosul