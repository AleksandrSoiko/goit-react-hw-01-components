import PropTypes from 'prop-types';
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

TransactionItem.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
