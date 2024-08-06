import React from "react";
import Prom2fun from "./Prom2fun";

function PromFun() {
  let name;

  function getdata() {
    name = prompt("Enter The Data");
    console.log(name);
  }

  return (
    <>
      <button onClick={getdata()}>GET NAME</button>
      <h1>Data from Prompt</h1>
      <h1>{name}</h1>
      <h1>Data from promt ends here </h1>
      <Prom2fun data={name} />
    </>
  );
}
export default PromFun;
