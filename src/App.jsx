import {  Route, Routes } from "react-router-dom";
import "./App.css";
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
        <Route path = "/InvestorNavbar" element={ <InvestorNavbar handleClick={handleClick}/> } />
      </Routes>
      <Footer></Footer>
     
    </div>
  );
}

export default App;
