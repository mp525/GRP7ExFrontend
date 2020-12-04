import React, { useEffect, useState } from "react";
import "./App.css";
import { Container,Card } from "react-bootstrap";
const containerStyle = {
    width: "30%",
    height: "400px"
  };
function BookWrite({ facade }) {
    const [bookReview, setBookReview] = useState({});
    const handleChange = (evt) => {
        const target = evt.target;
        const value = target.value;
        const prop = target.id;
        const tmpBookReview = { ...bookReview, [prop]: value };
        setBookReview(tmpBookReview);
      };
    
    
    
      const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(bookReview);
        facade.addBookRev(bookReview);
      };

  return (
    <>
    {facade.isAdmin().indexOf("user") !== -1 && (
            <>
            <Container style={containerStyle}>
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
              </Container>
            </>
          )}
          
  </>
  )
}
    
export default BookWrite;