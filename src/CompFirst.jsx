import React, { useState } from "react";
import Second from "./CompSecond";

function First() {
  const [data, setData] = useState("Ravi");
  return (
    <>
      <Second userdata={data} />
      <h1>{data}</h1>
    </>
  );
}
export default First;
