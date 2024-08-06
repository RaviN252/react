import React from "react";

class PrsSecond extends React.Component {
  constructor() {
    super();
  }
  render() {
    let { data } = this.props;
    return (
      <>
        <h1>PrsSecond Starts Here</h1>
        <h1>{data.usname}</h1>
        <h1>{data.uage}</h1>
        <h1>{data.usemail}</h1>
      </>
    );
  }
}
export default PrsSecond;
