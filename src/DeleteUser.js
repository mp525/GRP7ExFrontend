import React, { useEffect, useState } from "react";
import Admin from "./admin.jpg";
import "./App.css";
import facade from "./apiFacade";
import AdminBooks from "./AdminBooks";
import AdminFilm from "./AdminFilm";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const containerStyle = {
    width: "58.7%",
  };

const DeleteUser = () => {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      getUsers();
    }, []);

    useEffect(() => {
        getUsers();
      }, [users]);
  
    const deleteUser = (e) => {
      e.preventDefault();
      const username = e.target.id;
      console.log(username);
      facade.deleteUsers(username);
      getUsers();
  
    };

    const getUsers = ()=>{
        facade.getAllUsers(setUsers);
    }
  
    return (
      <>
        {facade.isAdmin().indexOf("admin") !== -1 && (
          <>
            <Container style={containerStyle}>
              <Card border="dark" style={{ backgroundColor: "#f0EAD6" }}>
                <Card.Body>
                  <h3>Delete a user</h3>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => {
                        return (
                          <tr>
                            <td>{user.username}</td>
                            <td>
                              
                              <Button variant="danger" id={user.username} onClick={deleteUser}>
                                delete
                              </Button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </Card.Body>
              </Card>
            </Container>
          </>
        )}
      </>
    );
  };

  export default DeleteUser;