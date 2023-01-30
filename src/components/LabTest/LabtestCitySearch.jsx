import React from "react";
import LaptestOffer from './LaptestOffer';

const LabtestCitySearch = () => {
  return (
    <>
    <div className="container">
      <div className="row mt-5">
        {/* Row start */}
        <div className="col col-sm-3 col-md-3">
          <select className="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          {/* select col End */}
        </div>
        
        <div className="col col-sm-7 col-md-7"></div>
        {/* empty */}
        <div className="col col-sm-1 col-md-1  ">
          <button type="button" class="btn  text-end btn-outline-dark">
            <i class="bi bi-cart-plus"></i> Cart
          </button>
          {/* cart btn col end */}
        </div>

        {/* Row End */}
      </div> 
      <LaptestOffer />
</div>
    </>
  );
};

export default LabtestCitySearch;
