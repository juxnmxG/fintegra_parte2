import React from "react";
import "./ModalCalc.css";

function ModalCalc(props) {
  const { children, modalState, changeModal } = props;

  return (
    <>
    {modalState &&
      <div className="ligth-box">
        <div className="box-modal">
          <div className="header-modal">
            <h3>Tu resultado es:</h3>
            <button onClick={()=>changeModal(!modalState)} className="buttonModal">X</button>
          </div>
          {children}
        </div>
      </div>
    }
    </>
  );
}

export default ModalCalc;
