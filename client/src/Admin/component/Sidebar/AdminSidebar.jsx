import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./adminsidebar.css";
import { RxDashboard } from "react-icons/rx";
import { BiAddToQueue } from "react-icons/bi";
import { GrView } from "react-icons/gr";
import { BsCartPlusFill, BsFillPeopleFill } from "react-icons/bs";
const menuItem = [
  {
    path: "",
    name: "Dashboard",
    icon: <RxDashboard />,
  },

  {
    path: "addproduct",
    name: "Add Product",
    icon: <BiAddToQueue />,
  },
  {
    name: "View Product",
    path: "viewproduct",
    icon: <GrView className="icon-color" />,
  },
  {
    name: "View Orders",
    path: "orders",
    icon: <BsCartPlusFill />,
  },
  {
    name: "Customers",
    path: "customers",
    icon: <BsFillPeopleFill />,
  },
];
const AdminSidebar = () => {
  const [inactive, setInactive] = useState(true);
  const [active, setActive] = useState(false);
  const location = useLocation();
  const CURRENT_WB_NAME = location.pathname.split("/admin/")[1];
  return (
    <div className={`p_sidebar ${inactive ? "inactive" : ""}`}>
      <div className="p_sidebar_top_section">
        <div className="p_logo">
          {inactive ? (
            <span className="text-[30px] pl-3">S</span>
          ) : (
            <div className="p_sidebar_logoname">
              <span className="text-[30px] p-3">Shoppy</span>
            </div>
          )}
          <div
            className="p_toggle_button"
            onClick={() => {
              setInactive(!inactive);
            }}
          >
            {inactive ? (
              <i className="ri-arrow-right-s-line"></i>
            ) : (
              <i className="ri-arrow-left-s-line"></i>
            )}
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="p_sidebar_main_menu">
        {menuItem.map((item, index) => (
          <ul
            key={index}
            className={`${CURRENT_WB_NAME === item.path ? active : null}`}
          >
            <li>
              <Link
                to={item.name === "Home" ? item.path : `/admin/${item.path}`}
                className={`p_menu_item ${
                  CURRENT_WB_NAME === item.path ? "active" : null
                }`}
                onClick={() => {
                  setActive(!active);
                }}
              >
                <div className="p_menu_icon">
                  {item.icon}
                  {/* <i className={item.icon}></i> */}
                </div>
                {inactive ? null : <>{item.name}</>}
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default AdminSidebar;
