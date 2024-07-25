import "../Footer/Footer.css";
import {GoogleOutlined,FacebookFilled, XOutlined,InstagramOutlined,YoutubeOutlined, AppleFilled} from '@ant-design/icons';

const Footer = () => {
  return (
    <div>
      <div className="main-div">
        <div className="main-div-top">
          <div className="div-1">
            <p id="footer-logo" className="title-logo">
              investifyHub📈
            </p>
            <p className="sub-text-logo">elevate your investments</p>
          </div>

          <div className="div-2">
            <p id="header-p">Industries types</p>

            <ul id="div-2-ul">
              <l1 className="">Fintech</l1>
              <l1 className="">Manufacturing</l1>
              <l1 className="">Automotives</l1>
              <l1 className="">Aerospace</l1>
              <l1 className="">Mechatronics</l1>
            </ul>
          </div>

          <div className="div-3">
            <p id="header-p">Learn More</p>
            <ul id="div-3-ul">
              <l1 className="">How investifyHub📈 works</l1>
              <l1 className="">Common Questions</l1>
              <l1 className="">Success Stories</l1>
              <l1 className="">why investifyHub📈</l1>
              <l1 className="">Top Invested StartUps</l1>
            </ul>
          </div>

          <div className="div-4">
            <p id="header-p">Resources</p>
            <ul id="div-4-ul">
              <li className="">Help center</li>
              <li className="">Careers</li>
              <li className="">Funding rules</li>
              <li className="">Blog</li>
              <li className="">How to Invest</li>
            </ul>
          </div>
        </div>
      </div>
      <hr/>
      <div className="main-div-bottem">
        <div className="main-div-bottem-container">

          <input id="input-subs-btn" placeholder="Enter Your Email" type="text" name="" />
          <button id="subscribe-btn">Subscribe</button>

          <ul id="bottem-ul">
            <li className="">© {new Date().getFullYear()} investifyHub📈</li>
            <li className="">Terms</li>
            <li className="">Privacy Notice</li>
            <li className="">Accessibility Statement</li>
          </ul>
        </div>

        <div className="social-links">
          <ul id="social-links-ul">
            <li className=""> <InstagramOutlined /></li>
            <li className=""><XOutlined /></li>
            <li className=""> <YoutubeOutlined /></li>
            <li className=""><FacebookFilled/></li>
          </ul>
          <button id="play-store-btn"><GoogleOutlined />  Play Store</button>
          <button id="apple-store-btn"><AppleFilled/>  Apple Store</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
