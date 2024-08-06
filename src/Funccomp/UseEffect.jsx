import React, { useEffect, useState } from "react";

function HomeUseState() {
  //without dwependendency array
  let [data, setData] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setData((data) => data + 1);
    }, 2000);
    console.log("useEffect Without Dependency Array");
  });

  // with Empty Dependency Array
  // let [data, setData] = useState(1);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setData((data) => data + 1);
  //   }, 2000);
  //   console.log("useEffect Without Dependency Array");
  // }, []);

  return (
    <div>
      <h6>UseEffect Component</h6>

      <h1>{data}</h1>
      <h6>UseEffect Component</h6>
    </div>
  );
}

export default HomeUseState;
