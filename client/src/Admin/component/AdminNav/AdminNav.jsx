import React, { useState } from "react";
import { GoThreeBars } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import DropDownMenu from "../../../Components/DropDown/DropDownMenu";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../Redux/Actions/userActions";


const AdminHeader = () => {
  let Links = [
    { name: "Dashboard", link: "/dashboard" },
    { name: "Add Product", link: "/addproduct" },
    { name: "View Product", link: "/viewproduct" },
    { name: "View Orders", link: "/orders" },
    { name: "Customers", link: "/customers" },
    { name: "Notification", link: "/notification" },
  ];
  let [open, setOpen] = useState(false);

  // console.log(userInfo)

  return (
    <div>
      {Links.map((link) => (
        <li key={link.name} className="md:ml-6 text-xl md:my-0 my-7">
          <Link
            to={link.link}
            className="text-gray-800 rounded-[9px] hover:text-white duration-500 p-2 hover:bg-blue-700 active"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default AdminHeader;
