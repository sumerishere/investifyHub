import { Button, Input } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import "./nav.css";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import Startup from "../StartUp/Startup";

function Nav() {
  const [id, setId] = useState(null);
  const inpvalue = useRef("");
  const history = useNavigate();

  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname); // Set the active link based on the current path
  }, [location.pathname]);

  const handleNavClick = (path) => {
    setActiveLink(path); // Update the active link state
  };


  const getLinkStyle = (path) => ({
    textDecoration: 'none',
    color: activeLink === path ? '#2c9aaa' : 'white',
  });


  async function fun() {
    let val = inpvalue.current.input.defaultValue;
    val = val.toUpperCase();

    const dt = await fetch(`http://localhost:8080/company-search?name=${val}`);
    const data = await dt.json();

    if (data.length > 0) {
      console.log(data[0]);
      setId(data[0].id);
      history(`/post/${data[0].id}`);
    } else {
      setId(null);
    }
    inpvalue.current.input.defaultValue = "";
  }

  return (
    <div className="nav">
      <div className="navcontent">
        <div className="left">
          <div className="logo">
            <p id="title-p">
              <Link to="/" style={{ textDecoration: "none", color: "#2c9aa9" }}>
                investifyHub📈
              </Link>
            </p>

            <p className="sub-text">elevate your investments</p>
          </div>
          <div className="input">
            <Input placeholder="Explore Investments" ref={inpvalue} />
            <Button onClick={fun}>
              <SearchOutlined />
            </Button>
          </div>
        </div>
        <div className="right">
          <div className="rcont">
            <ul>

            <li onClick={() => handleNavClick('/')}>
                <Link to='/' style={getLinkStyle('/')}>Home</Link>
              </li>

              <li className="btn1">
                <Link
                  to="/StartUpData"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Start Investing
                </Link>
              </li>

              <li onClick={() => handleNavClick('/Login')}>
                <Link to='/Login' style={getLinkStyle('/Login')}>Log In</Link>
              </li>
              <li onClick={() => handleNavClick('/InvestorSignUp')}>
                <Link to='/InvestorSignUp' style={getLinkStyle('/InvestorSignUp')}>Sign Up</Link>
              </li>


            </ul>
          </div>
        </div>
      </div>
      {id && <Startup id={id} />}
    </div>
  );
}

export default Nav;
