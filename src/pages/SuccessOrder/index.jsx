import React from "react";

import "./SuccessOrder.scss";
import checkMark from "../../assets/check-mark.svg";
import { useHistory } from "react-router-dom";

const SuccessOrder = () => {

  const history = useHistory();

  return (
    <div className="success-order">
      <img src={checkMark} alt="Success mark" />
      <h1>Success</h1>
      <h3>Your was sent to processing!</h3>
      <h3>Check your email box for further information</h3>
      <button onClick={() => history.push('./catalog')} >
        Go back to catalog
      </button>
    </div>
  );
};

export default SuccessOrder;
