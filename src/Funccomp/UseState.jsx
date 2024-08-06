import React, { useState } from "react";

function About() {
  const [textColor, setTextColor] = useState({
    color: "red",
  });

  function ChangeColor() {
    setTextColor({
      color: "blue",
    });
  }
  return (
    <>
      
      <h1 style={textColor}>UseState</h1>

      <button onClick={ChangeColor}>Change Color</button>
    </>
  );
}
export default About;
