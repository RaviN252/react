import React, { useState } from "react";

function SForm() {
  const [user, setUser] = useState("");
  let handleChnage = (e) => {
    setUser(e.target.value);
    console.log(user);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter Your Name"
        onChange={handleChnage}
      />
      <input
        type="text"
        placeholder="Enter Your Name"
        onChange={handleChnage}
      />
      <input
        type="text"
        placeholder="Enter Your Name"
        onChange={handleChnage}
      />
      <input
        type="text"
        placeholder="Enter Your Name"
        onChange={handleChnage}
      />
      <input
        type="text"
        placeholder="Enter Your Name"
        onChange={handleChnage}
      />
      <input
        type="text"
        placeholder="Enter Your Name"
        onChange={handleChnage}
      />
    </>
  );
}
export default SForm;
