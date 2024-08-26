import React, { useEffect, useState } from "react";

function GetFetch() {
  const [responsedata, setResponseData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
      headers: {
        "content-type": "application/Json",
      },
    })
      .then((res) => res.json().then((json) => setResponseData(json)))
      .catch((err) => console.log(err));
  }, []);

  let filterArr = responsedata.filter((e) => e.id <= "10");
  return (
    <>
      <h1>GET FETCH</h1>

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
    </>
  );
}
export default GetFetch;
