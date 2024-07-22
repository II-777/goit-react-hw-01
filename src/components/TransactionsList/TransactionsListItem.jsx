export const TransactionsListItem = ({ type, amount, currency }) => (
  <>
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  </>
);