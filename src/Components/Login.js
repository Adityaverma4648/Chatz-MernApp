import React, { useState, useEffect } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
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

  const handleUserName = (e) => {
    setUserName(e.target.value);
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
    <div className="Login">
      <form>
        <center>
          <h3>LOGIN</h3>
        </center>
        <input
          type="text"
          placeholder="userName"
          className="inpElem"
          onChange={handleUserName}
          required
        />

        <input
          type="email"
          placeholder="email"
          className="inpElem"
          onChange={handleEmail}
          required
        />
        <div className="passwordInpCont">
          <input
            type="password"
            placeholder="password"
            className="inpElem passwordInp"
            id="passwordInp"
            onChange={handlePassword}
            required
          />
          <button className="p-2">{/* eye icon */}</button>
        </div>
        <div className="submitInpCont">
          <input
            type="submit"
            className="submitInp"
            value="Login"
            onClick={handleClick}
            onSubmit={onSubmission}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
