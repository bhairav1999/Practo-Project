import React from 'react'

function SkinCare() {
  return (
    <>
     <div className='container'>
     <div className='row'>
    <img src="/Assesets/img/header.png" alt="" srcset="" />
   </div>

   <div className='row'>
    <div className='col-sm-10'>
<form class="nosubmit">
  <input class="nosubmit" type="search" placeholder="Search for medicines, health products and more..."/>
</form>
</div>
{/* Cart button */}
<div className='col-sm-2 '>
<button type="button" class="btn btn-primary btn-lg"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>  VIEW CART</button>
</div>
    </div>
    <hr />
{/* //---------------------------------------------------------- */}
<div className='row mt-3'>
<ul class="nav nav-pills ">
  
  <li class="nav-item dropdown mx-3">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Family Care</a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Senior Care</a></li>
      <li><a class="dropdown-item" href="#">Women's Care</a></li>
      <li><a class="dropdown-item" href="#">Feminine Hygiene</a></li>
      <li><a class="dropdown-item" href="#">Mother Care</a></li>
    </ul>
  </li>
 
  <li class="nav-item dropdown  mx-3">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Fitness & Willness</a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Protein Supplements</a></li>
      <li><a class="dropdown-item" href="#">Mass Gainers</a></li>
    </ul>
  </li>

  <li class="nav-item dropdown  mx-3">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Skin Care</a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Acne care</a></li>
      <li><a class="dropdown-item" href="#">Body and Bath</a></li>
      <li><a class="dropdown-item" href="#">Face wash and cleansers</a></li>
      <li><a class="dropdown-item" href="#">Skin care suppliments</a></li>
    </ul>
  </li>

  <li class="nav-item dropdown  mx-3">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Hair Care</a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Antidandruff</a></li>
      <li><a class="dropdown-item" href="#">Antihairloss</a></li>
    </ul>
  </li>

  <li class="nav-item dropdown  mx-3">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Lip Care</a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Lip Balms</a></li>
    </ul>
  </li>

  <li class="nav-item dropdown  mx-3">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Sexual Willness</a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Condoms</a></li>
     
    </ul>
  </li>

  <li class="nav-item dropdown  mx-3">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Baby Care</a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Baby Bath</a></li>
      <li><a class="dropdown-item" href="#">Diapers and wipes</a></li>
    </ul>
  </li>







</ul>
<hr />
</div>
     </div>
    </>
  )
}

export default SkinCare
