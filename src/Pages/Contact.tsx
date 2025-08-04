import React from "react";
import Navbar from "../Components/Navbar";
import Footer2 from "../Components/Footer2";
import { useTheme } from "../Context/ThemeContext";
import { themeStyles } from "../utils/ThemeClasses";
import clsx from "clsx";

const Contact: React.FC = () => {
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
                    "max-w-2xl w-full rounded-2xl shadow-xl p-8 md:p-12 mb-8 text-center",
                    current.card
                )}>
                    <h1 className={clsx("text-4xl md:text-6xl font-bold mb-4", current.HeroText)}>
                        Contact Us
                    </h1>
                    <p className={clsx("text-base md:text-lg mb-6", current.text)}>
                        We'd love to hear from you! Fill out the form below or email us at <a href="mailto:support@ishop.com" className="underline">support@ishop.com</a>.
                    </p>
                    <form className="flex flex-col gap-4 mt-6">
                        <input type="text" placeholder="Your Name" className="px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-indigo-400" required />
                        <input type="email" placeholder="Your Email" className="px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-indigo-400" required />
                        <textarea placeholder="Your Message" rows={4} className="px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-indigo-400" required />
                        <button type="submit" className={clsx("px-6 py-2 rounded-md font-semibold transition-all", current.GSBTN)}>
                            Send Message
                        </button>
                    </form>
                </section>
            </main>
            <Footer2 />
        </div>
    );
};

export default Contact;
