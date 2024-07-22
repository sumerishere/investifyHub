import './startup.css'
import { useSelector } from 'react-redux';
import { Link,useParams, useNavigate} from 'react-router-dom';
import { selectAllData } from '../../redux/slice/startUpDataSlice';
import {LinkedinOutlined} from '@ant-design/icons'
import { Link as ScrollLink } from 'react-scroll';


function Startup() {

  const {id} = useParams();
  const data = useSelector(selectAllData);
  const navigate = useNavigate(); // Initialize useNavigate

  const arr = data.find(sData=>(sData.id) == id);

  const handleEquityClick = () => {
    navigate('/InvestmentForm', { state: { startupname: arr.companyName } }); // Pass the startupname as state
  };

  return (
    <div className='container'>
      <>{ arr && 
        <div className="content">
          <p id="welcome-cmp-name">{`Welcome! to ${arr.companyName}`}</p>
          <div className="f" id='f'>
            <div className="fcont">
              
              <p className='cmc'>{`Get The Piece Of ${arr.companyName}`}</p>
              <h3 className='h3-company-title'>{`${arr.title}`}</h3>
              <p className='common'>{`${arr.desc}`}</p>
            </div>
            <div className="fcont1">
              <div className="imgi">
              <img  src={`data:image/jpeg;base64,${arr.companyImage}`} alt="imge" />
              </div>
              <div className="p">
                <div className="ra">
                <h4>{`${arr.raised}`}</h4>
                </div>
              </div>
            </div>

          </div>

          <div className="s">
            <div className="nav1">
                  <div className="ul">
                    <ul className='link'>
                      <li className='lis'><ScrollLink to='f' smooth={true} spy={true} offset={-200} duration={500} >Overview</ScrollLink></li>
                      <li className='lis'><ScrollLink to='about' smooth={true}>About</ScrollLink></li>
                      <li className='lis'><ScrollLink to='term' smooth={true}>Term</ScrollLink></li>
                      <li className='lis'><ScrollLink>Discussion</ScrollLink></li>
                    </ul>
                  </div>
            </div>
            <div className="pitch">
                <div className="pitchcont">
                  <h2>The Pitch</h2>
                  <p>{`${arr.pitch}`}</p>
                  <img style={{paddingTop:'20px'}}  src={`data:image/jpeg;base64,${arr.pitchimage}`} alt="pitchimage" />
                </div>
            </div>

       {/*-------- fixed Get-Equity container -------- */}

            <div id='fixed-container'>

              <div id= "equity-btn" onClick={handleEquityClick}  >
                {/* <Link to='/InvestmentForm' style={{ textDecoration: 'none',color:'white'}}>Get Equity <p>{`${arr.raised}`}</p></Link> */}

                <Link to={{ pathname: '/InvestmentForm', state: { startupname: arr.companyName } }} style={{ textDecoration: 'none', color: 'white' }}>
                  <p>Get Equity </p>
                  {/* <p>{`${arr.raised}`}</p> */}
                </Link>
              </div>

              <div className='fix-content'>
                {/* <p id='p-t1'>Previously Crowd Funded</p> */}
                <p id='raised'>Raised : <span id="investor-span" >Investors :</span> </p>
                <p id='raised-number'>{`${arr.raised}`}  <span id="investor-number" >{`${arr.investor}`} </span></p>
              </div>
            </div>

            <div className="wti">
              <div className="wticont">
                <h2>Why? To Invest</h2>
                <p>{`${arr.wti}`}</p>
                <img style={{paddingTop:'20px'}} src={`data:image/jpeg;base64,${arr.wtiImage}`} alt="WtiImage" />
              </div>
            </div>

            <div className="about" id='about'>
              <br />
              <hr /><br/><br/><br/>
              <h2>ABOUT</h2>
              <br />
              <div className="abountcont">
                <div className="ceo">
                    <div className="cimg">
                      <img id="img-tag" src={`data:image/jpeg;base64,${arr.ceoImage}`} alt="" />
                      <h5>{`${arr.ceoName} - CEO`}</h5>
                    </div>
                    <p id="ceo-info-text">{`${arr.ceoinfo}`}</p>
                    <a href={`${arr.ceoLink}`}><LinkedinOutlined className='ld' /></a>
                </div>

                <div className="cto">
                <div className="cimg">
                      <img id="img-tag" src={`data:image/jpeg;base64,${arr.ctoimage}`} alt="" />
                      <h5>{`${arr.ctoNAme} - CTO`}</h5>
                    </div>
                    <p id="cto-info-text">{`${arr.ctoinfo}`}</p>
                    <a href={`${arr.ctoLink}`}><LinkedinOutlined className='ld'/></a>
                </div>

                <div className="board">
                <div className="cimg ">
                      <img id="img-tag board-img-size"   src={`data:image/jpeg;base64,${arr.board}`} alt="" />
                      <h5>{`${arr.boardMemberNAme},Bard Member`}</h5>
                    </div>
                    <p id="board-text-size">{`${arr.boradinfo}`}</p>
                    <a href={`${arr.boardLink}`}><LinkedinOutlined className='ld'/></a>
                </div>
              </div>
            </div>

            <div className="term1" id='term'>
              <br />
              <h2>TERM</h2>
              <h4 id ="comp-name" className="">{`${arr.companyName}`}</h4>
              <br />
              <div className="termcont">
              <h3 id='term-value-section'>OVERVIEW</h3>
                <div className="over">
                  <div className="ppr">
                    <p className='common'>PRICE PER SHARE</p>
                    <h4>{`${arr.ppr}`}</h4>
                  </div>
                  <div className="val">
                    <p className='common'>VALUATION</p>
                    <h4>{`${arr.valuation}`}</h4>
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
                <h3 id='term-value-section'>BREAKDOWN</h3>
                <div className="breakd">
                  <div className="mini">
                    <p className='common'>MIN INVESTMENT</p>
                    <h4>{`${arr.mininvest}`}</h4>
                  </div>
                  <div className="oof">
                    <p className='common'>OFFERING TYPE</p>
                    <h4>{`${arr.oft}`}</h4>
                  </div>
                  <div className="maxi">
                    <p className='common'>MAX INVESTMENT</p>
                    <h4>{`${arr.maxInvest}`}</h4>
                  </div>
                  <div className="ast">
                    <p className='common'>ASSET TYPE</p>
                    <h4>{`${arr.ast}`}</h4>
                  </div>
                  <div className="nofs">
                    <p className='common'>MIN NUMBER SHARE OFFERED</p>
                    <h4>{`${arr.nofS}`}</h4>
                  </div>
                  <div className="shof">
                    <p className='common'>SHARED OFFERED</p>
                    <h4>{`${arr.shareof}`}</h4>
                  </div>
                  
                </div>
                <hr /><br/><br/>
              </div>
            </div>
          </div>
        </div>
      }</>
    </div>
  )
}

export default Startup
