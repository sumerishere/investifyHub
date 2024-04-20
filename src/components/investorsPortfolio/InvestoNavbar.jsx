import "../investorsPortfolio/InvestorNavbar.css";
import GraphContainer from "../graphContainer/GraphContainer";
import AsideBar from "./asideComponent/AsideBar";
import BackDrop from "./asideComponent/BackDrop";
import { useState, useEffect } from "react";
import InvestedStartUps from "./Invested-StartUps/InvestedStartUps";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";

const InvestorNavbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { jsondata } = location.state || {};
  console.log(jsondata);
  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const notify = () => {
      toast.success("Login Successfully!", {
        position: "top-center",
        autoClose: 3000,
      });
    };
    // Call notify function when component mounts
    notify();
  }, []); // Empty dependency array ensures it runs only once on mount

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
          <div className="name-tag">{jsondata[0].investorInfo.name}</div>

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
      <GraphContainer jsondata={jsondata}></GraphContainer>
      <InvestedStartUps jsondata={jsondata}></InvestedStartUps>
      <ToastContainer />
    </div>
  );
};

export default InvestorNavbar;
