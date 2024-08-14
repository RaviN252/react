import axios from "axios";
import { useEffect } from "react";

function DeleteAxios() {
  useEffect(() => {
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/1", {
        headers: {
          "content-type": "application/Json",
        },
      })
      .then((res) => console.log(res), alert("DATA DELETED SUCCESFULLY AXIOS"))
      .catch((err) => console.log(err));
  });

  return (
    <>
      <h1>DELETE AXIOS</h1>
    </>
  );
}

export default DeleteAxios;
