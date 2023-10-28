import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import { SidebarContext } from "../contexts/SidebarContext";
import CartItemTwo from "../components/CartItemTwo";
import { CartContext } from "../contexts/CartContext";

const Cart = () => {
    const { handleClose } = useContext(SidebarContext);
    const { cart, clearCart, itemAmount, total } = useContext(CartContext);
    return (
        <div className="container mx-auto py-16">
            <div className="flex items-center justify-between py-6 border-b">
                <div className="uppercase text-sm font-semibold">
                    Shopping Cart ({itemAmount} Itmes)
                </div>
                <div
                    onClick={handleClose}
                    className="cursor-pointer w-8 h-8 flex justify-center items-center"
                >
                    <IoMdArrowForward className="text-2xl" />
                </div>
            </div>
            <div className="py-6 flex flex-col min-h-[25vh] overflow-y-auto">
                {cart.map((item) => {
                    return <CartItemTwo item={item} key={item.id} />;
                })}
            </div>

            <div className="flex justify-between items-center border-t border-b py-4">
                <div>Total: kr {parseFloat(total).toFixed(2)}</div>
                <div onClick={clearCart} className="cursor-pointer p-1">
                    <FiTrash2 />
                </div>
            </div>
            <div className="flex gap-x-3 mt-4">
                <Link
                    className="flex-1 p-4 bg-black text-white text-center"
                    to="/"
                >
                    Continue Shopping
                </Link>
                <Link
                    className="flex-1 p-4 bg-black text-white text-center"
                    to="#"
                >
                    Checkout
                </Link>
            </div>
        </div>
    );
};

export default Cart;
