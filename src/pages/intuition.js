import React from "react";
import Card from "../components/Card";

const intuition = () => {
  return (
    <>
      <Card
        title=""
        body={[
          <p>
            Designed with love in Los Angeles and sustainably produced for
            Mother Earth. A portion of all proceeds goes towards inspiring hoop
            dreams and protecting our ocean.
          </p>,
        ]}
        button={<a href="https://instagram.com/lawistudios">Shop</a>}
        bottomNav="true"
      />
    </>
  );
};

export default intuition;
