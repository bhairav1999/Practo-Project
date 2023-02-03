import React from 'react'
import { NavLink } from "react-router-dom";
const Sixth = () => {
    return (

        <>
            <div className='s1'>
                <div className='container'>
                    <div className='row '>

                        <div className='col-8 mt-5'>
                            <div>
                                <h5 className="card-title"><h1>Get all your medicines.
                                    Everytime. On time.</h1></h5>
                                <p className="card-text"><h5>Guaranteed availability</h5>
                                    <h5>Over 130,000+ genuine medicines</h5>
                                    <h5> Home delivery in 24hrs </h5></p>
                                <NavLink
                                    to="/Header"
                                >
                                    < button className="btn btn-primary">Order Medicines</button>
                                </NavLink>


                            </div>

                        </div>
                        <div className='col-4 '>
                            <img src="./assets/img/record/record.png" alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}

export default Sixth
