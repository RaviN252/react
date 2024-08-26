import React, { useState } from "react";
import "../imagegallery/Gallery.css";

import img1 from "../images/img1.jpeg";
import img2 from "../images/img2.jpeg";
import img3 from "../images/img3.jpeg";
import img4 from "../images/img4.jpeg";
import img5 from "../images/img5.jpeg";
import img6 from "../images/img1.jpeg";
import img7 from "../images/img2.jpeg";
import img8 from "../images/img3.jpeg";
import img9 from "../images/img4.jpeg";
import img10 from "../images/img5.jpeg";
function Gallery() {
  const [divItems, setDivItems] = useState([
    {
      img: img1,
      para: "ROLLY ROYSE",
      Btn: "Enguery More",
    },
    {
      img: img2,
      para: "BMW",
      Btn: "Enguery More",
    },
    {
      img: img3,
      para: "Land ROVER",
      Btn: "Enguery More",
    },
    {
      img: img4,
      para: "Porshe",
      Btn: "Enguery More",
    },
    {
      img: img4,
      para: "GTR",
      Btn: "Enguery More",
    },
    {
      img: img5,
      para: "Nissan",
      Btn: "Enguery More",
    },
    {
      img: img6,
      para: "Bugatti",
      Btn: "Enguery More",
    },
    {
      img: img7,
      para: "Porshe",
      Btn: "Enguery More",
    },
    {
      img: img8,
      para: "ROLLY ROYSE",
      Btn: "Enguery More",
    },
    {
      img: img9,
      para: "BMW",
      Btn: "Enguery More",
    },
    {
      img: img10,
      para: "Land ROVER",
      Btn: "Enguery More",
    },
  ]);
  return (
    <>
      <h1>Gallery</h1>

      <div className="Whole-Container">
        {divItems.map((e) => {
          return (
            <>
              <div className="Container">
                <img src={e.img} />
                <p>{e.para}</p>
                <button>{e.Btn}</button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
export default Gallery;
