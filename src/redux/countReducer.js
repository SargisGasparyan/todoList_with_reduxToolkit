import {createSlice} from "@reduxjs/toolkit";
import {loadCurrentUser} from "../api/api";
import {createAsyncThunk} from "@reduxjs/toolkit";
export const incrementAsync = createAsyncThunk(
    'counter/fetchCount',
    async (amount) => {
        const response = await loadCurrentUser();
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);

export const incrementAsync2 = createAsyncThunk(
    'counter/fetchCount2',
    async (amount) => {
        const response = await loadCurrentUser();
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);

const counterReducer=createSlice({
    name:"counter",
    initialState: {count:0},
    reducers:{
        decCount: (state,action)=>{
            state.count+=1
        },
        incCount: (state,action)=>{
            state.count-=1
        },
        addRandom: (state,action)=>{
            state.count+=action.payload
        }
    },
    extraReducers: {
        [incrementAsync.pending]: (state) => {
            state.status = 'loading';
        },
        [incrementAsync.fulfilled]: (state) => {
            state.status = 'loading';
            state.count += 2
        },
        [incrementAsync2.pending]: (state) => {
            state.status = 'loading';
        },
        [incrementAsync2.fulfilled]: (state) => {
            state.status = 'loading';
            state.count += 15
        }
    }
})



export const addAsync = (amount) => (dispatch, getState) => {
        setTimeout(() =>  dispatch(addRandom(amount)), 2500)
};
export function loadUser(){
    return (dispatch,getState)=>{
        return loadCurrentUser().then((res)=>dispatch(addRandom(res)))
    }
}




export const {decCount,incCount,addRandom} = counterReducer.actions
export default counterReducer.reducer