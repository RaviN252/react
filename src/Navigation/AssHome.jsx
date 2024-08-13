import Reat, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AssAbout from "./AssAbout";

function AssHome() {
  const nav = useNavigate();
  let [username, setusername] = useState("");

  let [userpass, setuserpass] = useState("");

  function next() {
    nav("/AssAbout", {
      state: username,
      // state: userpass,
    });
  }
  // let username;
  let GetData = () => {
    let user = prompt("Enter The Name");
    setusername(user);

    let upass = prompt("Enter Your Password");
    // setuserpass(upass);
  };
  // console.log(username);

  return (
    <>
      <h1>sign up</h1>
      <h3>Data From Prompt </h3>
      <h2>hello "{username}"</h2>
      {/* <h2>{upass}</h2> */}
      <button onClick={GetData}>Get Data</button> <br />
      <h1>{username}</h1>
      <br />
      <button onClick={next}>Go to Welcome Page</button>
      <AssAbout username={username} />
    </>
  );
}
export default AssHome;
