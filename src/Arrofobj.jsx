import React, { useState } from "react";

function Arrofobj() {
  const [data, setData] = useState([
    {
      Name: "Ravi",
      Dob: 200,
      Age: 23,
      email: "ravi@gmail.com",
    },
    {
      Name: "Pavi",
      Dob: 2001,
      Age: 30,
      email: "pavi@gmail.com",
    },
    {
      Name: "Ram",
      Dob: 2003,
      Age: 20,
      email: "ram@gmail.com",
    },
    {
      Name: "Rakesh",
      Dob: 2004,
      Age: 23,
      email: "ravkesh@gmail.com",
    },
  ]);

  return (
    <>
      <h1>{data[0].Name}</h1>
      <h1>{data[0].Dob}</h1>
      <h1>{data[0].Age}</h1>
      <h1>{data[0].email}</h1>
      <h1>{data[1].Name}</h1>
      <h1>{data[1].Dob}</h1>
      <h1>{data[1].Age}</h1>
      <h1>{data[1].email}</h1>
      <h1>{data[2].Name}</h1>
      <h1>{data[2].Dob}</h1>
      <h1>{data[2].Age}</h1>
      <h1>{data[2].email}</h1>
      <h1>{data[3].Name}</h1>
      <h1>{data[3].Dob}</h1>
      <h1>{data[3].Age}</h1>
      <h1>{data[3].email}</h1>
    </>
  );
}
export default Arrofobj;
