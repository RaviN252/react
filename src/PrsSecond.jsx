import React from "react";

class PrsSecond extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { data } = this.props;
    return (
      <>
        <h1>PrsSecond Starts Here</h1>
        <h1>{data.usname}</h1>
        <h1>{data.uage}</h1>
      </>
    );
  }
}
export default PrsSecond;
