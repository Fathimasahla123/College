import React, { useEffect, useState } from "react";
import CartCard from "../components/student/CartCard";
import { getCartItem } from "../services/studentServices";

const CartPage = () => {
  const [cartItem, setCartItem] = useState([]);


  


  useEffect(() => {
    getCartItem()
      .then((res) => {
        console.log(res.data.departments);
        setCartItem(res.data.departments);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {cartItem && (
        <>
          {cartItem.map((item) => (
            <CartCard key={item._id} item={item} />
          ))}
        </>
      )}
    </>
  );
};

export default CartPage;
