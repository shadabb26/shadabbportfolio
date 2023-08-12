import React from "react";

export default function Socials() {
  return (
    <div className="container" style={{ fontFamily: "Poppins" }}>
      <a
        rel="noreferrer"
        href="https://www.instagram.com/shadabb.26/?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D"
        target="_blank"
      >
        <img
          src="insta.png"
          style={{ width: "60px", height: "60px" }}
          className="mx-2"
          alt=""
        />
      </a>

      <a
        rel="noreferrer"
        href="https://www.linkedin.com/in/shadab-shikalgar-95a03424a"
        target="_blank"
      >
        <img
          style={{ width: "60px", height: "60px" }}
          src="link.png"
          className="mx-2"
          alt=""
        />
      </a>

      <a rel="noreferrer" href="https://github.com/shadabb26" target="_blank">
        <img
          src="gh.png"
          style={{ width: "60px", height: "50px" }}
          className="mx-2"
          alt=""
        />
      </a>

      <div className="container">
        <hr></hr>
      </div>
      <footer>
        <div
          className="container"
          style={{ fontFamily: "Poppins", fontSize: "12px" }}
        >
          <p>&copy; 2023 Shadabb. All rights reserved.</p>
        </div>
      </footer>
      <div className="container">
        <hr></hr>
      </div>
    </div>
  );
}
