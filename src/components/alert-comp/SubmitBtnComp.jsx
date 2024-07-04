
import "../alert-comp/SubmitBtnComp.css";
import {Link} from "react-router-dom";
const SubmitCompo = () => {

  return (
    <div className="root-submit-btn">
      <h2>Form Submission</h2>

      <div className="btn-div-submit">
       <Link to ="/AlertComp" style={{textDecoration : "none"}}><button id="submit-btn">Submit</button>
       </Link> 
      </div>

    </div>
  );
};

export default SubmitCompo;
