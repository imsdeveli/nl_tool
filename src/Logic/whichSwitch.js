/* eslint-disable no-undef */
const callUpdateOn = (inputCode) => {
  const code = inputCode;

  switch (code) {
    case "Ar1":
      //eventually will check if input has changed, than call axios/parsing function if it has changed
      setAr1({
        input: "",
        response: "",
        url: "",
        head: "",
        body: "",
        call: "",
      });
      break;
    case "Ar2":
      setAr2({
        input: formInputData.Ar2,
        response: "",
        url: "",
        head: "",
        body: "",
        call: "",
      });
      break;
    case "Ar3":
      setAr3({
        input: formInputData.Ar3,
        response: "",
        url: "",
        head: "",
        body: "",
        call: "",
      });
      break;
    case "Ad1":
      setAd1({
        input: formInputData.Ad1,
        response: "",
        url: "",
        head: "",
        body: "",
        call: "",
      });
      break;
    case "Ad2":
      setAd2({
        input: formInputData.Ad2,
        response: "",
        url: "",
        head: "",
        body: "",
        call: "",
      });
      break;
    case "Ad3":
      setAd3({
        input: formInputData.Ad3,
        response: "",
        url: "",
        head: "",
        body: "",
        call: "",
      });
      break;
    case "Featured_Text":
      setFeatured_Text({ input: formInputData.Featured_Text });
      break;
    case "Featured_URL":
      setFeatured_URL({ input: formInputData.Featured_URL });
      break;
    case "Newsletter":
      setNewsletter({ input: formInputData.Newsletter });
      break;
    default:
      break;
  }
};

export default callUpdateOn;
