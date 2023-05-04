import React from "react";
import { BiSearch } from "react-icons/bi";
import { MdOutlineNotificationsNone } from "react-icons/md";
import "./TopNavbar.css";
function TopNavbar({activeSidebar}) {
  return (
    <div className="topnav-container">
      <div className="topnav">
        <div className="searchclass">
          <label for="search-container" className="search-container">
            <BiSearch />
            <input className="search" type="text" placeholder="Search.." />
          </label>
        </div>

        <div className="bell">
          <div className="bell-in">
            <MdOutlineNotificationsNone size={23} />
            {/* <span className="span-number"> 2</span> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
