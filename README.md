# React Login App with Material UI

This is a responsive login system built with **React** and **Material UI (MUI)**. It includes email/password validation, error handling, login persistence using `localStorage`, and a responsive navigation bar with logout functionality.

---

## 🚀 Features

- 📥 Login form with validation
- ⛔ Error modal with portal and close handling
- 🔒 Persistent login with `localStorage`
- 🧾 `useEffect` usage for side effects (e.g., authentication, input debounce)
- 📱 Responsive AppBar with drawer for mobile
- ✅ Clean component structure using functional components and hooks

---

## 🧩 Project Structure

src/
├── App.jsx
├── index.js
├── components/
│ ├── Form/
│ │ ├── Form.jsx
│ │ └── Form.module.css
│ ├── Welcome/
│ │ ├── Welcome.jsx
│ │ └── Welcome.module.css
│ ├── NavBar/
│ │ └── Navbar.jsx
│ └── Error/
│ ├── ErrorModule.jsx
│ └── ErrorModule.module.css

---

🧠 Key Hooks Used

useState
Used for:
Managing form input
Tracking login state
Error messages

useEffect
Used in 3 ways:
✅ Run once on mount to check localStorage
✅ Run on login/logout state change to log user info
✅ Debounce user input for email (5-second delay after typing stops)

---

💡 Important Notes
ErrorModule uses React Portal — be sure to include this in public/index.html:
<div id="errormodule"></div>
All styling is done using CSS Modules + Material UI.
The AppBar becomes a Drawer on small screen devices.

---

🔐 Local Storage Usage
isLogin: "true" or "false"
email: user's email stored on successful login
Automatically clears on logout

