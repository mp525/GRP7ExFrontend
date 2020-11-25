import React, { useState, useEffect } from "react";
import Stories from './Stories.jpg';

function LogInForm({ login, errorMes ,setErrorMes}) {
    const init = { username: "", password: "" };
    const [loginCredentials, setLoginCredentials] = useState(init);

    useEffect(() => {
        setErrorMes("");
    }, []);
   
    const performLogin = (evt) => {
      evt.preventDefault();
      login(loginCredentials.username, loginCredentials.password)
      
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
      </div>
    )
   
  }

  export default LogInForm;