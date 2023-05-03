// import { ReactComponent as Brand } from ''
import "./Sidebar.css";
import { AiOutlineMenu } from "react-icons/ai";
import { BiCartAdd } from "react-icons/bi";
import { RiDashboardLine } from "react-icons/ri";
import { AiOutlineSetting } from "react-icons/ai";
import { MdQueryStats  } from "react-icons/md";
import { AiOutlineDropbox  } from "react-icons/ai";

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isExpanded, setExpendState] = useState(false);
  const menuItems = [
    {
      text: "Home",
      icon: <RiDashboardLine className="icons"/>,
      path: "/dashboard",
    },
    {
      text: "Stats",
      icon: <MdQueryStats className="icons"/>,
      path: "/dashboard",
    },
    {
      text: "Products",
      icon: <AiOutlineDropbox className="icons"/>,
      path: "/listproducts",
    },
    
    {
      text: "New Product",
      icon: <BiCartAdd className="icons"/>,
      path: "/product/create",
    },
    
    {
      text: "Settings",
      icon: <AiOutlineSetting className="icons"/>,
      path: "/dashboard",
    },
  ];
  return (
    <div
      className={
        isExpanded
          ? "side-nav-container"
          : "side-nav-container side-nav-container-NX"
      }
    >
        <div className="nav">
        <div className="nav-upper">
    
      <div className="">
        <div className="">
        <button
            className={
              isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
            }
            onClick={() => setExpendState(!isExpanded)}
          >
         <AiOutlineMenu size={45}/>
          </button>

          {isExpanded && (
            <div className="nav-brand">
           Shopshop
            </div>
          )}
        
        </div>
        <div className="nav-menu">
          {menuItems.map((route) => (
            <Link
              className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
              to={route.path}
            >
              {route.icon}
              {isExpanded && <p>{route.text}</p>}
            </Link>
          ))}
        </div>
      </div>
       {/* <div className="footer-nav">
          box
       </div> */}
    </div>
    </div>
    </div>
  );
};
// é so mudar umas coisas bem estranhas sabe
export default Sidebar;
