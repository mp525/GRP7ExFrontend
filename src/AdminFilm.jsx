import React, { useEffect, useState } from "react";
import "./App.css";
import facade from "./apiFacade";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import EditFilm from "./EditFilm";

const containerStyle = {
  width: "58.7%",
};
function AdminFilm() {
  const [title, setTitle] = useState("");
  const [reviews, setReviews] = useState({});
  const [film, setFilm] = useState([]);
  const [editID, setEditID] = useState(0);
  const [delDTO, setDelDTO] = useState({});

  useEffect(()=>{
    //submitTitle();
  }, [delDTO])
  

  const submitTitle = () => {
    facade.fetchFilmReviewsA(setReviews, setFilm, title);
  };

  const editTODO = (e) => {
    e.preventDefault();
    const target = e.target;
    setEditID(target.id);
    setDelDTO({headline:""})
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
    facade.deleteFilmRev(id, setDelDTO);
    setTimeout(() => {
      submitTitle();
    }, 800);
    
  };



  return (
    <>
      <div>
        
        
        {facade.isAdmin().indexOf("admin") !== -1 && (
          <>
            <Container style={containerStyle}>
              <Card border="dark" style={{ backgroundColor: "#f0EAD6" }}>
                <Card.Body>
                  <h4>Film reviews</h4>
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
                  <p>
                 
                    

                    
                    
                  </p>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Published</th>
                        <th>Title</th>
                        <th>Headline</th>
                        <th>Summary</th>
                        <th>ID</th>
                      </tr>
                    </thead>

                    <tbody>
                      
                      {film.map((x) => {
                        if (x.id !== 0) {
                          return (
                            <tr key={x.id}>
                              <td>{x.publication_date}</td>
                              <td>{x.display_title}</td>
                              <td>{x.headline}</td>
                              <td>{x.summary_short}</td>
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
                      {delDTO.headline && (
                                <>
                                <p style={{color:"white", backgroundColor:"red"}}>Deleted!</p>
                                </>
                              )}
                    </tbody>
                  </table>
                </Card.Body>
              </Card>
              <EditFilm editID={editID} film={film} submitTitle={submitTitle} />
            </Container>
          </>
        )}
      </div>
    </>
  );
}


export default AdminFilm;
