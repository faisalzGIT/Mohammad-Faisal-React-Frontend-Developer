import React from "react";
import Navbar from "../Components/Navbar";
import Footer2 from "../Components/Footer2";
import { useTheme } from "../Context/ThemeContext";
import { themeStyles } from "../utils/ThemeClasses";
import clsx from "clsx";

const About: React.FC = () => {
  const { theme } = useTheme();
  const current = themeStyles[theme];

  return (
    <div className={clsx("min-h-screen flex flex-col", current.bg, current.font)}>
      <Navbar />
      <main className={clsx(
        "flex-1 flex flex-col items-center justify-center px-4 py-10 md:py-20 w-full transition-all duration-300",
        current.bg
      )}>
        <section className={clsx(
          "max-w-3xl w-full rounded-2xl shadow-xl p-8 md:p-12 mb-8 text-center",
          current.card
        )}>
          <h1 className={clsx("text-4xl md:text-6xl font-bold mb-4", current.HeroText)}>
            About iShop
          </h1>
          <p className={clsx("text-base md:text-lg mb-6", current.text)}>
            iShop is your one-stop destination for the latest electronics, fashion, and lifestyle products. Our mission is to make shopping easy, enjoyable, and affordable for everyone. We believe in quality, fast delivery, and excellent customer service.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className={clsx("p-6 rounded-xl shadow-md", current.card)}>
              <h2 className={clsx("text-xl font-semibold mb-2", current.HeroText)}>Our Vision</h2>
              <p className={clsx("text-sm", current.text)}>
                To be the most trusted online marketplace, offering a seamless shopping experience and the best deals on top brands.
              </p>
            </div>
            <div className={clsx("p-6 rounded-xl shadow-md", current.card)}>
              <h2 className={clsx("text-xl font-semibold mb-2", current.HeroText)}>Our Values</h2>
              <p className={clsx("text-sm", current.text)}>
                Customer satisfaction, transparency, and innovation drive everything we do. We strive to exceed expectations every day.
              </p>
            </div>
            <div className={clsx("p-6 rounded-xl shadow-md", current.card)}>
              <h2 className={clsx("text-xl font-semibold mb-2", current.HeroText)}>Contact Us</h2>
              <p className={clsx("text-sm", current.text)}>
                Have questions or feedback? Reach out to us at <a href="mailto:support@ishop.com" className="underline">support@ishop.com</a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer2 />
    </div>
  );
};

export default About;
