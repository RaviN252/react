import { render } from "@testing-library/react";
import React from "react";

class PromCls extends React.Component {
  constructor() {
    super();

    let data = prompt("enter your name");
    console.log(data);
    this.state = {
      uname: data,
    };
  }
  render() {
    return (
      <>
        <h1>Data From Class Component</h1>
        <h1>{this.state.uname}</h1>
      </>
    );
  }
}
export default PromCls;
