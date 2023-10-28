import React, { useContext } from "react";
import { BsCart } from "react-icons/bs";
import { SidebarContext } from "../contexts/SidebarContext";

const CartIcon = () => {
    const { isOpen, setIsOpen } = useContext(SidebarContext);
    return (
        <div
            onClick={() => setIsOpen(!isOpen)}
            className="fixed right-4 bottom-4 p-4 bg-[#E14A00] text-white rounded-full text-2xl z-30 cursor-pointer"
        >
            <BsCart />
        </div>
    );
};

export default CartIcon;
