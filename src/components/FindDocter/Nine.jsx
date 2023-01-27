import React from 'react'

const Nine = () => {
    return (
        <>
            <div className='container'>
                <div className='row justify-content-evenly'>
                    <div className='col-6 my-5 mt-5 ml-12'>
                        <img src="./assets/img/download/app.png" width='60%' alt="" />
                    </div>
                    <div className='col-6 my-5 mt-5'>
                        <h1>Download the Practo app</h1>
                        <div>
                            <input className="form-check-input" type="checkbox" value="" checked />
                            <label className="form-check-label" for="flexCheckChecked">
                                Book appointments and lab tests
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" checked />
                            <label className="form-check-label" for="flexCheckChecked">
                                Order medicines
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" checked />
                            <label className="form-check-label" for="flexCheckChecked">
                                Consult doctors online
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" checked />
                            <label className="form-check-label" for="flexCheckChecked">
                                Set medicine reminders
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" checked />
                            <label className="form-check-label" for="flexCheckChecked">
                                Store health records
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" checked />
                            <label className="form-check-label" for="flexCheckChecked">
                                Read health tips
                            </label>
                        </div>
                        <div className='row'>
                            <div className='col-6 my-5 mt-5'>
                                <a href="https:app/">
                                    <img src="./assets/img/download/google.png" width='200px' targrt='_blank' alt="" />
                                </a>
                            </div>
                            <div className='col-6 my-5 mt-5'>
                                <a href="https:app/">
                                    <img className='img-fluid' src="./assets/img/download/appstore.png" width='' targrt='_blank' alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nine
