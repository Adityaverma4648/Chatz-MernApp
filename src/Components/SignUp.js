import React from "react";
import { useState, useEffect } from "react";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [status, setStatus] = useState(false);
  const [dataSent, setDataSent] = useState(false);
  // const [animation, setAnimation] = useState(true);


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
  const handleClick=()=>{
    
  }
  const onSubmission = (e) => {
    // setting data current hooks value to react-redux-arrays
    // setStatus(true);                onDataSent = setStatus(true)
  };

  return (
    <div className="SignUp">
      <form id="signUpForm">
        <center>
          <h3 className="colorWhite">SIGNUP</h3>
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
          <label htmlFor="showPassword" className="showPassword">
            <input
              type="checkbox"
              name="showPassword"
              className="showPasswordInp"
              onChange={onChecked}
            />
          </label>
        </div>
        <div className="submitInpCont">
          <input
            type="submit"
            className="submitInp"
            value="signUp"
            onClick={handleClick}
            onSubmit={onSubmission}
          />
        </div>
      </form>
      {/* <div id="animationCont"></div> */}
      <div className="textBg">
        SIGNUP
      </div>
    </div>
  );
};

export default SignUp;