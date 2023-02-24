import React from "react";
import { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [confirmpassword, SetConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
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

  const handleConfirmPassword = (e)=>{
       SetConfirmPassword(e.target.value);
  }
  const handleClick = () => {};
  const onSubmission = (e) => {
      
  };

  return (

      <form className="AuthformCont container d-flex flex-column justify-content-center ">
        <center>
          <h3>SIGNUP</h3>
        </center>
        <input
          type="text"
          placeholder="userName"
          className="container-fluid py-1 px-2 mb-2"
          onChange={handleUserName}
          required
        />

        <input
          type="email"
          placeholder="email"
          className="container-fluid py-1 px-2 mb-2"
          onChange={handleEmail}
          required
        />
        <input
          type="password"
          placeholder="password"
          className="col-sm-6 py-1 passwordInp mb-2"
          id="passwordInp"
          onChange={(e) => handlePassword(e)}
          required
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="col-sm-6 py-1 passwordInp mb-2"
          id="passwordInp"
          onChange={(e) => handleConfirmPassword(e)}
          required
        />

        <input
          type="submit"
          className="col-sm-4 px-2 py-1 btn btn-success"
          value="SignUp"
          onClick={handleClick}
          onSubmit={onSubmission}
        />
      </form>
  );
};

export default SignUp;
