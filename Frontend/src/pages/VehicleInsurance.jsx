import React from "react";
import HeaderVehicle from "../components/VehicleInsuranceDashboard/HeaderVehicle";
import HeroVehicle from "../components/VehicleInsuranceDashboard/HeroVehicle";
import TypeVehicle from "../components/VehicleInsuranceDashboard/TypeVehicle";
import VechiclePolicyCover from "../components/VehicleInsuranceDashboard/VechiclePolicyCover";
import VehiclePoints from "../components/VehicleInsuranceDashboard/VehiclePoints";
import VehicleBenefits from "../components/VehicleInsuranceDashboard/VehicleBenefits";
import Footer from "../components/MainDashboard/Footer";


const VehicleInsurance = () => {

  return (
    <>
    <HeaderVehicle/>
    <HeroVehicle/>
    <TypeVehicle/>
    <VechiclePolicyCover/>
    <VehiclePoints/>
    <VehicleBenefits/>
    <Footer/>    
    </>
    
  );
};

export default VehicleInsurance;