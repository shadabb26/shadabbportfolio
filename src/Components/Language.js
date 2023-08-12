import React from "react";

export default function Language() {
  return (
    <div className="container my-1" style={{ fontFamily: "Poppins" }}>
      <h3 style={{ fontFamily: "Poppins" }}>Programming Languages</h3>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card my-2">
            <img src=".\Java.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" style={{ color: "#4682B4" }}>
                Java
              </h5>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card my-2">
            <img
              src=".\py.png"
              className="card-img-top"
              style={{ height: "250px" }}
            />
            <div className="card-body">
              <h5 style={{ color: "orange" }} className="card-title">
                Python
              </h5>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card my-2">
            <img src=".\js.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" style={{ color: "#FFD700" }}>
                JavaScript
              </h5>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card my-2">
            <img src=".\php.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" style={{ color: "darkblue" }}>
                PHP
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <hr></hr>
      </div>
    </div>
  );
}
