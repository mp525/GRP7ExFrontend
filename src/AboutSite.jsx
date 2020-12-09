import React, { useEffect, useState } from "react";
import About from "./pictures/About.jpg";
import m from "./pictures/m.jpg";
import v from "./pictures/v.jpg";
import ma from "./pictures/mh.png";
import GoogleApiWrapper from "./Map";
import "./App.css";

function AboutSite() {
  return (
    <>
      <div align="center">
        <div className="bookTheme">
          <img src={About} alt="books" className="pic" />
          <br />
          <br />

          <h1>What Can you do on this Website?</h1>
          <div class="row">
            <div class="column col-3"></div>
            <div class="column col-2">
              <div class="card">
                <div class="container">
                  <h1>View Movie/Book reviews</h1>
                  <p>
                    You can see reviews from professionals and ordinary movie
                    and book lovers
                  </p>
                </div>
              </div>
            </div>
            <div class="column col-2">
              <div class="card">
                <div class="container">
                  <h1>View Top Stories</h1>
                  <p>
                    You can view the greatest stories pertaining to arts, home,
                    science, technology and world.
                  </p>
                </div>
              </div>
            </div>
            <div class="column col-2">
              <div class="card">
                <div class="container">
                  <h1>Write your own reviews</h1>
                  <p>
                    You can write and publish your reviews freely on this
                    website
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <h1>About us</h1>
          <div align="center">
            <div class="row">
              <div class="column col-3"></div>
              <div class="column col-2">
                <div class="card">
                  <img src={v} alt="Mike" height="300px" />
                  <div class="container">
                    <h2>Vibeke Nordestgaard</h2>
                    <p class="title">Co-owner</p>
                    <p>Programmer and head outsource negotiater</p>
                    <p>Favourite Movie: The Nightmare Before Christmas</p>
                    <p>Favourite Book: Symptoms of Being Human</p>
                    <p>cph-vn41@cphbusiness.dk</p>
                    <p></p>
                  </div>
                </div>
              </div>

              <div class="column col-2">
                <div class="card">
                  <img src={m} alt="Mike" height="300px" />

                  <div class="container">
                    <h2>Mathias Parking</h2>
                    <p class="title">Co-owner</p>
                    <p>Programmer and widget specialist</p>
                    <p>Favourite Movie: The Room</p>
                    <p>Favourite Book: The Bible</p>
                    <p>cph-mp525@cphbusiness.dk</p>
                    <p></p>
                  </div>
                </div>
              </div>

              <div class="column col-2">
                <div class="card">
                  <img src={ma} alt="Mike" height="300px" />
                  <div class="container">
                    <h2>Matti Hansen</h2>
                    <p class="title">Co-owner</p>
                    <p>Programmer and cookie enthusiast</p>
                    <p>
                      Favourite Movie: lord of the rings The Fellowship of the
                      ring
                    </p>
                    <p>
                      Favourite Book: Game of Thrones a song of Ice and Fire
                    </p>
                    <p>cph-mh829@cphbusiness.dk</p>
                    <p></p>
                  </div>
                </div>
              </div>
              <div class="column col-4"></div>
              <div class="column col-4">
                <h1>Our company recides here</h1>
                <div class="card">
                  <GoogleApiWrapper />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <div class="container">
                    <h2>Matti Hansen</h2>
                  </div>
                </div>
              </div>
            </div>

            <br />
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutSite;
