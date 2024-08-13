import Reat from "react";
import { useLocation, useNavigate } from "react-router-dom";

function AssAbout(props) {
  const nav = useNavigate();
  const locate = useLocation();
  console.log(locate.state);

  function Previous() {
    nav(-1);
  }

  return (
    <>
      <h1>WELCOME</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt quos
        ipsa rerum quam sint quo numquam dolorum, quasi ex suscipit natus
        voluptates. Dolor ratione accusamus consequuntur rerum commodi rem
        alias!
      </p>

      <h1>{locate.state.username}</h1>
      <button onClick={Previous}> Back To Home Page</button>
    </>
  );
}
export default AssAbout;
