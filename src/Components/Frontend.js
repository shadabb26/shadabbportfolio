import React from "react";

export default function Frontend() {
  return (
    <div className="container my-2" style={{ fontFamily: "Poppins" }}>
      <h3 style={{ fontFamily: "Poppins" }}>Frontend Technologies</h3>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card my-2">
            <img src=".\hc.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" style={{ color: "#4682B4" }}>
                HTML, CSS
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
            <img
              src=".\boot.png"
              className="card-img-top"
              style={{ height: "250px" }}
            />
            <div className="card-body">
              <h5 style={{ color: "purple" }} className="card-title">
                Bootstrap
              </h5>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card my-2">
            <img src=".\react.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" style={{ color: "darkblue" }}>
                React js
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
