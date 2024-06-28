// import React, { useEffect, useState } from "react";
// import "../Admin-component/AdminComp.css";

// const AdminComp = () => {
//   const columns = [
//     "investorId",
//     "name",
//     "mobile_no",
//     "mail_id",
//     "username",
//     "password",
//     "image",
//     "Delete-Entry"
//   ];
  
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:8080/get-all-investors")
//       .then(response => response.json())
//       .then(data => {
//         const formattedData = data.map(investor => ({
//           investorId: investor.investorId,
//           name: investor.name,
//           mobile_no: investor.mobileNo,
//           mail_id: investor.mailId,
//           username: investor.username,
//           password: investor.password,
//           image: investor.image ? (
//             <img 
//               src={`data:image/png;base64,${btoa(
//                 String.fromCharCode(...new Uint8Array(investor.image))
//               )}`} 
//               alt="Investor" 
//               style={{ width: "50px", height: "50px" }}
//             />
//           ) : 'No Image'
//         }));
//         setData(formattedData);
//         console.log(formattedData);
//       })
//       .catch(error => console.error("Error fetching data: ", error));
//   }, []);

//   const handleDelete = (investorId) => {
//     if (window.confirm(`Are you sure you want to delete investor with ID: ${investorId}?`)) {
//       console.log(`Attempting to delete investor with ID: ${investorId}`);
//       fetch(`http://localhost:8080/delete-investor-id/${investorId}`, { method: 'DELETE' })
//         .then(response => {
//           console.log("Response received:", response);
//           if (response.ok) {
//             console.log(`Successfully deleted investor with ID: ${investorId}`);
//             setData(data.filter(item => item.investorId !== investorId));
//           } else {
//             console.error("Error deleting data");
//           }
//         })
//         .catch(error => console.error("Error deleting data: ", error));
//     }
//   };

//   return (
//     <div className="Admin-root">
//       <h1>Admin</h1>
      
//       <div className="table-root-div">
//         <div className="table-container">
//           <h5>Investors Table</h5>
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
//                     <td key={colIndex}>
//                       {column === "Delete-Entry" ? (
//                         <button id="delete-btn" onClick={() => handleDelete(row.investorId)}>
//                           Delete
//                         </button>
//                       ) : (
//                         row[column]
//                       )}
//                     </td>
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
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const AdminComp = () => {
  const columns = [
    "investorId",
    "name",
    "mobile_no",
    "mail_id",
    "username",
    "password",
    "image",
    "Delete-Entry"
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

  const handleDelete = (investorId) => {
    console.log(`Attempting to delete investor with ID: ${investorId}`);
    fetch(`http://localhost:8080/delete-investor-id/${investorId}`, { method: 'DELETE' })
      .then(response => {
        console.log("Response received:", response);
        if (response.ok) {
          console.log(`Successfully deleted investor with ID: ${investorId}`);
          setData(data.filter(item => item.investorId !== investorId));
        } else {
          console.error("Error deleting data");
        }
      })
      .catch(error => console.error("Error deleting data: ", error));
  };

  const confirmDelete = (investorId) => {
    confirmAlert({
      title: 'Confirm to delete 🥺',
      message: `Are you sure you want to delete this investor with ID: ${investorId} ?`,
      buttons: [
        {
          label: 'Yes',
          onClick: () => handleDelete(investorId)
        },
        {
          label: 'No'
        }
      ]
    });
  };

  return (
    <div className="Admin-root">
      <h1 id = "admin-heading">Admin</h1>
      
      {/* <div className="table-root-div"> */}

        <h5>Investors Table</h5>
        <div className="table-container">
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
                    <td key={colIndex}>
                      {column === "Delete-Entry" ? (
                        <button id="delete-btn" onClick={() => confirmDelete(row.investorId)}>
                          Delete
                        </button>
                      ) : (
                        row[column]
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      {/* </div> */}
    </div>
  );
};

export default AdminComp;
