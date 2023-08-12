import React from "react";

export default function Projects() {
  return (
    <div className="container my-2" style={{ fontFamily: "Poppins" }}>
      <h3 style={{ fontFamily: "Poppins" }}>Projects</h3>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card my-2">
            <img src=".\homeservice.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" style={{ color: "black" }}>
                Home Services
              </h5>
              <a
                href="https://github.com/shadabb26/homeservices"
                target="_blank"
                className="btn btn-dark"
              >
                View Code
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card my-2">
            <img
              src=".\news.png"
              className="card-img-top"
              style={{ height: "250px" }}
            />
            <div className="card-body">
              <h5 style={{ color: "black" }} className="card-title">
                News App
              </h5>
              <a
                href="https://github.com/shadabb26/26news"
                target="_blank"
                className="btn btn-dark"
              >
                View Code
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card my-2">
            <img src=".\tu.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" style={{ color: "black" }}>
                TextUtils
              </h5>
              <a
                href="https://github.com/shadabb26/textutils"
                target="_blank"
                className="btn btn-dark"
              >
                View Code
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card my-2">
            <img src=".\wapp.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" style={{ color: "darkblue" }}>
                Weather App
              </h5>
              <a
                href="https://github.com/shadabb26/weatherapp"
                target="_blank"
                className="btn btn-dark"
              >
                View Code
              </a>
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
