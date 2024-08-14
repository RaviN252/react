import axios from "axios";
import { useEffect, useState } from "react";

function PostAxios() {
  const [postdata, setPostData] = useState({
    userId: 46,
    title: "title to be posted",
    body: "body content to be posted",
  });

  useEffect(() => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", postdata, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h1>POST AXIOS</h1>
    </>
  );
}
export default PostAxios;
