import React from "react";
import Card from "../components/Card";

const awareness = () => {
  return (
    <>
      <Card
        title=""
        body={[
          <p>
            Liberating the potential of humanity, advocating for equal
            opporuntity, and co-existing with mother nature.
          </p>,
        ]}
        button={<a href="https://instagram.com/lawistudios">Stand with us</a>}
        bottomNav="true"
      />
    </>
  );
};

export default awareness;
