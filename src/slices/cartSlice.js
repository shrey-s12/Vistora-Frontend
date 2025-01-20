import { createSlice } from '@reduxjs/toolkit';
import { products } from '../data';

const initialState = {
    items: products.slice(0, 2).map(ele => ({ ...ele, quantity: 1, selected: true }))
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCartItems: (state, action) => {
            state.items = action.payload;
        },
        addItem: (state, action) => {
            const item = action.payload;
            const itemInCart = state.items.find(ele => item.id === ele.id);
            if (itemInCart) return;
            state.items.push({
                ...item,
                quantity: 1,
                selected: true,
            });
        },
        toggleItem: (state, action) => {
            const id = action.payload;
            const item = state.items.find(item => item.id === id);
            if (item) {
                item.selected = !item.selected;
            }
        },
        changeQuantity: (state, action) => {
            const { id, increament } = action.payload;
            const item = state.items.find(item => item.id === id);
            if (item) {
                item.quantity += increament;
                if (item.quantity === 0) {
                    state.items = state.items.filter(item => item.id !== id);
                }
            }
        }
    }
});

export const { addItem, toggleItem, changeQuantity } = cartSlice.actions;

export default cartSlice.reducer;