import React from "react";
import { removeCartItem } from "../../services/studentServices";

const CartCard = ({item}) => {

  const removeItem = (departmentId)=>{
    try {
      removeCartItem(departmentId).then((res)=>{
        console.log(res);

      }).catch((error)=>{
        console.log(error)
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="bg-gray-100 text-black  shadow-sm flex items-center w-full justify-between py-5">
      <figure>
        <img
          src={item.departmentId.image}
          alt="Shoes"
          className="h-25"
        />
      </figure>
      <div >
        
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
       
      </div>
       <div className="card-actions justify-end">
          <button className="btn btn-neutral" onClick={()=> removeItem(item.departmentId._id)}>Remove</button>
        </div>
    </div>
  );
};

export default CartCard;
