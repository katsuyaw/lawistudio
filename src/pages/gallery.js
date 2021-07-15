import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import LargeCard from "../components/LargeCard";
import MoreNav from "../components/MoreNav";

import persona1 from "../img/gallery/persona1.jpeg";
import persona2 from "../img/gallery/persona2.jpeg";
import persona3 from "../img/gallery/persona3.jpeg";
import concept2a from "../img/gallery/concept2a.jpeg";
import concept3a from "../img/gallery/concept3a.jpeg";
import concept4a from "../img/gallery/concept4a.jpeg";
import concept4b from "../img/gallery/concept4b.jpeg";
import concept5a from "../img/gallery/concept5a.jpeg";
import concept5b from "../img/gallery/concept5b.jpeg";
import concept6a from "../img/gallery/concept6a.jpeg";
import concept6b from "../img/gallery/concept6b.jpeg";
import concept7a from "../img/gallery/concept7a.jpeg";
import concept7b from "../img/gallery/concept7b.jpeg";
import concept8a from "../img/gallery/concept8a.jpeg";
import concept9a from "../img/gallery/concept9a.jpeg";

const gallery = (props) => {
  return (
    <>
      <LargeCard
        logo={"LAWI GALLERY"}
        body={
          // <div className="overflow-auto h-52 w-34">
          <div>
            <p className="my-2 font-thin">Persona</p>
            <div className="flex flex-col gap-10 items-center">
              <Zoom>
                <img src={persona1} />
              </Zoom>
              <div className="grid sm:grid-cols-2 gap-10">
                <Zoom>
                  <img src={persona2} />
                </Zoom>
                <Zoom>
                  <img src={persona3} />
                </Zoom>
              </div>
            </div>
            <p className="my-5 font-thin">Concept</p>
            <div className=" flex flex-col sm:grid md:grid-cols-2 gap-10">
              <Zoom>
                <img src={concept2a} />
              </Zoom>
              <Zoom>
                <img src={concept3a} />
              </Zoom>
              <Zoom>
                <img src={concept4a} />
              </Zoom>
              <Zoom>
                <img src={concept4b} />
              </Zoom>
              <Zoom>
                <img src={concept5a} />
              </Zoom>
              <Zoom>
                <img src={concept5b} />
              </Zoom>
              <Zoom>
                <img src={concept6a} />
              </Zoom>
              <Zoom>
                <img src={concept6b} />
              </Zoom>
              <Zoom>
                <img src={concept7a} />
              </Zoom>
              <Zoom>
                <img src={concept7b} />
              </Zoom>
              <Zoom>
                <img src={concept8a} />
              </Zoom>
              <Zoom>
                <img src={concept9a} />
              </Zoom>
            </div>
          </div>
        }
      />
    </>
  );
};

export default gallery;
