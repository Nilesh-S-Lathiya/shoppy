import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./cart.scss";
import { RiCloseCircleLine } from "react-icons/ri";
import { removefromcart } from "../../Redux/Actions/CartActions";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  useEffect(() => {
    window.scroll({ top: "0", left: "0", behavior: "smooth" });
  }, []);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const SummaryItemStyle = "SummaryItem flex justify-between mt-3 w-[100%]";
  const ProductDivStyle = "flex w-[100%] h-auto items-center mobile:flex-col";
  const PriceQuantityStyle =
    "flex-auto flex flex-col justify-center items-center mobile:mt-7 mobile:mb-7";

  const { cartItems } = useSelector((state) => state.cart);
  // console.log(cartItems);

  const handleRemove = (id) => {
    dispatch(removefromcart(id));
  };
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (!userInfo) {
      alert("First you need to Login")
      navigate("/login");
    }
  });

  return (
    <div>
      <div className="p-3">
        {/* vertically center parent div */}
        <div className="flex flex-row mt-7 mobile:flex-col sm-flex-col ">
          {/* product div */}

          <div className="flex-1">
            {cartItems.map((items, index) => (
              <div className="flex flex-col flex-1 Cart-D" key={index}>
                {/* 1st product div */}
                <div className={ProductDivStyle}>
                  <div className="product flex pl-5 self-start items-center">
                    <img
                      className="product_img w-[5rem] h-[5rem]"
                      src={items.image}
                      alt="product_img"
                    />
                    <div className="disc flex items-center justify-between h-auto flex-col ml-6">
                      <p>
                        <b className="mr-2">Product:</b>
                        {items.name}
                      </p>
                    </div>
                  </div>
                  {/*Price and Quantity Div*/}
                  <div className={PriceQuantityStyle}>
                    <p className="flex items-center justify-center text-4xl mt-3">
                      <b>70$</b>
                    </p>
                  </div>
                  <RiCloseCircleLine
                    className="relative right-[21px] top-[-65px] text-red-600 text-[25px]"
                    onClick={() => handleRemove(items.product)}
                  />
                </div>
                <hr className="mb-7 mt-7 mobile:mt-0" />
              </div>
            ))}
          </div>

          <div
            className="Summary flex-[0.4] flex flex-col h-max items-center w-auto border-2 border-[#8a4af3] rounded-md p-5 text-lg mobile:mb-6"
            style={{
              boxShadow: "inset 0px 0px 11px 2px #8a4af3",
            }}
          >
            <h1 className="text-[2rem]">SUMMARY</h1>
            <div className={SummaryItemStyle}>
              <p>SubTotal:</p>
              <p>$140</p>
            </div>
            <div className={SummaryItemStyle}>
              <p>Shipping:</p>
              <p>$10</p>
            </div>
            <div className={SummaryItemStyle}>
              <p>Shipping Discount:</p>
              <p>-$10</p>
            </div>
            <div className={SummaryItemStyle + " text-3xl font-bold"}>
              <p>Total:</p>
              <p>$140</p>
            </div>
            <button className="btn mt-2 w-full">Checkout Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
