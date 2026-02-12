import React from "react";
import { addToCart } from "../../services/studentServices";
import { toast } from "react-toastify";

const Cards = ({ department }) => {
  const addDepartmentToCart = (departmentId) => {
    try {
      addToCart(departmentId)
        .then((res) => {
          console.log(res);
          toast.success(res.data.message);
          
        })
        .catch((error) => {
          console.log(error);
          toast.error(error.response.data.error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="card card-side bg-base-100 shadow-xl grid grid-cols-1">
      <figure className="w-full h-48 overflow-hidden">
        <img
          src={department.image}
          alt="Department"
          className="object-cover w-full h-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{department.name}</h2>
        <p>{department.description}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-neutral"
            onClick={() => addDepartmentToCart(department._id)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
