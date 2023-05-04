import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import TopNavbar from "../components/TopNavbar/TopNavbar";
function MainLayout({ activeSidebar, children }) {
  return (

    <div className="container">
    <div style={{ left: activeSidebar ? "260px" : "",  width: activeSidebar ? "89.8%" : ""  }} className="main-component">
      <TopNavbar />
      <div className="main">
        <div className="main-content">{children}</div>
      </div>
    </div>
    </div>
  );
}

export default MainLayout;
