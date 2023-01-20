import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  adminproductdelete,
  listProduct,
} from "../../../Redux/Actions/ProductActions";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const ViewProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);
  const productList = useSelector((state) => state.productList);
  const { products } = productList;

  const handleEdit = (id) => {
    // dispatch(listProductDetails(id))
    navigate(`/admin/updateproduct/${id}`);
  };
  const handleDelete = (id) => {
    dispatch(adminproductdelete(id));
    dispatch(listProduct());
  };
  return (
    <div className="pl-5">
      <>
        <div className="flex flex-wrap justify-center">
          {products.map((list, index) => (
            <div
              className="lg:w-[25%] sm:w-[50%] mobile:w-full md:w-[25%] mini:w-full "
              key={index}
            >
              <div className="card my-3 w-[90%] ">
                <div className="border border-black p-5 rounded-[10px]">
                  <div className="flex justify-center">
                    <img
                      className="Surgeries-images "
                      src={list.image}
                      alt=""
                    />
                  </div>
                  <div className="card-footer surgery-tabs mt-2">
                    {list.name}
                  </div>
                  <Card.Text className="Home-Today-Des py-2">
                    {list.description && list.description}
                  </Card.Text>
                  <div className="flex flex-row justify-between">
                    <Button
                      className="w-[45%] flex justify-center text-[35px] bg-transparent text-green-700 border border-green-700"
                      onClick={() => {
                        handleEdit(list._id);
                      }}
                    >
                      <AiFillEdit />
                    </Button>

                    <Button
                      className="w-[45%] flex justify-center text-[35px] bg-transparent text-red-600 border border-red-600"
                      onClick={() => handleDelete(list._id)}
                    >
                      <AiFillDelete />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    </div>
  );
};

export default ViewProducts;
