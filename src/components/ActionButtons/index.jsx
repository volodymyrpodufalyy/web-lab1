import React from "react";
import "./ActionButtons.scss";

const ActionButtons = (props) => {
  const {handleBackBtn, handleNextBtn} = props;
  return (
    <div className="action-btns">
      <button className="actions-btns__btn" onClick={handleBackBtn}>
        Back to catalog
      </button>
      <button className="actions-btns__btn" onClick={handleNextBtn}>
        Continue
      </button>
    </div>
  );
};

export default ActionButtons;
