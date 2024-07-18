import React from "react";
import Navi from "./nav";
import "./Gallery.css";
import img1 from "./images/img1.jpeg";
import img3 from "./images/img3.jpeg";
import img2 from "./images/img2.jpeg";
import img4 from "./images/img4.jpeg";
import img5 from "./images/img5.jpeg";
import img6 from "./images/img1.jpeg";

let Gallery = () => {
  return (
    <>
      <div id="gal">
        <Navi />
        <div id="gall">
          <div className="galdiv">
            <img src={img1} />
          </div>
          <div className="galdiv">
            <img src={img2} />
          </div>
          <div className="galdiv">
            <img src={img3} />
          </div>
          <div className="galdiv">
            <img src={img4} />
          </div>
          <div className="galdiv">
            <img src={img5} />
          </div>
          <div className="galdiv">
            <img src={img6} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Gallery;
