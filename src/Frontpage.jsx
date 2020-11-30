import React, { useEffect, useState } from 'react';
import Stories from './Stories.jpg';
import "./App.css";
function FrontPage() {
    return (
        <>
            <div align="center">
                <div className="bookTheme">
                    <img src={Stories} alt="books" className="pic" />
                    <br /><br />
                    <i>“The most amazing thing for me is that every single person who sees a movie, <br />
                        not necessarily one of my movies, brings a whole set of unique experiences, <br />
                        but through careful manipulation and good storytelling, <br />
                        you can get everybody to clap at the same time, to hopefully laugh at the same time, <br />
                        and to be afraid at the same time.” - Steven Spielberg, filmmaker<br />
                    <br /><br /><br />
                    <h2>
                        
                    </h2>
                    </i>
                    
                    <br /><br /><br /><br /><br /><br /><br />
                    <br /><br />
                    
                    
                </div>
            </div>
        </>
    );
}
export default FrontPage;