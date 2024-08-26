import ReactHoc from "../Hoc/ReactHoc";

function Hoc2({ number, handlefunc }) {
  return (
    <>
      <button onClick={handlefunc}> Increment</button>
      <h1>{number}</h1>
    </>
  );
}
export default ReactHoc(Hoc2);
