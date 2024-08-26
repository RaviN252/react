import { useState } from "react";
import BMW from "../images/img2.jpeg";
function HideShow() {
  const [Showdata, setShowData] = useState(true);

  let show = () => {
    setShowData(false);
  };
  let hide = () => {
    setShowData(true);
  };

  return (
    <>
      <h1>HIDE & SHOW</h1>

      <button onClick={hide}>Hide</button>
      <button onClick={show}>Show</button>
      {Showdata ? (
        <div>
          <h1>First</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
            beatae aut, nulla nobis, exercitationem nesciunt labore dolore
            veritatis odio earum voluptatum ipsum fugit aliquam! Dolore
            perferendis distinctio ad laboriosam aperiam.
          </p>
          <img src={BMW} /> <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt nisi,
          inventore deserunt sequi libero corrupti. Facere aliquam, debitis
          tempora cupiditate magni nesciunt tempore voluptatem soluta dolor
          voluptatum at fugit vitae.
        </div>
      ) : (
        <div>
          <h1>Second</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
            beatae aut, nulla nobis, exercitationem nesciunt labore dolore
            veritatis odio earum voluptatum ipsum fugit aliquam! Dolore
            perferendis distinctio ad laboriosam aperiam.
          </p>
        </div>
      )}
    </>
  );
}
export default HideShow;
