import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const wisdom = () => {
  return (
    <>
      <Card
        title=""
        body={[
          <p>
            Here is our street recipe for self-discovery, self-mastery, and
            self-expression: The Law of Intuition.
          </p>,
          <br />,
          <p>
            {" "}
            Ingredients include scientific fact, universal truths, you, and the
            ocean.
          </p>,
        ]}
        // button={<a href="mailto:info@lawistudios.com">Surf with us</a>}
        button={<Link to="/shop">Surf with us</Link>}
        nav="true"
      />
    </>
  );
};

export default wisdom;
