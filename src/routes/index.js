import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import OurTeam from "../pages/ourTeam";
import Property from "../pages/Property";
import Policy from "../pages/policy";
import TermOfService from "../pages/tremsofServices";
import ContactUs from "../pages/contactus";
import PropertyOwner from "../pages/propertyOwner";
import Details from "../pages/details";
import React from "react";
import News from "../pages/news";
export default function Routers() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/property-owner" element={<PropertyOwner />} />

        <Route path="/details" element={<Details />} />
        <Route path="/properties" element={<Property />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/TermOfService" element={<TermOfService />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
    </Router>
  );
}
