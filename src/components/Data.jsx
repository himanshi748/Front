import React, { useState, useEffect } from "react";

import "../App.css";

const Data = () => {
  const [datanew, setData] = useState([]);

  useEffect(() => {
    const url = "https://new-blogs.herokuapp.com/api/data";
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div>
      <div className="contentPage">
        {datanew.map((item) => {
          return (
            <div className="container">
              <a href={item.url}>
                <div className="row">
                  <div className="row Item-inside  bg-success p-2 text-dark bg-opacity-10  d-flex justify-content-around mx-2 my-2 figure-img img-fluid rounded">
                    {/* image */}
                    <div className="col-12 col-md-12 col-lg-4 img-div my-4">
                      <img
                        src={item.urlToImage}
                        alt="Img"
                        className="img-fluid"
                      ></img>
                    </div>

                    {/* description */}
                    <div className="col-12 col-md-12 col-lg-8">
                      <div className="main-title pt-4 pb-3">
                        <h1>{item.title}</h1>
                      </div>
                      <div className="menu-price-book">
                        <div className="price-book-divide d-flex justify-content-around"></div>
                        <p>{item.description}</p>

                        <p>
                          {item.author}
                          {item.publishedAt}
                        </p>
                        <button className="btn btn-primary">Check now</button>

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
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Data;
