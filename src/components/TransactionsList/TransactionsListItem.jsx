const capitalizeFirstLetter = string => string ? `${string[0].toUpperCase()}${string.slice(1)}` : '';

export const TransactionsListItem = ({ type, amount, currency }) => (
  <tr>
    <td>{capitalizeFirstLetter(type)}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>
);
