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
            The power of self-discovery, peace of self-mastery, and grace of
            self-expression. The ocean is your teacher, her waves are the
            lessons, and this book is your surfboard.
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
