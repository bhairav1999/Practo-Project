import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const ConsultHeader = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#f8e9e6" }}>
      <div className="row justify-content-center   " style={{ height: "100%" }}>
        <div className="col-md-6 my-auto">
          <h1 className="mt-5">
            Skip the travel! <br></br>
            Take Online Doctor Consultation
            <h2>Sahil</h2>
          </h1>
          <p className="fs-5 mt-3">
            Private consultation + Audio call · Starts at just ₹199
          </p>
          <div className="mt-2">
            <img
              className=" rounded-circle"
              src="./assets/img/header/a.jpg"
              alt=""
              width="6%"
            />
            <img
              className="rounded-circle"
              src="./assets/img/header/b.jpg"
              alt=""
              width="6%"
            />
            <img
              className="rounded-circle"
              src="./assets/img/header/c.jpg"
              alt=""
              width="6%"
            />
            +150 Doctors are online
            <img
              className="rounded-circle "
              src="https://media3.giphy.com/media/MVAk5Eq7JNQ4ggqgFJ/giphy.gif?cid=790b761136453a72edad185cc4945019538a3a6cfc8eae04&rid=giphy.gif&ct=s"
              alt=""
              width="4%"
            />
          </div>

          <Button className="mt-4">Consult Now</Button>

          <br></br>
          <div className=" mb-5"></div>
          <i className="bi bi-award-fill ">Verified Doctors</i>
          <i className="bi bi-file-earmark-text ml-3">Digital Prescription</i>
          <i className="bi bi-chat-left-text ml-3 ">Free Followup</i>
        </div>

        <div className="col-md-3 mt-2 align-self-end ">
          <img
            src="./assets/img/header/head.png"
            alt=""
            width="100%"
            className="img-fluid "
          />
        </div>
      </div>
    </div>
  );
};

export default ConsultHeader;

// <div class="container-lg">
// <div className="head">
//   <section className="section ">
//     <div className="content">
//       <div>
//         <div className="heading">
//           <h1 className="headline">
//             Skip the travel!
//             <br />
//             Take online Doctor consultation
//           </h1>
//         </div>
//         <p className="description">
//           Private consultation + Audio call · Starts at just ₹199
//         </p>
//         <div className="doctors-card">
//           <div className="doctor-images">
//             <img
//               className="img"
//               src="https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg="
//               alt=""
//             />

//             <img
//               className="img"
//               src="https://media.istockphoto.com/id/537820244/photo/female-doctor-so-happy.jpg?s=612x612&w=0&k=20&c=5xzabf3V57Sv5C1IOiJjOoFx2JMyCpk2d_gmMWcMp30="
//               alt=""
//             />
//             <img
//               className="img"
//               src="https://www.smartdocmd.com/wp-content/uploads/2018/11/online-doctor-consultation.jpg"
//               alt=""
//             />
//             <div className="online">+150 Doctors are online</div>
//             <img
//               className="pulse"
//               src="https://media3.giphy.com/media/MVAk5Eq7JNQ4ggqgFJ/giphy.gif?cid=790b761136453a72edad185cc4945019538a3a6cfc8eae04&rid=giphy.gif&ct=s"
//               alt=""
//             />
//           </div>
//         </div>
//         <div>
//           <Link to={"/consult-doctor"}>
//             <Button variant="primary" className="cta">
//               Consult Now
//             </Button>
//           </Link>
//         </div>
//         <div className="head-footer">
//           <div className="icon">
//             <i className="bi bi-award-fill  Space">Verified Doctors</i>
//             <i className="bi bi-file-earmark-text Space">
//               Digital Prescription
//             </i>
//             <i className="bi bi-chat-left-text Space">Free Followup</i>
//           </div>
//         </div>
//       </div>

//       <div>
//         <img className="head-img-size" src={head} alt="" />
//       </div>
//     </div>
//   </section>
// </div>
// </div>
