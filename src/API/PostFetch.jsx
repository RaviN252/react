import { useEffect, useState } from "react";
import { json } from "react-router-dom";

function PostFetch() {
  const [postdata, setPostData] = useState({
    userId: 11,
    title: "title to be posted",
    body: "body content to be posted",
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "appliction/json",
      },
      body: JSON.stringify(postdata),
    })
      .then((res) => res.json().then((json) => console.log(json)))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h1>POST FETCH</h1>
    </>
  );
}
export default PostFetch;
