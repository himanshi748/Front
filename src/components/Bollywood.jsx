import React, { useState, useEffect } from "react";

import "../App.css";

const Bollywood = () => {
  const [bollywood, setData] = useState([]);

  useEffect(() => {
    const url = "https://new-blogs.herokuapp.com/api/bolly";
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <>
      {bollywood.map((item) => {
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

export default Bollywood;

// import React, { useEffect, useState } from "react";

// import Card from "../Component/Card";

// const Bollywood = () => {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     const url = "https://ihappysoni-blog-app-backend.herokuapp.com/api/bolly";
//     fetch(url)
//       .then((res) => res.json())
//       .then((res) => setData(res));
//   }, []);
//   return (
//     <div>
//       <h1 style={{ margin: "20px 10%", display: "inline-block" }}>BOLLYWOOD</h1>
//       <div className="main__container">
//         <div className="rightbar">
//           {data
//             .filter((article) => {
//               return article.category === "Bollywood";
//             })
//             .map((n) => (
//               <Card
//                 articleid={n.id}
//                 imgUrl={n.Image}
//                 title={n.title}
//                 description={n.description.slice(0, 200)}
//                 fulldescription={n.description}
//                 author={n.author}
//               />
//             ))}
//         </div>
//         <div className="advertisement">
//             <img
//               id="adv"
//               src="https://2.imimg.com/data2/IS/TN/MY-2561564/advertisement-designing-services-500x500.jpg"
//               alt=""
//             />
//           </div>
//       </div>
//     </div>
//   );
// };
// export default Bollywood;
