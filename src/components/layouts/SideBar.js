import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <Link to="/clients/add" className="btn btn-success btn-block">
      <i className="fas fa-plus" /> New
    </Link>
  );
}

export default SideBar;
