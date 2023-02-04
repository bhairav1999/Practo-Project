import React from 'react'
import './ReadMore.css'
const Certified = () => {
    return (
        <>
            <div className='container bgfaintgrey mt-4'>
                <div className='row  d-flex justify-content-center mt-4'>
                    <div className='col-6 mt-5 '>
                        <img src=" https://www.practo.com/providers/static/images/pages/company/iso-section.png" width='150px' alt="" />
                        <p>Secure organizational practices ensured by awareness and stringent access controls</p>
                        <p>Secure processes through strong administrative controls and monitoring</p>
                        <p>Secure systems with strong technical measures, and frequent vulnerability assessments and penetration testing</p>
                    </div>

                    <div className='col-5 mt-5'>
                        <h3>We are ISO 27001 certified</h3>
                        <p> a global authority in information security standards — has certified that</p>
                        <p>Practo ensures confidentiality, availability, and integrity of its information assets</p>
                    </div>

                </div>

                <div className='row d-flex justify-content-center'>
                    <div className='col-5 m-4 bg-light p-4'>
                        <div className="">
                            <h5 class="card-title">Data security for patients</h5>
                            <div className='bluedash bg-info'>  </div>
                            <p> - Your data is for your eyes only </p>
                            <p> - No one at Practo can view your data</p>
                            <p> - We do not send you messages without your permission</p>
                            <p> - We send promotional messages with an option to opt out any time</p>
                            <p> - We do not share data with any third party.</p>

                        </div>
                    </div>
                    <div className='col-5 m-4 bg-light p-4'>
                        <div className="">
                            <h5 class="card-title">Data security for doctors </h5>
                            <div className='yellowdash bg-warning'></div>
                            <p>- We do not have access to read or view your practice data </p>
                            <p>- We do not share data with any third party</p>
                            <p>- Doctors are in full control to decide what communication has to be sent to their patients</p>
                            <p>- We follow stringent data policies to ensure users privacy and security</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Certified
