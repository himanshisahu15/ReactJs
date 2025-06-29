🛍️ TrendyBay - React Redux E-Commerce App
TrendyBay is a fully responsive and interactive e-commerce web application built using React, Redux Toolkit, and Styled Components. It features product listing, cart management, dynamic UI updates, and a modern design with a carousel and deal badges.

🚀 Features
🔄 Add/Remove/Update Cart Items

🎯 Redux Toolkit for state management

🖼️ Carousel Slider for promotional banners

🛒 Floating Cart Icon with Item Count

🎁 Time-Limited Deals Badge

🔽 Responsive Drawer Menu (Mobile)

🌐 Smooth Scroll to Product Sections

💳 Order Confirmation & Cart Reset

✨ Clean UI with styled-components

🧠 Technologies Used
Technology	Purpose
React	Frontend framework
Redux Toolkit	State management
Styled Components	Custom component-level styling
React-Slick	Image carousel / slider
MUI Icons	Icons for cart and layout
CSS Modules	Scoped CSS for components

💡 Logic Highlights
useSelector & useDispatch handle Redux state.

Product cards check if the item already exists in the cart using product.id.

A DealBadge is conditionally shown based on product.isDeal.

Cart overlay handles order confirmation with alert and clearCart.

Drawer menu on mobile auto-closes after selecting a section.

