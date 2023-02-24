import React, { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");

  const [status, setStatus] = useState(false);
  const [dataSent, setDataSent] = useState(false);

  const onChecked = (e) => {
    var passwordInp = document.getElementById("passwordInp");
    // e.preventDefault();
    if (e.target.checked) {
      passwordInp.setAttribute("type", "text");
    } else {
      passwordInp.setAttribute("type", "password");
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    SetPassword(e.target.value);
  };
  const handleClick = () => {};
  const onSubmission = (e) => {
    //  axios the data to url user model
  };

  return (
    <form className="AuthformCont container d-flex flex-column justify-content-center ">
      <div className="container-fluid h5">
        <h5>Welcome Back</h5>
        <small>Please login using registered</small>
      </div>
      <label
        htmlFor="email"
        className="container py-2 border border-3 border-info mb-1"
      >
        <span>Email :</span>
        <input
          type="email"
          placeholder="Please enter email here"
          className="container border-0 py-1 px-2 mb-2"
          onChange={handleEmail}
          name="email"
          required
        />
      </label>
      <label
        htmlFor="password"
        class="container py-2 border border-3 border-info mb-1"
      >
        <span>Password :</span>
        <input
          type="password"
          placeholder="password"
          className="container border-0 py-1 passwordInp mb-2"
          id="passwordInp"
          onChange={(e) => handlePassword(e)}
          required
        />
      </label>
      <div class="container">
        <input
          type="submit"
          className="col-sm-4 px-2 py-1 btn btn-success"
          value="Login"
          onClick={handleClick}
          onSubmit={onSubmission}
        />
      </div>
    </form>
  );
};

export default Login;
