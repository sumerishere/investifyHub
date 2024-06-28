import  "./PaymentComp.css";

const PaymentComp = () =>{

  return (
    <div className="payment-root">

      
     <div className="pay-main-container">

      <p>ELIGIBLE <sub>pay</sub></p>

      <div className="pay-left-div">

        <div className="left-top-div">
          top
        </div>
        <hr />
        <div className="left-bottom-div">
          botom
        </div>
      </div>

      <div className="pay-right-div">

        <div className="right-top-div">
          top
        </div>
     
        <div className="right-bottom-div">
          bottom
        </div>
      </div>

     </div>
    </div>
  )
}

export default PaymentComp;