//class componenet life cycle methods

import React from "react";
import CCLCMF1 from "./CCLCM1";

class CCLCMF2 extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "qwert",
    };
  }

  render() {
    return (
      <>
        <h1>CLLCM2</h1>
        <CCLCMF1 classdata={this.state.data} />
      </>
    );
  }
}
export default CCLCMF2;
