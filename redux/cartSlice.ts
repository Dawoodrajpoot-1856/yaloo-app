import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface CartItem {
  id: string | number;
  packageName: string;
  country: string;
  quantity: number;
  price: string;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const currentTotal = state.items.reduce(
        (sum, item) => sum + item.quantity,
        0,
      );

      if (currentTotal + action.payload.quantity > 5) {
        alert("Aap maximum 5 packages hi add kar sakte hain!");
        return;
      }

      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      alert("Package cart mein add ho gaya! 🎉");
    },
    removeFromCart: (state, action: PayloadAction<string | number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
