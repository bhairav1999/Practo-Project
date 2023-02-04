import React, { useEffect, useState } from 'react'

import axios from 'axios'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import DoctorList from "./DoctorList"
import { useNavigate } from 'react-router-dom';
export default function SearchBar() {
    const[city,setCity]=useState([])
    const[speciality,setSpeciality]=useState([])
    const[cityname,setCityName]=useState("")
    const[specialityname,setSpecialityName]=useState("")
    const navigate = useNavigate();
   
    useEffect(()=>{
        async function fetchData() {
             const res= await axios.get('./alldata/surgery/cities.json') 
            
             if(res.data.length>0){
              setCity(res.data)
             }
           }
           fetchData();
           async function fetchSpeciality() {
            const res= await axios.get('./alldata/surgery/speciality.json') 
           
            if(res.data.length>0){
              setSpeciality(res.data)
            }
          }
          fetchSpeciality();
      
      },[])
     const gotoDoctorList=()=>{
      navigate('/Doctor-List',{state:{city:cityname,speciality:specialityname}})
     }
  return (
   
    <div className='container'>
      
      <form className='mt-3'>
    
      <Autocomplete
     sx={{display : 'inline-flex', width : '30%' }}
        freeSolo
        options={city.map((option) => option.city_name)}
        renderInput={(params) => <TextField onSelect={e => setCityName(e.target.value)} {...params}  placeholder="Search City" value={cityname}  />}
      />
      <Autocomplete
     sx={{display : 'inline-flex', width : '40%' }}
     freeSolo
     options={speciality.map((option) => option.speciality)}
     renderInput={(params) => <TextField onSelect={e => setSpecialityName(e.target.value)} {...params} placeholder="Search Speciality" value={specialityname}
     
     />}
     
  />
    <Button type="submit" variant="contained" size="large" onClick={gotoDoctorList}>Search</Button>
  
    </form>
   </div>
  );
}

