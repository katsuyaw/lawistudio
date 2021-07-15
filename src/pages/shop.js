import React from "react";
import ShopCard from "../components/ShopCard";
import Payment from "../components/Payment";

const shop = () => {
  return (
    <>
      <ShopCard text={[<Payment />]} />
    </>
  );
};

export default shop;
