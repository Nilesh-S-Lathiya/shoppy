import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Tilt from "react-parallax-tilt";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { otpverify, register } from "../../Redux/Actions/userActions";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const redirect = location ? location.split("=")[1] : "/";
  // console.log(location);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
    // navigate("/verify");
  };
  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo } = userRegister;
  const userOtpVerify = useSelector((state)=> state.userOtpVerify)
  const { confirmOtp } = userOtpVerify;
  useEffect(() => {
    if (confirmOtp) {
      // console.log(confirmOtp)
      if(confirmOtp.verified){
        navigate("/login")
      }
      // navigate("/")
    }
  }, [confirmOtp, navigate]);

  const submitOtp = (e) => {
    e.preventDefault();
    dispatch(otpverify(userInfo._id, otp));
  };
  return (
    <div className="App bg-gray-900 h-screen w-full relative overflow-hidden flex justify-center items-center">
      <div className="h-40-r w-40-r bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 transform rotate-160 animate-pulse"></div>
      <div className="h-35-r w-35-r bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full absolute top-96 -left-20 transform rotate-180 animate-pulse"></div>
      <Tilt>
        <div className="container h-96 w-96 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
          <form
            className="h-full flex flex-col justify-evenly items-center"
            onSubmit={userInfo ? submitOtp : submitHandler}
          >
            <div className="text-white font-poppins text-2xl tracking-widest">
              Registration
            </div>
            {userInfo ? (
              <input
                type="text"
                placeholder="Enter Your Otp"
                className="input-text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Username"
                  className="input-text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="Email"
                  placeholder="Email"
                  className="input-text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="input-text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </>
            )}
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
