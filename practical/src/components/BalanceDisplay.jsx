import { useBank } from "./context/BankContext";

export default function BalanceDisplay() {
  const { state } = useBank();
  return (
    <div>
      <p>
        Balance: <span className="font-semibold">{state.balance}</span>
      </p>
      <p>
        Acc. Status: <span className="font-semibold">{state.status}</span>
      </p>
    </div>
  );
}
