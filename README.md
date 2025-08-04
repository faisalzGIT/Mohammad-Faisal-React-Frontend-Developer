# 🛒 iShop - Themed Shopping App

A responsive shopping app built with **React**, **TypeScript**, and **Tailwind CSS**, featuring dynamic multi-theme support. The app fetches product data from an external API and offers a seamless user experience with layout responsiveness and animated transitions.

---

## 🚀 Features

- 🎨 3 Switchable Themes (Light, Dark, Playful)
- ⚡ React + TypeScript
- 💨 Tailwind CSS for styling
- 🧠 Context API for theme management
- 🧩 Modular component structure
- 📱 Fully responsive design (mobile-first)
- 🌐 External API integration (`https://fakestoreapi.com/`)

---

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: React Context API
- **API**: `https://fakestoreapi.com/`

---

## 📂 Folder Structure

```

src/
│
├── Components/        # Reusable UI components (Navbar, Footer, ProductCard, etc.)
├── Context/           # ThemeContext using React Context API
├── Pages/             # Page components (Home, About, etc.)
├── Types/             # TypeScript types (e.g., Product type)
├── utils/             # ThemeClasses.ts (CSS classes per theme)
├── App.tsx            # App entry point with routing
├── main.tsx           # Root renderer
└── index.css          # Tailwind CSS imports

````

---

## 💾 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/faisalzGIT/Mohammad-Faisal-React-Frontend-Developer
cd ishop-theme-app
````

### 2. Install Dependencies

Make sure you have **Node.js v16+** installed.

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Visit your localhost

---

## 🌈 Theme Switching

* Theme is managed using **React Context API**.
* It persists the selected theme using **localStorage**.
* Themes are defined in `src/utils/ThemeClasses.ts`.

### Available Themes

| Theme   | Description                          |
| ------- | ------------------------------------ |
| Theme 1 | Default Light Theme                  |
| Theme 2 | Dark / Minimalist Theme              |
| Theme 3 | Colorful Theme using `Pacifico` font |

---

## 🧪 API Used

All products are fetched from:

```
https://fakestoreapi.com/products
```

---

## ✍️ Author

* Developed by **Faisal** — [Portfolio](https://faisalzportfolio.netlify.app)

---