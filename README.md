🛍️ TrendyBay — React Redux E-Commerce App
TrendyBay is a responsive and modern e-commerce web application built with React, Redux Toolkit, and Styled Components. It allows users to browse products by category, manage their cart, view dynamic prices with discounts, and experience smooth UI interactions.

🚀 Features
🔄 Add / Remove / Update Cart Items

🧠 State Managed via Redux Toolkit

🖼️ Image Carousel (React Slick)

🛒 Floating Cart Icon with Live Item Count

🎁 Limited-Time Deal Badges on Products

📦 Order Confirmation with Success Modal

🧾 Track Order (Static Display after Order Confirmed)

💳 Dynamic Price with Discounted Display

📱 Responsive Drawer Navigation on Mobile

🧼 Clean & Interactive UI (CSS Modules + Styled Components)

🔍 Smooth Scroll to Product Sections

🧠 Optimized Redux Slices, Modular Code Structure

🧠 Technologies Used
Technology	Purpose
React	UI Library for building components
Redux Toolkit	Centralized state management
React-Slick	Carousel for banners
Styled Components	Dynamic styling with props
CSS Modules	Scoped and modular CSS per component
React Icons / MUI Icons	For cart and UI icons
JavaScript (ES6)	Logic & interactivity

💡 Logic Highlights
useSelector & useDispatch handle Redux state.

Product cards check if the item already exists in the cart using product.id.

A DealBadge is conditionally shown based on product.isDeal.

Cart overlay handles order confirmation with alert and clearCart.

Drawer menu on mobile auto-closes after selecting a section.

addToCart(product): Adds a new item to the cart.

incrementQuantity(id): Increases the quantity of a product.

decrementQuantity(id): Decreases the quantity (not below 1).

removeFromCart(id): Removes an item from the cart.

clearCart(): Clears all items post order confirmation.

Conditional Rendering
Deals show a DealBadge with a star emoji if product.isDeal === true.

🎉 Confirmation & Order Reset
On clicking Confirm Order, a ConfirmationCard is shown.

The cart is cleared using dispatch(clearCart()).

📱 Responsive Design
✅ Full responsiveness across screen sizes

✅ Carousel auto scales on mobile

✅ Mobile drawer with clickable links

✅ Product cards stack for smaller screens

