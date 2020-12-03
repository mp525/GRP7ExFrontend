import React, { useEffect, useState } from "react";
import Stories from "./Stories.jpg";
import "./App.css";
import { Container, Row, Col, Card } from "react-bootstrap";
function UserPage({ facade }) {
  const [errorUser, setErrorUser] = useState("");
  const [dataFromServer, setDataFromServer] = useState("");
  const [bookReview, setBookReview] = useState({});
  const [filmReview, setFilmReview] = useState({});

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

  const handleChange = (evt) => {
    const target = evt.target;
    const value = target.value;
    const prop = target.id;
    const tmpBookReview = { ...bookReview, [prop]: value };
    setBookReview(tmpBookReview);
  };

  const handleChangeFilm = (evt) => {
    const target = evt.target;
    const value = target.value;
    const prop = target.id;
    const review = { ...filmReview, [prop]: value};
    setFilmReview(review);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(bookReview);
    facade.addBookRev(bookReview);
  };

  const handleSubmitFilm = (evt) => {
    evt.preventDefault();
    console.log(filmReview);
    facade.addFilmRev(filmReview);
  };

  return (
    <>
      <div align="center">
        <div className="bookTheme">
          <img src={Stories} alt="books" className="pic" />
          {facade.isAdmin().indexOf("user") !== -1 && (
            <>
            
            <Card border="dark" style={{ backgroundColor: "#fdbc68" }}>
              <Card.Title>Review a book:</Card.Title>
                <Card.Body>
              <form>
                <div className="summary">
                  <div>
                      
                    <h6>Book Title</h6>
                    <input
                      type="text"
                      id="book_title"
                      className="i1"
                      onChange={handleChange}
                    />
                    <h6>Book Author</h6>
                    <input
                      type="text"
                      id="book_author"
                      className="i1"
                      onChange={handleChange}
                    />
                    <h6>Review Author</h6>
                    <input
                      type="text"
                      id="byline"
                      className="i1"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <h6>Review</h6>
                    <textarea
                      rows="5"
                      cols="60"
                      name="description"
                      className="i2"
                      defaultValue="Write your review here..."
                      id="summary"
                      onChange={handleChange}
                    />

                    <br />
                    <button className="myButton" onClick={handleSubmit}>
                      Send review
                    </button>
                  </div>
                  {/* <p>{bookReview.title} {bookReview.book_author} {bookReview.byline} {bookReview.summary}</p> */}
                </div>
              </form>
              </Card.Body>
              </Card>
            </>
          )}
          <p>{errorUser}</p>

          {facade.isAdmin().indexOf("user") !== -1 && (
            <>
            <Card border="dark" style={{ backgroundColor: "#fdbc68" }}>
              <Card.Title>Review a film:</Card.Title>
              <Card.Body>
                <form>
                  <div className="summary">
                    <div>
                      <h6>Film Title</h6>
                      <input
                      type="text"
                      id="display_title"
                      className="i1"
                      onChange={handleChangeFilm}
                      />
                      <h6>Review Headline</h6>
                      <input
                      type="text"
                      id="headline"
                      className="i1"
                      onChange={handleChangeFilm}
                      />
                      <h6>Review Description</h6>
                      <input
                      type="text"
                      rows="5"
                      cols="60"
                      name="descripFilm"
                      className="i2"
                      defaultValue="Write your review here..."
                      id="summary_short"
                      onChange={handleChangeFilm}
                      />
                      <br/>
                      <button className="myButton" onClick={handleSubmitFilm}>
                        Send Film Review
                      </button>
                    </div>
                  </div>
                </form>
              </Card.Body>
            </Card>
            </>
          )}

          
        </div>
      </div>
    </>
  );
}
export default UserPage;
