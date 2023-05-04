// import { ReactComponent as Brand } from ''
import "./Sidebar.css";
import { AiOutlineMenu } from "react-icons/ai";
import { BiCartAdd } from "react-icons/bi";
import { BiHomeAlt2 } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import { MdQueryStats } from "react-icons/md";
import { AiOutlineDropbox } from "react-icons/ai";
import { FiXCircle } from "react-icons/fi";
// import { MdShoppingCartCheckout  } from "react-icons/md";
import { CiLogout } from "react-icons/ci";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ setActiveSidebar }) => {
  const [isExpanded, setExpendState] = useState(false);
  const menuItems = [
    {
      text: "Home",
      icon: <BiHomeAlt2 className="icons" />,
      path: "/dashboard",
    },
    {
      text: "Stats",
      icon: <MdQueryStats className="icons" />,
      path: "/dashboard",
    },
    {
      text: "Products",
      icon: <AiOutlineDropbox className="icons" />,
      path: "/listproducts",
    },

    
    {
      text: "New Product",
      icon: <BiCartAdd className="icons" />,
      path: "/product/create2",
    },

    {
      text: "Settings",
      icon: <AiOutlineSetting className="icons" />,
      path: "/dashboard",
    },
    {
      text2: "log out",
      icon2: <CiLogout className="icons" />,
      path2: "/log-out",
    },
  ];

  useEffect(() => {
    setActiveSidebar(isExpanded);
  }, [isExpanded]);

  return (
    <div className={isExpanded ? "nav-upper" : "nav-uppere"}>
      <div className="container-nav">
        <div className="nav">
          <div className="">
            <div className="">
              <div className="butao">
                <AiOutlineMenu
                  size={45}
                  className={isExpanded ? "hamburger-in" : "hamburger-out"}
                  onClick={() => setExpendState(!isExpanded)}
                >
                  <FiXCircle />
                </AiOutlineMenu>
              </div>
              {isExpanded && (
                <div className="nav-brand">
                  {/* <MdShoppingCartCheckout size={32} /> */}
                  Shopshop
                </div>
              )}
            </div>
            <div className="nav-menu">
              {menuItems.map((route) => (
                <Link
                  className={
                    isExpanded ? "menu-item" : "menu-item menu-item-NX"
                  }
                  to={route.path}
                >
                  {route.icon}
                  {isExpanded && <p>{route.text}</p>}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* <hr /> */}
        {/* <div className="nav-footer">
          {menuItems.map((route) => (
            <Link
              className={isExpanded ? "menu-item-footer" : "menu-item menu-item-NX-"}
              to={route.path}
            >
              {route.icon}
              {isExpanded && <p>{route.text}</p>}
            </Link>
          ))}
          
        </div> */}
      </div>

      {/* <div className="footer-nav">
     <  CiLogout/>
       </div> */}
    </div>
  );
};
// é so mudar umas coisas bem estranhas sabe
export default Sidebar;
