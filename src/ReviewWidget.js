import "./App.css";
import React, { useState } from "react";

function ReviewWidget(props) {
  function prepareWidget() {
    if (!props.goodreads) {
      return reactParse();
    }

    const rawWidget = props.goodreads.reviews_widget;

    const noStyle = rawWidget.replace(
      '<style>\n  #goodreads-widget {\n    font-family: georgia, serif;\n    padding: 18px 0;\n    width:565px;\n  }\n  #goodreads-widget h1 {\n    font-weight:normal;\n    font-size: 16px;\n    border-bottom: 1px solid #BBB596;\n    margin-bottom: 0;\n  }\n  #goodreads-widget a {\n    text-decoration: none;\n    color:#660;\n  }\n  iframe{\n    background-color: #fff;\n  }\n  #goodreads-widget a:hover { text-decoration: underline; }\n  #goodreads-widget a:active {\n    color:#660;\n  }\n  #gr_footer {\n    width: 100%;\n    border-top: 1px solid #BBB596;\n    text-align: right;\n  }\n  #goodreads-widget .gr_branding{\n    color: #382110;\n    font-size: 11px;\n    text-decoration: none;\n    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n  }\n</style>\n',
      ""
    );
    const withIsbn = noStyle.replace(
      "stars=000",
      "isbn=" + props.isbm.identifier
    );
    const withDevID = withIsbn.replace("DEVELOPER_ID", "125110241");

    const withP = withDevID.replace("<h1>", "<h1>More reviews on: ");

    var parse = require("html-react-parser");
    return parse(withP);
  }

  function reactParse() {
    var parse = require("html-react-parser");
    return parse("");
  }

  return <div>{prepareWidget()}</div>;
}

export default ReviewWidget;
