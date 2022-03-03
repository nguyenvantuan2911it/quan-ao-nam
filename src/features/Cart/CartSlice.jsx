import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  list: [],
  filter: {
    endpoint:"cart"
  },
};
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    fetchData(state, action) {
      state.loading = true;
    },
    fetchDataSuccess(state, action) {
      state.loading = false;
      state.list = action.payload;
    },
    fetchDataFailed(state, action) {
      state.loading = false;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});
export const cartActions = CartSlice.actions;

const cartReducer = CartSlice.reducer;
export default cartReducer;
