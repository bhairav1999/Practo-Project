import React from 'react'
import './TopArti.css'
const TopArti = () => {
  return (
    <div className='container'>
       <div id="articals">
        <div>
            <h1>Read top articles from health experts</h1>
            <p>Health articles that keep you informed about good health partices and achieve your goals.</p>
            <button class="btn">See all articles</button>
        </div>
        <div>
            <div class="img"><img src="/assets/img/readto/Fruits2.jpg" alt="" width='100%' height='100%'/></div>
            <div class="bottom">
                <h5>CORONAVIRUS</h5>
                <h6>12 Coronavirus Myths and Facts That You Should Be Aware Of</h6>
                <p>Dr. Diana Borgio</p>
            </div>
        </div>
        <div>
            <div class="img"><img src="/assets/img/readto/Fruits.jpg" alt=""width='100%' height='100%'/></div>
            <div class="bottom">
                <h5>VITAMINS AND SUPPLEMENTS</h5>
                <h6>Eating Right to Build Immunity Against Cold and Viral Infections</h6>
                <p>Dr. Diana Borgio</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default TopArti
