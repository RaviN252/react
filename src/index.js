import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Bann from "./website/Banner";
import Home from "./website/Home";
import About from "./website/About";
import Contact from "./website/Contact";
import Gallery from "./website/Gallery";
import Navigate from "./website/nav";

//these all for practice concepts
// import Data from "./Components/object";
// import Arr from "./Components/Array";
// import Arrofobj from "./Components/Arrofobj";
import Table from "./Components/map";
import Filter from "./Components/filter";
//import First from "./Components/CompFirst";
//import Second from "./Components/CompSecond";
// import PromFun from "./Components/PromFun";
// import PromCls from "./Components/PromCls";
// import PrsFirst from "./Components/PrsFirst";
// import PrsSecond from "./Components/PrsSecond";
// import Prom2fun from "./Components/Prom2fun";
// import Prom2cls from "./Components/Prom2cls";
import Share1 from "./Components/share1";
import Share2 from "./Components/share2";

import Share3 from "./Components/Share3";
import CCLCMF1 from "./Components/CCLCM1";
import CCLCMCDM from "./Components/CCLCMCDM";
import CCLCMUPD from "./Components/CCLCMUPD";

// functional Components
import UseEffect from "./Funccomp/UseEffect";
import Dependency from "./Funccomp/UseEffectwd";
import HomeUseState from "./Funccomp/UseState";
import Assignmnet from "./Funccomp/UseEffectAss";
import HomeUseRef from "./Funccomp/UseRef";

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
    {/* <Filter /> */}
    {/* <First /> */}
    {/* <Second /> */}

    {/* <PromFun />
    <Prom2fun /> */}

    {/* <PromCls />
    <Prom2cls /> */}

    {/* <PrsFirst /> */}
    {/* <PrsSecond /> */}
    {/* <Share1 />
    <Share2 /> */}
    {/* <Share3 /> */}
    {/* <CCLCMF1 /> */}
    {/* <CCLCMCDM /> */}
    {/* <CCLCMUPD /> */}

    {/* <HomeUseState /> */}
    {/* <UseEffect /> */}
    {/* <Dependency /> */}
    {/* <Assignmnet /> */}

    <HomeUseRef />
  </>
);

reportWebVitals();
