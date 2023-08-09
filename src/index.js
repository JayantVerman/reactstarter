import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const year = new Date();
const name = "Jayant";
const image1 = "https://picsum.photos/200";
const image2 = "https://picsum.photos/200/300";
const element = (
  <div>
    <h1 className="heading">Created by {name}</h1>
    <img className="size" alt="random" src={image1}></img>
    <img className="size" alt="grayscale" src={image2 + "?grayscale"}></img>
    <h3 className="align">copyright {year.getFullYear()}</h3>
  </div>
);
root.render(element);
