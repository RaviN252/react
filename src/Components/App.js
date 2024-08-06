import "./App.css";

function App() {
  let obj = {
    color: "red",
    backgroundColor: "black",
  };

  return (
    <div>
      <h1 style={{ color: "red", backgroundColor: "blue" }}> Hello World </h1>
      <h2 style={{ obj }}> Welcome To Innova</h2>

      <p>lorem loremloremloremloremloremlorem</p>
    </div>
  );
}

export default App;
