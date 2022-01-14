// import {addRandom} from "../redux/countReducer";
// import {useDispatch} from "react-redux";
//
export function loadCurrentUser(){
    return fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => json.length)
}