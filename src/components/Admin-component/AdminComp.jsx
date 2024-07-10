import React, { useEffect, useState } from "react";
import "../Admin-component/AdminComp.css";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { LineChart } from '@mui/x-charts/LineChart';

const AdminComp = () => {


  const columns = [
    "investorId",
    "name",
    "mobile_no",
    "mail_id",
    "username",
    "password",
    // "image",
    "Delete-Entry"
  ];

  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // State to manage the search query
  const [startupData, setStartupData] = useState([]); // State to store invested startup data

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


      // Fetch invested startup data
    fetch("http://localhost:8080/get-invested-startup")

    .then(response => response.json())

    .then(data => {

      const formattedData = data.map(startup => ({

        id: startup.AddStartUp ? startup.AddStartUp.id :'N/A',
        investment_amount: startup.investmentAmount ? startup.investmentAmount : 'N/A',
        startupname: startup.startupname ? startup.startupname : 'N/A',
        investor_id: startup.InvestorInfo ? startup.InvestorInfo.id : 'N/A'

      }));

      setStartupData(formattedData);
      console.log(formattedData);
    })
    .catch(error => console.error("Error fetching startup data: ", error));

  }, []);

  const handleDelete = (investorId) => {

    console.log(`Attempting to delete investor with ID: ${investorId}`);

    fetch(`http://localhost:8080/delete-investor-id/${investorId}`, { method: 'DELETE' })

      .then(response => {
        console.log("Response received:", response);

        if (response.ok) {
          console.log(`Successfully deleted investor with ID: ${investorId}`);
          setData(data.filter(item => item.investorId !== investorId));
        } 
        else {
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

  // Function to handle search
  const handleSearch = () => {

    fetch(`http://localhost:8080/investor-search?name=${searchQuery}`)

      .then(response => {
        
          if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })

      .then(data => {

        if(!Array.isArray(data)){
          throw new Error("Expected as array odf data");
        }

        const formattedData = data.map(investor => ({

          investorId: investor.investorId ? investor.investorId  : 'N/A',
          name: investor.name ? investor.name: 'N/A' ,
          mobile_no: investor.mobileNo ? investor.mobileNo : 'N/A',
          mail_id: investor.mailId ? investor.mailId: 'N/A' ,
          username: investor.username ? investor.username :'N/A' ,
          password: investor.password ? investor.password :'N/A' ,
          // image: investor.image ? (
          //   <img 
          //     src={`data:image/png;base64,${btoa(
          //       String.fromCharCode(...new Uint8Array(investor.image))
          //     )}`} 
          //     alt="Investor" 
          //     style={{ width: "50px", height: "50px" }}
          //   />
          // ) : 'No Image'
        }));

        setData(formattedData); })

      .catch(error => console.error("Error searching data: ", error));
  };

  // const [tickPlacement, setTickPlacement] = useState('between');
  // const [tickLabelPlacement, setTickLabelPlacement] = useState('end');

  // const dataset = [
  //   { month: 'January', value: 30 },
  //   { month: 'February', value: 20 },
  //   { month: 'March', value: 50 },
  //   // Add more data as needed
  // ];

  // const chartSetting = {
  //   width: 600,
  //   height: 300,
  //   margin: { top: 5, right: 30, left: 20, bottom: 5 },
  // };


   
  
  return (
    <div className="Admin-root">

      <div className = "admin-img-div">
        <div className="admin-img-child-div">
          <img  id ="admin-img-id"src="/profile_images/Admin_.png" alt="" />
        </div>
        
      </div>
      <h1 id = "admin-heading">Admin</h1>
      
      <div className="table-root-div">


        <div className="admin-dashboard-div">
          <div className="admin-chart-1">
            <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[
                  {
                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                    area: true,
                    color:"#383232",
                    border: "black"
                  },
                ]}
                width={500}
                height={300}
              /> 
          </div>

          <div className="admin-chart-1">
          <LineChart
                  xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                  series={[
                    {
                      data: [2, 5.5, 2, 8.5, 1.5, 5],
                      area: true,
                      color:"#383232",
                      border: "black"
                    },
                  ]}
                  width={500}
                  height={300}
              /> 
          </div>

          <div className="admin-chart-1">
          <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
              series={[
                {
                  data: [2, 5.5, 2, 8.5, 1.5, 5],
                  area: true,
                  color:"#383232",
                  border: "black"
                },
              ]}
              width={500}
              height={300}
              /> 
          </div>

          <div className="admin-chart-1">
              <LineChart
                  xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                  series={[
                    {
                      data: [2, 5.5, 2, 8.5, 1.5, 5],
                      area: true,
                      color:"#383232",
                      border: "black"
                    },
                  ]}
                  width={500}
                  height={300}
              /> 
          </div>


        </div>

        <div className="heading-div-investor-table">
          <p id="investor-registartion-p">Investors Registration Table</p>
          <div className="investor-search-div">
            <input 
              type="text" 
              id="search-input" 
              placeholder="Search here" 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)}
              />
            <button id="search-btn-investor" onClick={handleSearch}       >Search</button>
        </div>
        </div>
        
        

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
      </div>


       {/* -------------- invested startup data table -------------*/}
      
      <div className="invested-table-heading">
        <p id="invested-table-heading-p">Invested StartUp List Table</p>
      </div>
      <div className="table-container-addstartup">

      <table className="table-addstartup">
          <thead>
            <tr>
              <th>ID</th>
              <th>Amount Invested</th>
              <th>Startupname/compnay</th>
              <th>Investor_Id</th>

            </tr>
          </thead>
          <tbody>
            {startupData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td>{row.id}</td>
                <td>{row.investment_amount}</td>
                <td>{row.startupname}</td>
                <td>{row.investor_id}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>


    </div>
  );
};

export default AdminComp;
