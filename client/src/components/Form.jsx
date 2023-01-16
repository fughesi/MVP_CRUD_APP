import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addObject, newObject, pushArr } from "../features/formSlice";

const Form = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const dispatch = useDispatch();
  const item = useSelector((state) => state);

  const values = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const clearForm = () => {
    setData({ firstName: "", lastName: "", email: "" });
  };

  const { firstName, lastName, email } = data;
  const content = (
    <>
      <form onSubmit={(e) => (e.preventDefault(), dispatch(addObject(data)), clearForm())}>
        <input type="text" name="firstName" value={firstName} placeholder="FN" onChange={(e) => values(e)} />
        <input type="text" name="lastName" value={lastName} placeholder="LN" onChange={(e) => values(e)} />
        <input type="text" name="email" value={email} placeholder="email" onChange={(e) => values(e)} />
        <br />
        <button type="submit">submit</button>
      </form>
      <br />
      {JSON.stringify(data)}
      <br />
      <br />
      <br />
    </>
  );

  return content;
};

export default Form;
