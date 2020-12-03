import React, { useEffect, useState } from "react";
import Books from "./Books.jpg";
import "./App.css";
import api from "./apiFacade";
import ReviewWidget from "./ReviewWidget";
import Iframe from "react-iframe";
import facade from "./apiFacade";
import { Container, Row, Col, Card } from "react-bootstrap";

function UserPage1() {
  const [reviews, setReviews] = useState({});
  const [books, setBooks] = useState([]);
  const [film, setFilm] = useState([]);
  const [title, setTitle] = useState("");
  const [title2, setTitle2] = useState("");

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

  const handleChange = (event) => {
    const target = event.target;
    const property = target.id;
    const value = target.value;
    setTitle(value);
  };
  const handleChange2 = (event) => {
    const target = event.target;
    const property = target.id;
    const value = target.value;
    setTitle2(value);
  };
  const submitTitle = () => {
    //console.log(title);
    //console.log(api.fetchBooks);
    //api.fetchBooks(setBooks, title);
    api.fetchBookReviews(setReviews, setBooks, title);
  };
  const submitTitle2 = () => {
    //console.log(title);

    api.fetchReviews(setFilm, title2);
  };
  //console.log(reviews);
  return (
    <>
      <div align="center">
        <div className="bookTheme">
          <img src={Books} alt="books" className="pic" />
          {facade.isAdmin().indexOf("user") !== -1 && (
            <>
              <div className="bookTheme2">
                <h1>Film Reviews</h1>
                <br />
                <br />
                <input
                  type="text"
                  id="title2"
                  onChange={handleChange2}
                  className="i1"
                />
                <button onClick={submitTitle2} className="myButton">
                  Get By Title
                </button>
                <br />
                <br />
                <table className="table">
                  <thead>
                    <tr>
                      <th>Film title</th>
                      <th>Headline</th>
                      <th>Review</th>
                      <th>Published</th>
                    </tr>
                  </thead>

                  <tbody>
                    {film.map((x) => {
                      return (
                        <tr>
                          <td>{x.display_title}</td>
                          <td>{x.headline}</td>
                          <td>{x.summary_short}</td>
                          <td>{x.publication_date}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="bookTheme3">
                <h1>Book reviews</h1>
                <input
                  type="text"
                  id="title"
                  onChange={handleChange}
                  className="i1"
                />
                <button onClick={submitTitle} className="myButton">
                  Get By Title
                </button>
                <br />
                <h4>NYT reviews:</h4>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Published</th>
                      <th>Review Author</th>
                      <th>Book Title</th>
                      <th>Book Author</th>
                      <th>Review summary</th>
                    </tr>
                  </thead>

                  <tbody>
                    {books.map((x) => {
                      return (
                        <tr>
                          <td>{x.publication_dt}</td>
                          <td>{x.byline}</td>
                          <td>{x.book_title}</td>
                          <td>{x.book_author}</td>
                          <td>{x.summary}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <h3>NYT review links:</h3>
                <div align="center">
                    <Card style={{ width: '20rem' }}>
                    {books.map((x) => {
                      if (x.url != null && x.url != "none") {
                        return (
                          <div>
                            {x.byline}'s review: <a href={x.url}>{x.book_title}</a>
                          </div>
                        );
                      }
                    })}
                  </Card>
                </div>
                <h4>Goodreads reviews:</h4>
                <ReviewWidget
                  goodreads={reviews.goodreads}
                  isbm={reviews.isbm}
                />
              </div>
            </>
          )}
          <p>{errorUser}</p>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  );
}
export default UserPage1;
