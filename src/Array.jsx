import React, { useState } from "react";

function Arr() {
  const [data, setData] = useState(["Ravi N", 20000, "Banglore", "Developer"]);

  return (
    <>
      <h1>{data[0]}</h1>
      <h1>{data[1]}</h1>
      <h1>{data[2]}</h1>
      <h1>{data[3]}</h1>
    </>
  );
}
export default Arr;
