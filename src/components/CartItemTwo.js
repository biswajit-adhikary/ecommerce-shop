import React, { useContext } from "react";
import { IoMdClose, IoMdRemove, IoMdAdd } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
    const { removeFromCart, increaseAmount, decreaseAmount } =
        useContext(CartContext);
    const { id, title, price, amount } = item;
    return (
        <div className="single-product grid grid-cols-7 bg-white rounded-lg shadow-sm border border-slate-200 mb-4">
            <div className="product-content col-span-7 p-4 relative">
                <div className="flex gap-x-2 text-sm">
                    <div className="flex-1">
                        <h2>{title}</h2>
                    </div>
                    <div className="flex flex-1 items-center border max-w-[150px]">
                        <div
                            onClick={() => decreaseAmount(id)}
                            className="flex-1 flex justify-center items-center cursor-pointer"
                        >
                            <IoMdRemove />
                        </div>
                        <div className="flex-1 flex justify-center items-center border-l border-r">
                            {amount}
                        </div>
                        <div
                            onClick={() => increaseAmount(id)}
                            className="flex-1 flex justify-center items-center cursor-pointer"
                        >
                            <IoMdAdd />
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center text-gray-400">
                        {amount} x kr {price}
                    </div>
                    <div className="flex-1 flex justify-end">
                        kr {parseFloat(price * amount).toFixed(2)}
                    </div>
                    <div className="p-1" onClick={() => removeFromCart(id)}>
                        <IoMdClose className="text-gray-500 hover:text-red-500 transition cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
