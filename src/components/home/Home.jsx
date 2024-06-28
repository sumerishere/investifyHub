import React from "react";
import FundingComp from "../FundingRules/FundingComp";
import ScrollerBar from "../scrollerLoop/ScrollerBar";
import "./home.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addData } from "../../redux/slice/startUpDataSlice";
import { useState,useEffect } from "react";
import InfoContainer from "../infoContainer/InfoContainer";
import { dotStream } from "ldrs";
// import axios from '../axiosConfig'; // Import the configured axios instance

dotStream.register();

function Home() {

  const [loading, setLoading] = useState(false); // State to manage loading spinner
  const dispatch = useDispatch();

  useEffect(() => {

    async function fun() {
      setLoading(true); // Start spinner on form submission
      try{
        const data = await fetch("http://localhost:8080/get-all");
        const jsondata = await data.json();
        jsondata.forEach((element) => {
          dispatch(addData(element));
        });
      }
      catch (error) {
        console.error("Error fetching data", error);
      }
      finally {
         setLoading(false); // Stop spinner after fetch completes
      }
    }
    fun();
  }, []);
  

  return (
    <div className="mcont">
      <div className="root-div">
        <div className="child-div">
          <div className="grand-child-div">
            <div className="text-overlay">
              <p id="mid-text">
                "One of those platforms letting you to work with folks who know,
                love, and support you is investifyHub📈"
              </p>
            </div>

            <img
              style={{ width: "100%", height: "100%" }}
              src="/homeImage/pexels-1990x910__.jpg"
              alt="img"
            />
          </div>
        </div>
      </div>
      <ScrollerBar />
      <FundingComp />
      <InfoContainer />
      {loading && (
        <div className="spinner">
          <l-dot-stream size="88" speed="" color="#4287b8"></l-dot-stream>
        </div>
      )}
    </div>
  );
}

export default Home;

// import { useState, useEffect } from "react";

// function Home() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const images = [
//     "/homeImage/pexels-1990x910__.jpg",
//     "/homeImage/business-8577370_1920.jpg"
//     // Add more image URLs here
//   ];

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentImageIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 2000); // Change image every 5 seconds

//     return () => clearInterval(intervalId);
//   }, [images.length]);

//   return (
//     <div className="mcont">
//       <div className="root-div">
//         <div className="child-div">
//           <div className="grand-child-div">
//             <div className="text-overlay">
//               <p id="mid-text">
//                 One of those platforms letting you to work with folks who know,
//                 love, and support you is investifyHub📈
//               </p>
//             </div>
//             {images.map((imageUrl, index) => (
//               <img
//                 key={index}
//                 style={{
//                   // width: "100%",
//                   opacity: index === currentImageIndex ? 1 : 0,
//                   transition: "opacity 1s ease-in-out",
//                   position: "relative",
//                   // top: 0, // Adjust position as needed
//                   zIndex: index === currentImageIndex ? 1 : 0,
//                 }}

//                 src={imageUrl}
//                 alt={`img ${index}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//       <ScrollerBar />
//       <FundingComp />
//     </div>
//   );
// }

// export default Home;

// import React, {useEffect } from "react";
// import FundingComp from "../FundingRules/FundingComp";
// import ScrollerBar from "../scrollerLoop/ScrollerBar";
// import "./home.css";
// import { useDispatch } from "react-redux";
// import { addData } from "../../redux/slice/startUpDataSlice";
// import axios from '../../axiosConfig'; // Import the configured axios instance
// import InfoContainer from "../infoContainer/InfoContainer";

// // import { dotStream } from "ldrs";
// // dotStream.register();

// function Home() {

//   // const [loading, setLoading] = useState(false); // State to manage loading spinner

//   const dispatch = useDispatch();

//   useEffect(() => {
//     async function fetchData() {
//       // setLoading(true); // Start spinner on form submission
//       try {
//         const response = await axios.get("http://localhost:8080/get-all");
//         const jsonData = response.data;

//         jsonData.forEach((element) => {
//           dispatch(addData(element));
//         });

//       } catch (error) {
//         console.error("Error fetching data", error);
//         // Handle error appropriately (e.g., redirect to login if unauthorized)
//       }
//       //  finally {
//       //   setLoading(false); // Stop spinner after fetch completes
//       // }

//     }
//     fetchData();
//   }, [dispatch]);

//   return (
//     <div className="mcont">
//       <div className="root-div">
//         <div className="child-div">
//           <div className="grand-child-div">
//             <div className="text-overlay">
//               <p id="mid-text">
//                 "One of those platforms letting you to work with folks who know,
//                 love, and support you is investifyHub📈"
//               </p>
//             </div>
//             <img
//               style={{ width: "100%", height: "100%" }}
//               src="/homeImage/pexels-1990x910__.jpg"
//               alt="img"
//             />
//           </div>
//         </div>
//       </div>
//       <ScrollerBar />
//       <FundingComp />
//       <InfoContainer />

//       {/* {loading && (
//         <div className="spinner">
//           <l-dot-stream size="40" speed="" color=" #69397e"></l-dot-stream>
//         </div>
//       )} */}

//     </div>
//   );
// }

// export default Home;
