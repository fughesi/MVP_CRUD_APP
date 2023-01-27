import Counter from "./components/Count";
import Form from "./components/Form";
import Products from "./components/Products";
import UserForm from "./components/UserForm";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/products" element={<Products />} />
        <Route path="/users" element={<UserForm />} />
      </Routes>

      <br />
      <br />
      <br />
      <Link to="/form">FORM</Link>
      <br />
      <br />
      <Link to="/users">USERS</Link>
      <br />
      <br />
      <Link to="/counter">COUNTER</Link>
      <br />
      <br />
      <Link to="/products">PRODUCTS</Link>
      <br />
      <br />
    </>
  );
}

export default App;
