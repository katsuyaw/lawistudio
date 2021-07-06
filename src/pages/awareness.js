import React from "react";
import Card from "../components/Card";

const awareness = () => {
  return (
    <>
      <Card
        title=""
        body={[
          <p>
            Here is our message of peace. This is where we defy social norms and
            advocate for environmental justice and social equality. We use our
            voice to raise awareness and amplify change.
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
