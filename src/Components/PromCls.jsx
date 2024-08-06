import { render } from "@testing-library/react";
import React from "react";
import Prom2cls from "./Prom2cls";

class PromCls extends React.Component {
  constructor() {
    super();

    let data;

    // function Value() {
    //   let data = prompt("enter your name");
    //   console.log(data);
    //   this.state = {
    //     uname: data,
    //   };
    // }
  }
  render() {
    return (
      <>
        {/* <button onClick={Value()}>GET NAME</button>
        <h1>Data From First Class Component</h1>
        <h1>{this..uname}</h1>
        <h1>Data From Prompt Second Class Component starts</h1>
        <Prom2cls value={this..uname} /> */}
      </>
    );
  }
}
export default PromCls;
