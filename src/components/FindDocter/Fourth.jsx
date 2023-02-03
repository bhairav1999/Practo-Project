import React from 'react'
import { NavLink } from "react-router-dom";
const Fourth = () => {


    return (
        <>
            <div className='f1'>
                <div className='container'>
                    <div className='row '>
                        <div className='col-6 mt-5'>
                            <img src="./assets/img/skip/mobile_2.png" width='45%' alt="" />
                        </div>
                        <div className='col-6 mt-5'>
                            <div>
                                <h5 className="card-title"><h1>Skip the waiting room.
                                    Consult with a doctor.</h1></h5>
                                <p className="card-text"><h5>1Fees starting at ₹99</h5>
                                    <h5>Verified doctors respond in 5 minutes</h5>
                                    <h5> 100% Private and confidential </h5></p>
                                <NavLink
                                    to="/Consult"
                                >
                                    <button className="btn btn-primary">Consult Now</button>
                                </NavLink>

                                <img
                                    className="rounded-circle  "
                                    src="https://media3.giphy.com/media/MVAk5Eq7JNQ4ggqgFJ/giphy.gif?cid=790b761136453a72edad185cc4945019538a3a6cfc8eae04&rid=giphy.gif&ct=s"

                                    alt=""
                                    width="7%"
                                />
                                65336 doctors online
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Fourth
