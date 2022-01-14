import {configureStore} from '@reduxjs/toolkit'
import todosReducer from '../redux/todoReducer'
import counterReducer from '../redux/countReducer'


export default configureStore({
    reducer:{
        todos: todosReducer,
        counter: counterReducer
    }
})