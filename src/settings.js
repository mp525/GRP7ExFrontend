const mainURL = "https://mparking.dk/Examensys";
//const mainURL = "http://localhost:8080/jpareststarter";
const userInfoEndpoint = "/api/info/user";
const adminInfoEndpoint = "/api/info/admin";
const defaultEndpoint = "/api/default";
const loginEndpoint = "/api/login";
const registerEndpoint = "/api/info";
const books = "/api/books/reviewsOld/";
const bookReviews = "/api/books/reviews/";
const userReviewsB = "/api/books/reviewsA/";
const userReviewsF = "/api/film/reviewU/";
const review="/api/film/review/";
const addBookReview = "/api/books/add";
const addFilmReview = "/api/film/add";
const deleteBookReview = "/api/books/delete/";
const deleteFilmReview = "/api/film/delete/";
const editBookReview = "/api/books/edit";
const editFilmReview = "/api/film/edit";
const getUsers = "/api/info/all";
const deleteUser = "/api/info/delete/";
export {
    mainURL,
    userInfoEndpoint,
    adminInfoEndpoint,
    defaultEndpoint,
    loginEndpoint,
    registerEndpoint,
    books,
    bookReviews,
    review,
    addBookReview,
    addFilmReview,
    userReviewsB,
    deleteBookReview,
    editBookReview,
    userReviewsF,
    editFilmReview,
    deleteFilmReview,
    getUsers,
    deleteUser
};
