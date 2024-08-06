//class componenet life cycle methods

import React from "react";

class CCLCMF1 extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "qwert",
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.classdata !== state.username) {
      alert("register");
    } else {
      alert("already Exist");
    }
  }

  render() {
    return (
      <>
        <h1>CLLCM1</h1>
      </>
    );
  }
}
export default CCLCMF1;
