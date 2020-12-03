import React, { useState, useEffect } from "react";

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
const review="/api/film/review/";
const addBookReview = "/api/books/add";
const addFilmReview = "/api/film/add";
const deleteBookReview = "/api/books/delete/";
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
    deleteBookReview
};
