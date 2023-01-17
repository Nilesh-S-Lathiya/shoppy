import React, { useState } from "react";
import { GoThreeBars } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import "./header.scss";
import DropDownMenu from "../../Components/DropDown/DropDownMenu";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/Actions/userActions";

const Header = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "PRODUCTS", link: "/products" },
    { name: "CART", link: "/cart" },
  ];
  let [open, setOpen] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo } = userLogin ;
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logouthandle = () => {
    dispatch(logout());
    navigate("/login");
  };
  // console.log(userInfo)

  return (
    <div className="">
      <div className="shadow-md w-full fixed top-0 z-50">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
          <Link to="/">
            <div
              className="font-bold text-[30px] cursor-pointer flex items-center font-[Poppins] 
        text-gray-800"
            >
              Shoppy
            </div>
          </Link>

          <div
            onClick={() => setOpen(!open)}
            className="text-[2.5rem] absolute right-8 top-[19px] cursor-pointer md:hidden"
          >
            <ion-icon name={open ? "close" : "menu"}>
              <GoThreeBars />
            </ion-icon>
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
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
            {userInfo ? (
              <li className="md:ml-6 text-xl md:my-0 my-7">
                <DropDownMenu
                  username={userInfo.name}
                  useremail={userInfo.email}
                  logout={logouthandle}
                />
              </li>
            ) : (
              <li className="md:ml-6 text-xl md:my-0 my-7">
                <Link
                  to="/login"
                  className="text-gray-800 rounded-[9px] hover:text-white duration-500 p-2 hover:bg-blue-700 active"
                >
                  LOGIN
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
