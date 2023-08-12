import React from "react";

export default function Tools() {
  return (
    <div className="container my-2" style={{ fontFamily: "Poppins" }}>
      <h3 style={{ fontFamily: "Poppins" }}>Tools & Others</h3>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card my-2">
            <img src=".\git.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" style={{ color: "orange" }}>
                Git
              </h5>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card my-2">
            <img
              src=".\github.png"
              className="card-img-top"
              style={{ height: "250px" }}
              alt=""
            />
            <div className="card-body">
              <h5 style={{ color: "black" }} className="card-title">
                Github
              </h5>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card my-2">
            <img src=".\hibernate.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" style={{ color: "grey" }}>
                Hibernate
              </h5>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card my-2">
            <img src=".\rapi.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" style={{ color: "darkblue" }}>
                REST API
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
