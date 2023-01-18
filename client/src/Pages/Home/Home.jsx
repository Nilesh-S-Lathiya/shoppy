import React, { useEffect } from "react";
import MainSlider from "../../Components/HomeComponent/MainSlider/MainSlider";
import TodaySlider from "../../Components/HomeComponent/TodaySlider/TodaySlider";

import "./home.scss";
import { FaRegThumbsUp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../Redux/Actions/ProductActions";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scroll({ top: "0", left: "0", behavior: "smooth" });
  }, []);
  const productList = useSelector((state) => state.productList);
  const { products } = productList;
  // console.log(products)
  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);
  return (
    <div className=" mb-">
      <div className="mt-14">
        <div className="w-full text-center bg-white font-bold lg:text-[62px] sm:text-[24px] font-[poppins] py-3">
          <div className="shadow-lg p-5 rounded-[9px] text-shadow flex justify-center items-center gap-5">
            <span>Today Special Discount</span>
            <img
              src="/images/Special-Offer.png"
              alt=""
              className="w-[70px] h-[70px]"
            />
          </div>
        </div>
        <TodaySlider data={products} />
      </div>
      <div className="container mt-12 mx-auto">
        <div className="sm:flex sm:justify-between md:flex md:justify-center items-center sm:space-x-5 space-x-0 sm:space-y-0 space-y-3">
          <div>
            <div className="aspect-w-16 aspect-h-9">
              <img src="./images/banner_left.png" alt="" />
            </div>
          </div>
          <div style={{ marginTop: "0px" }}>
            <div className="aspect-w-16 aspect-h-9">
              <img src="./images/banner_right.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <MainSlider />
      </div>
      <div className="container mx-auto mt-12 bg-gray-50 py-10">
        <div className="flex flex-wrap sm:flex-wrap md:flex-wrap w-full justify-around items-center gap-5">
          <img src="/images/Logo/apple.png" alt="" className="w-[70px]" />
          <img src="/images/Logo/samsung.png" alt="" className="w-[100px]" />
          <img src="/images/Logo/onePlus.png" alt="" className="w-[100px]" />
          <img src="/images/Logo/vivo.png" alt="" className="w-[100px]" />
          <img src="/images/Logo/oppo.png" alt="" className="w-[100px]" />
        </div>
      </div>
      <div className="flex justify-center w-full p-7">
        <input
          type="email"
          className="border rounded-tl-[9px] rounded-bl-[9px] p-1 pl-3 w-[50%]"
          placeholder="Enter your Email Address"
        />
       
        <button className="bg-blue-600 w-[15%] p-3 text-white rounded-tr-[9px] rounded-br-[9px]">
          Submit
        </button>
      </div>
      <div className="flex w-full justify-center pb-7 font-bold items-center">
        <span>Enter Your Email For Contact Us ! Thank You</span>
        <FaRegThumbsUp className="ml-2" />
      </div>
    </div>
  );
};

export default Home;
