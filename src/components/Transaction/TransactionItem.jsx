import { BodyColumn } from './Transaction.styled';

export const TransactionItem = ({ item }) => {
  return (
    <>
      <BodyColumn>{item.type}</BodyColumn>
      <BodyColumn>{item.amount}</BodyColumn>
      <BodyColumn>{item.currency}</BodyColumn>
    </>
  );
};
