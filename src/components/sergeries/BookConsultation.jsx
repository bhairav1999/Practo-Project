import React from 'react'

const BookConsultation = () => {
  return (
    <div class="">
        <h4>Book your consultation today</h4>
      
        <form action="">
  <div class="mb-3 mt-3">
  <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
  <option selected>Select City</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
  </div>
  <div class="mb-3">
  <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
  <option selected>Select Ailment*</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
  </div>
  <div class="mb-3 mt-3">
    <input type="text" class="form-control form-control-lg"  placeholder="Name*"/>
  </div>
  <div class="mb-3 mt-3">
    <input type="text" class="form-control form-control-lg"  placeholder="Contact Number*"/>
  </div>
  
  <div class="d-grid gap-2">
  <button class="btn btn-primary" type="submit">Book Appointment</button>
 <span style={{display:"block",fontSize:"10px",textAlign:"center"}}>By submitting the form, you agree to Practo's  T&C</span>
</div>



</form>

</div>

    
  )
}

export default BookConsultation