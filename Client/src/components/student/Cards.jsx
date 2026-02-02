import React from "react";

const Cards = ({department}) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="w-full h-48 overflow-hidden">
    <img
      src={department.image}
      alt="Department" className="object-cover w-full h-full"/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{department.name}</h2>
    <p>{department.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-neutral">Join Now</button>
    </div>
  </div>
</div>
  );
};

export default Cards;
