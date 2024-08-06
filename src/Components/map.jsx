import React, { useState } from "react";
import "./map.css";

function Map() {
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

  return (
    <>
      <table className="">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => {
            return (
              <>
                <tr>
                  <td>{e.Name}</td>
                  <td>{e.Email}</td>
                  <td>{e.Age}</td>
                  <td>{e.Address}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default Map;
