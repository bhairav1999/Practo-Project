import React from 'react'

const Pest = () => {
    return (
        <>
            <div className='container color1  '>
                <div className='row  '>
                    <div className='col-lg-2 col-sm-3  '>
                        <a className='icon'target="_blank" href= "">
                            <i className="bi bi-chat-left-text"></i>
                            <h6>Consult with a doctor</h6></a>

                    </div>
                    <div className='col-lg-2 col-sm-3'>
                        <a className='icon'target="_blank" href="">
                            <i className="bi bi-cart2"></i>
                            <h6>Order Medicines</h6></a>
                    </div>
                    <div className='col-lg-2 col-sm-6'>
                        <a className='icon'target="_blank" href="">
                            <i className="bi bi-prescription2">
                            </i>
                            <h6>View medical records</h6></a>
                    </div>
                    <div className='col-lg-2 col-sm-3'>
                        <a className='icon'target="_blank" href="">
                            <i className="bi bi-trash2-fill">
                            </i>
                            <h6>Book test</h6></a>
                    </div>
                    <div className='col-lg-2 col-sm-3'>
                        <a className='icon' target="_blank"href="">
                            <i className="bi bi-book">
                            </i>
                            <h6>Read articles</h6></a>
                    </div>
                    <div className='col-lg-2 col-sm-3'>
                        <a className='icon'target="_blank" href="">
                            <i class="bi bi-briefcase"></i>
                            <h6>For healthcare providers</h6></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pest
