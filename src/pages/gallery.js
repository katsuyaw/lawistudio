import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import persona1 from "../img/gallery/persona1.jpeg";
import persona2 from "../img/gallery/persona2.jpeg";
import persona3 from "../img/gallery/persona3.jpeg";
import comcept1 from "../img/gallery/concept1.jpeg";
import comcept2 from "../img/gallery/concept2.jpeg";
import comcept3 from "../img/gallery/concept3.jpeg";
import comcept4 from "../img/gallery/concept4.jpeg";
import comcept5 from "../img/gallery/concept5.jpeg";
import comcept6 from "../img/gallery/concept6.jpeg";
import comcept7 from "../img/gallery/concept7.jpeg";
import comcept8 from "../img/gallery/concept8.jpeg";
import comcept9 from "../img/gallery/concept9.jpeg";
import comcept10 from "../img/gallery/concept10.jpeg";
import comcept11 from "../img/gallery/concept11.jpeg";
import comcept12 from "../img/gallery/concept12.jpeg";
import comcept13 from "../img/gallery/concept13.jpeg";

const gallery = (props) => {
  return (
    <>
      <div className="p-3 h-auto w-screen bg-black sm:p-5">
        <div className="h-auto w-full">
          <Link
            to="/"
            className=" text-white text-center text-sm  py-2 text-gray-500"
          >
            HOME
          </Link>
          <h1 className="text-white text-center sm:text-2xl font-bold py-10">
            GALLERY
          </h1>
          <div className="flex justify-center"></div>
          <p className="text-white text-center sm:text-4xl sm:font-normal my-10 px-5">
            -Persona-
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <Zoom>
              <img src={persona3} />
            </Zoom>
            <div>
              <Zoom>
                <img src={persona1} />
              </Zoom>
              <Zoom>
                <img src={persona2} />
              </Zoom>
            </div>
          </div>
          <p className="text-white text-center sm:text-4xl sm:font-normal my-10 px-5">
            -Concepts-
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <Zoom>
              <img src={comcept1} />
            </Zoom>
            <Zoom>
              <img src={comcept2} />
            </Zoom>
            <Zoom>
              <img src={comcept3} />
            </Zoom>
            <Zoom>
              <img src={comcept4} />
            </Zoom>
            <Zoom>
              <img src={comcept5} />
            </Zoom>
            <Zoom>
              <img src={comcept6} />
            </Zoom>
            <Zoom>
              <img src={comcept7} />
            </Zoom>
            <Zoom>
              <img src={comcept8} />
            </Zoom>
            <Zoom>
              <img src={comcept9} />
            </Zoom>
            <Zoom>
              <img src={comcept10} />
            </Zoom>
            <Zoom>
              <img src={comcept11} />
            </Zoom>
            <Zoom>
              <img src={comcept12} />
            </Zoom>
            <Zoom>
              <img src={comcept13} />
            </Zoom>
          </div>
        </div>
        <div className="flex justify-center py-10">
          <Link
            to="/"
            className="text-white text-center text-sm  py-5 text-gray-500"
          >
            HOME
          </Link>
        </div>
      </div>
    </>
  );
};

export default gallery;
