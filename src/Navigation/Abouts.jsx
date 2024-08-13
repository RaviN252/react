import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Abouts() {
  const nav = useNavigate();

  const location = useLocation();
  console.log(location.state);
  function back() {
    nav(-1);
  }

  return (
    <>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
        minima placeat doloremque vitae quisquam velit aperiam repellendus
        reiciendis voluptatibus ea necessitatibus, error, eveniet sit
        consectetur facere vero illo officiis reprehenderit.
      </p>
      <button onClick={back}>back</button>
    </>
  );
}
export default Abouts;
