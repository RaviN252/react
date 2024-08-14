import { useEffect } from "react";
import { json } from "react-router-dom";

function DeleteFetch() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
      headers: {
        "content-type": "application/Json",
      },
    })
      .then((res) =>
        res
          .json()
          .then(
            (json) => console.log(json),
            alert("DATA DELETED SUCCESSFULLY FETCH")
          )
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>DELETE FETCH</h1>
    </>
  );
}
export default DeleteFetch;
