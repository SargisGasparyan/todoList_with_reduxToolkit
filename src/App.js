import './App.css';
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import {CountTodo} from "./CountTodo";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <AddTodo/>
        <TodoList/>
        <CountTodo/>
        <Counter/>
      </header>
    </div>
  );
}

export default App;
