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
              We source premium recycled and imported Italian fabrics. All
              products are locally and sustainably manufactured with TLC. A
              portion of all proceeds goes towards protecting our oceans and
              inspiring hoop dreams.
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
