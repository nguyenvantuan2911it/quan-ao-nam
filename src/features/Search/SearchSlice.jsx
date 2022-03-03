import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  list: [],
};

const SearchSlice = createSlice({
  name: "search",
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
export const searchActions = SearchSlice.actions;

const searchReducer = SearchSlice.reducer;
export default searchReducer;
