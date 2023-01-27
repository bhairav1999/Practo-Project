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
        <div className="col col-sm-3 col-md-3">
          <nav className="navbar navbar-light">
            <div className="container-fluid">
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </nav>
          {/* search col end */}
        </div>
        <div className="col col-sm-5 col-md-5"></div>
        {/* empty */}
        <div className="col col-sm-1 col-md-1  ">
          <button type="button" class="btn btn-outline-dark">
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
