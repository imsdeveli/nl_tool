import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
const Form = (props) => {
  const setFormInputData = props.setFormInputData;
  const {
    register,

    handleSubmit,
    formState: { errors }
  } = useForm();

  function shallowEqual(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (let key of keys1) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }

  const handleUpdate = (data) => {
    if (shallowEqual(entries, data) === "empty object") {
      console.log("Please Submit your first form");
    } else if (shallowEqual(entries, data)) {
      console.log("Form Submissions havent changed from : ", entries);
    } else {
      setEntries(data);

      console.log("``````````````````````````````````````");
      console.log("Form Data", data);
      console.log("Entries", entries);
      console.log("Form errors", errors);
      console.log("``````````````````````````````````````");
    }
  };
  const onSubmit = (data) => {
    handleUpdate(data);
  };

  const [entries, setEntries] = useState({});

  useEffect(() => {
    setFormInputData(entries);
    console.log("setting form input data", entries);
  }, [entries]);
  return (
    <div class="col">
      <div className="form-box">
        <form class="c-form" id="inputForm" onSubmit={handleSubmit(onSubmit)}>
          <div class="form-group">
            {/* <select class="form-control" id="exampleFormControlSelect1"> */}

            <select
              style={{ height: "5vh" }}
              class="mb-3 form-control form-control-md"
              {...register("Newsletter")}
            >
              <option value="ATN">ATN</option>
              <option value="OTR">OTR</option>
              <option value="PTR">PTR</option>
              <option value="TCI">TCI</option>
              <option value="WIA">WIA</option>
              <option value="ATN_Featured">ATN Featured</option>
              <option value="OTR_Featured">OTR Featured</option>
              <option value="PTR_Featured">PTR Featured</option>
              <option value="TCI_Featured">TCI Featured</option>
            </select>
          </div>
          <div class="mb-2">
            <input
              type="text"
              class="form-control form-control-md"
              placeholder="Article 1"
              {...register("Ar1", {})}
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              class="form-control form-control-md"
              placeholder="Article 2"
              {...register("Ar2", {})}
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              class="form-control form-control-md"
              placeholder="Article 3"
              {...register("Ar3", {})}
            />
          </div>
          <div class="mb-2">
            <textarea
              style={{ height: "11vh", "font-size": "10px" }}
              class="form-control"
              placeholder="Ad 1"
              {...register("Ad1", {})}
            />
          </div>
          <div class="mb-2">
            <textarea
              style={{ height: "11vh", "font-size": "10px" }}
              class="form-control"
              placeholder="Ad 2"
              {...register("Ad2", {})}
            />
          </div>
          <div class="mb-2">
            <textarea
              style={{ height: "11vh", "font-size": "10px" }}
              class="form-control"
              placeholder="Ad 3"
              {...register("Ad3", {})}
            />
          </div>
          <div class="mb-2">
            <input
              class="form-control form-control-md"
              type="text"
              placeholder="Featured URL"
              {...register("Featured_URL", {})}
            />
          </div>
          <div class="mb-2">
            <input
              class="form-control form-control-md"
              type="text"
              placeholder="Featured Text"
              {...register("Featured_Text", {})}
            />
          </div>
          <div class="d-grid gap-2">
            <input class="btn btn-success" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
