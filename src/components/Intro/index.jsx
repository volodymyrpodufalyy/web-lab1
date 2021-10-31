import React from "react";

import graph from "../../assets/graph.jpg";
import "./Intro.scss";

const Intro = () => {
  return (
    <div className="intro-wrapper">
      <div className="intro">
        <img className="intro__img" src={graph} alt="graph" />
        <div className="intro__text">
          <div className="inner-title">
            <h1>Stock Market</h1>
            <h2>October shares</h2>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
            rerum itaque id nisi numquam distinctio eaque similique illum ullam
            perspiciatis nobis ab, unde quis aspernatur sint maiores deleniti
            praesentium nostrum asperiores, quam hic, laborum aut. Voluptatum,
            ducimus corporis, optio illo accusamus ad odio maiores quod
            assumenda consequuntur minima, totam eveniet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
