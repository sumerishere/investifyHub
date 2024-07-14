import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addData } from '../../redux/slice/startUpDataSlice';
import StartUpComp from './StartUpComp';
import "./startCom.css";

function StartUpData() {
    const dispatch = useDispatch();
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:8080/get-all');
                if (!response.ok) throw new Error("Network response was not ok");
                const jsondata = await response.json();
                jsondata.forEach(element => {
                    dispatch(addData(element));
                });
                setError(false); // Reset error if data fetching is successful
            } catch (error) {
                console.log("Error fetching data: ", error);
                setError(true); // Set error to true if there was an error
            }
        }
        fetchData();
    }, [dispatch]);

    return (
        <div>
            {error ? (
                <div className="server-img-div">
                    <p id="server-error-text">OOPs!! Server Not Responding 😔</p>

                    <p id="question-mark-id">?</p>
                    <img id="server-error-img" src="/server-error-bg.jpg" alt="Server Error" />
                </div>
            ) : (
                <div className="cont">
                    <StartUpComp />
                </div>
            )}
        </div>
    );
}

export default StartUpData;

// import React, { useEffect } from 'react'
// import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom'
// import { addData } from '../../redux/slice/startUpDataSlice';
// import StartUpComp from './StartUpComp';

// function StartUpData() {

//     const dispatch = useDispatch();
    
//     useEffect(()=>{
//         async function fun(){
//             const data = await fetch('http://localhost:8080/get-all');
//             const jsondata = await data.json();
//             jsondata.forEach(element => {
//                 dispatch(addData(element));
//             });
//         }
//         fun();
//     },[])

//   return (
//     <div>
//         <StartUpComp/>
//     </div>
//   )
// }

// export default StartUpData