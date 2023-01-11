import React from "react";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="App bg-gray-900 h-screen w-full relative overflow-hidden flex justify-center items-center">
      <div className="h-40-r w-40-r bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 transform rotate-160 animate-pulse"></div>
      <div className="h-35-r w-35-r bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full absolute top-96 -left-20 transform rotate-180 animate-pulse"></div>
      <Tilt>
        <div className="container h-96 w-96 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
          <form className="h-full flex flex-col justify-evenly items-center">
            <div className="text-white font-poppins text-2xl tracking-widest">
             Registration
            </div>
            <input type="Email" placeholder="Email" className="input-text" />
            <input type="text" placeholder="Username" className="input-text" />
            <input
              type="password"
              placeholder="Password"
              className="input-text"
            />
            <input
              type="Submit"
              className="cursor-pointer font-poppins rounded-full px-5 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80 "
            />
            <div className="text-white">
              <span>have you alredy Account</span>{" "}
              <Link to="/login" className="underline">
                Click Here
              </Link>
            </div>
          </form>
        </div>
      </Tilt>
    </div>
  );
};

export default Register;
