import React, { useEffect, useState } from "react";
import "./App.css";
import facade from "./apiFacade";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import EditBook from "./EditBook";

const containerStyle = {
  width: "58.7%",
};
function AdminBooks() {
  const [title, setTitle] = useState("");
  const [reviews, setReviews] = useState({});
  const [books, setBooks] = useState([]);
  const [delDTO, setDelDTO] = useState({});
  const [editID, setEditID] = useState(0);

  const submitTitle = () => {
    facade.fetchBookReviewsA(setReviews, setBooks, title);
  };
 
  const editTODO = (e) => {
    e.preventDefault();
    const target = e.target;
    setEditID(target.id);
    setDelDTO({byline:""})
  };

  const handleChange = (event) => {
    const target = event.target;
    const property = target.id;
    const value = target.value;
    setTitle(value);
  };

  const deleteReview = (e) => {
    e.preventDefault();
    const id = e.target.id;
    facade.deleteBookRev(id, setDelDTO);
    submitTitle();
    
  };

  return (
    <>
      <div>
        {facade.isAdmin().indexOf("admin") !== -1 && (
          <>
            <Container style={containerStyle}>
              <Card border="dark" style={{ backgroundColor: "#f0EAD6" }}>
                <Card.Body>
                  <h4>Book reviews</h4>
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
                  <h4>User reviews:</h4>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Published</th>
                        <th>Review Author</th>
                        <th>Book Title</th>
                        <th>Book Author</th>
                        <th>Review summary</th>
                        <th>ID</th>
                      </tr>
                    </thead>

                    <tbody>
                      {books.map((x) => {
                        if (x.id !== 0) {
                          return (
                            <tr key={x.id}>
                              <td>{x.publication_dt}</td>
                              <td>{x.byline}</td>
                              <td>{x.book_title}</td>
                              <td>{x.book_author}</td>
                              <td>{x.summary}</td>
                              <td>{x.id}</td>
                              <td>
                                <a href="#" id={x.id} onClick={editTODO}>
                                  edit
                                </a>{" "}
                                /{" "}
                                <a href="#" id={x.id} onClick={deleteReview}>
                                  delete
                                </a>
                              </td>
                              
                            </tr>
                          );
                        }
                      })}
                      {delDTO.byline && (
                                <>
                                <p style={{color:"white", backgroundColor:"red"}}>Deleted!</p>
                                </>
                              )}
                    </tbody>
                  </table>
                </Card.Body>
              </Card>
              <EditBook editID={editID} books={books} submitTitle={submitTitle} />
            </Container>
          </>
        )}
      </div>
    </>
  );
}


export default AdminBooks;
