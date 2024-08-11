import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Homes() {
  const nav = useNavigate();
  const [data, setData] = useState("hello");

  function Navback() {
    nav("/Abouts", {
      state: data,
    });
  }

  return (
    <>
      <nav>
        <h1>Home</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          repellat soluta incidunt ipsum aliquam alias cupiditate sed fugit
          voluptate, velit blanditiis provident. Earum, alias iure. Magni, odio
          facere. Deserunt, qui.
        </p>
        <p>
          insted of link tag we can use the function to redidrect the page for
          navigation
        </p>
        <button onClick={Navback}> back to About</button>
      </nav>
    </>
  );
}
export default Homes;
{
}
