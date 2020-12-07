import {
    mainURL,
    userInfoEndpoint,
    adminInfoEndpoint,
    defaultEndpoint,
    loginEndpoint,
    registerEndpoint,
  books,review,
  bookReviews,
  addBookReview,
  addFilmReview,
  userReviewsB,
  deleteBookReview

} from "./settings";

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

function apiFacade() {
  /* Insert utility-methods from a latter step (d) here (REMEMBER to uncomment in the returned object when you do)*/

  const setToken = (token) => {
    localStorage.setItem("jwtToken", token);
  };
  const getToken = () => {
    return localStorage.getItem("jwtToken");
  };
  const loggedIn = () => {
    const loggedIn = getToken() != null;
    return loggedIn;
  };
  const logout = () => {
    localStorage.removeItem("jwtToken");
  };

  const login = (user, password) => {
    const options = makeOptions("POST", true, {
      username: user,
      password: password,
    });
    return fetch(mainURL + loginEndpoint, options)
      .then(handleHttpErrors)
      .then(res => {setToken(res.token) })
      
      
}
const register = (username, password) => {
  const options = makeOptions2("POST", {username: username, password: password});
  return fetch(mainURL + registerEndpoint, options)
  .then(handleHttpErrors)
  .then(res => {setToken(res.token)})
}

const makeOptions2 = (method,body) =>{
  var opts = {
    method: method,
    headers: {
      "Content-type": "application/json",
      'Accept': 'application/json',
    }
  }
  if (body) {
    opts.body = JSON.stringify(body);
  }
  return opts;
}

const fetchDataUser = () => {
    const options = makeOptions("GET",true); //True add's the token
   return fetch(mainURL + userInfoEndpoint, options).then(handleHttpErrors);
}
const fetchDataAdmin = () => {
    const options = makeOptions("GET",true); //True add's the token
   return fetch(mainURL + adminInfoEndpoint, options).then(handleHttpErrors);
}

  const isAdmin = () => {
    const jwtData = getToken().split(".")[1];
    const decodedJwtJsonData = window.atob(jwtData);
    const decodedJwtData = JSON.parse(decodedJwtJsonData);
    const isAdmin = decodedJwtData.roles;
    return isAdmin;
  }

  const fetchDefault = (callback) => {
    const options = makeOptions("GET");
    return fetch(mainURL + defaultEndpoint, options)
      .then(handleHttpErrors)
      .then((data) => {
        callback(data);
      });
  };
  const fetchBooks = (callback, title) => {
    const options = makeOptions("GET", true);
    console.log(mainURL + books, title, options);
    return fetch(mainURL + books + title, options)
      .then(handleHttpErrors)
      .then((data) => {
        callback(data);
      });
  };

  const deleteBookRev = (id, callback) => {
    const options = makeOptions("DELETE", true);
    return fetch(mainURL + deleteBookReview + id, options)
    .then(handleHttpErrors)
    .then((data) =>{
      callback(data);
    })
  }
  
  const addBookRev = (bookReview) =>{
    const options = makeOptions("POST", true, bookReview);
    return fetch(mainURL + addBookReview, options)
    .then(handleHttpErrors);
  }

  const addFilmRev = (filmReview) => {
    const options = makeOptions("POST", true, filmReview);
    return fetch(mainURL + addFilmReview, options)
    .then(handleHttpErrors);
  }

  const fetchBookReviews = (callback, callback2, title) => {
    const options = makeOptions("GET", true);
    //console.log(mainURL + bookReviews, title, options);
    return fetch(mainURL + bookReviews + title, options)
      .then(handleHttpErrors)
      .then((data) => {
        callback(data);
        callback2(data.bookDTOs);
      });
  };

  const fetchBookReviewsA = (callback, callback2, title) => {
    const options = makeOptions("GET", true);
    //console.log(mainURL + bookReviews, title, options);
    return fetch(mainURL + userReviewsB + title, options)
      .then(handleHttpErrors)
      .then((data) => {
        callback(data);
        callback2(data.bookDTOs);
      });
  };

  const fetchReviews = (callback, title) => {
    const options = makeOptions("GET", true);
    return fetch(mainURL + review + title, options)
      .then(handleHttpErrors)
      .then((data) => {
        callback(data);
      });
  };

  const fetchTopStories = (callback, title) => {
    const options = makeOptions2("GET");
    const url = "https://api.nytimes.com/svc/topstories/v2/";
    const theme = title + ".json";
    const key = "?api-key=5tN35qLGRRkvgYSCFj7wKdwhDNb5PMOF";
    return fetch(url+theme+key, options)
    .then(handleHttpErrors)
    .then((data) => {
      callback(data.results);
    })
  };

  const makeOptions = (method, addToken, body) => {
    var opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    };
    if (addToken && loggedIn()) {
      opts.headers["x-access-token"] = getToken();
    }
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  };
  return {
    makeOptions,
    setToken,
    getToken,
    loggedIn,
    login,
    logout,
    register,
    fetchDataUser,
    fetchDataAdmin,
    fetchDefault,
    fetchBooks,
    fetchReviews,
    fetchBookReviews,
    addBookRev,
    isAdmin,
    addFilmRev,
    fetchBookReviewsA,
    deleteBookRev,
    fetchTopStories
  };
}
const facade = apiFacade();
export default facade;
