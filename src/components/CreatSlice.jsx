import { createSlice } from "@reduxjs/toolkit";

export const CreatSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
        const plant = action.payload;
        const exitem = state.items.find((item) => item.name === plant.name);
        if (exitem) {
          exitem.quantity++;
        } else {
          const cost = parseFloat(plant.cost.replace('$', ''));
          state.items.push({ name: plant.name,image:plant.image, cost, quantity: 1 });
        }
      },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items.find((i) => i.name === name);
      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CreatSlice.actions;

export default CreatSlice.reducer;
