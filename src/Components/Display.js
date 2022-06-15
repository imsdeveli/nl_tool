import React from "react";
import ATN from "../Templates/Current/NewsletterJS/ATN.js";
import OTR from "../Templates/Current/NewsletterJS/OTR.js";
import PTR from "../Templates/Current/NewsletterJS/PTR.js";
import TCI from "../Templates/Current/NewsletterJS/TCI.js";
import WIA from "../Templates/Current/NewsletterJS/WIA.js";
import ATN_Featured from "../Templates/Current/FeaturedJS/ATN_Featured.js";
import OTR_Featured from "../Templates/Current/FeaturedJS/OTR_Featured.js";
import PTR_Featured from "../Templates/Current/FeaturedJS/PTR_Featured.js";
import TCI_Featured from "../Templates/Current/FeaturedJS/TCI_Featured.js";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../scrollBox.css";

import Preview from "./Preview";

const Display = (props) => {
  console.log("display Props", props);

  let template = props.Newsletter;

  const Blank = () => {
    return `Please enter a valid template`;
  };

  let templateString = Blank;

  switch (template) {
    //Articles
    case "ATN":
      templateString = ATN(props);
      break;
    case "OTR":
      templateString = OTR(props);
      break;
    case "PTR":
      templateString = PTR(props);
      break;
    case "TCI":
      templateString = TCI(props);
      break;
    case "WIA":
      templateString = WIA(props);
      break;
    //Featured Articles
    case "ATN_Featured":
      templateString = ATN_Featured(props);
      break;
    case "OTR_Featured":
      templateString = OTR_Featured(props);
      break;
    case "PTR_Featured":
      templateString = PTR_Featured(props);
      break;
    case "TCI_Featured":
      templateString = TCI_Featured(props);
      break;
    default:
      templateString = Blank();
      break;
  }

  let stringed = templateString.toString();
  // console.log("template", template);
  function handleCopyClick() {
    /* Save value of myText to input variable */
    var input = stringed;

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(input);

    alert("Copied Text: " + input);
    // console.log("TemplateString:", templateString);
  }

  return (
    <div className="Display">
      <div class="row">
        <div class="col-6">
          <div class="d-grid gap-2 mb-4">
            <h2>HTML</h2>
            <p class="small">
              Once you've completed the form and saved, use the button below to
              generate your HTML. Each time you make changes to the form you'll
              need to re-generate HTML.
            </p>
            <button class="btn btn-success" onClick={props.pullData}>
              Generate HTML
            </button>
          </div>
          <div class="card mb-4 scroll-box">
            <p class="card-text small" style={{ fontSize: "10px" }}>
              <span>
                <pre>{templateString}</pre>
              </span>
            </p>
          </div>
          <div class="d-grid gap-2 mb-4">
            <button class="btn btn-link" onClick={handleCopyClick}>
              {" "}
              Copy HTML to clipboard{" "}
            </button>
          </div>
        </div>
        <div class="col">
          <Preview templateString={templateString} />
        </div>
      </div>
    </div>
  );
};

export default Display;
