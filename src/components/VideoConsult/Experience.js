import React, { useState } from "react";
import ReactPlayer from "react-player";

const Experience = () => {
  const [play, setPlay] = useState(false);
  const handleMouseEnter = () => {
    setPlay(false);
  };
  const handleMouseLeave = () => {
    setPlay(false);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-4">
          <h3>Experience online doctor consultations</h3>
        </div>
      </div>
      <div className=" row mt-4">
        <div
          className="col-lg-4"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ReactPlayer
            width="350px"
            height="250px"
            playing={play}
            pip
            controls="false"
            config={{ file: { forceHLS: true } }}
            url="https://www.youtube.com/watch?v=QbUqZ3_9DKs"
          />
          <div className="mt-3">
            <h6>#HelloDoctor Consult a doctor online from home</h6>
          </div>
        </div>
        <div
          className="col-lg-4 "
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ReactPlayer
            width="350px"
            height="250px"
            playing={play}
            pip
            controls="false"
            config={{ file: { forceHLS: true } }}
            url="https://www.youtube.com/watch?v=4cT6GE5g8aw"
          />
          <div className="mt-3">
            <h6>#HelloDoctor Consult a doctor online from home</h6>
          </div>
        </div>
        <div
          className="col-lg-4"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ReactPlayer
            width="350px"
            height="250px"
            playing={play}
            pip
            controls="false"
            config={{ file: { forceHLS: true } }}
            url="https://www.youtube.com/watch?v=fu2veykYpOs"
          />
          <div className="mt-3">
            <h6>#HelloDoctor Consult a doctor online from home</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

// import React, { useState } from "react";
// import ReactPlayer from "react-player";

// const Experience = () => {
//   const [play, setPlay] = useState(false);
//   const handleMouseEnter = () => {
//     setPlay(false);
//   };
//   const handleMouseLeave = () => {
//     setPlay(false);
//   };

//   return (
//     <div className="container my-5">
//       <h2>Experience online doctor consultations</h2>
//       <div className="you-tube">
//         <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//           <ReactPlayer
//             width="380px"
//             height="280px"
//             playing={play}
//             pip
//             controls="false"
//             config={{ file: { forceHLS: true } }}
//             url="https://www.youtube.com/watch?v=QbUqZ3_9DKs"
//           />
//           <div className="video-card__title">
//             <h6>#HelloDoctor Consult a doctor online from home</h6>
//           </div>
//         </div>
//         <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//           <ReactPlayer
//             className="video-space"
//             width="380px"
//             height="280px"
//             playing={play}
//             pip
//             controls="false"
//             config={{ file: { forceHLS: true } }}
//             url="https://www.youtube.com/watch?v=UpXldIce2cA"
//           />
//           <div className="video-card__title">
//             <h6>#HelloDoctor Consult a doctor online from home</h6>
//           </div>
//         </div>
//         <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//           <ReactPlayer
//             className="video-space"
//             width="380px"
//             height="280px"
//             playing={play}
//             pip
//             controls="false"
//             config={{ file: { forceHLS: true } }}
//             url="https://www.youtube.com/watch?v=oG9aysyYNK4"
//           />
//           <div className="video-card__title">
//             <h6>#HelloDoctor Consult a doctor online from home</h6>
//           </div>{" "}
//         </div>
//         <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//           <ReactPlayer
//             className="video-space"
//             width="380px"
//             height="280px"
//             playing={play}
//             pip
//             controls="false"
//             config={{ file: { forceHLS: true } }}
//             url="https://www.youtube.com/watch?v=UpXldIce2cA"
//           />
//           <div className="video-card__title">
//             <h6>#HelloDoctor Consult a doctor online from home</h6>
//           </div>{" "}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Experience;
