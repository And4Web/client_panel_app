import React from "react";
import Clients from "../clients/Clients";
import SideBar from "../layouts/SideBar";

function DashBoard() {
  return (
    <div>
      <div className="row">
        <div className="col-md-10">
          <Clients />
        </div>
        <div className="col-md-2">
          <SideBar />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
