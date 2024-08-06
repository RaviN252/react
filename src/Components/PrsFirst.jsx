import React from "react";
import PrsSecond from "./PrsSecond";
class PrsFirst extends React.Component {
  constructor() {
    super();
    this.state = {
      usname: "Ravi N",
      uage: 23,
      usemail: "ravin7n10@gmail.com",
    };
  }

  render() {
    return (
      <>
        <h1>{this.state.usname}</h1>
        <h1>{this.state.uage}</h1>
        <h1>{this.state.usemail}</h1>
        <h1>Prs First Ends Here</h1>

        <PrsSecond data={this.state} />
        
      </>
    );
  }
}
export default PrsFirst;
