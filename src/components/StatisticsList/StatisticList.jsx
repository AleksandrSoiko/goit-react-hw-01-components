import { ItemWpapper } from './StatisticItem';
import { Section, StatList, Title, Item } from './StatisticList.styled';
import color from './randomColor';

export const StatBlock = ({ items, title }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <StatList>
        {items.map(item => {
          return (
            <Item key={item.id} style={{ backgroundColor: color() }}>
              <ItemWpapper item={item} />
            </Item>
          );
        })}
      </StatList>
    </Section>
  );
};
