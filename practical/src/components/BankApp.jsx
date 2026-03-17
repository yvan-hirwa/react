import { useReducer } from "react";

export default function BankApp() {
  function reducerFn(state, action) {
    switch (action.type) {
      case "deposit":
        return { ...state, balance: state.balance + action.payload };
      case "withdraw":
        return {
          ...state,
          balance: Math.max(0, state.balance - action.payload),
        };
      case "toggle_status":
        return {
          ...state,
          status: state.status === "active" ? "frozen" : "active",
        };
      default:
        return state;
    }
  }

  const [bankState, dispatch] = useReducer(reducerFn, {
    balance: 0,
    status: "active",
  });
  return (
    <div>
      <p>
        Balance: <span className="font-semibold">{bankState.balance}</span>
      </p>
      <p>
        Acc. Status: <span className="font-semibold">{bankState.status}</span>
      </p>
      <div className="space-x-2 mt-4">
        <button
          className="w-30 h-10 border border-gray-300 rounded-xl cursor-pointer disabled:cursor-not-allowed"
          onClick={() => dispatch({ type: "deposit", payload: 100 })}
          disabled={bankState.status === "frozen"}
        >
          Deposit <span className="font-semibold">100</span>
        </button>
        <button
          className="w-30 h-10 border border-gray-300 rounded-xl cursor-pointer disabled:cursor-not-allowed"
          disabled={bankState.balance < 50 || bankState.status === "frozen"}
          onClick={() => dispatch({ type: "withdraw", payload: 50 })}
        >
          Withdraw <span className="font-semibold">50</span>
        </button>
        <button
          className="w-50 h-10 border border-gray-300 rounded-xl cursor-pointer"
          onClick={() => dispatch({ type: "toggle_status" })}
        >
          Toggle status to{" "}
          <span className="font-semibold ">
            {bankState.status === "active" ? "Frozen" : "Active"}
          </span>
        </button>
      </div>
    </div>
  );
}
