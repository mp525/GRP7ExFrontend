import React, { useEffect, useState } from "react";
import "./App.css";
import { Container, Card } from "react-bootstrap";

const containerStyle = {
  width: "30%",
};

function FilmWrite({ facade }) {
  const [dataFromServer, setDataFromServer] = useState("");
  const [filmSucces, setFilmSucces] = useState({});

  const [filmReview, setFilmReview] = useState({});

  const handleChangeFilm = (evt) => {
    const target = evt.target;
    const value = target.value;
    const prop = target.id;
    const review = { ...filmReview, [prop]: value };
    setFilmReview(review);
  };

  const handleSubmitFilm = (evt) => {
    evt.preventDefault();
    facade.addFilmRev(filmReview, setFilmSucces);
  };

  return (
    <>
      {facade.isAdmin().indexOf("user") !== -1 && (
        <Container style={containerStyle}>
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
                    <textarea
                      type="text"
                      rows="5"
                      cols="100"
                      name="descripFilm"
                      className="i2"
                      defaultValue="Write your review here..."
                      id="summary_short"
                      onChange={handleChangeFilm}
                    />
                    <br />
                    <button className="myButton" onClick={handleSubmitFilm}>
                      Send Film Review
                    </button>
                    <br />
                    <br />
                    {filmSucces.display_title && (
                      <>
                        <p style={{ color: "white", backgroundColor: "green" }}>
                          Review for film "{filmSucces.display_title}" was sent!
                        </p>
                      </>
                    )}
                    <br />
                    <br />
                  </div>
                </div>
              </form>
            </Card.Body>
          </Card>
        </Container>
      )}
    </>
  );
}

export default FilmWrite;
