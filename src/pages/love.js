import React from "react";
import Card from "../components/Card";

const love = (props) => {
  return (
    <>
      <Card
        title=" "
        text={[
          <div>
            <p>
              LAWI is a community of rebels living life to the rhythm of
              purpose.
            </p>
            <br />
            <p>
              We write about things that matter to us and design looks to match
              its feel.{" "}
            </p>
            <br />
            <p>We hope to inspire the next wave of rebel dreamers.</p>
          </div>,
        ]}
        button={
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://instagram.com/lawistudios"
          >
            Explore
          </a>
        }
        nav="true"
        onPress={() => props.onPress}
      />
    </>
  );
};

export default love;
