import React from "react";

export default function Db() {
  return (
    <div className="container my-2" style={{ fontFamily: "Poppins" }}>
      <h3 style={{ fontFamily: "Poppins" }}>Database Technologies</h3>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card my-2">
            <img src=".\mysql.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" style={{ color: "orange" }}>
                My Sql
              </h5>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card my-2">
            <img
              src=".\psql.png"
              className="card-img-top"
              style={{ height: "250px" }}
            />
            <div className="card-body">
              <h5 style={{ color: "darkblue" }} className="card-title">
                PostgreSql
              </h5>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card my-2">
            <img src=".\mdb.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" style={{ color: "green" }}>
                Mongo DB
              </h5>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card my-2">
            <img src=".\odb.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" style={{ color: "red" }}>
                Oracle
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
