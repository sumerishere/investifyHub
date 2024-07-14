import "../investorsPortfolio/InvestorNavbar.css";
import GraphContainer from "../graphContainer/GraphContainer";
import AsideBar from "./asideComponent/AsideBar";
import BackDrop from "./asideComponent/BackDrop";
import { useState, useEffect } from "react";
import InvestedStartUps from "./Invested-StartUps/InvestedStartUps";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation,Link } from "react-router-dom";

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
              src="./hamburger.png"
              alt="menu"
              onClick={handleClick}/>
  
        <div className="investor-nav-div">

       
            <div className="name-tag">{jsondata[0].investorInfo.username}</div>

            <div className="profile-img-div">

              {jsondata && jsondata[0].investorInfo.image ? (
                      <img
                          className="img-tag"
                          src={`data:image/png;base64, ${jsondata[0].investorInfo.image}`}
                          alt="Profile"
                      />
                  ) : (
                      <img
                          className="img-tag"
                          src="/profile_images/blank-profile-picture-973460_1280.png"
                          alt="Default"
                      />
                  )}
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