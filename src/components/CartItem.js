import React, { useContext } from "react";
import { IoMdClose, IoMdRemove, IoMdAdd } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
    const { removeFromCart } = useContext(CartContext);
    const { id, title, image, price, amount } = item;
    return (
        <div className="single-product grid grid-cols-7 bg-white rounded-lg shadow-sm border border-slate-200 mb-4">
            <div
                className="product-image col-span-2 bg-cover rounded-l-lg"
                style={{ backgroundImage: `url(${image})` }}
            ></div>
            <div className="product-content col-span-5 p-4 relative">
                <h2>{title}</h2>
                <div className="icons grid grid-cols-6 my-1"></div>
                {/* <h3 className="my-1 text-[#E14A00] font-medium">{price}</h3> */}
                <div className="flex gap-x-2 text-sm">
                    <div className="flex flex-1 items-center border">
                        <div className="flex-1 flex justify-center items-center cursor-pointer">
                            <IoMdRemove />
                        </div>
                        <div className="flex-1 flex justify-center items-center border-l border-r">
                            {amount}
                        </div>
                        <div className="flex-1 flex justify-center items-center cursor-pointer">
                            <IoMdAdd />
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center">kr {price}</div>
                    <div className="flex-1 flex justify-end">
                        kr {parseFloat(price * amount).toFixed(2)}
                    </div>
                </div>
                <div
                    onClick={() => removeFromCart(id)}
                    className="absolute top-3 right-3"
                >
                    <IoMdClose className="text-gray-500 hover:text-red-500 transition cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default CartItem;
