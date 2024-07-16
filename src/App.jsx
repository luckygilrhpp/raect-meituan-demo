import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, addToNum } from "./store/modules/counterStore";

import "./App.css";

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}>-</button>
      {count}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(addToNum(10))}>add TO 10</button>
      <button onClick={() => dispatch(addToNum(20))}>add TO 20</button>
    </div>
  );
}

export default App;
