import { useEffect, useState } from "react";

function UpdateFetch() {
  const [updatedata, setUpdateData] = useState({
    userId: 1,
    title: "title to be posted",
    body: "body content to be posted",
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/5", {
      method: "PATCH",
      headers: {
        "content-type": "appliction/json",
      },
      body: JSON.stringify(updatedata)
    }).then((res) => res.json().then((json) => console.log(json)))
      .catch((err) => console.log(err));
  }, [])
  return (
    <>
      <h1>Update FETCH</h1>
    </>
  );
}
export default UpdateFetch;
