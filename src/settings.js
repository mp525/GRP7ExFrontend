import React, { useState, useEffect } from "react";

const mainURL = "https://mparking.dk/Examensys";
//const mainURL = "http://localhost:8080/jpareststarter";
const userInfoEndpoint = "/api/info/user";
const adminInfoEndpoint = "/api/info/admin";
const defaultEndpoint = "/api/default";
const loginEndpoint = "/api/login";
const books = "/api/books/reviewsOld/";
const bookReviews = "/api/books/reviews/";
const review="/api/film/review/";
export {
    mainURL,
    userInfoEndpoint,
    adminInfoEndpoint,
    defaultEndpoint,
    loginEndpoint,
    books,
    bookReviews,
    review
};
