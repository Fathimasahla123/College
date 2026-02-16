import React, { useEffect, useState } from "react";
import CartCard from "../components/student/CartCard";
import { getCartItem } from "../services/studentServices";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const [cartItem, setCartItem] = useState([]);
  const navigate = useNavigate()


  const updateCartFromChild = (id)=>{

    setCartItem((prev) => prev.filter(item => item.departmentId._id != id))
  }

  function EmptyCart(){
    return(
      <div className="flex justify-center items-center flex-col h-screen ">
        <p>Cart is empty</p>
         <button className="btn btn-neutral" onClick={() => navigate("/department")}>
            Get Departments
          </button>

      </div>
    )
  }


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
      {cartItem.length ?
        <>
          {cartItem.map((item) => (
            <CartCard key={item._id} item={item} updateCartFromChild = {updateCartFromChild} />
          ))}
        </>:
        <EmptyCart/>
      }
    </>
  );
};

export default CartPage;
