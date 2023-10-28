import React, { useContext } from "react";
import { BsCart, BsEgg } from "react-icons/bs";
import { IoFishOutline, IoFastFoodOutline } from "react-icons/io5";
import { CartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    const { id, title, image, price } = product;
    return (
        <div className="single-product grid grid-cols-6 bg-white rounded-lg shadow-md border border-slate-100">
            <div className="product-content col-span-4 p-4">
                <h2>{title}</h2>
                <div className="icons grid grid-cols-6 my-1">
                    <div>
                        <BsEgg />
                    </div>
                    <div>
                        <IoFishOutline />
                    </div>
                    <div>
                        <IoFastFoodOutline />
                    </div>
                </div>
                <h3 className="my-1 text-[#E14A00] font-medium">kr {price}</h3>
                <button
                    onClick={() => addToCart(product, id)}
                    className="bg-[#E14A00] p-2 text-white rounded-full"
                >
                    <BsCart />
                </button>
            </div>
            <div
                className="product-image col-span-2 bg-cover rounded-r-lg"
                style={{ backgroundImage: `url(${image})` }}
            ></div>
        </div>
    );
};

export default Product;
