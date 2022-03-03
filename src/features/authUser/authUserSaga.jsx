import { call, delay, fork, put, take,takeLeading } from 'redux-saga/effects';
import userApi from '../../api/userApi';
import { authUserActions } from './authUserSlice.';
import {toast} from "react-toastify";

function* handleLogin(action){
    try {
        const data = yield call(userApi.getAll);
        const isCheckLogin = data.find(item => (
            item.accountname === action.payload.accountname && 
            item.password === action.payload.password
        ));
        if(isCheckLogin){
            localStorage.setItem('access_token',JSON.stringify(isCheckLogin));
            yield put(authUserActions.loginSuccess(isCheckLogin));
            toast.success("Đăng nhập thành công");
        } else {
            toast.warning("Sai tên đăng nhập hoặc mật khẩu")
        }
    } catch (error) {
        yield put(authUserActions.loginFailed());
    }
}

function* handleLogout(){
    localStorage.removeItem('access_token');
    yield delay(2000);
}


function* watchLoginFlow(){
    while(true) {
        const isLoggedIn = localStorage.getItem('access_token');
        if(!isLoggedIn){
            yield takeLeading(authUserActions.login,handleLogin);       
        }
        yield take(authUserActions.logout);
        yield call(handleLogout);

    }
}

export default function* authUserSaga(){
    yield fork(watchLoginFlow)
}