let Login = (state = false, action) => {
  switch (action.type) {
    case "Login":
      return (state = true);

    default:
      return state;
  }
};
export default Login;
