import React, { useEffect, useState } from 'react';
import Stories from './Stories.jpg';
import "./App.css";
function UserPage() {


    return (
        <>
            <div align="center">
                <div className="bookTheme">
                <img src={Stories} alt="books" width={1000} height={300} />
                    <h2>This is a page made so that our users can make their one reviews</h2>
                    <form>
                        <div className="summary">
                        <h2>Display Title</h2><input type="text" className="i1"/>
                        <h2>Headline</h2><input type="text" className="i1"/>
                        <h2>Publication Date</h2><input type="text" className="i1"/>

                        <h2>Summary Short</h2><textarea rows = "5" cols = "60" name = "description" className="i2">Enter details here...</textarea>
                        <br/><button className="myButton">Add review</button>
                        </div>
                    </form>
                    <br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br />
                </div>
            </div>
        </>
    );
}
export default UserPage;