import React from "react";

const ConsultDoctor = () => {
  return (
    <div>
      <div className="container-fluid bg-light" style={{ height: "80px" }}>
        <div className="row  d-flex justify-content-center align-self-center">
          <img className="mt-4" src="./Assets/practologo.png" alt="" />
        </div>
      </div>
      <div
        className="container-fluid d-flex justify-content-center align-self-center"
        style={{ "background-color": "#f0f0f5", height: "500px" }}
      >
        <div
          className="row container-fluid d-flex justify-content-center align-self-center"
          style={{
            "background-color": "white",
            height: "400px",
            width: "800px",
          }}
        >
          <div className="mt-5 mb-5">
            <h6>Consult with a Doctor</h6>
          </div>
          <br></br>

          <div className="mt-5">
            <form>
              <div class="form-group">
                <label for="usr">Tell us your symptom or health problem</label>
                <input
                  type="text"
                  class="form-control"
                  id="usr"
                  placeholder="Eg: fever,headache"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultDoctor;
