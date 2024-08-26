import React, { useState } from "react";

function FormValidation() {
  const [user, setUser] = useState({
    fname: "",
    lastname: "",
    number: "",
    email: "",
    password: "",
  });
  const [err, setErr] = useState({});

  let handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    console.log(user);
  };
  //validate the form
  let validateForm = () => {
    let Errobj = {};
    if (user.fname === "") {
      Errobj.fname = "Please Enter the Your First Name";
    }
    if (user.lastname === "") {
      Errobj.lastname = "Please Enter the Your Last Name";
    }
    if (user.number === "") {
      Errobj.number = "Please Enter the Your Number";
    }
    if (user.email === "") {
      Errobj.email = "Please Enter the Your Last Name";
    }
    if (user.password === "") {
      Errobj.password = "Please Enter the Your password";
    }
    return Errobj;
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    let error = validateForm();
    setErr(error);

    if (
      user.fname !== "" &&
      user.lastname !== "" &&
      user.number !== "" &&
      user.email !== "" &&
      user.password !== ""
    ) {
      setUser({
        fname: "",
        lastname: "",
        number: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter Your First Name"
        onChange={handleChange}
        value={user.fname}
        name="fname"
      />
      <p>{err.fname}</p>

      <br />
      <input
        type="text"
        placeholder="Enter Your Last Name"
        onChange={handleChange}
        value={user.lastname}
        name="lastname"
      />
      <p>{err.lastname}</p>
      <br />
      <input
        type="number"
        placeholder="Enter Your Number"
        onChange={handleChange}
        value={user.number}
        name="number"
      />
      <p>{err.number}</p>
      <br />
      <input
        type="email"
        placeholder="Enter Your Email"
        onChange={handleChange}
        value={user.email}
        name="email"
      />
      <p>{err.email}</p>
      <br />
      <input
        type="password"
        placeholder="Enter Your Password"
        onChange={handleChange}
        value={user.password}
        name="password"
      />
      <p>{err.password}</p>
      <br />
      <button onClick={handleSubmit}> Submit</button>
    </>
  );
}
export default FormValidation;
