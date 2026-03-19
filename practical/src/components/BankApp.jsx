import BalanceDisplay from "./BalanceDisplay";
import BankProvider from "./context/BankContext";
import TransactionButtons from "./TransactionButtons";

export default function BankApp() {
  return (
    <BankProvider>
      <div>
        <BalanceDisplay />
        <TransactionButtons />
      </div>
    </BankProvider>
  );
}
