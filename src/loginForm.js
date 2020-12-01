import React, { useState, useEffect } from "react";
import Stories from './Stories.jpg';

function LogInForm({ login, errorMes ,setErrorMes, register, dataFromServer, setDataFromServer}) {
    const init = { username: "", password: "" };
    const [loginCredentials, setLoginCredentials] = useState(init);
    const initR = {usernameR: "", passwordR: ""};
    const [registerCredentials, setRegisterCredentials] = useState(initR);
    //const [dataFromServer, setDataFromServer] = useState("");

    useEffect(() => {
        setErrorMes("");
        setDataFromServer("");
    }, []);
   
    const performLogin = (evt) => {
      evt.preventDefault();
      login(loginCredentials.username, loginCredentials.password)
      
    }
    const performRegister = (evt) => {
      evt.preventDefault();
      register(registerCredentials.usernameR, registerCredentials.passwordR);
    }
    const onChangeR = (evt) => {
      setRegisterCredentials({ ...registerCredentials, [evt.target.id]: evt.target.value});
    }
    const onChange = (evt) => {
      setLoginCredentials({ ...loginCredentials,[evt.target.id]: evt.target.value })
    }
   
    return (
      <div className="loginPage">
        <img src={Stories} alt="books" width={1000} height={300} />
        <br /><br />
        <h2>Login</h2>
        <form onChange={onChange} >
          <input placeholder="User Name" id="username" />
          <input placeholder="Password" id="password" />
          <button onClick={performLogin}>Login</button>
        </form>
        <p>{errorMes}</p>
        <h2>Register</h2>
        <form onChange={onChangeR}>
          <input placeholder="User Name" id="usernameR" />
          <input placeholder="Password" id="passwordR" />
          <button onClick={performRegister}>Register</button>
        </form>
        <p>{dataFromServer}</p>
      </div>
    )
   
  }

  export default LogInForm;