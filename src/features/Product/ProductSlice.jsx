import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    list:[],
    filter:undefined,
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers:{
        fetchProductList(state){
            state.loading = true;
        },
        fetchProductListSucess(state,action){
            state.loading = false;
            state.list = action.payload
        },
        fetchProductListFailed(state){
            state.loading = false;
        },

        setFilter(state,action){
            state.filter = action.payload;
        }
    }
})
export const productActions = productSlice.actions;

const productReducer = productSlice.reducer;
export default productReducer;