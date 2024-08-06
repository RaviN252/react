import React from "react";
import Share2 from "./share2";

class Share1 extends React.Component {
  constructor() {
    super();
    let data = prompt("Enter The Name");
    this.state = {
      username: data,
    };
  }

  render() {
    return (
      <>
        {/* <h1>{data}</h1> */}
        <Share2 name={this.state.username} />
      </>
    );
  }
}
export default Share1;
