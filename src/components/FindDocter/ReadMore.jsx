import React from 'react'
import Certified from './Certified'
import Health from './Health'
import Secure from './Secure'

const ReadMore = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 md-6'>
                        <h1>Trust: the foundation on which Practo is built</h1>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-6'>
                        <h1>Your data has only one owner. YOU!</h1>
                        <p>Practo does not have access to your data </p>
                        <p>  Practo does not sell or share your data with any third party</p>
                        <p> Practo follows stringent policies so that data isn' t compromised at any step</p>
                        <div className='row'>
                            <div className='col-3'>
                                <img src="./assets/img/icon/256-bit.png" alt="" />
                                <p className='mt-3'> 256-bit encryption</p>
                            </div>
                            <div className='col-3'>
                                <img src="./assets/img/icon/iso.png" alt="" />
                                <p className='mt-3'> ISO 27001certified</p>
                            </div>
                            <div className='col-3'>
                                <img src="./assets/img/icon/hippa.png" alt="" />
                                <p className='mt-3'> HIPAAcompliant data centersDSCImember</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <img src="./assets/img/safety/img1.png" alt="" />
                    </div>
                </div>
            </div>
            <div>
                <Certified />
            </div>
            <div className='mt-3'>
                <Secure />
            </div>
            <div>
                <Health />
            </div>
        </>
    )
}

export default ReadMore
