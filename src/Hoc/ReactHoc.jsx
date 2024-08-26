import { useState } from "react";

function ReactHoc(Orginal) {
  function NewComp() {
    const [Num, setNum] = useState(1);

    const increment = () => {
      setNum(Num + 1);
    };
    return <Orginal number={Num} handlefun={increment} />;
  }
  return NewComp;
}
export default ReactHoc;
