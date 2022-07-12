import React from "react";

const Header = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="/images/bg1.jpg"
          className="card-img"
          alt="Background"
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              BREAKING NEWS
            </h5>
            <p className="card-text lead fs-2 ">CHECK OUT THE LATEST NEWS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
