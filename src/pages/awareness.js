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
        button={
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://lawistudios.org/"
          >
            Stand with us
          </a>
        }
        nav="true"
      />
    </>
  );
};

export default awareness;
