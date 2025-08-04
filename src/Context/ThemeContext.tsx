import React, { createContext, useState, useEffect, useContext } from "react";

// Define allowed theme values using a TypeScript union type
export type Theme = "theme1" | "theme2" | "theme3";

// Define what the context will provide: the current theme and a function to update it
interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

// Create the actual context (initially undefined to ensure it's used within a provider)
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Key used for saving theme to localStorage
const THEME_KEY = "selected-theme";

// The provider component that wraps your entire app
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // React state to store the current theme in memory
    const [theme, setThemeState] = useState<Theme>(() => {
        return (localStorage.getItem(THEME_KEY) as Theme) || "theme1";
    });



    // Whenever theme changes, update localStorage and optionally update HTML attribute
    useEffect(() => {
        localStorage.setItem(THEME_KEY, theme);
    }, [theme]);

    // Function to change theme (exposed to components via context)
    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
    };

    // Provide the theme and setTheme function to the entire app
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to use theme anywhere easily
export const useTheme = () => {
    const context = useContext(ThemeContext);

    // Safety check: If used outside <ThemeProvider>, throw a clear error
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    // Return theme and setter function
    return context;
};



{ /* Usage Example:
// 🔄 Flow Summary

// App starts → ThemeProvider wraps the app.

// It checks localStorage → loads theme if present.

// Context provides { theme, setTheme } globally.

// Components like Header call setTheme("theme2").

// Theme updates → persists → CSS/layout changes automatically.*/ }