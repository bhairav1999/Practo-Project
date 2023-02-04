import React from 'react'
import './Main.css'
import Pest from './Pest'

import SearchBar from "../sergeries/SearchBar"
import Second from './Second'
const Main = () => {
  return (
    <>
      <div className='body'>
        <div className='container ' >

          <div className='d1'>
            <h1>Your home for health</h1><br />
            <h3>Find and Book</h3>
          </div>
        </div>
        <div className='container bg-light w-50'>
          {/* <div className='d2'>
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Bangalore" aria-label="Bangalore" />

              <input type="text" class="form-control" placeholder="search docters,clinics,hospitals etc." aria-label="search docters,clinics,hospitals etc" />
            </div>
          </div> */}

          <SearchBar />
        </div>
        <div className='container'>
          <div className='d3'>
            <a href="#" style={{ marginLeft: '20px' }}>popular serches: </a>
            <a href="#" style={{ marginLeft: '20px' }}> Dermatologist</a>
            <a href="#" style={{ marginLeft: '20px' }}>Pediatrician </a>
            <a href="#" style={{ marginLeft: '20px' }}>Gynecologist/Obstetrician </a>
            <a href="#" style={{ marginLeft: '20px' }}>Others</a>
          </div>
        </div>
        <div>
          <Pest />
        </div>
      </div>

      <div>
        <Second />
      </div>

    </>

  )

}

export default Main
