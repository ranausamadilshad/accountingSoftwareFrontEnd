/** @format */

import React from "react";

function TextError(props) {
  return (
    <div className="error" style={{ color: "red", marginTop: "6px" }}>
      {props.children}
    </div>
  );
}

export default TextError;
