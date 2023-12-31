import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import { SidebarContext } from "../contexts/SidebarContext";
import CartItem from "../components/CartItem";
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
    const { isOpen, handleClose } = useContext(SidebarContext);
    const { cart, clearCart, itemAmount, total } = useContext(CartContext);
    return (
        <div
            className={`${
                isOpen ? "right-0" : "-right-full"
            } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[40vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
        >
            <div className="flex items-center justify-between py-6 border-b">
                <div className="uppercase text-sm font-semibold">
                    Shopping Bag ({itemAmount})
                </div>
                <div
                    onClick={handleClose}
                    className="cursor-pointer w-8 h-8 flex justify-center items-center"
                >
                    <IoMdArrowForward className="text-2xl" />
                </div>
            </div>
            <div className="py-6 flex flex-col h-[65vh] overflow-y-auto">
                {cart.map((item) => {
                    return <CartItem item={item} key={item.id} />;
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
                    onClick={handleClose}
                    className="flex-1 p-4 bg-black text-white text-center"
                    to="/cart"
                >
                    View Cart
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

export default Sidebar;
