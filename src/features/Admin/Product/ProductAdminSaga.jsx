import { takeLatest, put, call, all } from "redux-saga/effects";
import productApi from "../../../api/productApi";
import { productAdminActions } from "./ProductAdminSlice";

function* fetchListData() {
  try {
    const data = yield all(
      yield call(productApi.getAll, "aosomi", undefined),
      yield call(productApi.getAll, "aokhoac", undefined),
      yield call(productApi.getAll, "aothun", undefined)
    );
    const listData = data.reduce((array, item) => {
      return array.concat(item);
    }, []);
    yield put(productAdminActions.fetchDataSuccess(listData));
  } catch (error) {
    yield put(productAdminActions.fetchDataFailed());
  }
}

export default function* productAdminSaga() {
  yield takeLatest(productAdminActions.fetchData, fetchListData);
}
