import React, { useState } from "react";

const RadioBtn = () => {

  const [dispaly , setdispaly]=useState()
  return (
    <>
      <h1>how to set the default btn</h1>
      <hr />

    <input type="radio" name="radiovalues" placeholder="hii" id="" onChange={(e)=>setdispaly(e.target.value)} />
    <input type="radio" name="radiovalues"  placeholder="by" id="" onChange={(e)=>setdispaly(e.target.value)} />
    <input type="radio" name="radiovalues" placeholder="love" id=""  onChange={(e)=>setdispaly(e.target.value)}/>
        
     
      <h2>{dispaly}</h2>
    </>
  );
};

export default RadioBtn;
