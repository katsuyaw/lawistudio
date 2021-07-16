import React from "react";
import MemberCard from "../components/MemberCard";

function katsuya() {
  return (
    <div>
      <MemberCard
        title="KATSUYA"
        text={
          <div>
            <p>I am a web developer and UI/UX designer of LAWI STUDIOS.</p>
            <p>
              If you are interested in my other works, here's the link for you.
            </p>
          </div>
        }
        button={
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://katsuya.me/"
          >
            Enjoy
          </a>
        }
      />
    </div>
  );
}

export default katsuya;
