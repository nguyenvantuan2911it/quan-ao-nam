import {takeLatest,put,call} from 'redux-saga/effects'
import productApi from '../../api/productApi';
import { productActions } from './ProductSlice';

function* fetchProductList(action){
    try {
        const data = yield call(productApi.getAll,action.payload.productkey,action.payload.filter);
        yield put(productActions.fetchProductListSucess(data));
    } catch (error) {
        yield put(productActions.fetchProductListFailed());
    }
}

export default function* productSaga(){
    yield takeLatest(productActions.fetchProductList, fetchProductList);
}