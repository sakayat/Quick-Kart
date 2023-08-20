import React from "react";
import Card from "../components/Card";
import {useSelector} from "react-redux";


const Products = () => {

    const {items: data} = useSelector(state => state.products)

    return (
        <div className="container mx-auto px-8">
            <h2 className="uppercase text-2xl font-bold text-center py-6">Browse All Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    data.map((item) => (<Card item={item} key={item.id}/>))
                }
            </div>
        </div>
    );
};

export default Products;
