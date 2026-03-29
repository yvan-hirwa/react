import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  const counter = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div className="h-full w-full flex flex-col justify-center items-center space-y-6">
      <h1 className="text-5xl font-bold">{counter}</h1>
      <div>
        <button
          className="w-50 h-10 border border-gray-500 mr-2 rounded-xl"
          onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}
        >
          Increment by 1
        </button>
        <button
          className="w-50 h-10 border border-gray-500 mr-2 rounded-xl"
          onClick={() => dispatch({ type: "DECREMENT", payload: 1 })}
        >
          Decrement by 1
        </button>
      </div>
    </div>
  );
}
