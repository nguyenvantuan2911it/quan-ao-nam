import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import productAdminReducer from "../features/Admin/Product/ProductAdminSlice";
import authUserReducer from "../features/authUser/authUserSlice.";
import cartReducer from "../features/Cart/CartSlice";
import productReducer from "../features/Product/ProductSlice";
import searchReducer from "../features/Search/SearchSlice";
import rootSaga from "./rootSaga";

const rootReducer = combineReducers({
  user:authUserReducer,
  product: productReducer,
  cart: cartReducer,
  search: searchReducer,
  admin_product:productAdminReducer
});
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({serializableCheck: false}).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
