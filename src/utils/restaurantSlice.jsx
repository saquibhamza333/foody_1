import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    items: [],
    duplItems: [],
  },
  reducers: {
    setRestaurants: (state, action) => {
   if (state.items.length > 0) {
        state.items = [];
      }
      state.items.push(...action.payload);
    },
    setDuplRestaurants: (state, action) => {
       if (state.duplItems.length > 0) {
        state.duplItems = [];
      }
      state.duplItems.push(...action.payload);
  },
}
});

export const { setRestaurants,setDuplRestaurants } = restaurantSlice.actions;
export default restaurantSlice.reducer;