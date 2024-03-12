import "../graphContainer/GraphContainer.css";
import { Line, Bar, Doughnut, Pie } from "react-chartjs-2";

const GraphContainer = () => {
  const lineData = {
    labels: [
      "STORM-MOTORS",
      "ideaForage",
      "PharmaEasy",
      "Swiggy",
      "RazorPay",
      "intello-Lab",
      "Skyroot",
    ],
    datasets: [
      {
        label: "My Start-Ups %",
        data: [18, 40, 50, 81, 57, 73, 33],
        fill: true,
        borderColor: "rgb(230, 0, 0)",
        tension: 0.1,
        borderWidth: 1, 
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        
      },
    ],
  };

  const barData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "Bar Chart",
        data: [47, 20, 30, 75, 50, 64, 70],
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

  const doughnutData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "Doughnut Chart",
        data: [300, 50, 120],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
        ],
      },
    ],
  };

  const pieData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "Pie Chart",
        data: [150, 90, 120, 230],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
        ],
      },
    ],
  };

  return (
    <div className="">
      <p id="heading-status">Start-Ups Status</p>
      <p id="welcome-txt">Welcome! Sumer Khan</p>
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
