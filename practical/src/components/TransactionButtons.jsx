import { useBank } from "./context/BankContext";

export default function TransactionButtons() {
  const { state, dispatch } = useBank();
  return (
    <div className="space-x-2 mt-4">
      <button
        className="w-30 h-10 border border-gray-300 rounded-xl cursor-pointer disabled:cursor-not-allowed"
        onClick={() => dispatch({ type: "deposit", payload: 100 })}
        disabled={state.status === "frozen"}
      >
        Deposit <span className="font-semibold">100</span>
      </button>
      <button
        className="w-30 h-10 border border-gray-300 rounded-xl cursor-pointer disabled:cursor-not-allowed"
        disabled={state.balance < 50 || state.status === "frozen"}
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
          {state.status === "active" ? "Frozen" : "Active"}
        </span>
      </button>
    </div>
  );
}
