import {put,call, takeLatest} from 'redux-saga/effects'
import cartApi from '../../api/cartApi'
import { cartActions } from './CartSlice'

function* fetchDataCart(action){
    try {
        const data = yield call(cartApi.getAll,action.payload);
        yield put(cartActions.fetchDataSuccess(data));
    } catch (error) {
        yield put(cartActions.fetchDataFailed());
    }
}

export default function* cartSaga(){
    yield takeLatest(cartActions.fetchData,fetchDataCart)
}