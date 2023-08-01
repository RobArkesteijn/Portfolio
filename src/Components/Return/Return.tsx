import React from "react";
import "./Return.scss";
import { Link } from "react-router-dom";

function Return() {
  return (
    <div className="return">
      <Link className="return-link" to="/">
        <i className="fa-solid fa-arrow-left"></i>
      </Link>
    </div>
  );
}

export default Return;
