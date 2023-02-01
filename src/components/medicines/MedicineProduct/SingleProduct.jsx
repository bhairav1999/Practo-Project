import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'

function SingleProduct() {
const{pid} = useParams();
const[Sproduct,setSproduct]=useState();
const [loading,setLoading]=useState(false);

useEffect( ()=>{
    const getProduct= async()=>{
        setLoading(true);
      const response= await fetch(`/alldata/medicines/MedicineProduct.json/${pid}`);
     const reqresponse=await response.json();
     console.log(reqresponse);
    //   setSproduct(await response.json());
      setLoading(false);
     }
  getProduct();
  },[]);

//--------------
const Loading = ()=>{
    return(
      <>
     <div>
     loading......
     </div>
      </>
    )
  }

//-----------------

const ShowProduct = ()=>{
    return(
      <>
       {/* <div className='col-md-6'>
        <img src={Sproduct.pimage} alt="" height='400px' width='400px'/>

       </div>
       */}
      </>
    )
   
  }










  return (
    <>
      <div className='container'>
         <div className='row'>
         {loading ? <Loading/> : <ShowProduct/>}
Single Product
         </div>
      </div>
    </>
  )
}

export default SingleProduct
