import React, { useState } from "react";
import "./map.css";
// import data from "./data";

function Filter() {
  const [data, setData] = useState([
    {
      Name: "Ravi N",
      Age: 23,
      Email: "ravin7n10@gmail.com",
      Address: "Banglore",
    },
    {
      Name: "Ram",
      Age: 20,
      Email: "ram@gmail.com",
      Address: "CV Raman Road",
    },
    {
      Name: "Sudha NS",
      Age: 21,
      Email: "sudha@gmail.com",
      Address: "BTM 1Stage ",
    },
    {
      Name: "Likith",
      Age: 21,
      Email: "liki@gmail.com",
      Address: "Banglore",
    },
    {
      Name: "Sudha",
      Age: 21,
      Email: "sudha@gmail.com",
      Address: "BTM 1Stage ",
    },
    {
      Name: "rossy",
      Age: 21,
      Email: "liki@gmail.com",
      Address: "Banglore",
    },
    {
      Name: "SudhaPS",
      Age: 21,
      Email: "sudha@gmail.com",
      Address: "BTM 1Stage ",
    },
    {
      Name: "Abi",
      Age: 21,
      Email: "liki@gmail.com",
      Address: "Banglore",
    },
  ]);

  let filterArr = data.filter((e) => e.Address === "Banglore");

  return (
    <>
      {filterArr.map((e) => {
        return (
          <>
            <tr>
              <td>{e.Name}</td>
              <td>{e.Age}</td>
              <td>{e.Address}</td>
              <td>{e.Email}</td>
            </tr>
          </>
        );
      })}
    </>
  );
}
export default Filter;
