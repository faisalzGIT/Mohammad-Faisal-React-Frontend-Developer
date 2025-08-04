import React from 'react';
import Navbar from '../Components/Navbar';
import Footer2 from '../Components/Footer2';
import Products from "../Components/Products";

import { useTheme } from '../Context/ThemeContext';
import { themeStyles } from '../utils/ThemeClasses';
import clsx from 'clsx';

const Home: React.FC = () => {
    const { theme } = useTheme();
    const current = themeStyles[theme];

    return (
        <div className={clsx("min-h-screen", current.bg, current.font)}>
            <Navbar />

            {/* 🧩 Main Section (theme-aware) */}
            <div className={clsx(
                "min-h-[92vh] pt-[8vh] px-4 md:px-8 -mt-5 md:mt-0 w-full transition-all duration-300",
                current.bg
            )}>
                <h1 className={clsx("text-4xl md:text-6xl mb-4", current.HeroText)}>
                    Welcome to iShop
                </h1>

                <p className={clsx("text-base md:text-lg mb-6 ", current.text)}>
                    Discover the best deals on electronics, fashion, and more. Shop your favorite products and enjoy fast delivery right to your doorstep!
                </p>

                <button className={clsx(" px-6 py-2 rounded-md transition-all", current.GSBTN)}>
                    <a href="#shopy" className="glow-on-hover">Get Started</a>
                </button>

                {/* 🛍️ Featured Products */}
                <div className="mt-10">
                    <h2 id="shopy" className={clsx("text-xl md:text-2xl font-semibold mb-4 pb-4 border-b", current.text)}>
                        Featured Products
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-10">
                        <Products />
                    </div>
                </div>
            </div>

            <Footer2 />
        </div>
    );
};

export default Home;
