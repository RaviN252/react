import axios from "axios";
import { useEffect, useState } from "react";

function GetAxios() {
  const [resdata, setResData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts", {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => setResData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>GET AXIOS</h1>

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
          {resdata.map((e) => {
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
    </>
  );
}
export default GetAxios;
