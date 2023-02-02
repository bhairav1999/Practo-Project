import React from "react";
import "./App.css";

import Navbar from "./components/homepage/Navbar";
import LabTestAllComp from "./components/LabTest/LabTestAllComp";
import Sergeries from "./components/sergeries/Sergeries";
import Consult from "./components/VideoConsult/Consult";
import Header from "./components/medicines/Header/Header";
import FindDocters from "./components/FindDocter/FindDocters";
import HomeAllData from "./components/homepage/HomeAllData";
import LoginPage from "./components/FindDocter/LoginPage";
import TaxServer from "./components/LabTest/TaxServer";
import LdlServer from "./components/LabTest/LdlServer";
import BookedServer from "./components/LabTest/BookedServer";
import Footer from "./components/homepage/Footer";
import ConsultDoctor from "./components/VideoConsult/ConsultDoctor/ConsultDoctor";
import Textedit11 from "./components/homepage/Textedit11";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeAllData />} />
          <Route path="/FindDocters" element={<FindDocters />} />
          <Route path="/Consult" element={<Consult />} />
          <Route path="/Header" element={<Header />} />

          <Route path="/LabTestAllComp" element={<LabTestAllComp />} />
          <Route path="/Sergeries" element={<Sergeries />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/TaxServer" element={<TaxServer />} />
          <Route path="/LdlServer" element={<LdlServer />} />
          <Route path="/BookedServer" element={<BookedServer />} />
          <Route path="/BookedServer" element={<BookedServer />} />
          <Route path="/Consult-Doctor" element={<ConsultDoctor />} />
          <Route path="/Textedit11" element={<Textedit11/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
