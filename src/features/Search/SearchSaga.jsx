import {takeLatest,put,call,all} from 'redux-saga/effects'
import productApi from '../../api/productApi';
import { searchActions } from './SearchSlice';

function* fetchDataSearch(action){
    try {
        const datas = yield all([
            yield call(productApi.getAll,"aosomi",action.payload),
            yield call(productApi.getAll,"aothun",action.payload),
            yield call(productApi.getAll,"aokhoac",action.payload)
        ])
        const data = datas.reduce((array,item) => {
            return array.concat(item);;
        },[])
        yield put(searchActions.fetchDataSuccess(data));
    } catch (error) {
        yield put(searchActions.fetchDataFailed());
    }
}
export default function* searchSaga(){
    yield takeLatest(searchActions.fetchData, fetchDataSearch)
}