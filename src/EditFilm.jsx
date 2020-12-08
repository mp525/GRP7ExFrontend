import React, { useEffect, useState } from "react";
import "./App.css";
import facade from "./apiFacade";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const EditFilm = ({ editID, film, submitTitle }) => {
  const [filmToEdit, setFilmToEdit] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const single = film.filter((rev) => {
      return rev.id == editID;
    });

    setFilmToEdit({ ...single[0] });
    setIsEditing(true);
  }, [editID]);


  useEffect(()=>{
    
  }, [])

  const handleChange = (event) => {
    const target = event.target;
    const property = target.id;
    const value = target.value;
    const tmpFilm = { ...filmToEdit, [property]: value };
    setFilmToEdit({ ...tmpFilm });
  };

  const submitChange = () => {
    setIsEditing(false);
    facade.editFilmRev(filmToEdit);
    setTimeout(() => {
  }, 500);
    submitTitle();
  };

  return (
    <>
      {isEditing && (
        <>
       
          {editID !== 0 && (
            <Card border="dark" style={{ backgroundColor: "#f0EAD6" }}>
              <h3>Edit film review: </h3>
              <form>
                <input type="text" disabled value={"ID: " + editID} />
                <br />
                <textarea
                  rows="5"
                  cols="60"
                  width="60%"
                  fontSize="medium"
                  defaultValue={filmToEdit.summary_short}
                  id="summary_short"
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
    </>
  );
};

export default EditFilm;