import PropTypes from 'prop-types';
import { ItemContainer, Label, Value } from './StatisticList.styled';

export const ItemWpapper = ({ item }) => {
  return (
    <ItemContainer>
      <Label>{item.label}</Label>
      <Value>{item.percentage}</Value>
    </ItemContainer>
  );
};

ItemWpapper.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
