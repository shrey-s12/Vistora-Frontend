import { createSlice } from '@reduxjs/toolkit';
import { products } from '../data';

const initialState = {
    items: products.slice(0, 2).map(ele => ({ ...ele, quantity: 1, seleted: true }))
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleItem: (state, action) => {
            const id = action.payload;
            const item = state.items.find(ele => ele.id === id);
            if (item) {
                item.seleted = !item.seleted;
            }
        },
    }
});

export const { toggleItem } = cartSlice.actions;

export default cartSlice.reducer;