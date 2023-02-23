import React from "react";
import { useState } from "react";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";

const Home = () => {
  const [renderFormValue, setrenderFormValue] = useState("SignUp");
  const renderForm = (e) => {
    setrenderFormValue(e.target.innerHTML);
  };
  return (
    <div className="Container bg-light border-end border-1 border-secondary">
      <div class="Card bg-info d-flex flex-column justify-content-center align-items-center">
        {/*  button container  */}
        <div className="container-fluid d-flex py-3">
          <button
            class="col-sm-6 btn btn-primary"
            onClick={(e) => renderForm(e)}
          >
            Login
          </button>
          <button
            class="col-sm-6 btn btn-danger"
            onClick={(e) => renderForm(e)}
          >
            SignUp
          </button>
        </div>
        {/*  form Container    */}
        <div className="container-fluid">
          {renderFormValue == "SignUp" ? <SignUp /> : <Login />}
        </div>
      </div>
    </div>
  );
};

export default Home;
