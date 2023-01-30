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
                <h3 id='fontd'>Instant Video Consultation</h3>
                <p id='fontdp'>Connect within 60 secs</p>
            </div>
        </div>
        
        <div>
            <div className="img img2">
            <img src="/assets/img/cardgrid/CardgrigImg2.jpg" alt="This is img1" width='100%' height='100%'/>
            </div>
            <div>
                <h3 id='fontd'>Find Doctors Near You</h3>
                <p id='fontdp'>Confirmed appoinment</p>
            </div>
        </div>

        <div>
            <div className="img img3">
            <img src="/assets/img/cardgrid/CardgridImg3.png" alt="This is img1" width='100%' height='100%'/>
            </div>
            <div>
                <h3 id='fontd'>Medicines</h3>
                <p id='fontdp'>Essentials at your doorstep</p>
            </div>
        </div>

        <div>
            <div className="img img4">
            <img src="/assets/img/cardgrid/CardgridImg5.png" alt="This is img1" width='100%' height='100%'/>
            </div>
            <div>
                <h3 id='fontd'>Lab Tests</h3>
                <p id='fontdp'>Sample pickup at your home</p>
            </div>
        </div>
        
        <div>
            <div className="img img5">
            <img src="/assets/img/cardgrid/CardgridImg4.png" alt="This is img1" width='100%' height='100%'/>
            </div>
            <div>
                <h3 id='fontd'>Surgeries</h3>
                <p id='fontdp'>Safe and trusted surgery centers</p>
            </div>
        </div>
    </div>
    </div>
  )
  }

export default CardGrid