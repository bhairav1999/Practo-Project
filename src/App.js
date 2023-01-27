import "./App.css";

import Navbar from "./components/homepage/Navbar";
import LabTestAllComp from "./components/LabTest/LabTestAllComp";
import Sergeries from "./components/sergeries/Sergeries";
import Consult from "./components/VideoConsult/Consult";
import Header from "./components/medicines/Header/Header";
import FindDocters from "./components/FindDocter/FindDocters";




import { BrowserRouter as Router, Routes, Route ,} from "react-router-dom";

function App() {
  return (
    <>
    
    <Router>
      <Routes>
        <Route path="/" element={  <Navbar/>}  /> 
        <Route path="/LabTestAllComp" element={  <LabTestAllComp/>}  /> 
        <Route path="/Sergeries" element={  <Sergeries/>}  /> 
        <Route path="/Consult" element={  <Consult/>}  /> 
        <Route path="/Header" element={  <Header/>}  /> 
        <Route path="/FindDocters" element={  <FindDocters/>}  /> 

      
        






        
      </Routes>
    </Router>
    </>
  );
}

export default App;
