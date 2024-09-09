import { Container } from "./styles";
import { useTransactions } from "../../hooks/useTransactions";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Earnings</p>
          <ArrowCircleDown size={32} color="#4b9b6d" />
        </header>
        <strong>
          {new Intl.NumberFormat("en", {
            style: "currency",
            currency: "USD",
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Expenses</p>
          <ArrowCircleUp size={32} color="#e5254d" />
        </header>
        <strong>
          -
          {new Intl.NumberFormat("en", {
            style: "currency",
            currency: "USD",
          }).format(summary.withdraws)}
        </strong>
      </div>
      <div className="total">
        <header>
          <p>Total</p>
          <CurrencyDollar size={32} color="#3c7e9f" />
        </header>
        <strong>
          {new Intl.NumberFormat("en", {
            style: "currency",
            currency: "USD",
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}
