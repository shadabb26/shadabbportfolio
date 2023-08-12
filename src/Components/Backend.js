import React from "react";

export default function Backend() {
  return (
    <div className="container my-2" style={{ fontFamily: "Poppins" }}>
      <h3 style={{ fontFamily: "Poppins" }}>Backend Technologies</h3>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card my-2">
            <img src=".\node.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" style={{ color: "green" }}>
                Node js
              </h5>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card my-2">
            <img
              src=".\ex.png"
              className="card-img-top"
              style={{ height: "250px" }}
            />
            <div className="card-body">
              <h5 style={{ color: "black" }} className="card-title">
                Express js
              </h5>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card my-2">
            <img src=".\spring.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" style={{ color: "green" }}>
                Java Spring MVC
              </h5>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card my-2">
            <img src=".\springboot.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" style={{ color: "green" }}>
                {" "}
                Java Spring Boot
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
