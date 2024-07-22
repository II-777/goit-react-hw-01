import './TransactionsList.css';
import { TransactionsListItem } from './TransactionsListItem';

export const TransactionsList = ({ transactions }) => (
  <div className="transactions-wrapper">
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <TransactionsListItem 
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </table>
  </div>
);
