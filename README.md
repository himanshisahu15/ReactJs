 TrendyBay - React Redux E-Commerce App

TrendyBay is a fully responsive and interactive e-commerce web application built using React, Redux Toolkit, and Styled Components. It features product listing, cart management, dynamic UI updates, and a modern design with a carousel and deal badges.

---
 Features

 Add / Remove / Update Cart Items

 State Managed via Redux Toolkit

 Image Carousel (React Slick)

 Floating Cart Icon with Live Item Count

 Limited-Time Deal Badges on Products

 Order Confirmation with Success Modal
 
 Track Order (Static Display after Order Confirmed)

 Dynamic Price with Discounted Display

 Add/Remove/Update Cart Items

 Redux Toolkit for state management

 Carousel Slider for promotional banners

 Floating Cart Icon with Item Count

 Time-Limited Deals Badge

 Responsive Drawer Menu (Mobile)

 Smooth Scroll to Product Sections

 Order Confirmation & Cart Reset

 Clean UI with styled-components

 Responsive Drawer Navigation on Mobile

 Clean & Interactive UI (CSS Modules + Styled Components)

 Smooth Scroll to Product Sections

 Optimized Redux Slices, Modular Code Structure

---
 Technologies Used

Technology	Purpose-

React	UI Library for building components
Redux Toolkit	Centralized state management
React-Slick	Carousel for banners
Styled Components	Dynamic styling with props
CSS Modules	Scoped and modular CSS per component
React Icons / MUI Icons	For cart and UI icons
JavaScript (ES6)	Logic & interactivity

---
 Logic Highlights

Cart Management
Cart state is managed using Redux Toolkit cartSlice.

useSelector() reads cart state, while useDispatch() updates it.

On Add to Cart, checks if item already exists → increment or add.

On Remove, filters the item based on product.id.
Deal Badge
Products with product.isDeal === true are marked with a DealBadge.

This component is conditionally rendered over product images.

Carousel
react-slick carousel displays promotional banners at the top.

Responsive across desktop and mobile.

Drawer Menu (Mobile)
Collapsible drawer menu for mobile screens.

Uses useState to toggle visibility.

Automatically closes after navigating to a section.

Order Confirmation
On "Checkout", alert confirms the order.

Then dispatch(clearCart()) resets cart state.
---

 Responsiveness
Drawer for mobile navigation

Slick slider adjusts for screen width

CSS Modules & Styled Components ensure scoped and adaptive layout


addToCart(product): Adds a new item to the cart.

incrementQuantity(id): Increases the quantity of a product.

decrementQuantity(id): Decreases the quantity (not below 1).

removeFromCart(id): Removes an item from the cart.

clearCart(): Clears all items post order confirmation.

Conditional Rendering
Deals show a DealBadge with a star emoji if product.isDeal === true.

---
 Confirmation & Order Reset
On clicking Confirm Order, a ConfirmationCard is shown.

The cart is cleared using dispatch(clearCart()).

---
Responsive Design

 Full responsiveness across screen sizes

 Carousel auto scales on mobile

 Mobile drawer with clickable links

 Product cards stack for smaller screens

