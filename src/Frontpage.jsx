import React, { useEffect, useState } from 'react';
import Stories from './Stories.jpg';
import "./App.css";
function FrontPage() {
    return (
        <>
            <div align="center">
                <div className="bookTheme">
                    <img src={Stories} alt="books" width={1000} height={300} />
                    <br /><br />
                    <i><h2>Walking down the path of <b>stories</b> you see meaning and hope.</h2>
                    <h2>You get inspired, pulled in and sometimes drowned</h2>
                    <h2>All life is, is a story</h2>
                    <br /><br /><br />
                    <h2>
                        andet poetisk, la di da 
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