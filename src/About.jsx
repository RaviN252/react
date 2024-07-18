import React from "react";
import Navigation from "./nav";
import "./About.css";

function About() {
  return (
    <>
      <div id="abt">
        <Navigation />
        <div id="content">
          <h1>INNOVA SKILLS</h1>

          <h3>GUITAR</h3>
          <p className="data">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
            voluptatibus ea deleniti itaque blanditiis sint vero cupiditate
            dicta, sit ex, dolor accusantium fugiat quasi molestiae explicabo
            mollitia reiciendis quos error.
          </p>
          <h3>DRUMS </h3>
          <p className="data">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
            voluptatibus ea deleniti itaque blanditiis sint vero cupiditate
            dicta, sit ex, dolor accusantium fugiat quasi molestiae explicabo
            mollitia reiciendis quos error.
          </p>
          <h3>Voilen </h3>
          <p className="data">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
            voluptatibus ea deleniti itaque blanditiis sint vero cupiditate
            dicta, sit ex, dolor accusantium fugiat quasi molestiae explicabo
            mollitia reiciendis quos error.
          </p>
        </div>
      </div>
    </>
  );
}
export default About;
