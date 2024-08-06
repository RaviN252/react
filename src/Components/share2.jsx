import React from "react";

class Share2 extends React.Component {
  constructor() {
    super();

    this.state = {
      username: this.props.name,
    };
  }

  getdata = () => {
    this.setState({
      username: "Ravi",
    });
  };

  render() {
    return (
      <>
        <h1>{this.state.username}</h1>
        <button onClick={this.getdata}> Change</button>
      </>
    );
  }
}
export default Share2;
