import React, { useState, useEffect } from "react";

const mainURL = "https://mparking.dk/Examensys";
const userInfoEndpoint = "/api/info/user";
const adminInfoEndpoint = "/api/info/admin";
const defaultEndpoint = "/api/default";
const loginEndpoint = "/api/login";
const books = "/api/books/reviews/";
const review="/api/film/review/";
export {
    mainURL,
    userInfoEndpoint,
    adminInfoEndpoint,
    defaultEndpoint,
    loginEndpoint,
    books,
    review
};
