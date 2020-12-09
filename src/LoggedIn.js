
import React, { useState, useEffect } from "react";
import Stories from "./pictures/Stories.jpg";

function LoggedIn() {
  const [dataFromServer, setDataFromServer] = useState("Error!");

  return (
    <div className="logoutPage">
      <img src={Stories} alt="books" width={1000} height={300} />
      <br />
      <br />
      <h2>Logged in!</h2>
    </div>
  );
}

export default LoggedIn;
