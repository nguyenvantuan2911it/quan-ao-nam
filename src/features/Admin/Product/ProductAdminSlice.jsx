import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  list: [],
};

const productAdminSlice = createSlice({
  name: "admin/product",
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
  },
});
export const productAdminActions = productAdminSlice.actions;
const productAdminReducer = productAdminSlice.reducer;
export default productAdminReducer;
