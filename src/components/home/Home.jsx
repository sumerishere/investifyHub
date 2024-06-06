import React from "react";
import FundingComp from "../FundingRules/FundingComp";
import ScrollerBar from "../scrollerLoop/ScrollerBar";
import "./home.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addData } from "../../redux/slice/startUpDataSlice";
import { useEffect } from "react";
import InfoContainer from "../infoContainer/InfoContainer";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fun() {
      const data = await fetch("http://localhost:8080/get-all");
      const jsondata = await data.json();
      jsondata.forEach((element) => {
        dispatch(addData(element));
      });
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
      <InfoContainer/>
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
