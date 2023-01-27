import React from 'react'
import './Cardgrid.css'
const CardGrid = () => {
  return (
  <div className='container'>  
<div id="lab">
        <div>
            <div className="img img1">
                <img src="/assets/img/cardgrid/CardgridImg1.png" alt="This is img1" width='100%' height='100%'/>
            </div>
            <div>
                <h3>Instant Video Consultation</h3>
                <p>Connect within 60 secs</p>
            </div>
        </div>
        
        <div>
            <div className="img img2">
            <img src="/assets/img/cardgrid/CardgrigImg2.jpg" alt="This is img1" width='100%' height='100%'/>
            </div>
            <div>
                <h3>Find Doctors Near You</h3>
                <p>Confirmed appoinment</p>
            </div>
        </div>

        <div>
            <div className="img img3">
            <img src="/assets/img/cardgrid/CardgridImg3.png" alt="This is img1" width='100%' height='100%'/>
            </div>
            <div>
                <h3>Medicines</h3>
                <p>Essentials at your doorstep</p>
            </div>
        </div>

        <div>
            <div className="img img4">
            <img src="/assets/img/cardgrid/CardgridImg5.png" alt="This is img1" width='100%' height='100%'/>
            </div>
            <div>
                <h3>Lab Tests</h3>
                <p>Sample pickup at your home</p>
            </div>
        </div>
        
        <div>
            <div className="img img5">
            <img src="/assets/img/cardgrid/CardgridImg4.png" alt="This is img1" width='100%' height='100%'/>
            </div>
            <div>
                <h3>Surgeries</h3>
                <p>Safe and trusted surgery centers</p>
            </div>
        </div>
    </div>
    </div>
  )
  }

export default CardGrid
