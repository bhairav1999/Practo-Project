import React from "react";
import Benefits from "./Benefits";
import Experience from "./Experience";
import CommanHealth from "./CommanHealth";
import Faqs from "./Faqs";
import Special from "./Special";
import HealthQueries from "./HealthQueries";
import OurDoctors from "./OurDoctors";
import Offers from "./Offers";
import ConsultHeader from "./ConsultHeader";

const ConsultSection = () => {
  return (
    <div>
      <ConsultHeader />
      <Special />
      <CommanHealth />
      <Offers />
      <OurDoctors />
      <Benefits />
      <Experience />
      <Faqs />
      <HealthQueries />
    </div>
  );
};

export default ConsultSection;
