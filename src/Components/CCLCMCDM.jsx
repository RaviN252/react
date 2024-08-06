// component Did Mount
import React from "react";

class CCLCMCDM extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "red",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        color: "blue",
      });
    }, 2000);
  }

  render() {
    return (
      <>
        <h1>CCLCMCDM</h1>
        <h1 style={this.state}>Welcome</h1>
      </>
    );
  }
}
export default CCLCMCDM;
