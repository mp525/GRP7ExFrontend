import React, { useEffect, useState } from "react";
import About from "./About.jpg";
import m from "./m.jpg";
import v from "./v.jpg";
import ma from "./mh.png";
import "./App.css";

function AboutSite() {
  return (
    <>
      <div align="center">
        <div className="bookTheme">
          <img src={About} alt="books" className="pic" />
          <br />
          <br />

          <div class="container">
            <h3>
              This website was made to make it easy for fans of stories to get
              close to the stories.<br/>We provide a place where people can review movie and books.
            </h3>
          </div>

          <br />
          <br />
          <br />
          <br />
          
          <br />
          <br />
          <br />
          <h1>About us</h1>
          <div align="center">
            <div class="row">
            <div class="column col-3">
                
                </div>
              <div class="column col-2">
                <div class="card">
                <img src={v} alt="Mike" height="300px"/>
                  <div class="container">
                    <h2>Vibeke Nordestgaard</h2>
                    <p class="title">Co-owner</p>
                    <p>Programmer and head outsource negotiater</p>
                    <p>cph-vn41@cphbusiness.dk</p>
                    <p></p>
                  </div>
                </div>
              </div>

              <div class="column col-2">
                <div class="card">
                <img src={m} alt="Mike" height="300px"/>

                  <div class="container">
                    <h2>Mathias Parking</h2>
                    <p class="title">Co-owner</p>
                    <p>Programmer and widget specialist</p>
                    <p>cph-mp525@cphbusiness.dk</p>
                    <p></p>
                  </div>
                </div>
              </div>

              <div class="column col-2">
                <div class="card">
                <img src={ma} alt="Mike" height="300px"/>
                  <div class="container">
                    <h2>Matti Hansen</h2>
                    <p class="title">Co-owner</p>
                    <p>Programmer and cookie enthusiast</p>
                    <p>cph-mh829@cphbusiness.dk</p>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
      
            <br />
          <br />
          </div>
        </div>
        
      </div>
      
    </>
  );
}
export default AboutSite;
