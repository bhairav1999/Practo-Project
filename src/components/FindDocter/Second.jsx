import React from 'react'

const Second = () => {
    return (
        <>
            <div className='s1 mt-1'>


                <div className='container  '>
                    <div className='row '>
                        <div className='col-8 mt-5'>
                            <div>
                                <div>
                                    <div>
                                        <h5 className="card-title"><h1>Safety of your data is our
                                            top priority.</h1></h5>
                                        <p className="card-text"><h5>Multi-level security checks</h5>
                                            <h5>Multiple data backups</h5>
                                            <h5> Stringent data privacy policies. </h5></p>
                                        <a href="#" className="btn btn-primary">Read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' col-4 mt-5'>
                            <div> <img src="./assets/img/safety/img1.png" width='60%' alt="" /> </div>
                        </div>
                    </div>
                    <div className='row mt-5 ml-5'>
                        <div className='col-3 text-center ' >
                            <img src="./assets/img/icon/256-bit.png" alt="" />
                            <p className='mt-3'> 256-bit encryption</p>
                        </div>
                        <div className='col-3 text-center' >
                            <img src="./assets/img/icon/iso.png" alt="" />
                            <p className='mt-3'> ISO 27001certified</p>
                        </div>
                        <div className='col-3 text-center' >
                            <img src="./assets/img/icon/hippa.png" alt="" />
                            <p className='mt-3'> HIPAAcompliant data centersDSCImember</p>
                        </div>
                        <div className='col-3 text-center' >
                            <img src="./assets/img/icon/Dscl.png" alt="" />
                            <p className='mt-3'> 256-bit encryption</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Second

