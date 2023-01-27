import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addObject, pushArr } from "../features/formSlice";

const Form = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const dispatch = useDispatch();
  const item = useSelector((state) => state.form);

  const values = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const clearForm = () => {
    setData({ firstName: "", lastName: "", email: "" });
  };

  // const dataCheck = (obj) => {
  //   const array = [];

  //   if (Object.values(obj).toString().length > 2) {
  //     array.push(obj);
  //   }

  //   if (array.length > 0) {
  //     return array;
  //   } else return;
  // };

  console.log(Object.values(data));
  console.log(Object.keys(data));

  const { firstName, lastName, email } = data;
  const content = (
    <>
      {/* <form onSubmit={(e) => (e.preventDefault(), dispatch(pushArr(dataCheck(data) || "")), clearForm())}> */}
      <form onSubmit={(e) => (e.preventDefault(), dispatch(addObject(data)), dispatch(pushArr(data)), clearForm())}>
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
      {JSON.stringify(item)}
      <br />
      <br />
    </>
  );

  return content;
};

export default Form;
