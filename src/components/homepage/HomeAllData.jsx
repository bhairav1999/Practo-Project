import React from 'react'





import Inputbox from './Inputbox';
import Cardtextlink from './Cardtextlink';
import CardGrid from './CardGrid'; 
import { Footer } from './Footer';
import ConsultopDoc from './ConsultopDoc';
import BookAppint from './BookAppint';
import TopArti from './TopArti';
import WhatCoursal from './WhatCoursal';
import DownldApp from './DownldApp';
import SearchBar from "../sergeries/SearchBar"



const HomeAllData = () => {





  return (
   <>
  <SearchBar/>
    {/* <Inputbox/> */}
  <Cardtextlink/>
  <CardGrid/>
<ConsultopDoc/>
<BookAppint/>
<TopArti/>
<WhatCoursal/>
<DownldApp/>

    </>






  
  )
}

export default HomeAllData
