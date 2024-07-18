import React from "react";
import Nav from "./nav";
import image1 from "./images/music.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

function Home() {
  return (
    <>
      <div id="main">
        <Nav />
        <div id="sub1">
          <img src={image1} id="img1" />
        </div>
        <div id="sub2">
          <h1 id="head">Power Point Template Music Theme</h1>

          <div className="fonts">
            <div className="icons">
              <FontAwesomeIcon icon={faMusic} className="icon" />
            </div>
            <div className="texts">
              <h2>Caption</h2>
              <p>
                lorem lorem lorem loreml oremlorem loremlorem lorem lorem lorem
                lorem
              </p>
            </div>
          </div>
          <div className="fonts">
            <div className="icons">
              <FontAwesomeIcon icon={faMusic} className="icon" />
            </div>
            <div className="texts">
              <h2>Caption</h2>
              <p>
                lorem lorem lorem loreml oremlorem loremlorem lorem lorem lorem
                lorem
              </p>
            </div>
          </div>
          <div className="fonts">
            <div className="icons">
              <FontAwesomeIcon icon={faMusic} className="icon" />
            </div>
            <div className="texts">
              <h2>Caption</h2>
              <p>
                lorem lorem lorem loreml oremlorem loremlorem lorem lorem lorem
                lorem
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
