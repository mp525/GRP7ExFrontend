import React, { useEffect, useState } from "react";
import Admin from "./admin.jpg";
import "./App.css";
import facade from "./apiFacade";
import { Container, Row, Col, Card } from "react-bootstrap";


function AdminPage() {
  const [errorAdmin, setErrorAdmin] = useState("");
  const [dataFromServer, setDataFromServer] = useState("");
  const [title, setTitle] = useState("");
  const [reviews, setReviews] = useState({});
  const [books, setBooks] = useState([]);
  const [delDTO, setDelDTO] = useState({});

  useEffect(() => {
    facade
      .fetchDataAdmin()
      .then((data) => setDataFromServer(data.msg))
      .catch((err) => {
        err.fullError.then((err) => {
          setErrorAdmin(err.message);
        });
      });
  }, []);

  const submitTitle = () => {
    facade.fetchBookReviewsA(setReviews, setBooks, title);
  };

  const handleChange = (event) => {
    const target = event.target;
    const property = target.id;
    const value = target.value;
    setTitle(value);
  };

  const deleteReview = (e) => {
    const id = e.target.id;
    facade.deleteBookRev(id,setDelDTO);
    submitTitle();
  }

  return (
    <>
      <div align="center">
        <div className="bookTheme">
          
          <img src={Admin} alt="books" className="pic" />
          {facade.isAdmin().indexOf("admin") !== -1 && (
            <>
            <Card border="dark" style={{ backgroundColor: "#f0EAD6" }}>
              <Card.Body>
               <h4>Book reviews to delete</h4>
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
          <p>{delDTO.byline} {delDTO.book_title} {delDTO.book_author} {delDTO.summary}</p>
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
                      if(x.id !== 0){
                        return (
                          <tr key={x.id}>
                            <td>{x.publication_dt}</td>
                            <td>{x.byline}</td>
                            <td>{x.book_title}</td>
                            <td>{x.book_author}</td>
                            <td>{x.summary}</td>
                        <td>{x.id}</td>
                        <td>
                          <a href="#" id={x.id} onClick={deleteReview}>delete</a>
                        </td>
                          </tr>
                        );
                      }
                      
                    })}
                  </tbody>
                </table>
                </Card.Body>
                </Card>
            </>
          )}
          <p>{errorAdmin}</p>
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
          <br />
          <br />
          <br />

          
        </div>
      </div>
    </>
  );
}
export default AdminPage;
