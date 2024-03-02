import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {Link} from 'react-scroll';
import { selectAllData } from '../../redux/slice/startUpDataSlice';
import './startup.css'
import {LinkedinOutlined} from '@ant-design/icons'




function Startup() {

  const {id} = useParams();
  const data = useSelector(selectAllData);


  
  const arr =data.find(sData=>(sData.id)==id);

  return (
    <div className='container'>
      <>{ arr && 
        <div className="content">
          <div className="f" id='f'>
            <div className="fcont">
            <p className='cmc'>{`Get The Peice Of ${arr.companyName}`}</p>
            <h3 className='cmc'>{`${arr.title}`}</h3>
            <p className='common'>{`${arr.desc}`}</p>
            </div>
            <div className="fcont1">
              <div className="imgi">
              <img  src={`data:image/jpeg;base64,${arr.companyImage}`} alt="image" />
              </div>
              <div className="p">
                <div className="ra">
                <h3>{`$${arr.raised}`}</h3>
                </div>
              </div>
            </div>

          </div>

          <div className="s">
            <div className="nav1">
                  <div className="ul">
                    <ul className='link'>
                      <li className='li'><Link to='f' smooth={true} spy={true} offset={-200} duration={500} >Overview</Link></li>
                      <li className='li'><Link to='about' smooth={true}>about</Link></li>
                      <li className='li'><Link to='term' smooth={true}>term</Link></li>
                      <li className='li'><Link>discussion</Link></li>
                    </ul>
                  </div>
            </div>
            <div className="pitch">
                <div className="pitchcont">
                  <h4>The Pitch</h4>
                  <p>{`${arr.pitch}`}</p>
                  <img style={{paddingTop:'20px'}}  src={`data:image/jpeg;base64,${arr.pitchimage}`} alt="pitchimage" />
                </div>
            </div>

            <div className='fixed-container'>
              <div id= "equity-btn" >
                Get Equity <p>$0</p>
              </div>
              <div className='fix-content'>
                <p id='p-t1'>Previously Crowd Funded</p>
                <p><span id='raised'>Raised</span> Investors</p>
              </div>
            </div>

            <div className="wti">
              <div className="wticont">
                <h4>Why To Invest</h4>
                <p>{`${arr.wti}`}</p>
                <img style={{paddingTop:'20px'}} src={`data:image/jpeg;base64,${arr.wtiImage}`} alt="WtiImage" />
              </div>
            </div>
            <div className="about" id='about'>
              <br />
              <h3>About</h3>
              <br />
              <div className="abountcont">
                <div className="ceo">
                    <div className="cimg">
                      <img src={`data:image/jpeg;base64,${arr.ceoImage}`} alt="" />
                      <h5>{`${arr.ceoName},CEO`}</h5>
                    </div>
                    <p>{`${arr.ceoinfo}`}</p>
                    <a href={`${arr.ceoLink}`}><LinkedinOutlined className='ld' /></a>
                </div>
                <div className="cto">
                <div className="cimg">
                      <img src={`data:image/jpeg;base64,${arr.ctoimage}`} alt="" />
                      <h5>{`${arr.ctoNAme},CTO`}</h5>
                    </div>
                    <p>{`${arr.ctoinfo}`}</p>
                    <a href={`${arr.ctoLink}`}><LinkedinOutlined className='ld'/></a>
                </div>
                <div className="board">
                <div className="cimg">
                      <img src={`data:image/jpeg;base64,${arr.board}`} alt="" />
                      <h5>{`${arr.boardMemberNAme
},Bard Member`}</h5>
                    </div>
                    <p>{`${arr.boradinfo}`}</p>
                    <a href={`${arr.boardLink}`}><LinkedinOutlined className='ld'/></a>
                </div>
              </div>
            </div>
            <div className="term1" id='term'>
              <br />
              <h2>Term</h2>
              <h5 className='common'>{`${arr.companyName}`}</h5>
              <br />
              <div className="termcont">
              <h3 className='cmc'>OVERVIEW</h3>
                <div className="over">
                  <div className="ppr">
                    <p className='common'>PRICE PER SHARE</p>
                    <h4>{`$${arr.ppr}`}</h4>
                  </div>
                  <div className="val">
                    <p className='common'>VALUATION</p>
                    <h4>{`$${arr.valuation}`}</h4>
                  </div>
                  <div className="dead">
                    <p className='common'>DEADLINE</p>
                    <h4>{`${arr.deadline}`}</h4>
                  </div>
                  <div className="fundg">
                    <p className='common'>FUNDING GOAL</p>
                    <h4>{`${arr.fundinggoal}`}</h4>
                  </div>
                </div>
                <br />
                <h3 className='cmc'>BREAKDOWN</h3>
                <div className="breakd">
                  <div className="mini">
                    <p className='common'>MIN INVESTMENT</p>
                    <h4>{`$${arr.mininvest}`}</h4>
                  </div>
                  <div className="oof">
                    <p className='common'>OFFERING TYPE</p>
                    <h4>{`${arr.oft}`}</h4>
                  </div>
                  <div className="maxi">
                    <p className='common'>MAX INVESTMENT</p>
                    <h4>{`$${arr.maxInvest}`}</h4>
                  </div>
                  <div className="ast">
                    <p className='common'>ASSET TYPE</p>
                    <h4>{`${arr.ast}`}</h4>
                  </div>
                  <div className="nofs">
                    <p className='common'>MIN NUMBER SHARE OFFERED</p>
                    <h4>{`${arr.nofS
}`}</h4>
                  </div>
                  <div className="shof">
                    <p className='common'>SHARED OFFERED</p>
                    <h4>{`${arr.shareof}`}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }</>
    </div>
  )
}

export default Startup
