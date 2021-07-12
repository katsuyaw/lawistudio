import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Scrollbars } from "react-custom-scrollbars-2";
import LargeCard from "../components/LargeCard";
import MoreNav from "../components/MoreNav";

import personaCover from "../img/gallery/persona-cover.jpeg";
import persona1 from "../img/gallery/persona1.jpeg";
import persona2 from "../img/gallery/persona2.jpeg";
import concept1 from "../img/gallery/concept1.jpeg";
import concept2 from "../img/gallery/concept2.jpeg";
import concept3 from "../img/gallery/concept3.jpeg";
import concept4 from "../img/gallery/concept4.jpeg";
import concept5 from "../img/gallery/concept5.jpeg";
import concept6 from "../img/gallery/concept6.jpeg";
import concept7 from "../img/gallery/concept7.jpeg";
import concept8 from "../img/gallery/concept8.jpeg";
import concept9 from "../img/gallery/concept9.jpeg";
import concept10 from "../img/gallery/concept10.jpeg";
import concept11 from "../img/gallery/concept11.jpeg";
import concept12 from "../img/gallery/concept12.jpeg";
import concept13 from "../img/gallery/concept13.jpeg";

const gallery = (props) => {
  return (
    <>
      <LargeCard
        title={"Persona"}
        body={
          // <div className="overflow-auto h-52 w-34">
          <div className="">
            <Zoom>
              <img src={personaCover} />
            </Zoom>
            <Zoom>
              <img src={persona1} />
            </Zoom>
            <Zoom>
              <img src={persona2} />
            </Zoom>
            <Zoom>
              <img src={concept1} />
            </Zoom>
            <Zoom>
              <img src={concept2} />
            </Zoom>
            <Zoom>
              <img src={concept3} />
            </Zoom>
            <Zoom>
              <img src={concept4} />
            </Zoom>
            <Zoom>
              <img src={concept1} />
            </Zoom>
            <Zoom>
              <img src={concept2} />
            </Zoom>
            <Zoom>
              <img src={concept3} />
            </Zoom>
            <Zoom>
              <img src={concept4} />
            </Zoom>
            <Zoom>
              <img src={concept5} />
            </Zoom>
            <Zoom>
              <img src={concept6} />
            </Zoom>
            <Zoom>
              <img src={concept7} />
            </Zoom>
            <Zoom>
              <img src={concept8} />
            </Zoom>
            <Zoom>
              <img src={concept9} />
            </Zoom>
            <Zoom>
              <img src={concept10} />
            </Zoom>
            <Zoom>
              <img src={concept11} />
            </Zoom>
            <Zoom>
              <img src={concept12} />
            </Zoom>
            <Zoom>
              <img src={concept13} />
            </Zoom>
          </div>
        }
      />
    </>
  );
};

export default gallery;
