import React, { useEffect, useState } from "react";
import Stories from "./TS.jpg";
import "./App.css";
import { Container, Row, Col, Card } from "react-bootstrap";

function Topstories({facade}) {
    return (
        <>
        <div align="center">
            <div className="bookTheme">
                <img src={Stories} alt="books" className="pic"/>
            </div>
        </div>
        </>
    )
}
export default Topstories;