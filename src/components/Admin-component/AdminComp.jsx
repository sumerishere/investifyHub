import React, { useEffect, useState } from "react";
import "../Admin-component/AdminComp.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
// import { LineChart } from '@mui/x-charts/LineChart';

const AdminComp = () => {


  const columns = [
    "investorId",
    "name",
    "mobile_no",
    "mail_id",
    "username",
    "password",
    // "image",
    "Delete-Entry",
  ];

  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State to manage the search query
  const [startupData, setStartupData] = useState([]); // State to store invested startup data

  useEffect(() => {
    fetch("http://localhost:8080/get-all-investors")
      .then((response) => response.json())

      .then((data) => {
        const formattedData = data.map((investor) => ({
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
          ) : (
            "No Image"
          ),
        }));

        setData(formattedData);
        console.log(formattedData);
      })

      .catch((error) => console.error("Error fetching data: ", error));

    // Fetch invested startup data
    fetch("http://localhost:8080/get-invested-startup")
      .then((response) => response.json())

      .then((data) => {
        const formattedData = data.map((startup) => ({
          id: startup.AddStartUp ? startup.AddStartUp.id : "N/A",
          investment_amount: startup.investmentAmount
            ? startup.investmentAmount
            : "N/A",
          startupname: startup.startupname ? startup.startupname : "N/A",
          investor_id: startup.InvestorInfo ? startup.InvestorInfo.id : "N/A",
        }));

        setStartupData(formattedData);
        console.log(formattedData);
      })
      .catch((error) => console.error("Error fetching startup data: ", error));
  }, []);

  const handleDelete = (investorId) => {
    console.log(`Attempting to delete investor with ID: ${investorId}`);

    fetch(`http://localhost:8080/delete-investor-id/${investorId}`, {
      method: "DELETE",
    })
      .then((response) => {
        console.log("Response received:", response);

        if (response.ok) {
          console.log(`Successfully deleted investor with ID: ${investorId}`);
          setData(data.filter((item) => item.investorId !== investorId));
        } else {
          console.error("Error deleting data");
        }
      })
      .catch((error) => console.error("Error deleting data: ", error));
  };

  const confirmDelete = (investorId) => {
    confirmAlert({
      title: "Confirm to delete 🥺",
      message: `Are you sure you want to delete this investor with ID: ${investorId} ?`,
      buttons: [
        {
          label: "Yes",
          onClick: () => handleDelete(investorId),
        },
        {
          label: "No",
        },
      ],
    });
  };

  // Function to handle search
  const handleSearch = () => {
    fetch(`http://localhost:8080/investor-search?name=${searchQuery}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })

      .then((data) => {
        if (!Array.isArray(data)) {
          throw new Error("Expected as array odf data");
        }

        const formattedData = data.map((investor) => ({
          investorId: investor.investorId ? investor.investorId : "N/A",
          name: investor.name ? investor.name : "N/A",
          mobile_no: investor.mobileNo ? investor.mobileNo : "N/A",
          mail_id: investor.mailId ? investor.mailId : "N/A",
          username: investor.username ? investor.username : "N/A",
          password: investor.password ? investor.password : "N/A",
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

        setData(formattedData);
      })

      .catch((error) => console.error("Error searching data: ", error));
  };


  //--admin chart-1--//
  
  const dataset = [
    { name: 'Austria', code: 'AT', gdp: 471 },
    { name: 'Belgium', code: 'BE', gdp: 583 },
    { name: 'Bulgaria', code: 'BG', gdp: 90.35 },
    { name: 'Croatia', code: 'HR', gdp: 71.6 },
    { name: 'Czech Republic', code: 'CZ', gdp: 291 },
    { name: 'Denmark', code: 'DK', gdp: 400 },
    { name: 'Finland', code: 'FI', gdp: 283 },
    { name: 'France', code: 'FR', gdp: 2779 },
    { name: 'Germany', code: 'DE', gdp: 4082 },
    { name: 'Greece', code: 'GR', gdp: 218 },
    { name: 'Hungary', code: 'HU', gdp: 177 },
    { name: 'Ireland', code: 'IE', gdp: 533 },
    { name: 'Italy', code: 'IT', gdp: 2050 },
    { name: 'Netherlands', code: 'NL', gdp: 1009 },
    { name: 'Poland', code: 'PL', gdp: 688 },
    { name: 'Portugal', code: 'PT', gdp: 255 },
    { name: 'Romania', code: 'RO', gdp: 301 },
    { name: 'Slovakia', code: 'SK', gdp: 115 },
    { name: 'Spain', code: 'ES', gdp: 1418 },
    { name: 'Sweden', code: 'SE', gdp: 591 },
  ];


  const chartParams = {
    yAxis: [
      {
        label: 'GDP (million $USD)',
      },
    ],
    series: [
      {
        label: 'GDP',
        dataKey: 'gdp',
        valueFormatter: (v) =>
          new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            compactDisplay: 'short',
            notation: 'compact',
          }).format((v || 0) * 1_000_000),
      },
    ],
    slotProps: { legend: { hidden: true } },
    dataset,
    width: 600,
    height: 400,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'translate(-12px, 0)',
      },
    },
  };
  
  // admin chart-4

  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
  ];

  return (
    <div className="Admin-root">
      <div className="admin-img-div">
        <div className="admin-img-child-div">
          <img id="admin-img-id" src="/profile_images/Admin_.png" alt="" />
        </div>
      </div>
      <h1 id="admin-heading">Admin</h1>

      <div className="table-root-div">
        <div className="admin-dashboard-div">
          <div className="admin-chart-1">

          <BarChart
              xAxis={[
                {
                  scaleType: 'band',
                  dataKey: 'code',
                  valueFormatter: (code, context) =>
                    context.location === 'tick'
                      ? code
                      : `Country: ${dataset.find((d) => d.code === code)?.name} (${code})`,
                },
              ]}
              {...chartParams}
            /> 
          </div>           
          <div className="admin-chart-2">
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 10, label: 'series A', color:'#D5025F' },
                    { id: 1, value: 15, label: 'series B', color:'#5698CD' },
                    { id: 2, value: 20, label: 'series C' ,color:'#8ABF62'},
                  ],
                },
              ]}
              width={400}
              height={250}/>

          </div>

          <div className="admin-chart-3">
            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 10, 11, 12, 13, 14] }]}
              series={[
                {
                  data: [2, 5.5, 2, 8.5, 1.5, 4,6,7.6,3,1],
                  area: true,
                  color: "#96662F",
                  border: "black",
                },]}
              width={500}
              height={300}
            />
          </div>

          <div className="admin-chart-4">
            <LineChart
              width={500}
              height={300}
              series={[
                { data: pData, label: 'pv' },
                { data: uData, label: 'uv' },
              ]}
              xAxis={[{ scaleType: 'point', data: xLabels }]}
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
            <button id="search-btn-investor" onClick={handleSearch}>
              Search
            </button>
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
                        <button
                          id="delete-btn"
                          onClick={() => confirmDelete(row.investorId)}
                        >
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
