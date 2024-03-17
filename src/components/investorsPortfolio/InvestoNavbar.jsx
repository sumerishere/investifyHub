import "../investorsPortfolio/InvestorNavbar.css";
import GraphContainer from "../graphContainer/GraphContainer";
import AsideBar from "./asideComponent/AsideBar";
import BackDrop from "./asideComponent/BackDrop";
import { useState } from "react";
import InvestedStartUps from "./Invested-StartUps/InvestedStartUps";
import { toast, ToastContainer  } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const InvestorNavbar = () => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
 
  const notify = () => {
    toast.success("Login Successfully!",{
    position: "top-center",
    autoClose: 3000
    });
  }
  // notify();

  return (
    <div className="portfolio-div">
     
      <div className="investor-child-div">
        <img
          className="aside-img"
          src="/hamburger.png"
          alt="menu"
          onClick={handleClick}
        />

        <div className="investor-nav-div">
          {/* <a className="a-signOut" href="#!">
            Sign Out
          </a> */}
          <p className="name-tag">Sumer Khan</p>

          <div className="profile-img-div">
            <img
              className="img-tag"
              src="/profile_images/crop_size_img.jpg"
              alt="img"
            />
          </div>
        </div>
      </div>
      <BackDrop click={handleClick} open={open}></BackDrop>
      <AsideBar open={open}></AsideBar>
      <GraphContainer></GraphContainer>
      <InvestedStartUps></InvestedStartUps>
      <ToastContainer/>
      
    </div>
  );
};

export default InvestorNavbar;
