import { createContext, useContext, useReducer } from "react";

const BankContext = createContext();

function bankReducer(state, action) {
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

export function useBank() {
  const context = useContext(BankContext);
  if (context === undefined)
    throw new Error("useBank must be used within a BankProvider");
  return context;
}

export default function BankProvider({ children }) {
  const [state, dispatch] = useReducer(bankReducer, {
    balance: 0,
    status: "active",
  });

  return (
    <BankContext.Provider value={{ state, dispatch }}>
      {children}
    </BankContext.Provider>
  );
}
