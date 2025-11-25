import React from "react";

const CartItem = (props) => {
  const { title, price, quantity, image, rating } = props;
  return (
    <>
      <li className="flex py-6">
        <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
          <img
            src={image}
            alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
            className="size-full object-cover"
          />
        </div>
        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <h3>{title}</h3>
              <p className="ml-4">{price * quantity}</p>
            </div>
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            <p className="text-gray-500">Qty {quantity}</p>
            <div className="flex">
              <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default CartItem;
