import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Section() {
  var [text] = useTypewriter({
    words: ["JAVA Full Stack Developer", "MERN Stack Developer"],
    loop: {},
    typeSpeed: 20,
    deleteSpeed: 80,
  });

  return (
    <div className="container-fluid con">
      <h3>
        Hi, my name is <span style={{ color: "#7B1FA2" }}>Shadabb</span>
      </h3>
      <h4>
        &nbsp;I'm a <span style={{ color: "#7B1FA2" }}>{text}</span>
        <span>
          <Cursor />
        </span>
      </h4>
    </div>
  );
}
