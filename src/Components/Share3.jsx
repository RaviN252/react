import React from "react";

class Share3 extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "Ravi",
    };
  }

  getdata = () => {
    this.setState({
      username: "Sudha NS", // tits workd only on arrow function
    });
  };

  render() {
    return (
      <>
        <h1>User Data</h1>
        <h1>{this.state.username}</h1>
        <button onClick={this.getdata}> Change</button>
      </>
    );
  }
}
export default Share3;
