import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    favColor: "",
});

const clearForm = () => {
    setFormData(
{

    firstName: "",
    lastName: "",
    email: "",
    favColor: "",
}
        )
}
  const updateState = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(formData);

  return (
    <form onSubmit={(e) => (e.preventDefault(), )}>
      <br />
      <input type="text" name="firstName" onChange={(e) => updateState(e)} />
      <br />
      <input type="text" name="lastName" onChange={(e) => updateState(e)} />
      <br />
      <input type="text" name="email" onChange={(e) => updateState(e)} />
      <br />
      <input type="text" name="favColor" onChange={(e) => updateState(e)} />
      <br />
    </form>
  );
};

export default Form;
