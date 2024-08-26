import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";
import Filter from "./filter";

function Practice() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      // .then((res) => res.json().then((json) => setResponseData(json)))
      .then((res) => res.json().then((json) => setData(json)))
      .catch((err) => console.log(err));
  }, []);

  // let filterArr = responsedata.filter((e) => e.id <= "10");
  let filterArr = data.filterArr((e) => e.id <= "10");
  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>SL NO</th>
              <th>USER ID</th>
              <th>TITLE</th>
              <th>BODY</th>
            </tr>
          </thead>
          <tbody>
            {filterArr.map((e) => {
              return (
                <tr>
                  <td>{e.id}</td>
                  <td>{e.userId}</td>
                  <td>{e.title}</td>
                  <td>{e.body}</td>
                  <br />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <h1 style={{ color: "red", backgroundColor: "blue" }}>Hello World </h1>
      <h1>Hello World </h1>

      <h1>Hello World </h1>
    </>
  );
}
export default Practice;
