import React, { useEffect, useState } from "react";

function Dependency() {
  let [data, setData] = useState(5);
  let [value, setValue] = useState(0);

  // this will be running based on dependency as the data chnages it will change
  useEffect(() => {
    console.log("dependency Array");
    alert("rendered");
  }, [data]);

  function HandleData() {
    setData(data + 1);
  }

  function HandleValue() {
    setValue(value + 1);
  }
  return (
    <>
      <h1>dependency </h1>
      <h1>Data: {data}</h1>
      <button onClick={HandleData}>Data</button>
      <h1>Value: {value}</h1>
      <button onClick={HandleValue}>Value</button>
    </>
  );
}
export default Dependency;
