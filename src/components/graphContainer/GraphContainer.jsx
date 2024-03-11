import "../graphContainer/GraphContainer.css";

const GraphContainer = () => {
  
   // const chartRef = useRef(null);

  // useEffect(() => {
  //   const ctx = chartRef.current.getContext('2d');

  //   new Chart(ctx, {
  //     type: 'bar',
  //     data: {
  //       labels: ['RedBull', 'wellfound', 'Bluebez', 'Green.io', 'Oath', 'skillup.AI'],
  //       datasets: [{
  //         label: 'Top Funded Companies in %',
  //         backgroundColor: ['#ac8eec', '#ec8eec', '#gc8eec'],
  //         data: [17, 28, 37, 44, 50, 35, 65, 86, 90, 100],
  //         borderWidth: 1
  //       }]
  //     },
  //     options: {
  //       scales: {
  //         y: {
  //           beginAtZero: true
  //         }
  //       }
  //     }
  //   });
  // }, []);

  return (

    <div className="root-div">
      <div className="graph-div">
        <div className="child-div1">Container - 1</div>

        <div className="child-div2">container - 2</div>

        <div className="child-div3">container - 3</div>

        <div className="child-div4">container - 4</div>
      </div>
    </div>
  );
};

export default GraphContainer;
