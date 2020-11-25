import facade from "./apiFacade";
import React, { useState, useEffect } from 'react';
import Stories from './Stories.jpg';

function LoggedIn() {
    const [dataFromServer, setDataFromServer] = useState("Error!")
    
    // useEffect(() => {
    //   facade.fetchData().then(data=> setDataFromServer(data.msg));
    // }, [])
   
    return (
      <div className="logoutPage">
        <img src={Stories} alt="books" width={1000} height={300} />
        <br /><br />
        <h2>Logged in!</h2>
        {/* <h3>{dataFromServer}</h3> */}
      </div>
    )
   
  }

  export default LoggedIn;