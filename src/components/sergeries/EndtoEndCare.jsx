import React, { useState } from "react";
import ReactPlayer from "react-player";

const EndtoEndCare = () => {
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
        <div className="col-8">
      <h2>End to end care explained</h2>
      <div className="you-tube">
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <ReactPlayer
           
            playing={play}
            pip
            controls="false"
            config={{ file: { forceHLS: true } }}
            url="https://www.youtube.com/watch?v=cmoqoTc3bgk"
          />
          {/* <div className="video-card__title">
            <span>We focus on providing you best experience and support you at every step on your road to recovery</span>
          </div> */}
        </div>
        </div>
        </div>
        <div className='col-4'></div>
      </div>
      <div className="row">
        <div className="col-8 mt-4 mb-4">
          <h5>We focus on providing you best experience and support you at every step on your road to recovery</h5>
        </div>
        <div className='col-4'></div>
      </div>
    </div>
  );
};

export default EndtoEndCare;