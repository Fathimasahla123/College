import React from "react";
import { useNavigate } from "react-router-dom";
import { removeCartItem } from "../../services/studentServices";

const CartCard = ({ item, updateCartFromChild }) => {
  const navigate = useNavigate();
  const removeItem = (departmentId) => {
    try {
      removeCartItem(departmentId)
        .then((res) => {
          console.log(res);
          updateCartFromChild(departmentId);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-gray-100 text-black  shadow-sm flex items-center w-full justify-between py-5">
      <figure>
        <img src={item.departmentId.image} alt="Shoes" className="h-25 w-40" />
      </figure>
      <div>
        <div className="flex items-center">
          <h2 className="card-title">{item.departmentId.name}</h2>
        </div>

        <div className="gap-2 p-4">
          <button className="btn " onClick={() => navigate("/contact")}>
            Apply Now
          </button>
        </div>
      </div>
      <div className="card-actions justify-end">
        <button
          className="btn btn-neutral"
          onClick={() => removeItem(item.departmentId._id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};


export default CartCard;
