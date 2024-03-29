import {  Route, Routes } from "react-router-dom";
import "./App.css";
import 'chart.js/auto';  //import the CSS for Chart.js
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";


import Nav from './components/Nav/Nav';
import Startup from "./components/StartUp/Startup";
// import StartUpComp from "./components/StartUp/StartUpComp";
import Home from "./components/home/Home";
import StartUpData from "./components/StartUp/StartUpData";
import InvestorSignUp from "./components/RegisterationComp/InvestorSignUp";
import Login from "./components/Login/Login";
// import { Footer } from "antd/es/layout/layout";
import Footer from "./components/Footer/Footer";
import InvestorNavbar from "./components/investorsPortfolio/InvestoNavbar";

import InvestmentForm from "./components/InvestmentForm/InvestmentForm";
// import { useState } from "react";

function App() {
  const handleClick = () => {
    // Define what happens when the hamburger menu is clicked
    console.log("Hamburger menu clicked");

  };



  return (
    <div className="App">
      {/* <Nav/> */}
      {/* <Link to><StartUpComp/></Link> */}
      {/* <StartUpComp/>
      <Startup/> */}
      <Nav />
      {/* <StartUpData/> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/StartUpData" element={<StartUpData />} />
        <Route path="/post/:id" element={<Startup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/InvestorSignUp" element={<InvestorSignUp />} />
        <Route path = "/InvestorNavbar" element={ <InvestorNavbar handleClick={handleClick} /> } />
        <Route path = "/InvestmentForm" element={<InvestmentForm/>}/>
      </Routes>
      <Footer></Footer>
     
    </div>
  );
}

export default App;
