import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import {decCount, incCount, incrementAsync,incrementAsync2, loadUser} from "./redux/countReducer";


const Counter=()=>{
    const dispatch = useDispatch()
    const count=useSelector((state)=>state.counter.count)
    return(
        <div style={{display:"flex"}}>
            <button style={{width:"40px",height:"40px",fontSize:"30px"}} onClick={()=>dispatch(decCount())}>+</button>
            <h1>{count}</h1>
            <button style={{width:"40px",height:"40px",fontSize:"30px"}} onClick={()=>dispatch(incCount())}>-</button>
            <button   onClick={() => dispatch(loadUser())}>Add async</button>
            <button
                onClick={() => dispatch(incrementAsync(546454))}
            >
                createAsyncThunk
            </button>
            <button
                onClick={() => dispatch(incrementAsync2())}
            >
                createAsyncThunk2
            </button>   </div>
    )
}
export default Counter