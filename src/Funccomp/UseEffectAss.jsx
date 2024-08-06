import React, { useEffect, useState } from "react";

function Assignmnet() {
  let [data, setData] = useState(1);
  let [data1, setData1] = useState(1);

  useEffect(() => {
    setData1(data * 2);
  }, [data]);

  function Multiple() {
    setData(data + 1);
  }

  return (
    <>
      <h1>Number {data}</h1>
      <h1>Multiple {data1}</h1>
      <button onClick={Multiple}>Click</button>
    </>
  );
}
export default Assignmnet;
