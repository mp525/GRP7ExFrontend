import React, { useEffect, useState } from "react";
import "./App.css";
import facade from "./apiFacade";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const EditBook = ({ editID, books, submitTitle }) => {
  const [bookToEdit, setBookToEdit] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [bookSucces, setBookSucces] = useState({});

  useEffect(() => {
    const single = books.filter((rev) => {
      return rev.id == editID;
    });

    setBookToEdit({ ...single[0] });
    setIsEditing(true);
  }, [editID]);

  useEffect(() => {}, []);

  useEffect(() => {}, [bookToEdit]);

  const handleChange = (event) => {
    const target = event.target;
    const property = target.id;
    const value = target.value;
    const tmpBook = { ...bookToEdit, [property]: value };
    setBookToEdit({ ...tmpBook });
  };

  const submitChange = () => {
    setIsEditing(false);
    facade.editBookRev(bookToEdit, setBookSucces);
    submitTitle();
  };

  return (
    <>
      {isEditing && (
        <>
          {editID !== 0 && (
            <Card border="dark" style={{ backgroundColor: "#f0EAD6" }}>
              <h3>Edit book review: </h3>
              <form>
                <input type="text" disabled value={"ID: " + editID} />
                <br />
                <textarea
                  rows="5"
                  cols="60"
                  width="60%"
                  fontSize="medium"
                  defaultValue={bookToEdit.summary}
                  id="summary"
                  onChange={handleChange}
                />
                <br />
                <Button onClick={submitChange}>Submit change</Button>
              </form>
              <br />
            </Card>
          )}
        </>
      )}
      {bookSucces.book_title && (
        <>
          <p style={{ color: "white", backgroundColor: "orange" }}>
            Review by "{bookSucces.byline}" was edited!
          </p>
        </>
      )}
    </>
  );
};

export default EditBook;
