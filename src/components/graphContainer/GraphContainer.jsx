import "../graphContainer/GraphContainer.css";
import { Line, Bar, Doughnut, Pie } from "react-chartjs-2";
import { AlignCenterOutlined, SmileTwoTone } from "@ant-design/icons";

const GraphContainer = ({ jsondata }) => {
  const lineData = {
    labels: jsondata.map(startup =>startup.startupname),
    datasets: [
      {
        label: "INR",
        data: jsondata.map(startup => startup.investmentAmount),
        fill: true,
        borderColor: "rgb(230, 0, 0)",
        tension: 0.1,
        borderWidth: 1,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const barData = {
    labels: jsondata.map(startup =>startup.startupname),
    datasets: [
      {
        label: "INR",
        data: jsondata.map(startup => startup.investmentAmount),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const predefinedColors = [
    "rgba(255, 99, 132, 0.6)",
    "rgba(54, 162, 235, 0.6)",
    "rgba(255, 206, 86, 0.6)",
    "rgba(75, 192, 192, 0.6)",
    "rgba(153, 102, 255, 0.6)",
    "rgba(255, 159, 64, 0.6)",
    "rgba(201, 203, 207, 0.6)",
    "#DAA520",
    "#9ACD32",
    "#87CEFA"
  ];
  
  const colorMap = {};
  let colorIndex = 0;
  
  const getColorForStartup = (startupName) => {
    if (!colorMap[startupName]) {
      colorMap[startupName] = predefinedColors[colorIndex % predefinedColors.length];
      colorIndex++;
    }
    return colorMap[startupName];
  };
  
  // Generate the background color array dynamically based on the labels
  const backgroundColors = jsondata.map(
    (startup) => getColorForStartup(startup.startupname)
  );
  
  const doughnutData = {
    labels: jsondata.map(startup => startup.startupname),
    datasets: [
      {
        label: "INR",
        data: jsondata.map(startup => startup.investmentAmount),
        backgroundColor: backgroundColors,
        borderColor: "#fffff8",
      },
    ],
  };
  


  // const doughnutData = {
  //   labels: jsondata.map(startup =>startup.startupname),
  //   datasets: [
  //     {
  //       label: "INR",
  //       data: jsondata.map(startup => startup.investmentAmount),
  //       backgroundColor: [
  //         "rgba(255, 99, 132, 0.6)",
  //         "rgba(54, 162, 235, 0.6)",
  //         "rgba(255, 206, 86, 0.6)",
  //       ],
  //       borderColor: "#fffff8",
  //     },
  //   ],
  // };

  const pieData = {
    labels: jsondata.map(startup =>startup.startupname),
    datasets: [
      {
        label: "INR",
        data: jsondata.map(startup => startup.investmentAmount),
        backgroundColor: backgroundColors,
        borderColor: "#fffff8"
      },
    ],
  };

  return (
    <div className="">
      <p id="heading-status">Investment Status 📈 </p>
      <p id="welcome-txt">
        Welcome! {jsondata[0].investorInfo.name} <SmileTwoTone />
      </p>
      <div className="graph-div">
        <div className="child-div1">
          <Line data={lineData} />
        </div>

        <div className="child-div2">
          <Bar data={barData} />
        </div>

        <div className="child-div3">
          <Doughnut data={doughnutData} />
        </div>

        <div className="child-div4">
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
};

export default GraphContainer;