import React, { useContext } from "react";
import { BsCart } from "react-icons/bs";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

const CartIcon = () => {
    const { isOpen, setIsOpen } = useContext(SidebarContext);
    const { itemAmount } = useContext(CartContext);
    return (
        <div
            onClick={() => setIsOpen(!isOpen)}
            className="fixed right-4 bottom-4 p-4 bg-[#E14A00] text-white rounded-full text-2xl z-10 cursor-pointer"
        >
            <div className="absolute top-[-6px] left-[-6px] bg-[#333333] text-sm h-6 w-6 flex justify-center items-center rounded-full">
                {itemAmount}
            </div>
            <BsCart />
        </div>
    );
};

export default CartIcon;
