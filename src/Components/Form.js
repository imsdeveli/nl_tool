import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
const Form = (props) => {
  const setFormInputData = props.setFormInputData;
  const {
    register,

    handleSubmit,
    formState: { errors },
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
    <div className="Form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Ar1" {...register("Ar1", {})} />
        <input type="text" placeholder="Ar2" {...register("Ar2", {})} />
        <input type="text" placeholder="Ar3" {...register("Ar3", {})} />
        <textarea {...register("Ad1", {})} />
        <textarea {...register("Ad2", {})} />
        <textarea {...register("Ad3", {})} />
        <select {...register("Newsletter")}>
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
        <input
          type="text"
          placeholder="Featured URL"
          {...register("Featured_URL", {})}
        />
        <input
          type="text"
          placeholder="Featured Text"
          {...register("Featured_Text", {})}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
