import React from "react";
import Footer from "../components/Footer";
import HeaderLife from "../components/LifeInsuranceDashboard/HeaderLife";
import HeroLife from "../components/LifeInsuranceDashboard/HeroLife";
import TypeLife from "../components/LifeInsuranceDashboard/TypeLife";

const LifeInsurance = () => {

  return (
    <>
      <HeaderLife/>
      <HeroLife/>
      <TypeLife/>
      <Footer/>
    </>
    
  );
};

export default LifeInsurance;