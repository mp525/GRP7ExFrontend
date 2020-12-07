import "./App.css";
import React, { useEffect, useState } from "react";
import Stories from './Stories.jpg';
import Navbar from "./Navbar";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useLocation,
  useHistory,
} from "react-router-dom";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import facade from "./apiFacade";
import LoggedIn from "./LoggedIn";
import LoginForm from "./loginForm";
import UserPage1 from "./UserPage1";
import FrontPage from "./Frontpage";
import Iframe from 'react-iframe';
import AdminPage from './AdminPage';
import Footer from './Footer';
import UserPage from './UserPage';

import AboutSite from './AboutSite';

function App() {
  const [errorMes, setErrorMes] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [dataFromServer, setDataFromServer] = useState("");
  let history = useHistory();

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
  };
  const login = (user, pass) => {
    facade
      .login(user, pass)

      .then((res) => setLoggedIn(true))
      .catch((err) => {
        err.fullError.then((err) => {
          setErrorMes(err.message);
        });
      });
  };
  const register = (user, pass) => {
    facade
    .register(user, pass)
    .then((res) => setLoggedIn(true))
    // .then((data) => setDataFromServer(data.msg))
    /* .catch((err) => {
      err.fullError.then((err) => {
        setErrorMes(err.message);
      });
    }); */
  };

  const setLoginStatus = (status) => {
    setLoggedIn(status);
    history.push("/");
  };

  return (
    <div>
      {/* <Header loginMsg={loggedIn ? "Logout" : "Login"} loggedIn={loggedIn} /> */}
      <Navbar loggedIn={loggedIn} loginMsg={loggedIn ? "Logout" : "Login"}/>
      <Switch>
        <Route exact path="/">
          <FrontPage/>
          <Footer/>
        </Route>
        <Route path="/page1">
          <AboutSite />
          <Footer/>
        </Route>
        
        <Route path="/page3">
          {/* <User /> */}
          <UserPage1/>
          <Footer/>
        </Route>
        <Route path="/userPage">
          {/* <User /> */}
          <UserPage facade={facade}/>
          <Footer/>
        </Route>
        <Route path="/page4">
          {/* <Admin /> */}
          <AdminPage/>
          <Footer/>
        </Route>
        <Route path="/login">
          {!loggedIn ? (
            <LoginForm
              errorMes={errorMes}
              setErrorMes={setErrorMes}
              login={login}
              register={register}
              dataFromServer={dataFromServer}
              setDataFromServer={setDataFromServer}
            />
          ) : (
            <div className="logoutPage2">
              <LoggedIn />
              <button onClick={logout}>Logout</button>
            </div>
          )}
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
}
{
  /* <Login
            loginMsg={loggedIn ? "Logout" : "Login"}
            loggedIn={loggedIn}
            setLoginStatus={setLoginStatus}
          /> */
}

function FetchDefault() {
  const [array, setArray] = useState([]);

  useEffect(() => {
    facade.fetchDefault(setArray);
  }, []);

  return (
    <div>
      <h3>Data fetched from api:</h3>
      <ul>
        {array.map((data) => {
          return <li>{data}</li>;
        })}
      </ul>
    </div>
  );
}

function Header({ loggedIn, loginMsg }) {
  return (
    <ul className="header">
      <li>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/page1">
          About
        </NavLink>
      </li>
      
      {loggedIn && (
        <>
          <li>
            <NavLink activeClassName="active" to="/page3">
              Reviews
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/userPage">
              Write Reviews
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/page4">
              Admin Page
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink exact activeClassName="active" to="/login">
          {loginMsg}
        </NavLink>
      </li>
    </ul>
  );
}

function NoMatch() {
  let location = useLocation();
  return (
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  );
}

function Placeholder() {
  return <h3>TODO</h3>;
}

function User() {
  const [errorUser, setErrorUser] = useState("");
  const [dataFromServer, setDataFromServer] = useState("Error");
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

  return (
    <div>
      <h3>{dataFromServer}</h3>
      <p>{errorUser}</p>
    </div>
  );
}

function Admin() {
  const [errorAdmin, setErrorAdmin] = useState("");
  const [dataFromServer, setDataFromServer] = useState("Error!");

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
    <div>
      <h3>{dataFromServer}</h3>
      <p>{errorAdmin}</p>
    </div>
  );
}

export default App;
