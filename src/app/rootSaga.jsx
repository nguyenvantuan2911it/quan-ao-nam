import {all} from 'redux-saga/effects'
import productAdminSaga from '../features/Admin/Product/ProductAdminSaga'
import authUserSaga from '../features/authUser/authUserSaga'
import cartSaga from '../features/Cart/CartSaga'
import productSaga from '../features/Product/ProductSaga'
import searchSaga from '../features/Search/SearchSaga'
export default function* rootSaga(){
    yield all([
        authUserSaga(),
        productSaga(),
        cartSaga(),
        searchSaga(),
        productAdminSaga()
    ])
}