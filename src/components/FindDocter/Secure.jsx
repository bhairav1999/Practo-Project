import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Secure = () => {
    const [Post, setPost] = useState([]);
    async function fetch() {
        const res = await axios.get(`./alldata/finddocter/secure.json`);
        if (res.data.length > 0) {
            setPost(res.data);
        }
    }
    useEffect(() => {
        fetch();
    }, []);
    return (
        <>
            <div className='conatiner '>
                <div className='row d-flex justify-content-center'>
                    <div className='col-6'>
                        <img src="https://www.practo.com/providers/static/images/pages/company/providers.png" alt="" />
                    </div>
                    <div className='col-6 mt-4'>
                        <h1>Secure platform for healthcare providers</h1>
                        <p>Each Practo product is designed to protect data security and privacy</p>
                    </div>
                </div>
                <div className="container text-center bgfaintgrey ">

                    <div className="row row-cols-2 ">
                        {

                            Post && Post.map((e, i) => {
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
        </>
    )
}

export default Secure
