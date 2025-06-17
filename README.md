# 🚀 React Product Launch App (`react-ui` Branch)

This branch contains the complete front-end UI of a React-based **Product Launch Tracker**. Users can add products with details like name, amount, launch date, and image. The form dynamically updates the product list below and provides a clean, responsive design using **Ant Design**.

---

## 📁 Project Structure

src/
├── components/
│ ├── Card/
│ │ ├── Card.jsx
│ │ └── Card.css
│ ├── Form/
│ │ ├── Form.jsx
│ │ └── form.css
│ ├── Product/
│ │ ├── Product.jsx
│ │ └── product.css
│ ├── ProductItem/
│ │ ├── ProductItem.jsx
│ │ └── productitem.css
│ └── ProductDate/
│ ├── ProductDate.jsx
│ └── productdate.css
├── App.jsx
└── main.jsx


## 🌟 Features

- 🧾 **Add Products**: Title, amount, date, and image
- 📆 **Date Picker**: Choose product launch date with Ant Design
- 📸 **Image Upload**: Upload and preview product image
- 💡 **Responsive UI**: CSS layout for both form and product cards
- 🟩 **Dynamic Rendering**: Products are updated in real time
- 📊 **Future Scope**: Bar and Pie chart components side-by-side (added support)

---

## 🛠️ Tech Stack

- ⚛️ React (Functional Components)
- ⚡ Vite (for fast bundling)
- 🎨 Ant Design (UI components)
- 💅 Custom CSS (for layout and styling)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
