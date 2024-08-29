import { type } from "@testing-library/user-event/dist/type";

export let Increment = () => {
  return {
    type: "Increment",
  };
};

export let Decrement = () => {
  return {
    type: "Decrement",
  };
};

export let Login = () => {
  return {
    type: "Login",
  };
};
