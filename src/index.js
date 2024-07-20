import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import Bann from "./Banner";
// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";
// import Gallery from "./Gallery";
// import Navigate from "./nav";

//these all for practice concepts
// import Data from "./object";
// import Arr from "./Array";
// import Arrofobj from "./Arrofobj";
//import Table from "./map";
//import First from "./CompFirst";
//import Second from "./CompSecond";
//import PromFun from "./PromFun";
//import PromCls from "./PromCls";
import PrsFirst from "./PrsFirst";
import PrsSecond from "./PrsSecond";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <App /> */}
    {/* <Bann /> */}
    {/* <Home /> */}
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Gallery" element={<Gallery />}></Route>
        <Route path="/Navigate" element={<Navigate />}></Route>
      </Routes>
    </BrowserRouter> */}
    {/* <Data /> */}
    {/* <Arr /> */}
    {/* <Arrofobj /> */}
    {/* <Table /> */}
    {/* <First /> */}
    {/* <Second /> */}
    {/* <PromFun /> */}
    {/* <PromCls /> */}
    <PrsFirst />
    <PrsSecond />
  </>
);

reportWebVitals();
