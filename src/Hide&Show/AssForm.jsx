import { useState } from "react";
import BMW from "../images/img2.jpeg";

function AssForm() {
  const [showFirst, setShowFirst] = useState(true);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);

  const displayFirst = () => {
    setShowFirst(true);
    setShowSecond(false);
    setShowThird(false);
  };

  const displaySecond = () => {
    setShowFirst(false);
    setShowSecond(true);
    setShowThird(false);
  };

  const displayThird = () => {
    setShowFirst(false);
    setShowSecond(false);
    setShowThird(true);
  };

  return (
    <>
      <h1>HIDE & SHOW</h1>

      <button onClick={displayFirst}>Show First</button>
      <button onClick={displaySecond}>Show Second</button>
      <button onClick={displayThird}>Show Third</button>

      {showFirst && (
        <div>
          <h1>First</h1>
          <input type="text" placeholder="Enter Your F Name" /> <br />
          <input type="text" placeholder="Enter Your L Name" />
          <br />
          <input type="number" placeholder="Enter Your Number" />
          <br />
          <input type="mail" placeholder="Enter Your mail" />
          <br />
          <input type="" placeholder="Enter Your Password" />
        </div>
      )}

      {showSecond && (
        <div>
          <h1>SECOND</h1>
          <input type="text" placeholder="Enter Your Couse" /> <br />
          <input type="text" placeholder="Enter Your Collage" />
          <br />
          <input type="text" placeholder="Enter Your Skills" />
          <br />
          <input type="number" placeholder="Enter Your Experience" />
          <br />
          <input type="text" placeholder="Enter Your Password" />
        </div>
      )}

      {showThird && (
        <div>
          <h1>Third</h1>
          <input type="text" placeholder="Enter Your previous Company" /> <br />
          <input type="text" placeholder="Enter Your GitHub Profile" />
          <br />
          <input type="text" placeholder="Enter Your Linked in " />
          <br />
          <input type="number" placeholder="Enter Your Notice Period" />
          <br />
          <input type="" placeholder="Any Questions" /> <br />
          <button>Submit</button>
        </div>
      )}
    </>
  );
}

export default AssForm;
