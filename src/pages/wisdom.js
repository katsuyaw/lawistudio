import React from "react";
import Card from "../components/Card";

const wisdom = () => {
  return (
    <>
      <Card
        title="THE SURF CLUB"
        body={[
          <p>
            The power of self-discovery, peace of self-mastery, and grace of
            self-expression. The ocean is your teacher, her waves are the
            lessons, and this book is your surfboard.
          </p>,
        ]}
        button="Surf with us"
      />
    </>
  );
};

export default wisdom;
