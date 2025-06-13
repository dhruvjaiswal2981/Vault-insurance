import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import InsuranceSections from './components/InsuranceSections';
import CoreValuesSection from './components/CoreValuesSection';
import About from './components/About';
import Statistics from './components/Statistics';
import Contact from './components/Contact';
import Footer from './components/Footer';

import LifeInsurance from './pages/LifeInsurance';
import HealthInsurance from './pages/HealthInsurance';
import VehicleInsurance from './pages/VehicleInsurance';
import BusinessInsurance from './pages/BusinessInsurance';

import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import NotFound from './pages/NotFound';


function MainWebsite() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <InsuranceSections />
        <CoreValuesSection />
        <About />
        <Statistics />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<MainWebsite />} />
      <Route path="/life-insurance" element={<LifeInsurance />} />
      <Route path="/health-insurance" element={<HealthInsurance />} />
      <Route path="/vehicle-insurance" element={<VehicleInsurance />} />
      <Route path="/business-insurance" element={<BusinessInsurance />} />
      <Route path="/contact" element={<Contact />} />
      <Route path='/not-found' element={<NotFound/>}/>
      <Route path="/admin" element={<LoginPage onLoginSuccess={() => setIsLoggedIn(true)} />} />
      <Route
        path="/admin/dashboard"
        element={isLoggedIn ? <AdminDashboard /> : <Navigate to="/admin" replace />}
      />
    </Routes>
  );
}

export default App;
