import './TransactionHistory.css';
import TransactionHistoryItem from './TransactionHistoryItem';

const TransactionHistory = ({ transactions }) => (
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
          <TransactionHistoryItem 
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

export default TransactionHistory;
