import React, { useRef } from "react";

function HomeUseRef() {
  const refer = useRef();

  function handleColor() {
    let color = refer.current;
    color.style.color = "red";
  }

  return (
    <>
      <h1 ref={refer}> hello</h1>
      <p ref={refer}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. In omnis
        numquam voluptates. Temporibus neque vel eaque quisquam, eius amet
        doloribus repudiandae voluptatum, aliquam quibusdam voluptatem ducimus
        eveniet cupiditate harum magnam?
      </p>
      <h3 ref={refer}>hello world</h3>
      <button onClick={handleColor}>Click</button>
    </>
  );
}
export default HomeUseRef;
