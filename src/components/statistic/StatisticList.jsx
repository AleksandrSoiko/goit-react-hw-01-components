// import PropTypes from 'prop-types';
import { ItemWpapper } from './StatisticItem';
import { Section, StatList, Title, Item } from './Statistic.styled';

export const StatBlock = ({ items, title }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <StatList>
        {items.map(item => {
          return (
            <Item
              key={item.id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <ItemWpapper item={item} />
            </Item>
          );
        })}
      </StatList>
    </Section>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
