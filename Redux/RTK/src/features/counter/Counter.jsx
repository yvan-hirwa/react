import { useSelector, useDispatch } from "react-redux";
import {
  incrementByOne,
  decrementByOne,
  incrementByAmount,
  decrementByAmount,
} from "./counterSlice";
import { useState } from "react";

export default function Counter() {
  const counter = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);
  const [decrementAmount, setDecrementAmount] = useState(0);
  return (
    <div className="h-full w-full flex flex-col justify-center items-center space-y-6">
      <h1 className="text-5xl font-bold">{counter}</h1>
      <div>
        <button
          className="w-50 h-10 border border-gray-500 mr-2 rounded-xl"
          onClick={() => dispatch(incrementByOne())}
        >
          Increment by 1
        </button>
        <button
          className="w-50 h-10 border border-gray-500 mr-2 rounded-xl"
          onClick={() => dispatch(decrementByOne())}
        >
          Decrement by 1
        </button>
      </div>
      <div>
        <input
          type="number"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(+e.target.value)}
        />
        <button
          className="w-50 h-10 border border-gray-500 mr-2 rounded-xl"
          onClick={() => dispatch(incrementByAmount(incrementAmount))}
        >
          Increment by Amount
        </button>
        <input
          type="number"
          value={decrementAmount}
          onChange={(e) => setDecrementAmount(+e.target.value)}
        />
        <button
          className="w-50 h-10 border border-gray-500 mr-2 rounded-xl"
          onClick={() => dispatch(decrementByAmount(decrementAmount))}
        >
          Decrement by Amount
        </button>
      </div>
    </div>
  );
}
