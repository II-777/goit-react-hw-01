const capitalizeFirstLetter = string => string ? `${string[0].toUpperCase()}${string.slice(1)}` : '';

const TransactionHistoryItem = ({ type, amount, currency }) => (
  <tr>
    <td>{capitalizeFirstLetter(type)}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>
);

export default TransactionHistoryItem;
