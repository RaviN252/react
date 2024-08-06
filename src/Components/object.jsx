import React, { useState } from "react";

function Obj() {
  const [data, setData] = useState({
    Name: "RAVI N",
    Dob: 2000,
    email: "ravi@gmail.com",
  });
  return (
    <>
      <h1>{data.Name}</h1>
      <h1>{data.Dob}</h1>
      <h1>{data.email}</h1>
    </>
  );
}
export default Obj;
