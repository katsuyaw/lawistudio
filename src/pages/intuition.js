import React from "react";
import Card from "../components/Card";

const intuition = (props) => {
  return (
    <>
      <Card
        key="intuition"
        onClick={props.onClick}
        title=""
        text={
          <div>
            <p>Welcome to our shop.</p>
            <p>
              All products are cut from premium recycled fabrics or imported
              Italian fabrics. All products are locally and sustainably
              manufactured with TLC in Los Angeles. A portion of all proceeds
              goes towards inspiring hoop dreams and protecting our ocean.
            </p>
          </div>
        }
        button="Coming Soon"
        nav={props.nav}
      />
    </>
  );
};

export default intuition;
