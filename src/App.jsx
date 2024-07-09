import {  Route, Routes } from "react-router-dom";
// import { useState } from "react";
import "./App.css";
import 'chart.js/auto';
import Nav from './components/Nav/Nav';
import Startup from "./components/StartUp/Startup";
import Home from "./components/home/Home";
import StartUpData from "./components/StartUp/StartUpData";
import InvestorSignUp from "./components/RegisterationComp/InvestorSignUp";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import InvestorNavbar from "./components/investorsPortfolio/InvestoNavbar";
import InvestmentForm from "./components/InvestmentForm/InvestmentForm";
import AddStartUpBtn from "./components/AddStartUpBtn/AddStartUpBtn";
import AdminComp from "./components/Admin-component/AdminComp";
import PaymentComp from "./components/Payment-form/PaymentComp";

import SubmitBtnComp from "./components/alert-comp/SubmitBtnComp.jsx";

import AlertComp from "./components/alert-comp/AlertComp/AlertComp.jsx";

function App() {


  const handleClick = () => {
    // Define what happens when the hamburger menu is clicked
    console.log("Hamburger menu clicked");
  };

  return (
    <div className="App">

      <Nav />
      
      {/* <StartUpData/> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/StartUpData" element={<StartUpData />} />
        <Route path="/post/:id" element={<Startup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/InvestorSignUp" element={<InvestorSignUp />} />
        <Route path = "/InvestorNavbar" element={ <InvestorNavbar handleClick={handleClick} /> } />
        <Route path = "/InvestmentForm" element={<InvestmentForm /> }/>
        <Route path = "/AddStartUpBtn" element = {<AddStartUpBtn/>} />
        <Route path = "/PaymentComp" element={<PaymentComp/>}/>
        
        <Route path = "/AdminComp" element={
          <AdminComp/>} />

        <Route path = "/SubmitBtnComp" element={<SubmitBtnComp/>}/>

        <Route path = "/AlertComp" element={<AlertComp/>}/>

      </Routes>

      <Footer></Footer>
     
    </div>
  );
}

export default App;