import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, setValue } from "../store/counterSlice";
const Counter = () => {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="counter">
      <h1>Using counterSlice</h1>
      <h2>{counter}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <input
        type="number"
        onChange={(e) => dispatch(setValue(e.target.value))}
        value={counter}
      />
    </div>
  );
};

export default Counter;
