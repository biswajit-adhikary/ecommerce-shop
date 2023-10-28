import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";

const Home = () => {
    const { products } = useContext(ProductContext);
    return (
        <div>
            <section className="py-16">
                <div className="container mx-auto">
                    <div className="parent lg:grid lg:grid-cols-5">
                        <div className="sidebar lg:col-span-1 p-4 lg:pl-0 lg:pr-10">
                            <h2 className="text-xl font-medium mb-4">
                                Catagory List
                            </h2>
                            <ul className="list-none">
                                <li className="border-b border-slate-200 py-2">
                                    <a href="#starters">Starters</a>
                                </li>
                                <li className="border-b border-slate-200 py-2">
                                    <a href="#chicken">Chicken</a>
                                </li>
                                <li className="border-b border-slate-200 py-2">
                                    <a href="#other">Other</a>
                                </li>
                            </ul>
                        </div>
                        <main className="main lg:col-span-4 p-4" id="starters">
                            <div className="product-section mb-12">
                                <h2 className="text-3xl font-medium mb-4">
                                    Starters
                                </h2>
                                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[20px]">
                                    {products.map((product) => {
                                        return (
                                            <Product
                                                product={product}
                                                key={product.id}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="product-section mb-12" id="chicken">
                                <h2 className="text-3xl font-medium mb-4">
                                    Chicken
                                </h2>
                                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[20px]">
                                    {products.map((product) => {
                                        return (
                                            <Product
                                                product={product}
                                                key={product.id}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="product-section mb-12" id="other">
                                <h2 className="text-3xl font-medium mb-4">
                                    Other
                                </h2>
                                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[20px]">
                                    {products.map((product) => {
                                        return (
                                            <Product
                                                product={product}
                                                key={product.id}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
