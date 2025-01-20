import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const item = action.payload;
            console.log("item", item);
            const itemInCart = state.items.find(ele => item._id === ele._id);
            console.log("itemInCart", itemInCart);
            if (itemInCart) return;
            state.items.push({
                ...item,
                quantity: 1,
                selected: true,
            });
        },
        removeItem: (state, action) => {
            const id = action.payload;
            state.items = state.items.filter(ele => ele._id !== id);
        },
        toggleItem: (state, action) => {
            const id = action.payload;
            const item = state.items.find(item => item._id === id);
            if (item) {
                item.selected = !item.selected;
            }
        },
        changeQuantity: (state, action) => {
            const { id, increament } = action.payload;
            const item = state.items.find(item => item._id === id);
            if (item) {
                item.quantity += increament;
                if (item.quantity === 0) {
                    state.items = state.items.filter(item => item._id !== id);
                }
            }
        }
    }
});

export const { addItem, removeItem, toggleItem, changeQuantity } = cartSlice.actions;

export default cartSlice.reducer;