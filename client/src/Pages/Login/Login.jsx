import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../Redux/Actions/userActions";

const Login = () => {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const redirect = location ? location.split("=")[1] : "/";
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, error } = userLogin;
  // console.log(userLogin);
  // useNavigation("/")


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
   
  }, []);
  useEffect(()=>{
    if (userInfo) {
      navigate("/");
    }
  },[navigate,userInfo])
  return (
    <div className="App bg-gray-900 h-screen w-full relative overflow-hidden flex justify-center items-center">
      <div className="h-40-r w-40-r bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 transform rotate-160 animate-pulse"></div>
      <div className="h-35-r w-35-r bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full absolute top-96 -left-20 transform rotate-180 animate-pulse"></div>
      <Tilt>
        <div className="container h-96 w-96 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
          <form
            className="h-full flex flex-col justify-evenly items-center"
            onSubmit={handleSubmit}
          >
            <div className="text-white font-poppins text-2xl tracking-widest">
              Login
            </div>
            <input
              type="text"
              placeholder="username"
              className="input-text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              className="input-text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="Submit"
              className="cursor-pointer font-poppins rounded-full px-5 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80 "
            />
            {error ? <div className="text-red-600">{error}</div> : null}
            <div className="text-white">
              <span>Create an Account</span>{" "}
              <Link to="/register" className="underline">
                Click Here
              </Link>
            </div>
          </form>
        </div>
      </Tilt>
    </div>
  );
};

export default Login;
