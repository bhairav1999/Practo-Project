import React from 'react'
import './AppDownload.css'
//import SkinCare from '../Main1/SkinCare/SkinCare';
function AppDownload() {

  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

  return (
    <>
      <div className='Container'>
        <div className='row'>
          <div className='col-md-4 sm-3'>
            <img src="/assets/img/appDownloadimg/App.png" className='Appimg' />
          </div>
          <div className='col-md-8 sm-4 description'>
            <h4>Download the Practo App</h4>
            <p>Your home for Health is one tap away</p>
            <p>Book appointments, Order health products, Consult with a doctor online, <br />
              Book health chekups, store health records & read health tips.</p>
            <p>Send the link to download the app</p>

            <div className='col-md-8 sm-4'>
              <input type="text" name="Country code" value="+91" size="1" className='inputPhoneNo' /><input type="text" size={30} className='inputPhoneNo' placeholder='Enter phone Number' />  <button type="button" class="btn btn-primary ">send App Link</button>
            </div>
            <div className='col-md-8 sm-4'>
              <button type="button" class="btn  btn-sm playstorebtn"><img src="/assets/img/appDownloadimg/play-store .png" /></button>  <button type="button" class="btn  btn-sm playstorebtn"><img src="/assets/img/appDownloadimg/app-store.png" /></button>
            </div>
          </div>
        </div>
        <hr />
 
 {/* --------------------------------------------------------------- */}

 <div className='row'>
  <div className='col-lg-10 col-center m-auto'>

  
  
  <h6>Order Medicines & Health Products Online : India's most reliable Online Medical Store</h6>
<p><p>Find and buy medicines online with Practo Pharmacy. Browse through prescription medicines, OTC products, health & wellness products on an online pharmacy that provides hassle free service across 100+ cities in India With an extensive catalogue of medicines and healthcare products provided on an extensive and easy to navigate destination for online medicine shopping, Practo Pharmacy provides added advantages which include:</p>
<ul>
  <li>Automated prescription refill: Set up scheduled refills for your online medicine orders and never worry about running out of your meds</li>
  <li>Doorstep delivery: No more trips to the pharmacy, with on-time delivery of your medicines right to your doorstep</li>
  <li>Medicine order history: No more scrolling through pages to find what you need. Just check your medicine order history and re-order</li>
  <li>Exclusive offers and discounts: Enjoy cashbacks, flat discounts and other exclusive offers on your medicine orders</li>
</ul><span id="dots">...</span>
<span id="more"><h6>Get every medicine on time & everytime:</h6>
<p>When you purchase medicines on Practo, you can be assured that you will get the medicines you order. Our trained pharmacists, partner pharmacies and medical stores ensure that your medicines are delivered to you on time, anywhere in India*. Practo is powered by intelligent systems that remembers all the medicines you ordered online and makes sure they're always available whenever you need them. So, you'll always find your medicines on Practo's online pharmacy, anywhere in India*.</p>

<h6>Buy Fitness and Wellness Products:</h6>
<p>When you’re doing your best to stay fit and healthy, you shouldn’t have to worry about having everything you need to do so. With Practo Pharmacy, you can order everything you need to stay in shape and take care of yourself. From fitness enthusiasts in need of protein supplements or health drinks, to health conscious individuals looking for herbal supplements, health food and vitamin supplements.</p>

<h6>Buy Personal Care Products:</h6>
<p>Giving your body the care it needs just got a whole lot simple. Choose from an extensive list of personal care products that includes top brands like Pantene, Himalaya, Neutrogena, Brylcreem, Durex and Karmasutra. Find products for skin care, hair care and lip care, as well as products for more intimate purposes like sexual wellness.</p>

<h6>Buy Health Devices & Surgical Supplies:</h6>
<p>Good healthcare begins at home. Keep your first-aid kits stocked with thermometer, bandages, antiseptic solutions, mosquito repellent and other essential medical equipment such as health monitors and weighing scales.</p>

<h6>Buy Ayurvedic Medicines:</h6>

<p>Searching for ayurvedic medicines? Avail the benefits of traditional medicine created right here in India, with products formulated for stomach care, liver care, sexual wellness and more</p>
<h6>Practo provides services to the following cities:</h6>
<p>Bengaluru, New Delhi, Mumbai, Thane, Kolkata, Hyderabad, Chennai, Pune, Ahmedabad, Gurgaon, Ghaziabad, Noida, Faridabad, Mysuru, Hubli, Mandya, Mangaluru, Chitradurga, Dharwad, Chickmagalur, Belgavi, Badami, Gadag, Dandeli, Udupi, Dharmasthala, Bhadravati, Ranebennur, Hampi, Davangere, Hassan, Kodagu, Raichur, Vijaypura, Kalaburagi, Shimoga, Bagalkot, Kochi, Coimbatore, Jaipur, Chandigarh, Jalandhar, Lucknow, Bhopal, Bhubaneshwar, Dehradun, Indore, Nagpur, Amritsar, Ludhiana, Agra, Allahabad, Anakapalli, Aurangabad, Bheemavaram, Bhilai, Bidar, Bilaspur, Chikkaballapur, Chittoor, Cuddallore, Cuttack, Dombivli, Goa, Guntur, Guwahati, Jaisalmer, Jodhpur, Kadapa, Kakinada, Kalyan, Kamareddy, Kancheepuram, Kanpur, Karimnagar, Khammam, Kolar, Kota, Kurnool, Ludhiana, Madanapalli, Madurai, Mahaboobnagar, Meerut, Nalgonda, Nashik, Navi Mumbai, Nellore, Nizamabad, Panchkula, Panipat, Patna, Pimpri-Chinchwad, Pondy, Raipur, Rajahmundry, Rajkot, Ramanagara, Ranchi, Rourkela, Salem, Secunderabad, Shimla, Silliguri, Srikakulam, Srikalahasti, Srinagar, Surat, Suryapeta, Thiruvananthapuram, Tirupati, Trichy, Tumakuru, Udaipur, Vadodara, Varanasi, Vasai, Vellore, Vijayawada, Visakhapatnam, Vizianagaram, Warangal.</p></span></p>
<button onClick={()=>{myFunction()}} id="myBtn">Read more</button>

</div>
 </div>
 
      </div>
      <hr />
      <div className='row'>
        <img src="/assets/img/footer.png" alt="" srcset="" />

      </div>
      {/* <SkinCare/> */}
    </>
  )
}

export default AppDownload
//-----------------------------------




