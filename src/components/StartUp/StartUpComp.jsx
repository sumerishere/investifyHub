import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./startCom.css";
import { selectAllData } from "../../redux/slice/startUpDataSlice";
import AddStartUpBtn from "../AddStartUpBtn/AddStartUpBtn";

function StartUpComp() {
  const data = useSelector(selectAllData);
  const [inpvalue, setinp] = useState();
  const [res, setres] = useState([]);
  const [error, setError] = useState(false);

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
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:8080/getbyName?cname=${inpvalue}`);
        if (!response.ok) throw new Error("Network response was not ok");
        const jsonData = await response.json();
        setres(jsonData);
        setError(false);
      } catch (error) {
        console.log("startComp error: ", error);
        setError(true);
      }
    }
    if (inpvalue) {
      fetchData(); // Only fetch data if inpvalue is defined
    }
  }, [inpvalue]); // Dependency on inpvalue

  // Use the fetched data if available, otherwise fallback to the default data
  let arr = res.length > 0 ? res : data;

  return (
    <div className="cont">
      {error ? (
                <div className="server-img-div">
                  <p id="server-error-text">OOPs!! Server Not Responding 😔</p>

                  <p id="question-mark-id">?</p>
                  <img id="server-error-img" src="/server-error-bg.jpg" alt="Server Error" />
                </div>
      ) : (
        <>
          <div className="cont2">
            <div>
              <Link to={'/AddStartUpBtn'} style={{ textDecoration: "none" }}>
                <button id="add-startup-btn">
                  <span>Be part of investifyHub📈</span>
                </button>
              </Link>
            </div>

            <div className="cont1">
              {arr.map((data) => (
                <div className="comp" key={data.id}>
                  <div className="divimg">
                    <Link to={`/post/${data.id}`} style={{ textDecoration: "none" }}>
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
                          <h6 style={{ paddingLeft: "10px" }}>{`${data.investor}`}</h6>
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
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default StartUpComp;








/* <div className="drop"> */
        /* pending issue of category */
        /* <div className="se">
          <Select placeholder="Category" onSelect={select} 
          open={hovered} // Open the Select component when hovered
          value={selectedOption}
          >
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
        </div> */
        /* <div className="bt">
          <button className="btn2" style={{ ...btns, cursor: 'pointer' }} onClick={reset}>
            Reset
          </button>
        </div> */
      /* </div> */


      //---old -code--

// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import "./startCom.css";
// // import Startup from "./Startup";
// import {selectAllData} from "../../redux/slice/startUpDataSlice";
// // import { Select } from "antd";

// function StartUpComp() {
//   // const dispatch = useDispatch();
//   const data = useSelector(selectAllData);
//   const [inpvalue, setinp] = useState();
//   const [res, setres] = useState([]);

//   const [btns, setbtn] = useState({
//     paddingLeft: "10px",
//     paddingRight: "10px",
//     paddingTop: "4px",
//     paddingBottom: "4px",
//     borderColor: "#ffffff",
//     backgroundColor: "#cdcdcd",
//     color: "#b2abab",
//   });
//   function select(val) {
//     setinp(val);

//     const obj = {
//       paddingLeft: "10px",
//       paddingRight: "10px",
//       paddingTop: "4px",
//       paddingBottom: "4px",
//       borderColor: "#185c65",
//       backgroundColor: "#185c85",
//       color: "black",
//       borderRadius: "5px",
//     };
//     setbtn(obj);
//   }
//   useEffect(() => {
//     async function fun() {
//       const dt = await fetch(`http://localhost:8080/getbyName?cname=${inpvalue}`);
//       const jsonData = await dt.json();
//       console.log(jsonData);
//       setres(jsonData);
//     }
//     fun();
//   }, [inpvalue]);
//   // console.log(data);

//    // Use the fetched data if available, otherwise fallback to the default data
//   let arr = res.length > 0 ? res : data;


//   return (
//     <div className="cont">

//       <div className="cont2">
//         <div className="cont1">
//           {arr.map((data) => {
//             return (
//               <div className="comp" key={data.id}>
//                 <div className="divimg">

//                   <Link
//                     to={`/post/${data.id}`}
//                     style={{ textDecoration: "none" }}
//                   >
//                     <div className="img1">
//                       <img
//                         className="img"
//                         src={`data:image/jpeg;base64,${data.companyImage}`}
//                         alt="imge"
//                       />
//                     </div>
//                     <div className="nm">
//                       <h4>{`${data.companyName}`}</h4>
//                       <p>{`${data.title}`}</p>
//                     </div>
//                     <br />
//                     <div className="term">
//                       <div className="r">
//                         <h6>{`${data.raised}`}</h6>
//                         <p>raised</p>
//                       </div>
//                       <div className="r">
//                         <h6
//                           style={{ paddingLeft: "10px" }}
//                         >{`${data.investor}`}</h6>
//                         <p style={{ paddingLeft: "10px" }}>investors</p>
//                       </div>
//                       <div className="r">
//                         <h6>{`${data.mininvest}`}</h6>
//                         <p>Min.investment</p>
//                       </div>
//                     </div>
//                     <br />
//                   </Link>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default StartUpComp;




//---reset btn---//

 // function reset() {
  //   const obj = {
  //     paddingLeft: "10px",
  //     paddingRight: "10px",
  //     paddingTop: "4px",
  //     paddingBottom: "4px",
  //     borderColor: "#ffffff",
  //     backgroundColor: "#cdcdcd",
  //     color: "#b2abab",
  //   };
  //   setbtn(obj);
  //   window.location.reload();
  // }

  // const industry = new Set(data.map((data) => data.industry));
  // const arr1 = Array.from(industry);