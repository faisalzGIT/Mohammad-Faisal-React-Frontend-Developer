import React, { useEffect, useState } from "react";
import { type Product } from "../Types/Product";
import ProductCard from "./ProductCard";

const Products: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data: Product[]) => {
                setProducts(data);
                setLoading(false);
            });
    }, []);

    if (loading) return <p className="text-gray-500">Loading products...</p>;

    return (
        <>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </>
    );
};

export default Products;
