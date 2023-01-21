import { useState, useEffect } from "react";
import { addProducts } from "../features/productSlice";
import {
  addItemToCart,
  deleteItemFromCart,
  incrementItemQuantity,
  decrementItemQuantity,
  getTotals,
} from "../features/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useGetAllProductsQuery } from "../services/productsApi";

const Products = () => {
  const [addProd, setAddProd] = useState("");

  const prods = useSelector((state) => state.product);

  const cart = useSelector((state) => state.cart);

  const { data, isLoading, isError, error } = useGetAllProductsQuery();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [data, cart]);

  const cleared = () => {
    setAddProd("");
  };

  const content = (
    <>
      <br />
      <br />
      <br />
      {/*
      <input
        type="text"
        placeholder="add products"
        value={addProd}
        onChange={(e) => {
          setAddProd(e.target.value);
        }}
      />
       <button onClick={() => (dispatch(addProducts(addProd)), cleared())}>do it</button> */}
      {isLoading ? (
        <p>"Loading...."</p>
      ) : isError ? (
        <p>{error?.name}</p>
      ) : (
        <>
          <div>
            <h2>PRODUCTS</h2>
            <div>
              {data?.map((i) => {
                return (
                  <div key={i.id} className="productMap">
                    <h3>{i.title}</h3>
                    <p>for only ${i.price}</p>
                    <img src={i.thumbnail} alt={i.description} />
                    <br />
                    <small>a product by {i.brand}</small>
                    <br />
                    <button onClick={() => dispatch(addItemToCart(i))}>add item to cart</button>
                    <br />
                    <button onClick={() => dispatch(deleteItemFromCart(i))}>delete</button>
                    <br />
                    <button onClick={() => dispatch(decrementItemQuantity(i))}>decrease</button>
                    <br />
                    <button onClick={() => dispatch(incrementItemQuantity(i))}>increase</button>
                    <br />
                    <div></div>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <hr />
            <br />
            <br />
            <small>total: {cart.totalCartAmount}</small>
            <br />
            <small>items in cart: {cart.totalCartQuantity}</small>
          </div>
        </>
      )}
    </>
  );

  return content;
};

export default Products;
