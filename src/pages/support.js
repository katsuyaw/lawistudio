import React from "react";
import Card from "../components/Card";

const support = (props) => {
  return (
    <>
      <Card
        key="support"
        onClick={props.onClick}
        title=""
        text={
          <div className="flex flex-col gap-4 text-sm">
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.gofundme.com/f/liberiasurfclub"
                className="underline"
              >
                A Surf Club In Liberia
              </a>
            </p>
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://hoopbus.com/"
                className="underline"
              >
                Build Basketball Courts with the Hoopbus
              </a>
            </p>
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.surfrider.org/support-surfrider"
                className="underline"
              >
                Protect Our Beaches with Surfrider
              </a>
            </p>
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://seashepherd.org/mgc2021/"
                className="underline"
              >
                Protect Our Seas with Sea Shepherd
              </a>
            </p>
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://streetcompany.org/donate-us"
                className="underline"
              >
                Redefine Homelessness with Street Company
              </a>
            </p>
          </div>
        }
        nav={props.nav}
      />
    </>
  );
};

export default support;
