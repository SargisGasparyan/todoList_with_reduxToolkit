import './App.css';
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import {CountTodo} from "./CountTodo";
import Counter from "./Counter";
import {addAsync} from "./redux/countReducer"
import {useSelector,useDispatch} from "react-redux";


function App() {
  const dispatch=useDispatch()
  return (
    <div className="App">
      <header className="App-header">
          <AddTodo/>
        <TodoList/>
        <CountTodo/>
        <Counter/>
        <button onClick={()=>dispatch(addAsync(100))}>addAsyncFunc</button>
      </header>
    </div>
  );
}

export default App;
