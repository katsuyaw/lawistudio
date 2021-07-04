import React from "react";
import ShopCard from "../components/ShopCard";
import Payment from "../components/Payment";

const shop = () => {
  return (
    <>
      <ShopCard body={[<Payment />]} />
    </>
  );
};

export default shop;
