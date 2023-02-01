import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import jsondatadata from ".././../../Specialist.json";

const ConsultDoctor = () => {
  const [input, setInput] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [specialist, setSpecialist] = useState();

  const [pname, setPName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length === 0 || contactNo.length === 0) {
      alert("Please fill all the fields");
    } else {
      alert(
        `Name : ${input} And Contact No : ${contactNo} And Specialist  : ${specialist}`
      );
      alert("Thank you for contacting us");
    }

    console.log(
      `Name : ${input}  And Specialist  : ${specialist}  And Patient Name  : ${pname} And Contact No : ${contactNo}`
    );

    navigate("/");
  };

  return (
    <div>
      <div className="container-fluid bg-light" style={{ height: "100px" }}>
        <div className="row  d-flex justify-content-center align-self-center">
          <img
            className="mt-4"
            src="./assets/img/consultDoctor/practologo.png"
            alt=""
            style={{ width: "180px", height: "30px" }}
          />
        </div>
      </div>
      <div
        className="container-fluid d-flex justify-content-center align-self-center"
        style={{ "background-color": "#f0f0f5", height: "600px" }}
      >
        <div
          className="row container-fluid d-flex justify-content-center align-self-center"
          style={{
            "background-color": "white",
            height: "600px",
            width: "800px",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div>
              <div className="row ">
                <span className="border mt-4  text-center">
                  <h3 className="row mt-4  justify-content-center">
                    Consult With Doctor
                  </h3>
                  <div className="row mt-5 ">
                    <div className="text-center">
                      {" "}
                      <p className="mt-1 ">
                        Tell us your symptom or health problem
                      </p>
                      <div className="text-center">
                        <input
                          type="text"
                          className="form-control "
                          style={{ width: "100%" }}
                          placeholder="Eg: fever,headache"
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                        />
                      </div>
                      <p className="mt-3 ">Specialist</p>
                      <div>
                        <select
                          className="form-select "
                          aria-label="Default select example"
                          value={specialist}
                          onChange={(e) => setSpecialist(e.target.value)}
                        >
                          <option selected>Select specialist</option>
                          {jsondatadata.map((d, i) => {
                            return (
                              <>
                                <option key={i}>
                                  {d.fever.name} {d.fever.price}
                                </option>
                                <option>
                                  {d.headache.name} {d.headache.price}
                                </option>
                                <option>
                                  {d.Cold.name} {d.Cold.price}
                                </option>
                                <option>
                                  {d.Pregnancy.name}
                                  {d.Pregnancy.price}
                                </option>
                                <option>
                                  {d.a.name} {d.a.price}
                                </option>
                                <option>
                                  {d.b.name} {d.b.price}
                                </option>
                                <option>
                                  {d.c.name} {d.c.price}
                                </option>
                                <option>
                                  {d.d.name} {d.d.price}
                                </option>
                                <option>
                                  {d.e.name} {d.e.price}
                                </option>
                              </>
                            );
                          })}
                        </select>
                      </div>
                      <div>
                        <p className="mt-3 ">Patient Name</p>
                        <input
                          type="text"
                          className="form-control "
                          style={{ width: "100%" }}
                          placeholder="name"
                          value={pname}
                          onChange={(e) => setPName(e.target.value)}
                        />
                      </div>
                      <div>
                        <p className="mt-3 ">Mobile number</p>
                        <input
                          type="number"
                          className="form-control "
                          style={{ width: "100%" }}
                          placeholder="Eg: Enter Mobile no"
                          value={contactNo}
                          onChange={(e) => setContactNo(e.target.value)}
                        />
                      </div>
                      <div className="my-3">
                        <button
                          style={{
                            "background-color": "rgb(238, 130, 238)",
                            "border-radius": "5px",
                            width: "110px",
                            height: "40px",

                            border: "none",
                          }}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConsultDoctor;
