import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./startCom.css";
import Startup from "./Startup";
import startUpDataSlice, {addData,selectAllData,} from "../../redux/slice/startUpDataSlice";
import { Select } from "antd";
function StartUpComp() {
  // const dispatch = useDispatch();
  const data = useSelector(selectAllData);
  const [inpvalue, setinp] = useState();
  const [res, setres] = useState([]);

  const [btns, setbtn] = useState({
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingTop: "4px",
    paddingBottom: "4px",
    borderColor: "#ffffff",
    backgroundColor: "#cdcdcd",
    color: "#b2abab",
  });
  function select(val) {
    setinp(val);

    const obj = {
      paddingLeft: "10px",
      paddingRight: "10px",
      paddingTop: "4px",
      paddingBottom: "4px",
      borderColor: "#185c65",
      backgroundColor: "#185c85",
      color: "black",
      borderRadius: "5px",
    };
    setbtn(obj);
  }
  useEffect(() => {
    async function fun() {
      const dt = await fetch(
        `http://localhost:8080/getByIndustry?ind=${inpvalue}`
      );
      const jsonData = await dt.json();
      console.log(jsonData);
      setres(jsonData);
    }
    fun();
  }, [inpvalue]);
  // console.log(data);

  let arr = res.length > 0 ? res : data;

  function reset() {
    const obj = {
      paddingLeft: "10px",
      paddingRight: "10px",
      paddingTop: "4px",
      paddingBottom: "4px",
      borderColor: "#ffffff",
      backgroundColor: "#cdcdcd",
      color: "#b2abab",
    };
    setbtn(obj);
    window.location.reload();
  }

  const industry = new Set(data.map((data) => data.industry));
  const arr1 = Array.from(industry);

  return (
    <div className="cont">
      <div className="drop">
        <div className="se">
          <Select placeholder="Category" onSelect={select}>
            {arr1.map((data) => {
              return (
                <Select.Option
                  className="see"
                  key={data.id}
                  value={`${data}`}
                >{`${data}`}</Select.Option>
              );
            })}
          </Select>
        </div>
        <div className="bt">
          <button className="btn2" style={{ ...btns, cursor: 'pointer' }} onClick={reset}>
            Reset
          </button>
        </div>
      </div>
      <div className="cont2">
        <div className="cont1">
          {arr.map((data) => {
            return (
              <div className="comp" key={data.id}>
                <div className="divimg">
                  <Link
                    to={`/post/${data.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="img1">
                      <img
                        className="img"
                        src={`data:image/jpeg;base64,${data.companyImage}`}
                        alt="imge"
                      />
                    </div>
                    <div className="nm">
                      <h4>{`${data.companyName}`}</h4>
                      <p>{`${data.title}`}</p>
                    </div>
                    <br />
                    <div className="term">
                      <div className="r">
                        <h6>{`${data.raised}`}</h6>
                        <p>raised</p>
                      </div>
                      <div className="r">
                        <h6
                          style={{ paddingLeft: "10px" }}
                        >{`${data.investor}`}</h6>
                        <p style={{ paddingLeft: "10px" }}>investors</p>
                      </div>
                      <div className="r">
                        <h6>{`${data.mininvest}`}</h6>
                        <p>Min.investment</p>
                      </div>
                    </div>
                    <br />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default StartUpComp;
