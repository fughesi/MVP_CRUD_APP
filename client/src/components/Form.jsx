import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Form = () => {
  const dispatch = useDispatch();
  const  

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    favColor: "",
  });

  const clearForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      favColor: "",
    });
  };

  const updateState = (e) => {
    const { name, value } = e.target;
    setFormData((i) => ({ ...i, [name]: value }));
  };

  const { firstName, lastName, email, favColor } = formData;

  // console.log(Object.keys(formData));
  // console.log(Object.values(formData));
  // console.log(Object.entries(formData));
  console.log(formData);

  // dispatch(formData),

  return (
    <form onSubmit={(e) => (e.preventDefault(), dispatch({type: "addFormData",  payload: formData}), clearForm())}>
      <br />
      <input type="text" name="firstName" value={firstName} onChange={(e) => updateState(e)} />
      <br />
      <input type="text" name="lastName" value={lastName} onChange={(e) => updateState(e)} />
      <br />
      <input type="text" name="email" value={email} onChange={(e) => updateState(e)} />
      <br />
      <input type="text" name="favColor" value={favColor} onChange={(e) => updateState(e)} />
      <br />
      <button type="submit">submit</button>
    </form>
  );
};

export default Form;
