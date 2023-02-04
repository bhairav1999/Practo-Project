import React, { useState} from 'react';


function MultistepForm(props)
{
  const [formvalue, setFormvalue]= useState({name:'',email:'', password:'' });

  const handleInput =(e)=>{
    const { name, value}= e.target;
    setFormvalue({...formvalue, [name]:value});
    console.log(formvalue);
  }
  const handleFormsubmit=  (e)=>{
    e.preventDefault();
    
  //  await fetch('http://localhost:4500/', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
	// 	  name:formvalue.name,
  //       email: formvalue.email,
  //       password: formvalue.password
  //     })
  //   });
  //  console.log("success");
   alert(`book successfull`)

  }

    return(
        <>
            <div className="container">
          
            
            
            <form className='row ' onSubmit={ handleFormsubmit}>  
            <div className='row'>         
                <div className="col-md-3">  
                <label className="form-label text-white">Name</label>              
                <input  type="text" name='name' value={formvalue.name} onChange={ handleInput}  className='form-control'  placeholder='Name...' />
              </div>
              </div>
             
              <div className='row'>    
              <div className="col-md-3">  
                <label className="form-label text-white">Email</label>              
                <input  type="text" name='email' value={formvalue.email } onChange={ handleInput}  className='form-control'  placeholder='Email...' />
              </div>
              </div>
             
              <div className='row'>   
              <div className="col-md-3">  
                <label className="form-label text-white">Password</label>              
                <input  type="password" name='password' value={formvalue.password} onChange={ handleInput}  className='form-control'  placeholder='Password...' />
              </div>
              </div>
              <div className='row'>   
              <div className="col-md-2">  
                <label className="form-label text-white">Action</label>              
                <button className='form-control btn btn-success '>Submit</button>
              </div>
              </div>


               </form>

            </div>
       
        </>
    );
}

export default MultistepForm;