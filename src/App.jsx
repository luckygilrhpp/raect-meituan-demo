import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, addToNum } from "./store/modules/counterStore";
import { fetchChannelsList } from "./store/modules/channelStore";
import "./App.css";
import { useEffect } from "react";

function App() {
  const { count } = useSelector((state) => state.counter);
  const { channelsList } = useSelector((state) => state.channel);
  const dispatch = useDispatch();
  //使用useEffect  触发异步请求
  useEffect(() => {
    dispatch(fetchChannelsList());
  }, [dispatch]);

  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}>-</button>
      {count}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(addToNum(10))}>add TO 10</button>
      <button onClick={() => dispatch(addToNum(20))}>add TO 20</button>
      <ul>
        {
          channelsList.map(item=>
            <li key={item.id}>{item.name}</li>
          )
        }
      </ul>
    </div>
  );
}

export default App;
