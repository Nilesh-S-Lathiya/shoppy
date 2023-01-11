import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Actions/CartActions";
import "./productCard.scss";

const ProductCard = ({ list }) => {
  // console.log(list._id)
  const dispatch = useDispatch();
  const HandleCart = (id) => {
    // console.log(id)
    dispatch(addToCart(id));
  };
  // console.log(list)

  return (
    <div className=" justify-center">
      <Card className="w-[238px] my-[10px] p-[18px] rounded-[9px] hover:scale-105 duration-500 border-[2px]">
        <Card.Img
          variant="top"
          className="h-[200px] w-[200px] border-0 "
          src={list.image}
        />
        <Card.Body>
          <Card.Title className="Home-Today-Title text-[30px] font-bold py-3">
            {list.name}
          </Card.Title>
          <Card.Text className="Home-Today-Des py-2">
            {list.description && list.description}
          </Card.Text>
          <Button
            className=" font-bold bg-blue-400 p-2 rounded-[5px] hover:bg-blue-700 duration-500 hover:text-white"
            onClick={() => HandleCart(list._id)}
          >
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
