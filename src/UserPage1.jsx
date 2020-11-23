import React, {useEffect, useState}from 'react';
import Books from './Books.jpg';
import "./App.css";
import api from './apiFacade'
function UserPage1() {
    const[books, setBooks]=useState([]);
    const[film, setFilm]=useState([]);
    const[title,setTitle]=useState("");
    const[title2,setTitle2]=useState("");
    useEffect(() => {
        
    }, []);

    const handleChange=(event)=>{
        const target = event.target; 
        const property = target.id; 
        const value = target.value;
        setTitle(value);
    }
    const handleChange2=(event)=>{
      const target = event.target; 
      const property = target.id; 
      const value = target.value;
      setTitle2(value);
  }
    const submitTitle=()=>{
        console.log(title);
       console.log(api.fetchBooks);
       api.fetchBooks(setBooks,title);
        
    }
    const submitTitle2=()=>{
      console.log(title);
     
     api.fetchReviews(setFilm,title2);
      
  }
    
    return (
      <>
      <div align="center">
          <div className="bookTheme">
        <h1>Books and reviews</h1>
         <img src={Books} alt="books" width={1100} height={200}/>

         <div className="bookTheme2">
        <h3>
            Table of Film Reviews
        </h3><br/><br/>
        <input type="text" id="title2" onChange={handleChange2}/>
        <button onClick={submitTitle2}>Get By Title</button><br/><br/>
        <table className="table"> 
        <thead>
           <tr>
           <th>display_title</th>
           <th>headline</th>
           <th>summary_short</th>
           <th>publication_date</th>
           
           </tr>
           </thead>

           <tbody>{film.map(x=>{
             return <tr>
                 <td>{x.display_title }</td>
                 <td>{x.headline}</td>
                 <td>{x.summary_short}</td>
                 <td>{x.publication_date}</td>
                 
                 </tr>
         })
         }</tbody>   
        </table>
        </div>

        <div className="bookTheme3">
        <h3>
        Table of Books
            
        </h3>
        <input type="text" id="title" onChange={handleChange}/>
        <button onClick={submitTitle}>Get By Title</button><br/><br/>
        <table className="table"> 
        <thead>
           <tr>
           <th>Publication</th>
           <th>Byline</th>
           <th>Title</th>
           <th>Author</th>
           <th>Summary</th>
           </tr>
           </thead>

           <tbody>{books.map(x=>{
             return <tr>
                 <td>{x.publication_dt}</td>
                 <td>{x.byline}</td>
                 <td>{x.book_title}</td>
                 <td>{x.book_author}</td>
                 <td>{x.summary}</td>
                 </tr>
         })
         }</tbody>   
        </table>
        </div>
        <br/><br/><br/><br/><br/><br/>
        </div>
    </div>
      </>
    );
  }
  export default UserPage1;