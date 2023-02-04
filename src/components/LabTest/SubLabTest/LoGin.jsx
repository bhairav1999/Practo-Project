import React from "react";
import { NavLink } from "react-router-dom";
// import "../../Css/LoginForm.css"
// import img1 from "..";
function LoGin() {
  return (
    <>
      <section className="vh-100 mt-5">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://accounts.practo.com/static/images/illustration.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
               

              <div className="form-outline mb-4">
                <label className="form-label">
                User Name 
                  </label>
                  <input
                    type="text"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter Your Name"
                  />
                  
                </div>
               
                {/* Email input */}
                <div className="form-outline mb-4">
                <label className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                  />
                  
                </div>
                {/* Password input */}
                <div className="form-outline mb-3">
                <label className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                  />
                 
                </div>
               
                <div className="text-center text-lg-start mt-4 pt-2">
                  <NavLink to={"/"}>
                    <button
                      type="button"
                      className="btn btn-primary btn-lg"
                      style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                    >
                     Register
                    </button>
                  </NavLink>
                 
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoGin;
