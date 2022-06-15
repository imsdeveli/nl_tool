import "./App.css";
import React, { useEffect, useState } from "react";
import Form from "./Components/Form.js";

import axios from "axios";
import cheerio from "cheerio";
import "bootstrap/dist/css/bootstrap.min.css";
import { titleCase } from "title-case";

import Display from "./Components/Display";

function App() {
  const [formInputData, setFormInputData] = useState({});

  // const [currentData, setCurrentData] = useState({
  //   Ar1: "",
  //   Ar2: "",
  //   Ar3: "",
  //   Ad1: "",
  //   Ad2: "",
  //   Ad3: "",
  //   Newsletter: "",
  //   Featured_URL: "",
  //   Featured_Text: "",
  // });

  const example = {
    input: "",
    URL: "",
    Head: "",
    Bod: "",
    call: ""
  };
  const [Ar1, setAr1] = useState(example);
  const [Ar2, setAr2] = useState(example);
  const [Ar3, setAr3] = useState(example);
  const [Ad1, setAd1] = useState(example);
  const [Ad2, setAd2] = useState(example);
  const [Ad3, setAd3] = useState(example);

  const [Featured_Text, setFeatured_Text] = useState("");
  const [Featured_URL, setFeatured_URL] = useState("");
  const [Newsletter, setNewsletter] = useState("");

  // const compareData = (formInputData) => {
  //   let keys = Object.keys(formInputData);
  //   //console.log("keys", keys);
  //   keys.forEach((key) => {
  //     //console.log("key", key);
  //     //console.log("formInputData[key]", formInputData[key]);
  //     // //console.log("key.input", key.input);

  //     // callUpdateOn(key);

  //     //call update function to set(key.input === formInputData[key])
  //   });
  // };
  const GetParseAndUpdate = (formInputData) => {
    handleArticle(formInputData.Ar1, setAr1);
    handleArticle(formInputData.Ar2, setAr2);
    handleArticle(formInputData.Ar3, setAr3);

    handleAd(formInputData.Ad1, setAd1);
    handleAd(formInputData.Ad2, setAd2);
    handleAd(formInputData.Ad3, setAd3);

    // let TitleCasedFText = titleCase(formInputData.Featured_Text);

    // setFeatured_Text(TitleCasedFText);

    HandleFeatured_Text(formInputData.Featured_Text);
    setFeatured_URL(formInputData.Featured_URL);
    setNewsletter(formInputData.Newsletter);
  };

  const HandleFeatured_Text = (inputData) => {
    if (inputData !== undefined) {
      let featuredT = `${inputData}`;
      featuredT = titleCase(featuredT);
      setFeatured_Text(featuredT);
      console.log("Featured_T", featuredT);
    }
  };
  useEffect(() => {
    GetParseAndUpdate(formInputData);
  }, [formInputData]);

  // useEffect(() => {
  //   if (Featured_Text !== "") {
  //   }
  // }, [Featured_Text]);

  const cutBody = (response) => {
    let $ = cheerio.load(response.data);

    let pTags = $(".entry-content").find("p");
    pTags = $(pTags).contents();
    let bodArray = [];

    $(pTags).each(function (i, e) {
      bodArray[i] = $(e).text();
    });

    // newBodArray.splice(0, 1);

    bodArray.splice(0, 2);

    console.log("bodArray: ", bodArray);

    // console.log("newbODaRRAY", newBodArray);

    let bodString = bodArray.join("");
    bodString = bodString.substring(0, 300);
    bodString = bodString.concat("...");

    console.log("bodString:   ", bodString);

    let bodyObj = { bodString, bodArray };
    return bodyObj;
  };
  const cutBodyPTR = (response) => {
    let $ = cheerio.load(response.data);

    let pTags = $(".thecontent").find("p");
    pTags = $(pTags).contents();
    let bodArray = [];

    $(pTags).each(function (i, e) {
      bodArray[i] = $(e).text();
    });
    // let newBodArray = bodArray.splice(0, 1);

    bodArray.splice(0, 2);
    let bodString = bodArray.join("");
    bodString = bodString.substring(0, 300);
    bodString = bodString.concat("...");

    console.log("bodArray: ", bodArray);

    // console.log("newbODaRRAY", newBodArray);
    // //console.log("bodString:   ", bodString);

    let bodyObj = { bodString, bodArray };
    return bodyObj;
  };

  const handleArticle = (ArInput, arNum) => {
    //console.log("ArInput:", ArInput);
    //console.log("ArNum:", arNum);

    const theUrl = `${ArInput}`;
    const theHeaders = { "Access-Control-Allow-Origin": "*" };

    if (
      theUrl.includes("thecheapinvestor") ||
      theUrl.includes("activetradernews")
    ) {
      axios
        .get(theUrl, theHeaders)
        .then((response) => {
          let $ = cheerio.load(response.data);
          let bodyObj = cutBody(response);
          let body = bodyObj.bodString;
          let bodyArray = bodyObj.bodArray;

          let bodPar1 = bodyArray.slice(0, 2).join(" ");

          let bodPar2 = bodyArray.slice(2, 4).join(" ");

          let bodPar3 = bodyArray.slice(4, 6).join(" ");

          let bodPar4 = bodyArray.slice(6, 8).join(" ");

          console.log("bodyArrays", bodPar1, bodPar2, bodPar3, bodPar4);

          $(".site-content").each((index, element) => {
            let url = ArInput;
            let title = $(element).find(".page-title").text();
            title = titleCase(title);

            arNum({
              input: ArInput,
              URL: url,
              Head: title,
              Bod: body,
              Par1: bodPar1,
              Par2: bodPar2,
              Par3: bodPar3,
              Par4: bodPar4
            });
            //console.log("TheCheapInvestor URL:", url);
            //console.log("TheCheapInvestor title:", title);
            //console.log("TheCheapInvestor body:", body);
          });
        })
        .catch((error) => console.log("error", error));
    } else if (theUrl.includes("protradingresearch")) {
      axios
        .get(theUrl, theHeaders)
        .then((response) => {
          let $ = cheerio.load(response.data);
          let bodyObj = cutBodyPTR(response);
          let body = bodyObj.bodString;
          let bodyArray = bodyObj.bodArray;
          let bodPar1 = bodyArray.slice(0, 2).join("");

          let bodPar2 = bodyArray.slice(2, 4).join("");

          let bodPar3 = bodyArray.slice(4, 6).join("");

          let bodPar4 = bodyArray.slice(6, 8).join("");

          console.log("bodyArray", bodPar1, bodPar2, bodPar3, bodPar4);
          $(".single_post").each((index, element) => {
            let url = ArInput;
            let title = $(element).find(".title").text();
            title = titleCase(title);

            arNum({
              input: ArInput,
              URL: url,
              Head: title,
              Bod: body,
              Par1: bodPar1,
              Par2: bodPar2,
              Par3: bodPar3,
              Par4: bodPar4
            });
            //console.log("PTR URL:", url);
            //console.log("PTR title:", title);
            //console.log("PTR body:", body);
          });
        })
        .catch((error) => console.log("error", error));
    } else if (theUrl.includes("optionstradingreport")) {
      axios
        .get(theUrl, theHeaders)
        .then((response) => {
          let $ = cheerio.load(response.data);
          let bodyObj = cutBody(response);
          let body = bodyObj.bodString;
          let bodyArray = bodyObj.bodArray;

          let bodPar1 = bodyArray.slice(0, 2).join("");

          let bodPar2 = bodyArray.slice(2, 4).join("");

          let bodPar3 = bodyArray.slice(4, 6).join("");

          let bodPar4 = bodyArray.slice(6, 8).join("");

          console.log("bodyArray", bodPar1, bodPar2, bodPar3, bodPar4);

          $(".site-content").each((index, element) => {
            let url = ArInput;
            let title = $(element).find(".entry-title").text();
            title = titleCase(title);

            arNum({
              input: ArInput,
              URL: url,
              Head: title,
              Bod: body,
              Par1: bodPar1,
              Par2: bodPar2,
              Par3: bodPar3,
              Par4: bodPar4
            });
            //console.log("OTR URL:", url);
            //console.log("OTR title:", title);
            //console.log("OTR body:", body);
          });
        })
        .catch((error) => console.log("error", error));
    }
    return;
  };

  const handleAd = (adInput, adNum) => {
    //console.log("adInput:", adInput);
    //console.log("adNum:", adNum);
    const input = `<html>${adInput}</html>`;
    let $ = cheerio.load(input);

    // let body = $[0]
    // //console.log("boddddy", body);
    // let bodyy = body
    // //console.log("boddddyy", bodyy);
    // body = $(body).toArray();
    // //console.log("boddddy", body);
    $("html").each((index, element) => {
      let url = $("a").attr("href");
      // let body = $("body")[0].children[3].data;
      let head = $("span").text();
      let body = $(element).text();
      let call = $("a").text();
      body = body.replace(`${head}`, " ");
      body = body.replace(`${call}`, " ");
      body = body.trim();
      body = body.toString();

      head = titleCase(head);

      adNum({
        input: adInput,
        URL: url,
        Head: head,
        Bod: body,
        Call: call
      });
      //console.log("Ad1 Head", head);
      //console.log("Ad1 Call", call);
      //console.log("Ad1 Body", body);
      //console.log("Ad1 URL", url);
    });
    return;
  };
  // useEffect((shallowEqual) => {
  //   //console.log("formInputData", formInputData);
  //   if(shallowEqual(formInputData, currentData)){
  //     //console.log('input and current equal')
  //   }else{
  //   setCurrentData(formInputData);
  //   //console.log("currentData", currentData);
  //   }
  // }, [formInputData])

  // useEffect(() => {
  //   if (Object.keys(entries).length >= 1) {
  //     //are entries empty?
  //     return () => {
  //       //check what has changed
  //       //update app state using prop drilling

  //     };
  //   }
  // }, [entries]);

  // const [newEntries, setNewEntries] = useState({})
  return (
    <div class="App">
      <div
        class="container-fluid p-4"
        style={{ "background-color": "#000000" }}
      >
        <div class="row">
          {" "}
          <div>
            <img
              src="https://images.squarespace-cdn.com/content/v1/5e53f316f98ebd7769247a4e/1582563554920-AHCM2PZC0D0IHBGXZ3WV/logo1.png"
              style={{ maxWidth: "200px" }}
              alt=""
            />{" "}
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-3 p-4">
            <h2>Newsletter Builder</h2>
            <p class="small">
              First select the email template you'd like to use, and then fill
              in each respective field. For articles, input the full article
              URL. For advertisements, insert the code snippet given by
              HasOffers
            </p>
            <Form setFormInputData={setFormInputData} />
          </div>
          <div class="col-9 p-4">
            <Display
              ar1={Ar1}
              ar2={Ar2}
              ar3={Ar3}
              ad1={Ad1}
              ad2={Ad2}
              ad3={Ad3}
              Newsletter={Newsletter}
              Featured_Text={Featured_Text}
              Featured_URL={Featured_URL}
            />
          </div>
        </div>
        {/* <div class="grid-child c">
      <h2> Here! </h2>
    </div> */}
      </div>
    </div>
  );
}

export default App;
