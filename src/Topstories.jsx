import React, { useEffect, useState } from "react";
import Stories from "./TS.jpg";
import "./App.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import facade from "./apiFacade";

function Topstories({ facade }) {
  const [resultList, setResultList] = useState([]);
  const [title, setTitle] = useState("");

  const submit = (event) => {
    const target = event.target;
    const property = target.id;
    const value = target.value;
    setTitle(property);
    // setTimeout(() => {
        facade.fetchTopStories(setResultList, property);
    // }, 1000);
    
    console.log(title);
    console.log(property);
    console.log(resultList);
  };

  return (
    <>
      <div align="center">
        <div className="bookTheme">
          <img src={Stories} alt="books" className="pic" />
          {facade.isAdmin().indexOf("user") !== -1 && (
            <>
              <div className="bookTheme2">
                <button onClick={submit} className="myButton" id="arts" value="arts">
                  Arts
                </button>
                <button onClick={submit} className="myButton" id="home">
                  Home
                </button>
                <button onClick={submit} className="myButton" id="science">
                  Science
                </button>
                <button onClick={submit} className="myButton" id="technology">
                  Technology
                </button>
                <button onClick={submit} className="myButton" id="world">
                  World
                </button>
                <br />
                <br />
                <table className="table">
                  <thead>
                    <tr>
                      <th>Section</th>
                      {/* <th>Subsection</th> */}
                      <th>Title</th>
                      <th>Byline</th>
                      <th>Abstract</th>
                      <th>Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    {resultList.length > 0 && (resultList.map((x) => {
                      return (
                        <tr>
                          <td>{x.section}</td>
                          {/* <td>{x.subsection}</td> */}
                          <td>{x.title}</td>
                          <td>{x.byline}</td>
                          <td>{x.abstract}</td>
                          <td><a href={x.url}>Go to article</a></td>
                        </tr>
                      );
                    }))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
export default Topstories;
