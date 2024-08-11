import React, { useState } from "react";

function Color() {
  const [color, setColor] = useState("#000000");

  function ColorChange() {
    const random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let randomColor = "#";
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * random.length);
      randomColor += random[randomIndex];
    }
    setColor(randomColor);
  }

  return (
    <>
      <h1 style={{ color }}>Hello</h1>
      <h1 style={{ color }}>Hello</h1>
      <h1 style={{ color }}>Hello</h1>
      <button onClick={ColorChange}>Color Change</button>
    </>
  );
}

export default Color;
