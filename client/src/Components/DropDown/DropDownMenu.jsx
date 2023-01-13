import React, { useState } from "react";
import { Link } from "react-router-dom";

const DropDownMenu = ({username, useremail, logout}) => {
  const [dropdown, setDropDown] = useState(false);

  const handleOpenMenu = () => {
    setDropDown(!dropdown);
  };
  return (
    <>
      <button
        className="relative inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
        onClick={handleOpenMenu}
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          {username}
        </span>
      </button>

      {/* <!-- Dropdown menu --> */}
      {dropdown ? (
        <div className="absolute z-50 right-0 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
          <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
            <div>{username}</div>
            <div className="font-medium truncate">{useremail}</div>
          </div>
          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <Link
                to="#"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </Link>
            </li>
           
          </ul>
          <div className="py-1" onClick={logout}>
            <Link
              to="#"
              className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default DropDownMenu;
