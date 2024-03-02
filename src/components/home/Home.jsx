import React from 'react'
import FundingComp from '../FundingRules/FundingComp';
import ScrollerBar from '../scrollerLoop/ScrollerBar';
import './home.css'
function Home() {
    return (
        <div className="mcont">
          <div className="root-div">
    
    <div className="child-div">
      <div className="grand-child-div">

      <div className="text-overlay">
          <p id="mid-text">One of those platforms letting you to work with folks who know, love, and support you is investifyHub📈</p>
        </div>

        {/* <p className="mid-text">"One of those platforms letting you to work with folks who know, love, and support you is investifyHub📈"</p> */}

        <img style={{width:'100%',height:'100%'}} src="/homeImage/pexels-1990x910__.jpg" alt="img"/>
      </div>
    </div>

  </div>
        <ScrollerBar/>
        <FundingComp/>
        </div>
      );
}

export default Home
