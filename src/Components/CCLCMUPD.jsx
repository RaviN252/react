import React from "react";

class CCLCMUPD extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "",
    };
  }

  shouldComponentUpdate() {
    return true;
  }

  colorChange = () => {
    this.setState({
      color: "green",
    });
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.setState({
        color: "blue",
      });
    }, 2000);
  }

  render() {
    return (
      <>
        <h1 style={{ color: this.state.color }}>INNOVA SKILL TECHNOLOGY</h1>
        <button onClick={this.colorChange}>Change</button>
      </>
    );
  }
}
export default CCLCMUPD;
