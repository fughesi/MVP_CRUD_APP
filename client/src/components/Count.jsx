import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount, decrementByAmount } from "../features/counterSlice";

const Count = () => {
  const [num, setNum] = useState(0);

  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  const content = (
    <>
      <div>Current count: {count}</div>
      <br />
      <br />
      <button onClick={() => dispatch(increment())}> ADD</button>
      <button onClick={() => dispatch(decrement())}> SUBTRACT</button>

      <br />
      <br />
      <input type="number" value={num} onChange={(e) => setNum(e.target.value)} />
      <br />
      <button onClick={() => dispatch(incrementByAmount(Number(num)))}> add the number</button>
      <br />
      <button onClick={() => dispatch(decrementByAmount(Number(num)))}> subtract the number</button>
    </>
  );

  return content;
};

export default Count;
