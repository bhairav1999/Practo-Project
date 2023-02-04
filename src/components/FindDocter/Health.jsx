import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Faqs1 from './Faqs1'

const Health = () => {
    const [Total, setTotal] = useState([]);
    async function fetch() {
        const res = await axios.get(`./alldata/finddocter/health.json`);
        if (res.data.length > 0) {
            setTotal(res.data);
        }
    }
    useEffect(() => {
        fetch();
    }, []);
    return (

        <>
            <div className='container bgfaintgrey mt-4'>
                <div className='row '>
                    <div className='col-6 mt-3 '>
                        <h1>Secure place for your health data</h1>
                        <h5>Keeping your data safe is the core of every decision we make at Practosecure platform   </h5>
                    </div>
                    <div className='col-6 '>
                        <img className='m-5' src="https://www.practo.com/providers/static/images/pages/company/patient.png" width='40%' alt="" />
                    </div>
                </div>
                <div className="container text-center bgfaintgrey ">

                    <div className="row row-cols-2 ">

                        {

                            Total && Total.map((e, i) => {
                                return (
                                    <>
                                        <div className="col bg-light  ">
                                            <img className='' src={e.img} alt="" style={{ "width": "100px" }} />
                                            <h5>{e.title}</h5>
                                            {e.content}
                                        </div>

                                    </>
                                )
                            })
                        }
                    </div>

                </div>

            </div>
            <div>
                <Faqs1 />
            </div>
        </>
    )
}

export default Health
