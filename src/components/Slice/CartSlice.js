import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            // Check  product is already in the cart
            const cartItem = state.cart.find((item) => item.id === action.payload.id);
            if (cartItem) {
                cartItem.quantity++;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }

        },
        incrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            if (item) {
                item.quantity++;
            }
        },

        decrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity--;
            }
        },


        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },
        clearCart(state) {
            state.cart = [];
        }
    },
});

export default cartSlice.reducer;
export const {
    addToCart, removeFromCart, incrementQuantity, decrementQuantity, clearCart
} = cartSlice.actions;

