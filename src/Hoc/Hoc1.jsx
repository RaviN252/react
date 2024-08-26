import ReactHoc from "../Hoc/ReactHoc";

function Hoc1({ number, handlefunc }) {
  return (
    <>
      <button onClick={handlefunc}> Increment</button>
      <h1>{number}</h1>
    </>
  );
}
export default ReactHoc(Hoc1);
