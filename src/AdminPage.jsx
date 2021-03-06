import React, { useEffect, useState } from "react";
import Admin from "./pictures/admin.jpg";
import "./App.css";
import facade from "./apiFacade";
import AdminBooks from "./AdminBooks";
import AdminFilm from "./AdminFilm";
import DeleteUser from "./DeleteUser";

function AdminPage() {
  const [errorAdmin, setErrorAdmin] = useState("");
  const [dataFromServer, setDataFromServer] = useState("");

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

  return (
    <>
      <div align="center">
        <div className="bookTheme">
          <img src={Admin} alt="books" className="pic" />
          <AdminBooks />
          <AdminFilm />
          <DeleteUser />
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
        </div>
      </div>
    </>
  );
}

export default AdminPage;
