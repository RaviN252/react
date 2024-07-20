import React from "react";

function PromFun() {
  let name = prompt("Enter The data");
  console.log(name);

  return (
    <>
      <h1>Data from Prompt</h1>
      <h1>{name}</h1>
    </>
  );
}
export default PromFun;
