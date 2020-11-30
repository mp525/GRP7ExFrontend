import Iframe from 'react-iframe';
import "./App.css";
import React, { useEffect, useState } from "react";


function ReviewWidget(props) {
    const [widget, setWidget] = useState("");

   // const string = "<style>\n  #goodreads-widget {\n    font-family: georgia, serif;\n    padding: 18px 0;\n    width:565px;\n  }\n  #goodreads-widget h1 {\n    font-weight:normal;\n    font-size: 16px;\n    border-bottom: 1px solid #BBB596;\n    margin-bottom: 0;\n  }\n  #goodreads-widget a {\n    text-decoration: none;\n    color:#660;\n  }\n  iframe{\n    background-color: #fff;\n  }\n  #goodreads-widget a:hover { text-decoration: underline; }\n  #goodreads-widget a:active {\n    color:#660;\n  }\n  #gr_footer {\n    width: 100%;\n    border-top: 1px solid #BBB596;\n    text-align: right;\n  }\n  #goodreads-widget .gr_branding{\n    color: #382110;\n    font-size: 11px;\n    text-decoration: none;\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  }\n</style>\n<div id=\"goodreads-widget\">\n  <div id=\"gr_header\"><h1><a rel=\"nofollow\" href=\"https://www.goodreads.com/book/show/3.Harry_Potter_and_the_Sorcerer_s_Stone\">Harry Potter and the Sorcerer&#39;s Stone Reviews</a></h1></div>\n  <iframe id=\"the_iframe\" src=\"https://www.goodreads.com/api/reviews_widget_iframe?did=125110241&amp;format=html&amp;links=660&amp;review_back=fff&amp;isbn=0142437174&amp;text=000\" width=\"565\" height=\"400\" frameborder=\"0\"></iframe>\n  <div id=\"gr_footer\">\n    <a class=\"gr_branding\" target=\"_blank\" rel=\"nofollow noopener noreferrer\" href=\"https://www.goodreads.com/book/show/3.Harry_Potter_and_the_Sorcerer_s_Stone?utm_medium=api&amp;utm_source=reviews_widget\">Reviews from Goodreads.com</a>\n  </div>\n</div>\n";
   // const str = string.replace("<style>\n  #goodreads-widget {\n    font-family: georgia, serif;\n    padding: 18px 0;\n    width:565px;\n  }\n  #goodreads-widget h1 {\n    font-weight:normal;\n    font-size: 16px;\n    border-bottom: 1px solid #BBB596;\n    margin-bottom: 0;\n  }\n  #goodreads-widget a {\n    text-decoration: none;\n    color:#660;\n  }\n  iframe{\n    background-color: #fff;\n  }\n  #goodreads-widget a:hover { text-decoration: underline; }\n  #goodreads-widget a:active {\n    color:#660;\n  }\n  #gr_footer {\n    width: 100%;\n    border-top: 1px solid #BBB596;\n    text-align: right;\n  }\n  #goodreads-widget .gr_branding{\n    color: #382110;\n    font-size: 11px;\n    text-decoration: none;\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  }\n</style>\n", "");
    //&amp;stars=000

    function prepareWidget(){
        if(!props.goodreads){
            return reactParse();
        }
        console.log(props.goodreads);
        const rawWidget = props.goodreads.reviews_widget;
        //rawwidget = props.goodreads.review_widget
        const noStyle = rawWidget.replace("<style>\n  #goodreads-widget {\n    font-family: georgia, serif;\n    padding: 18px 0;\n    width:565px;\n  }\n  #goodreads-widget h1 {\n    font-weight:normal;\n    font-size: 16px;\n    border-bottom: 1px solid #BBB596;\n    margin-bottom: 0;\n  }\n  #goodreads-widget a {\n    text-decoration: none;\n    color:#660;\n  }\n  iframe{\n    background-color: #fff;\n  }\n  #goodreads-widget a:hover { text-decoration: underline; }\n  #goodreads-widget a:active {\n    color:#660;\n  }\n  #gr_footer {\n    width: 100%;\n    border-top: 1px solid #BBB596;\n    text-align: right;\n  }\n  #goodreads-widget .gr_branding{\n    color: #382110;\n    font-size: 11px;\n    text-decoration: none;\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  }\n</style>\n", "");
        const withIsbn = noStyle.replace("stars=000", "isbn="+props.isbm.identifier);
        const withDevID = withIsbn.replace("DEVELOPER_ID", "125110241");
        //setWidget(withDevID);
        const withP = withDevID.replace("<h1>", "<h1>More reviews on: ");
        console.log(withP);
        var parse = require('html-react-parser');
        return parse(withP);
    }

    //str.trim("\n");
    //str.replace("<iframe", "<Iframe");
   // str.replace("<iframe/>", "/>");
   // str.replace(";", "&");
   // str.replace(" ",)

   function reactParse(){
    var parse = require('html-react-parser');
    return parse("");
   }
    
    function createMarkup(){
      return {__html: ""}
    };
  
    return <div>
        
        {prepareWidget()}{console.log("reviewparse")}
        {/*prepareWidget()*/}
    {/* <div dangerouslySetInnerHTML={createMarkup()}/> */}
  
    {/* <div>
    
  
  <div id="goodreads-widget">
    <div id="gr_header"><h1><a rel="nofollow" href="https://www.goodreads.com/book/show/2956.The_Adventures_of_Huckleberry_Finn">Goodreads reviews for The Adventures of Huckleberry Finn</a></h1></div>
    <iframe id="the_iframe" src="https://www.goodreads.com/api/reviews_widget_iframe?did=80029&format=html&header_text=Goodreads+reviews+for+The+Adventures+of+Huckleberry+Finn&isbn=0142437174&links=660&review_back=fff&stars=000&text=000" width="565" height="400" frameborder="0"></iframe>
    <div id="gr_footer">
      <a class="gr_branding" target="_blank" rel="nofollow noopener noreferrer" href="https://www.goodreads.com/book/show/2956.The_Adventures_of_Huckleberry_Finn?utm_medium=api&utm_source=reviews_widget">Reviews from Goodreads.com</a>
    </div>
  </div>
  
      
    </div> */}
    </div>
    
  }

  export default ReviewWidget;