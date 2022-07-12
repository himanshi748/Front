import React, { useState, useEffect } from "react";

import "../App.css";

const Fitness = () => {
  const [fitness, setData] = useState([]);

  useEffect(() => {
    const url =
      "https://new-blogs.herokuapp.com/api/fitness";
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <>
      {fitness.map((item) => {
        return (
          <div className="container">
            <a href={item.url}>
              <div class="row">
                <div className="row Item-inside  bg-success p-2 text-dark bg-opacity-10  d-flex justify-content-around mx-2 my-2 figure-img img-fluid rounded">
                  {/* image */}
                  <div className="col-12 col-md-12 col-lg-4 img-div">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid"
                    ></img>
                  </div>

                  {/* description */}
                  <div className="col-12 col-md-12 col-lg-8">
                    <div className="main-title pt-4 pb-3">
                      <h3>{item.category}</h3>
                      <h1>{item.name}</h1>
                    </div>
                    <div className="menu-price-book">
                      <div className="price-book-divide d-flex justify-content-around"></div>
                      <p>{item.description}</p>

                      <button className="btn btn-primary">{item.check}</button>

                      <br />
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        );
      })}
    </>
  );
};

export default Fitness;
