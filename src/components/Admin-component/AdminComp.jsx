// import React from "react";
// import "../Admin-component/AdminComp.css";


// const AdminComp = () => {
//   const columns = [
//     "id",
//     "name",
//     "mobile_no",
//     "mail_id",
//     "username",
//     "password",
//     "image",
//   ];
//   const data = [
//     {
//       "Column 1": "Data 1",
//       "Column 2": "Data 2",
//       "Column 3": "Data 3",
//       "Column 4": "Data 4",
//       "Column 5": "Data 5",
//       "Column 6": "Data 6",
//       "Column 7": "Data 7",
//     },
//     {
//       "Column 1": "Data 8",
//       "Column 2": "Data 9",
//       "Column 3": "Data 10",
//       "Column 4": "Data 11",
//       "Column 5": "Data 12",
//       "Column 6": "Data 13",
//       "Column 7": "Data 14",
//     },
//     // Add more rows as needed
//   ];

//   return (
//     <div className="Admin-root">
//       <h1>Admin</h1>

//       <div className="table-root-div">
//         <div className="table-container">
//           <h5>Table</h5>
//           <table className="admin-table">
//             <thead>
//               <tr>
//                 {columns.map((column, index) => (
//                   <th key={index}>{column}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((row, rowIndex) => (
//                 <tr key={rowIndex}>
//                   {columns.map((column, colIndex) => (
//                     <td key={colIndex}>{row[column]}</td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminComp;



import React, { useEffect, useState } from "react";
import "../Admin-component/AdminComp.css";

const AdminComp = () => {
  const columns = [
    "investorId",
    "name",
    "mobile_no",
    "mail_id",
    "username",
    "password",
    "image",
  ];
  
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/get-all-investors")

      .then(response => response.json())

      .then(data => {
        const formattedData = data.map(investor => ({
          investorId: investor.investorId,
          name: investor.name,
          mobile_no: investor.mobileNo,
          mail_id: investor.mailId,
          username: investor.username,
          password: investor.password,
          image: investor.image ? (
            <img 
              src={`data:image/png;base64,${btoa(
                String.fromCharCode(...new Uint8Array(investor.image))
              )}`} 
              alt="Investor" 
              style={{ width: "50px", height: "50px" }}
            />
          ) : 'No Image'
        }));
        setData(formattedData);
        console.log(formattedData);
      })
      .catch(error => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div className="Admin-root">
      <h1>Admin</h1>

      <div className="table-root-div">
        <div className="table-container">
          <h5>Investors Table</h5>
          <table className="admin-table">
            <thead>
              <tr>
                {columns.map((column, index) => (
                  <th key={index}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {columns.map((column, colIndex) => (
                    <td key={colIndex}>{row[column]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminComp;
