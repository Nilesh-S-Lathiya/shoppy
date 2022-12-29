import React from "react";
import { Button, Card } from "react-bootstrap";
import "./productCard.scss";

const ProductCard = ({ list }) => {
  const Body = (
    <Card.Body>
      <Card.Title className="Home-Today-Title text-[25px] font-bold py-3">
        {list.name.slice(0, 15) + "..."}
      </Card.Title>
      <Card.Text className="Home-Today-Des py-2">
        {list.description && list.description.slice(0, 45) + "..."}
      </Card.Text>
      <Button className=" font-bold bg-blue-400 p-2 rounded-[5px] hover:bg-blue-700 duration-500 hover:text-white">
        Add To Cart
      </Button>
    </Card.Body>
  );
  return (
    <div className="flex justify-center">
      <Card className="w-[238px] my-[10px] p-[18px] rounded-[9px] hover:scale-105 duration-500 border-[2px]">
        <Card.Img
          variant="top"
          className="h-[200px] w-[200px] border-0 "
          src="images/product.jpg"
        />
        {Body}
      </Card>
    </div>
  );
};

export default ProductCard;
