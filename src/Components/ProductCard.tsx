import React from "react";
import { type Product } from "../Types/Product";
import { useTheme } from "../Context/ThemeContext";
import { themeStyles } from "../utils/ThemeClasses";
import clsx from "clsx";


const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    const { theme } = useTheme();
    const current = themeStyles[theme];

    return (
        <div className={clsx(
            "rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300",
            current.card
        )}>
            <img
                src={product.image}
                alt={product.title}
                className="h-40 object-contain mx-auto mb-3"
            />

            <h3 className={clsx("text-xl font-semibold mb-1 line-clamp-2", current.text)}>
                {product.title}
            </h3>

            <p className={clsx("text-xl mb-1", current.text)}>${product.price.toFixed(2)}</p>

            <p className={clsx("text-sm mb-1", current.text)}>
                {product.description}
            </p>

            <p className="text-xs text-yellow-600 font-medium">
                ⭐ {product.rating.rate} ({product.rating.count} ratings)
            </p>
        </div>
    );
};

export default ProductCard;
