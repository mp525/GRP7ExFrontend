import React, { useEffect, useState } from "react";
import Stories from "./Stories.jpg";
import "./App.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import FilmWrite from './FilmWrite';
import BookWrite from './BookWrite';


function UserPage({ facade }) {
  const [errorUser, setErrorUser] = useState("");
  const [dataFromServer, setDataFromServer] = useState("");


  

  useEffect(() => {
    facade
      .fetchDataUser()
      .then((data) => setDataFromServer(data.msg))
      .catch((err) => {
        err.fullError.then((err) => {
          setErrorUser(err.message);
        });
      });
  }, []);




  return (
    <>
      <div align="center">
        <div className="bookTheme">
          <img src={Stories} alt="books" className="pic" />
          
          <p>{errorUser}</p>
          <div class="row">
      <div class="col"></div>
          <BookWrite facade={facade} class="col"/>
          <FilmWrite facade={facade} class="col"/>
      <div class="col"></div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      
    </div>
          
          
          

          
        </div>
      </div>
    </>
  );
}
export default UserPage;
