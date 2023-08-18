import React from "react";
import Language from "./Language";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Tools from "./Tools";
import Projects from "./Projects";
import Socials from "./Socials";
import Db from "./Db";

export default function Maincontent() {
  return (
    <>
      <div className="container">
        <div className="container">
          <Projects />
          {/* <Language />
          <Frontend />
          <Backend />
          <Db />
          <Tools /> */}

          <Socials />
        </div>
      </div>
    </>
  );
}
