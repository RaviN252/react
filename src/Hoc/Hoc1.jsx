import ReactHoc from "../Hoc/ReactHoc";

function Hoc1({ number, handlefun }) {
  return (
    <>
      <button onClick={handlefun}> Increment</button>
      <h1>{number}</h1>
    </>
  );
}
export default ReactHoc(Hoc1);
