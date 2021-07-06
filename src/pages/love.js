import React from "react";
import Card from "../components/Card";
import lawiDot from "../img/lawiDot.png";

const love = () => {
  return (
    <>
      <Card
        title=" "
        body={[
          <p>
            LAWI is a community of rebels living life to the rhythm of purpose.
          </p>,
          <br />,
          <p>
            We write about things that matter to us and design looks to match
            its feel.{" "}
          </p>,
          <br />,

          <p>We hope to inspire the next wave of rebel dreamers.</p>,
          // <div className="grid justify-center">
          //   <img className="mt-5 h-20 w-20 sm:h-28 sm:w-28" src={lawiDot} />
          // </div>,
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
      />
    </>
  );
};

export default love;
