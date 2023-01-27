import React from 'react'
import './Section1.css'
import Review from '../Review/Review'
function Section1() {
  return (
    <>
     <div className='container'>
     <div class="row">
  <div class="col-sm-6">
    
    <div class="card">
    
      <div class="card-body">
      <a href="#"><h6 class="card-title">INTRODUCING CONSULTATION DESK</h6>
        <p class="card-text para">Don't self medicate. Talk to an expert.Consult a doctor less than 2 minutes.</p>
        <img src="/assets/img/section1/doctor chat.png" class="card-img-top" alt="" /></a>
      </div>
    </div>
  </div>

  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
      <a href="#">  <h6 class="card-title">INTRODUCING FAST DELIVERY</h6> 
        <p class="card-text para">Tried of waiting in a queue? Too weak to go down and by medicines?</p>
        <img src="/assets/img/section1/homeDelivery.png" class="card-img-top" alt="" /></a>
      </div>
    </div>
  </div>
</div> <br /><br />

{/* //---------------------------------------------------- */}

<div className='row appUse'>
    <img src="/Assesets/img/c2.png" alt="" />

</div>

     </div>

<Review/>

    </>
  )
}

export default Section1
