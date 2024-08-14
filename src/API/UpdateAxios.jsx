import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

function UpdateAxios() {
  const [updatedata, setUpdateData] = useState({
    userId: 1,
    title: "title to be posted",
    body: "body content to be posted",
  });

  useEffect(() => {
    axios.patch("https://jsonplaceholder.typicode.com/posts/1", updatedata, {
        headers: {
          "Content-type": "appliction/json",
        },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h1>Update Axios</h1>
    </>
  );
}
export default UpdateAxios;
